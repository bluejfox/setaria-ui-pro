(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"6bXx":function(e,t,r){"use strict";var a=r("cyWI"),o=r.n(a);o.a},DNmn:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-page-header",{attrs:{title:"基础表单",content:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"}}),r("el-grid-content",[r("el-card",[r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"},on:{submit:e.onSubmit}},[r("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"活动时间",required:""}},[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date1"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}})],1)],1),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date2"}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}})],1)],1)],1),r("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),r("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),r("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),r("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),r("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"线上品牌商赞助"}}),r("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),r("el-form-item",{attrs:{label:"活动形式"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("立即创建")]),r("el-button",[e._v("取消")])],1)],1)],1)],1)],1)},o=[],l={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},methods:{onSubmit:function(){console.log("submit!")},resetForm:function(e){this.$refs[e].resetFields()}}},i=l,n=(r("6bXx"),r("KHd+")),s=Object(n["a"])(i,a,o,!1,null,"3d6b2c76",null);t["default"]=s.exports},Ktur:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},o=[],l=r("KHd+"),i={},n=Object(l["a"])(i,a,o,!1,null,null,null);t["default"]=n.exports},USfy:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-page-header",{attrs:{title:"动态表单",content:"通过定义JSON-Schema格式的表单结构，可以快速构建一个常用的表单页面。"}}),r("el-grid-content",[r("el-card",[r("el-row",{attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:20}},[r("el-dynamic-form",{attrs:{model:e.formData,schema:e.schema,"ui-schema":e.uiSchema,"label-width":"100px",columns:e.columns},on:{submit:e.doSubmit}},[r("div",{staticClass:"form-button-container",attrs:{slot:"button"},slot:"button"},[r("el-button",{staticClass:"form-button",attrs:{type:"primary","native-type":"submit"}},[e._v("保存")]),r("el-button",{staticClass:"form-button",on:{click:e.doCancel}},[e._v("返回")])],1)])],1)],1)],1)],1)],1)},o=[],l=(r("xfY5"),r("zcDO")),i=r("TwqC"),n={props:{columns:{type:Number,default:2}},data:function(){return{schema:{title:"A registration form",type:"object",required:["name","gender"],properties:{name:{type:"string",title:"姓名",minLength:2,maxLength:6},gender:{type:"string",title:"性别",oneOf:[{const:1,title:"男"},{const:2,title:"女"}]},birth:{type:"string",title:"出生日期",format:"date"},mobile:{type:"integer",title:"手机号"},activeFlag:{type:"integer",title:"状态",oneOf:[{const:1,title:"有效"},{const:2,title:"无效"}]}}},uiSchema:{gender:{"ui:widget":"radio"}},formData:{name:"",gender:"",birth:"",mobile:"",activeFlag:""}}},created:function(){this.doFetch()},methods:{doFetch:function(){},doSubmit:function(){i["a"].showMessage(new l["a"]("MBM001S",["用户","新增"])),this.$router.forwardTo("EntitySearch")},doCancel:function(){this.$router.forwardTo("EntitySearch")}}},s=n,c=(r("ujWG"),r("KHd+")),m=Object(c["a"])(s,a,o,!1,null,"b5559564",null);t["default"]=m.exports},cyWI:function(e,t,r){},ujWG:function(e,t,r){"use strict";var a=r("wPPz"),o=r.n(a);o.a},wPPz:function(e,t,r){}}]);