<template>
  <el-grid-content>
    <el-row class="chart" :gutter="10">
      <el-col :md="12" :lg="6">
        <el-chart-card :total="miniBarTotal">
          <span slot="title">访问量</span>
          <span slot="action">
            <el-tooltip content="指标说明" placement="top" slot="title">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </span>
          <el-mini-bar :height="46" :data="miniBarData"></el-mini-bar>
          <div slot="footer">
            日访问量 {{ miniBarFooter }}
          </div>
        </el-chart-card>
      </el-col>
      <el-col :md="12" :lg="6">
        <el-chart-card :total="miniAreaTotal">
          <span slot="title">搜索用户数量</span>
          <span slot="action">
            <el-tooltip content="指标说明" placement="top" slot="title">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </span>
          <el-mini-area :height="46" :border-width="2" :data="miniAreaData"></el-mini-area>
          <div slot="footer">
            转化率 {{ miniAreaFooter }}
          </div>
        </el-chart-card>
      </el-col>
      <el-col :md="12" :lg="6">
        <el-chart-card :total="textTotal" :content-height="46" class="trend">
          <!-- <span slot="avatar">
            <img
              :style="{
                width: '56px',
                height: '56px',
              }"
              src="http://bpic.588ku.com/element_origin_min_pic/01/40/32/98573cf75c3bf04.jpg"
              alt="indicator"
            />
          </span> -->
          <span slot="title">总销售额</span>
          <span slot="action">
            <el-tooltip content="指标说明" placement="top" slot="title">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </span>
          <div class="trend-item">
            <span>周同比</span>
            <el-trend flag="up">12%</el-trend>
          </div>
          <div class="trend-item">
            <span>日环比</span>
            <el-trend flag="down">10%</el-trend>
          </div>
          <div slot="footer">
            日均销售额 {{ miniAreaFooter }}
          </div>
        </el-chart-card>
      </el-col>
      <el-col :md="12" :lg="6">
        <el-chart-card :total="progressTotal" :content-height="46" class="progress">
          <span slot="title">运营活动效果</span>
          <span slot="action">
            <el-tooltip content="指标说明" placement="top" slot="title">
              <i class="el-icon-info"></i>
            </el-tooltip>
          </span>
          <el-progress
            :text-inside="true"
            :stroke-width="13"
            :percentage="progressComponentValue"></el-progress>
          <div slot="footer" class="progress-footer">
            <div class="trend-item">
              <span>周同比</span>
              <el-trend flag="up">12%</el-trend>
            </div>
            <div class="trend-item">
              <span>日环比</span>
              <el-trend flag="down">10%</el-trend>
            </div>
          </div>
        </el-chart-card>
      </el-col>
    </el-row>
    <el-card class="analysis_sales" :tab-list="salesTabList"
      :active-tab-name.sync="salesActiveTabName">
      <el-row type="flex" v-if="salesActiveTabName === 'sales'">
        <el-col :xl="16" :lg="16" :md="12" :sm="24" :xs="24">
          <el-bar title="销售额趋势" :data="barData" :height="300"></el-bar>
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
          <div class="sales-rank">
            <h4>门店销售额排名</h4>
            <ul class="sales-raning-list">
              <li v-for="(item, index) in salesRankData" :key="index">
                <span :class="index < 3 ? 'active' : ''">{{index}}</span>
                <span>{{item.title}}</span>
                <span>{{item.total}}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" v-else>
        <el-col :xl="16" :lg="16" :md="12" :sm="24" :xs="24">
          <el-bar title="访问量趋势" :data="barData" :height="300"></el-bar>
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
          <div class="sales-rank">
            <h4>门店访问量排名</h4>
            <ul class="sales-raning-list">
              <li v-for="(item, index) in salesRankData" :key="index">
                <span :class="index < 3 ? 'active' : ''">{{index}}</span>
                <span>{{item.title}}</span>
                <span>{{item.total}}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </el-grid-content>
</template>
<style lang="scss" scoped>
  .chart {
    .trend {
      .trend-item {
        display: inline-block;

        &:first-child {
          margin-right: 12px;
        }
      }
    }

    .progress {
      .progress-footer {
        white-space: nowrap;
        overflow: hidden;

        .trend-item {
          display: inline-block;

          &:first-child {
            margin-right: 12px;
          }
        }
      }
    }
  }

  .analysis_sales {
    margin-top: 16px;

    /deep/ {
      .el-card__header {
        &.is-tab {
          padding-top: 8px;
        }

        .el-tabs__item {
          &:not(.is-active) {
            color: rgba(0, 0, 0, 0.65);
            font-weight: normal;
          }
        }
      }
    }

    .sales-rank {
      padding: 0 32px 32px 72px;

      .sales-raning-list {
        margin: 25px 0 0;
        padding: 0;
        list-style: none;

        li {
          zoom: 1;
          margin-top: 16px;

          span {
            color: rgba(0,0,0,.65);
            font-size: 14px;
            line-height: 22px;

            &:first-child {
              background-color: #f5f5f5;
              border-radius: 20px;
              display: inline-block;
              font-size: 12px;
              font-weight: 600;
              margin-right: 24px;
              height: 20px;
              line-height: 20px;
              width: 20px;
              text-align: center;

              &.active {
                background-color: #314659;
                color: #fff;
              }
            }

            &:last-child {
              float: right;
            }
          }
        }
      }
    }
  }
</style>

<script>
import numeral from 'numeral';
import { addDateTime, formatDate } from '@/model/util';

export default {
  data() {
    const miniData = [];
    const beginDate = new Date();
    for (let i = 0; i < 20; i += 1) {
      miniData.push({
        x: formatDate(addDateTime(beginDate, i, 'days'), 'YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
    const barData = [];
    for (let i = 0; i < 12; i += 1) {
      barData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
    const salesRankData = [];
    for (let i = 0; i < 7; i += 1) {
      salesRankData.push({
        title: `工专路 ${i} 号店`,
        total: numeral(323234).format('0,0'),
      });
    }
    return {
      miniAreaTotal: numeral(12321).format('0,0'),
      miniAreaFooter: numeral(0.76).format('0%'),
      miniAreaData: miniData,
      miniBarTotal: numeral(8846).format('0,0'),
      miniBarFooter: numeral(1234).format('0,0'),
      miniBarData: miniData,
      barData,
      textTotal: `¥ ${numeral(129102).format('0,0')}`,
      progressValue: 0.78,
      salesTabList: [
        {
          label: '销售额',
          name: 'sales',
        },
        {
          label: '访问量',
          name: 'views',
        },
      ],
      salesActiveTabName: 'sales',
      salesRankData,
    };
  },
  computed: {
    progressTotal() {
      return numeral(this.progressValue).format('0%');
    },
    progressComponentValue() {
      return this.progressValue * 100;
    },
  },
  created() {
  },
  components: {
  },
};
</script>

