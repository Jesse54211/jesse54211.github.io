(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-user_cash-index"],{"18ff":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"cash-withdrawal"},[e("v-uni-view",{staticClass:"nav acea-row"},t._l(t.WithdrawTypeEnum,(function(i,a){return t.withdrawTypes.includes(i.type)?e("v-uni-view",{key:a,staticClass:"item font-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchWithdrawType(i.type)}}},[e("v-uni-view",{staticClass:"line bg-color",class:t.withdrawType===i.type?"on":""}),e("v-uni-view",{staticClass:"iconfont",class:i.icon+" "+(t.withdrawType===i.type?"on":"")}),e("v-uni-view",[t._v(t._s(i.name))])],1):t._e()})),1),e("v-uni-view",{staticClass:"wrapper"},[e("v-uni-view",{staticClass:"list",attrs:{hidden:t.withdrawType!==t.WithdrawTypeEnum.BANK.type}},[e("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.subCash.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("持卡人")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"请输入持卡人姓名","placeholder-class":"placeholder",name:"name"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("卡号")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{type:"number",placeholder:"请填写卡号","placeholder-class":"placeholder",name:"cardum"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("银行")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-picker",{attrs:{value:t.bankIndex,"range-key":"label",range:t.bankList},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.bindPickerChange.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"Bank"},[t._v(t._s(t.bankList[t.bankIndex]&&t.bankList[t.bankIndex].label))]),e("v-uni-text",{staticClass:"iconfont icon-qiepian38"})],1)],1)],1),e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("提现")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"最低提现金额"+t.minPrice,"placeholder-class":"placeholder",name:"money",type:"digit"}})],1)],1),e("v-uni-view",{staticClass:"tip"},[t._v("当前可提现金额:"),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.fen2yuan(t.commission.brokeragePrice))+"，")]),t._v("冻结佣金：￥"+t._s(t.fen2yuan(t.commission.frozenPrice)))],1),e("v-uni-view",{staticClass:"tip"},[t._v("说明: 每笔佣金的冻结期为"+t._s(t.frozenDays)+"天，到期后可提现")]),e("v-uni-button",{staticClass:"bnt bg-color",attrs:{formType:"submit"}},[t._v("提现")])],1)],1),e("v-uni-view",{staticClass:"list",attrs:{hidden:t.withdrawType!==t.WithdrawTypeEnum.WECHAT.type}},[e("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.subCash.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("账号")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"请填写您的微信账号","placeholder-class":"placeholder",name:"name"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("提现")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"最低提现金额"+t.minPrice,"placeholder-class":"placeholder",name:"money",type:"digit"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-top row-between"},[e("v-uni-view",{staticClass:"name"},[t._v("收款码")]),e("v-uni-view",{staticClass:"input acea-row"},[t.qrcodeUrlW?e("v-uni-view",{staticClass:"picEwm"},[e("v-uni-image",{attrs:{src:t.qrcodeUrlW}}),e("v-uni-text",{staticClass:"iconfont icon-guanbi1 font-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.DelPicW.apply(void 0,arguments)}}})],1):e("v-uni-view",{staticClass:"pictrue acea-row row-center-wrapper row-column",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadpic("W")}}},[e("v-uni-text",{staticClass:"iconfont icon-icon25201"}),e("v-uni-view",[t._v("上传图片")])],1)],1)],1),e("v-uni-view",{staticClass:"tip"},[t._v("当前可提现金额:"),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.fen2yuan(t.commission.brokeragePrice))+"，")]),t._v("冻结佣金：￥"+t._s(t.fen2yuan(t.commission.frozenPrice)))],1),e("v-uni-view",{staticClass:"tip"},[t._v("说明: 每笔佣金的冻结期为"+t._s(t.frozenDays)+"天，到期后可提现")]),e("v-uni-button",{staticClass:"bnt bg-color",attrs:{formType:"submit"}},[t._v("提现")])],1)],1),e("v-uni-view",{staticClass:"list",attrs:{hidden:t.withdrawType!==t.WithdrawTypeEnum.ALIPAY.type}},[e("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(i){arguments[0]=i=t.$handleEvent(i),t.subCash.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("账号")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"请填写您的支付宝账号","placeholder-class":"placeholder",name:"name"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[e("v-uni-view",{staticClass:"name"},[t._v("提现")]),e("v-uni-view",{staticClass:"input"},[e("v-uni-input",{attrs:{placeholder:"最低提现金额"+t.minPrice,"placeholder-class":"placeholder",name:"money",type:"digit"}})],1)],1),e("v-uni-view",{staticClass:"item acea-row row-top row-between"},[e("v-uni-view",{staticClass:"name"},[t._v("收款码")]),e("v-uni-view",{staticClass:"input acea-row"},[t.qrcodeUrlZ?e("v-uni-view",{staticClass:"picEwm"},[e("v-uni-image",{attrs:{src:t.qrcodeUrlZ}}),e("v-uni-text",{staticClass:"iconfont icon-guanbi1 font-color",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.DelPicZ.apply(void 0,arguments)}}})],1):e("v-uni-view",{staticClass:"pictrue acea-row row-center-wrapper row-column",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.uploadpic("Z")}}},[e("v-uni-text",{staticClass:"iconfont icon-icon25201"}),e("v-uni-view",[t._v("上传图片")])],1)],1)],1),e("v-uni-view",{staticClass:"tip"},[t._v("当前可提现金额:"),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(t.fen2yuan(t.commission.brokeragePrice))+"，")]),t._v("冻结佣金：￥"+t._s(t.fen2yuan(t.commission.frozenPrice)))],1),e("v-uni-view",{staticClass:"tip"},[t._v("说明: 每笔佣金的冻结期为"+t._s(t.frozenDays)+"天，到期后可提现")]),e("v-uni-button",{staticClass:"bnt bg-color",attrs:{formType:"submit"}},[t._v("提现")])],1)],1)],1)],1)],1)},n=[]},"2f09":function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.getTradeConfig=function(){return n.default.get("app-api/trade/config/get")};var n=a(e("e145"))},"46c2":function(t,i,e){"use strict";e("7a82");var a=e("dbce").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("3c65"),e("ac1f"),e("466d"),e("00b4");var n=e("4844"),r=e("26cb"),s=a(e("2f09")),c=a(e("55bc")),o=a(e("5b92")),l=e("e9ca"),u=e("de37"),d={data:function(){return{WithdrawTypeEnum:u.BrokerageWithdrawTypeEnum,withdrawType:0,bankIndex:0,bankList:[],minPrice:0,frozenDays:0,withdrawTypes:[],isClone:!1,commission:{},qrcodeUrlW:"",qrcodeUrlZ:"",isCommitted:!1}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&(this.getUserExtractBank(),this.getExtractUser())},deep:!0}},onLoad:function(){this.isLogin?(this.getUserExtractBank(),this.getExtractUser()):(0,n.toLogin)()},methods:{uploadpic:function(t){var i=this;this.$util.uploadImageOne({},(function(e){i.newAvatar=e.data,"W"===t?i.qrcodeUrlW=e.data:i.qrcodeUrlZ=e.data}))},DelPicW:function(){this.qrcodeUrlW=""},DelPicZ:function(){this.qrcodeUrlZ=""},getExtractUser:function(){var t=this;c.getBrokerageUser().then((function(i){t.commission=i.data})),s.getTradeConfig().then((function(i){t.minPrice=o.fen2yuan(i.data.brokerageWithdrawMinPrice||0),t.frozenDays=i.data.brokerageFrozenDays||0,t.withdrawTypes=i.data.brokerageWithdrawTypes||[],t.withdrawType=t.withdrawTypes[0]}))},getUserExtractBank:function(){var t=this;(0,l.getDicts)(u.DICT_TYPE.BROKERAGE_BANK_NAME).then((function(i){var e=i.data;e.unshift({label:"请选择银行"}),t.$set(t,"bankList",e)}))},switchWithdrawType:function(t){this.withdrawType=t},bindPickerChange:function(t){this.bankIndex=t.detail.value},moneyInput:function(t){var i=this;t.target.value=t.target.value.match(/^\d*(\.?\d{0,2})/g)[0]||null,this.$nextTick((function(){i.money=t.target.value}))},subCash:function(t){var i=this,e=t.detail.value,a={type:this.withdrawType};if(this.withdrawType===this.WithdrawTypeEnum.BANK.type){if(0===e.name.length)return this.$util.Tips({title:"请填写持卡人姓名"});if(0===e.cardum.length)return this.$util.Tips({title:"请填写卡号"});if(0===this.bankIndex)return this.$util.Tips({title:"请选择银行"});a.name=e.name,a.accountNo=e.cardum,a.bankName=this.bankList[this.bankIndex].value}else if(this.withdrawType===this.WithdrawTypeEnum.WECHAT.type){if(0===e.name.length)return this.$util.Tips({title:"请填写微信号"});a.accountNo=e.name,a.accountQrCodeUrl=this.qrcodeUrlW}else if(this.withdrawType===this.WithdrawTypeEnum.ALIPAY.type){if(0===e.name.length)return this.$util.Tips({title:"请填写账号"});a.accountNo=e.name,a.accountQrCodeUrl=this.qrcodeUrlZ}return 0===e.money.length?this.$util.Tips({title:"请填写提现金额"}):/^(\d?)+(\.\d{0,2})?$/.test(e.money)?e.money<this.minPrice?this.$util.Tips({title:"提现金额不能低于"+this.minPrice}):(a.price=100*e.money,void(!1===this.isCommitted&&(this.isCommitted=!0,c.createBrokerageWithdraw(a).then((function(t){return i.$util.Tips({title:"提现成功",icon:"success"},{tab:2,url:"/pages/users/user_spread_user/index"})})).catch((function(t){return i.isCommitted=!1,i.$util.Tips({title:t})}))))):this.$util.Tips({title:"提现金额保留2位小数"})},fen2yuan:function(t){return o.fen2yuan(t)}}};i.default=d},"56b2":function(t,i,e){var a=e("d8e5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4610764d",a,!0,{sourceMap:!1,shadowMode:!1})},"7c2d":function(t,i,e){"use strict";e.r(i);var a=e("18ff"),n=e("efb7");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("b0b0");var s=e("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"182df1c2",null,!1,a["a"],void 0);i["default"]=c.exports},b0b0:function(t,i,e){"use strict";var a=e("56b2"),n=e.n(a);n.a},d8e5:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-182df1c2]{background-color:#fff!important}body.?%PAGE?%[data-v-182df1c2]{background-color:#fff!important}.cash-withdrawal .nav[data-v-182df1c2]{height:%?130?%;box-shadow:0 %?10?% %?10?% #f8f8f8}.cash-withdrawal .nav .item[data-v-182df1c2]{font-size:%?26?%;flex:1;text-align:center}.cash-withdrawal .nav .item ~ .item[data-v-182df1c2]{border-left:1px solid #f0f0f0}.cash-withdrawal .nav .item .iconfont[data-v-182df1c2]{width:%?40?%;height:%?40?%;border-radius:50%;border:%?2?% solid #e93323;text-align:center;line-height:%?37?%;margin:0 auto %?6?% auto;font-size:%?22?%;box-sizing:border-box}.cash-withdrawal .nav .item .iconfont.on[data-v-182df1c2]{background-color:#e93323;color:#fff;border-color:#e93323}.cash-withdrawal .nav .item .line[data-v-182df1c2]{width:%?2?%;height:%?20?%;margin:0 auto;transition:height .3s}.cash-withdrawal .nav .item .line.on[data-v-182df1c2]{height:%?39?%}.cash-withdrawal .wrapper .list[data-v-182df1c2]{padding:0 %?30?%}.cash-withdrawal .wrapper .list .item[data-v-182df1c2]{border-bottom:%?1?% solid #eee;min-height:%?28?%;font-size:%?30?%;color:#333;padding:%?39?% 0}.cash-withdrawal .wrapper .list .item .name[data-v-182df1c2]{width:%?130?%}.cash-withdrawal .wrapper .list .item .input[data-v-182df1c2]{width:%?505?%}.cash-withdrawal .wrapper .list .item .input .placeholder[data-v-182df1c2]{color:#bbb}.cash-withdrawal .wrapper .list .item .picEwm[data-v-182df1c2], .cash-withdrawal .wrapper .list .item .pictrue[data-v-182df1c2]{width:%?140?%;height:%?140?%;border-radius:%?3?%;position:relative;margin-right:%?23?%}.cash-withdrawal .wrapper .list .item .picEwm uni-image[data-v-182df1c2]{width:100%;height:100%;border-radius:%?3?%}.cash-withdrawal .wrapper .list .item .picEwm .icon-guanbi1[data-v-182df1c2]{position:absolute;right:%?-14?%;top:%?-16?%;font-size:%?40?%}.cash-withdrawal .wrapper .list .item .pictrue[data-v-182df1c2]{border:1px solid #ddd;font-size:%?22?%;color:#bbb}.cash-withdrawal .wrapper .list .item .pictrue .icon-icon25201[data-v-182df1c2]{font-size:%?47?%;color:#ddd;margin-bottom:3px}.cash-withdrawal .wrapper .list .tip[data-v-182df1c2]{font-size:%?26?%;color:#999;margin-top:%?25?%}.cash-withdrawal .wrapper .list .bnt[data-v-182df1c2]{font-size:%?32?%;color:#fff;width:%?690?%;height:%?90?%;text-align:center;border-radius:%?50?%;line-height:%?90?%;margin:%?64?% auto}.cash-withdrawal .wrapper .list .tip2[data-v-182df1c2]{font-size:%?26?%;color:#999;text-align:center;margin:%?44?% 0 %?20?% 0}.cash-withdrawal .wrapper .list .value[data-v-182df1c2]{height:%?135?%;line-height:%?135?%;border-bottom:%?1?% solid #eee;width:%?690?%;margin:0 auto}.cash-withdrawal .wrapper .list .value uni-input[data-v-182df1c2]{font-size:%?80?%;color:#282828;height:%?135?%;text-align:center}.cash-withdrawal .wrapper .list .value .placeholder2[data-v-182df1c2]{color:#bbb}.price[data-v-182df1c2]{color:#e93323}',""]),t.exports=i},e9ca:function(t,i,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(i,"__esModule",{value:!0}),i.getDicts=function(t){return n.default.get("app-api/system/dict-data/type?type="+t)};var n=a(e("e145"))},efb7:function(t,i,e){"use strict";e.r(i);var a=e("46c2"),n=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a}}]);