<template>
  <el-grid-content>
    <el-card class="statistical-card">
      <el-row>
        <el-col :xs="24" :sm="8">
          <info title="我的待办" value="8个任务" bordered/>
        </el-col>
        <el-col :xs="24" :sm="8">
          <info title="本周任务平均处理时间" value="32分钟" bordered/>
        </el-col>
        <el-col :xs="24" :sm="8">
          <info title="本周完成任务数" value="24个任务"/>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="list-card">
      <div slot="header">
        <span class="title">标准列表</span>
        <div class="extra-content">
          <div>
            <el-radio-group size="medium" v-model="status">
              <el-radio-button label="all">全部</el-radio-button>
              <el-radio-button label="progress">进行中</el-radio-button>
              <el-radio-button label="waiting">等待中</el-radio-button>
            </el-radio-group>
            <el-input
              class="search"
              placeholder="请输入内容"
              size="medium">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
      <el-button class="insert-button" size="medium" @click="handleCreate">
        <i class="el-icon-plus"></i>
        <span>添加</span>
      </el-button>
      <el-list class="list">
        <el-list-item v-for="task in taskList" :key="task.id">
          <el-list-item-meta :title="task.title">
            <span slot="avatar">
              <img :src="task.avatar">
            </span>
            <span slot="description">
              {{ task.description }}
            </span>
          </el-list-item-meta>
          <div class="content">
            <div class="content-item">
              <span>Owner</span>
              <p>{{ task.owner.name }}</p>
            </div>
            <div class="content-item">
              <span>开始时间</span>
              <p>{{ task.startDateTime }}</p>
            </div>
            <div class="content-item">
              <el-progress
                :percentage="task.percent * 100"
                :status="task.status === 0 ? 'exception': ''"></el-progress>
            </div>
          </div>
          <div slot="actions">
            <el-button type="text" @click="handleModify(task)">编辑</el-button>
            <el-divider type="vertical"/>
            <el-dropdown @command="handleRowMultiAction($event, task.id)">
              <span class="dropdown-link">
                <span>更多</span><i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="modify">编辑</el-dropdown-item>
                <el-dropdown-item command="remove">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-list-item>
      </el-list>
      <el-pagination
        class="pagination"
        :page-sizes="[5, 10, 30, 50]"
        :page-size="5"
        layout="sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </el-card>
    <el-dialog
      class="form"
      :title="`任务${typeof selectedTask === 'object' ? '编辑' : '添加'}`"
      :visible.sync="formVisible"
      width="640px">
      <basic-form ref="taskForm" v-model="selectedTask" v-if="formVisible"></basic-form>
      <span slot="footer">
        <el-button
          class="dialog-button"
          @click="handleCloseForm"
          size="small">取 消</el-button>
        <el-button
          class="dialog-button"
          type="primary"
          @click="handleUpdateForm"
          size="small">保 存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="resultVisible"
      width="640px">
      <el-result
        title="操作成功"
        description="一系列的信息描述，很短同样也可以带标点。">
        <div slot="actions">
          <el-button type="primary" size="small" @click="resultVisible = false">知道了</el-button>
        </div>
      </el-result>
    </el-dialog>
  </el-grid-content>
