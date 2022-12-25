(function(){"use strict";var e={7424:function(e,t,n){var o=n(7195),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Main")],1)},l=[],r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("el-alert",{attrs:{title:e.title,type:"success",closable:!1}}),t("div",{staticClass:"add"},[t("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加")])],1),t("div",{staticClass:"table_content"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[t("el-table-column",{attrs:{prop:"sign",label:"标识"}}),t("el-table-column",{attrs:{label:"供应商"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:n.row.window,callback:function(t){e.$set(n.row,"window",t)},expression:"scope.row.window"}})]}}])}),t("el-table-column",{attrs:{label:"充值号码"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:n.row.clazz,callback:function(t){e.$set(n.row,"clazz",t)},expression:"scope.row.clazz"}})]}}])}),t("el-table-column",{attrs:{label:"运营商"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-input",{attrs:{placeholder:"请输入内容"},model:{value:n.row.employee,callback:function(t){e.$set(n.row,"employee",t)},expression:"scope.row.employee"}})]}}])}),t("el-table-column",{attrs:{prop:"position",label:"游标"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"420px"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"primary",size:"small",plain:"",disabled:n.row.disabled},on:{click:function(t){return e.start(n.row)}}},[e._v("开启")]),t("el-button",{attrs:{type:"info",size:"small",plain:""},on:{click:function(t){return e.stop(n.row)}}},[e._v("停止")]),t("el-button",{attrs:{type:"danger",size:"small",plain:""},on:{click:function(t){return e.deleteRow(n.row)}}},[e._v("删除")]),""!=n.row.status?t("span",{staticClass:"status"},[e._v(e._s(n.row.status))]):e._e()]}}])})],1)],1)],1)},i=[],s=(n(7658),n(19)),u={name:"Main",props:{},data(){return{title:"秒单管理",tableData:[],requestSpeed:""}},created(){let e="http://47.93.7.103:9001/prod-cancelled/aip/frequency";s.Z.get(e).then((e=>{console.log(e),200==e.status&&(this.requestSpeed=parseInt(e.data.msg),console.log("this.requestSpeed:",this.requestSpeed))}))},methods:{add(){let e={sign:this.generateRandomSign(),window:"",clazz:"",employee:"",position:1,timer:null,disabled:!1,status:""};this.tableData.push(e)},deleteRow(e){"开启"!==e.status?this.tableData=this.tableData.filter((t=>t.sign!=e.sign)):this.$message({message:"处于开启状态无法删除",type:"error"})},stop(e){let t={biaoshi:e.sign,chuangkou:e.window,banci:e.clazz,uid:e.employee,cursor:e.position++},n="http://47.93.7.103:9001/prod-cancelled/aip/delete";s.Z.post(n,t).then((e=>{console.log(e)})),this.tableData.map((t=>{t.sign===e.sign&&(t.position=1,t.disabled=!1,t.status="已停止",clearInterval(t.timer))}))},start(e){const{window:t,clazz:n,employee:o}=e;if(!t.trim())return void this.$message({message:"供应商不能为空",type:"warning"});if(!n.trim())return void this.$message({message:"充值号码不能为空",type:"warning"});if(!o.trim())return void this.$message({message:"运营商不能为空",type:"warning"});let a=setInterval((()=>{let t={uid:e.sign,supplierId:e.window,phoneNo:e.clazz,company:e.employee,cursor:e.position++};console.log(t);let n="http://47.93.7.103:9001/prod-cancelled/aip/add";s.Z.post(n,t).then((e=>{console.log(e)}))}),this.requestSpeed);this.tableData.map((t=>{t.sign===e.sign&&(t.timer=a,t.disabled=!0,t.status="开启")}))},generateRandomSign(){let e=(new Date).valueOf(),t="1234567890",n=13,o="";for(let a=0;a<n;a++)o+=t.charAt(Math.floor(Math.random()*t.length));return e+o}}},c=u,d=n(1001),p=(0,d.Z)(c,r,i,!1,null,"4a9195e7",null),f=p.exports,m={name:"App",components:{Main:f}},h=m,b=(0,d.Z)(h,a,l,!1,null,null,null),g=b.exports,w=n(5114),v=n.n(w);o["default"].use(v()),o["default"].config.productionTip=!1,new o["default"]({render:e=>e(g)}).$mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],l=e[c][2];for(var i=!0,s=0;s<o.length;s++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(i=!1,l<r&&(r=l));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,r=o[0],i=o[1],s=o[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var c=s(n)}for(t&&t(o);u<r.length;u++)l=r[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},o=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7424)}));o=n.O(o)})();
//# sourceMappingURL=app.3b66a37c.js.map