</template>
<style lang="scss" scoped>
  @import "@/style/variables.scss";

  .el-grid-content {
    .el-card + .el-card {
      margin-top: 24px;
    }

    .title {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      line-height: 36px;
      padding: 24px 0;
    }

    .extra-content {
      display: inline-block;
      float: right;

      .search {
        width: 272px;
        margin-left: 16px;
        vertical-align: middle;
      }
    }

    .statistical-card {
      /deep/ {
        .info {
          position: relative;
          text-align: center;

          span {
            color: rgba(0, 0, 0, 0.45);
            display: inline-block;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 4px;
          }

          p {
            color: rgba(0, 0, 0, 0.85);
            font-size: 24px;
            line-height: 32px;
            margin: 0;
          }

          em {
            background-color: #e8e8e8;
            position: absolute;
            height: 56px;
            width: 1px;
            top: 0;
            right: 0;
          }
        }

        @media screen and (max-width: $--sm) {
          .info {
            margin-bottom: 16px;

            em {
              display: none;
            }
          }
        }
      }
    }

    .list-card {
      /deep/ {
        .el-card__header {
          border-bottom: none;
        }

        .el-card__body {
          padding-top: 0;
        }
      }

      .insert-button {
        width: 100%;
        color: rgba(0, 0, 0, 0.65);
        background-color: #fff;
        border-color: #d9d9d9;
        border-style: dashed;

        &:hover {
          color: #40a9ff;
          background-color: #fff;
          border-color: #40a9ff;
        }
      }
    }


    .list {
      .el-list-item-meta-avatar {
        img {
          height: 48px;
        }
      }

      .content {
        width: 270px;

        .content-item {
          color: rgba(0, 0, 0, 0.45);
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
          margin-left: 37px;
          text-align: right;

          &:last-child {
            top: 0;
            display: block;
          }

          p {
            margin-top: 4px;
            margin-bottom: 0;
            line-height: 22px;
          }

          .el-progress {
            width: 180px;
            display: inline-block;
          }
        }

        @media screen and (max-width: $--sm) {
          .content-item {
            display: block;
          }
        }
      }

      .dropdown-link {
        cursor: pointer;
        color: #409eff;
        font-weight: 500;
      }
    }

    .pagination {
      margin-top: 24px;
    }

    .dialog-button {
      font-size: 14px;
    }

    .form {
      /deep/ {
        .el-dialog__body {
          padding-bottom: 10px;
        }
      }
    }
  }
</style>

<script>
import { Message } from 'setaria';
import Notice from '@/component/notice/index';
import { fetch as fetchTaskList } from '@/model/resource/Task';
import { cloneDeep, isNumber } from '@/model/util';
import Form from './Form.vue';

export default {
  name: 'BasicList',
  data() {
    return {
      status: 'all',
      taskList: [],
      selectedTask: null,
      formVisible: false,
      resultVisible: false,
    };
  },
  components: {
    info: {
      props: {
        title: String,
        value: String,
        bordered: Boolean,
      },
      render() {
        const { bordered, title, value } = this;
        return (
          <div class="info">
            <span>{title}</span>
            <p>{value}</p>
            {
              bordered ? <em/> : null
            }
          </div>
        );
      },
    },
    BasicForm: Form,
  },
  created() {
    this.fetchList();
  },
  methods: {
    async fetchList() {
      this.taskList = await fetchTaskList();
    },
    /**
     * 添加按钮点击事件处理
     * @event
     */
    handleCreate() {
      this.selectedTask = {};
      this.toggleFormVisible(true);
    },
    /**
     * 编辑按钮点击事件处理
     * @event
     */
    handleModify(task) {
      this.selectedTask = cloneDeep(task);
      this.toggleFormVisible(true);
    },
    /**
     * 更多菜单项内编辑按钮点击事件处理
     * @event
     */
    handleRowMultiAction(command, selectedTaskId) {
      if (command === 'modify') {
        const task = this.taskList.find(item => item.id === selectedTaskId);
        this.handleModify(task);
      }
    },
    /**
     * 对话框取消按钮点击事件处理
     * @event
     */
    handleCloseForm() {
      this.selectedTask = {};
      this.toggleFormVisible(false);
    },
    /**
     * 对话框确定按钮点击事件处理
     * @event
     */
    async handleUpdateForm() {
      const isValid = await this.$refs.taskForm.validate();
      // 对输入数据进行保存操作
      if (isValid) {
        // 新增的场合
        if (!isNumber(this.selectedTask.id)) {
          const insertTask = cloneDeep(this.selectedTask);
          insertTask.id = this.taskList.length;
          insertTask.avatar = 'http://dummyimage.com/48x48/79f2ed';
          insertTask.percent = 0;
          insertTask.status = 1;
          this.taskList.push(insertTask);
          Notice.showMessage(new Message('MBM001S', ['', '添加']));
        // 更新的场合
        } else {
          const index = this.taskList.findIndex(item => item.id === this.selectedTask.id);
          if (index !== -1) {
            this.taskList[index] = this.selectedTask;
          }
          this.resultVisible = true;
        }
        this.selectedTask = {};
      }
      this.handleCloseForm();
    },
    /**
     * 显示/隐藏对话框
     */
    toggleFormVisible(val) {
      this.formVisible = val;
    },
  },
};
</script>
