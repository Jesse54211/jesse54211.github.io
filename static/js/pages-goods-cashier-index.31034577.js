(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-cashier-index"],{"0582":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page .pay-price[data-v-5894e1f2]{display:flex;justify-content:center;flex-direction:column;align-items:center;padding:%?50?% 0 %?40?% 0}.page .pay-price .price[data-v-5894e1f2]{color:#e93323;margin-bottom:%?20?%;display:flex;align-items:flex-end}.page .pay-price .price .unit[data-v-5894e1f2]{font-size:%?34?%;font-weight:500;line-height:%?41?%}.page .pay-price .price .num[data-v-5894e1f2]{font-size:%?50?%;font-weight:600}.page .pay-price .count-down[data-v-5894e1f2]{display:flex;align-items:center;background-color:#fff;padding:%?8?% %?28?%;border-radius:%?40?%;font-size:%?24?%;color:#e93323}.page .pay-price .count-down .time[data-v-5894e1f2]{margin-top:0!important}.page .pay-price .count-down[data-v-5894e1f2] .red{margin:0!important}.page .payment[data-v-5894e1f2]{width:%?690?%;border-radius:%?14?% %?14?%;background-color:#fff;z-index:999;margin:0 %?30?%}.page .payment .title[data-v-5894e1f2]{color:#666;font-size:%?26?%;padding:%?30?% 0 0 %?30?%}.page .payment .payMoney[data-v-5894e1f2]{font-size:%?28?%;color:#333;text-align:center;margin-top:%?50?%}.page .payment .payMoney .font-color[data-v-5894e1f2]{margin-left:%?10?%}.page .payment .payMoney .font-color .money[data-v-5894e1f2]{font-size:%?40?%}.page .payment.on[data-v-5894e1f2]{-webkit-transform:translateZ(0);transform:translateZ(0)}.page .icon-xuanzhong11[data-v-5894e1f2]{color:#e93323!important}.page .payment .item[data-v-5894e1f2]{border-bottom:%?1?% solid #eee;height:%?130?%;margin-left:%?30?%;padding-right:%?30?%}.page .payment .item[data-v-5894e1f2]:last-child{border-bottom:none}.page .payment .item .left[data-v-5894e1f2]{flex:1}.page .payment .item .left .text[data-v-5894e1f2]{flex:1}.page .payment .item .left .text .name[data-v-5894e1f2]{font-size:%?30?%;color:#333}.page .payment .item .left .text .info[data-v-5894e1f2]{font-size:%?22?%;color:#999}.page .payment .item .left .text .info .money[data-v-5894e1f2]{color:#f90}.page .payment .item .left .iconfont[data-v-5894e1f2]{font-size:%?50?%;color:#09bb07;margin-right:%?28?%}.page .payment .item .left .iconfont.icon-zhifubao[data-v-5894e1f2]{color:#00aaea}.page .payment .item .left .iconfont.icon-yuezhifu[data-v-5894e1f2]{color:#f90}.page .payment .item .left .iconfont.icon-yuezhifu1[data-v-5894e1f2]{color:#eb6623}.page .payment .item .left .iconfont.icon-tonglianzhifu1[data-v-5894e1f2]{color:#305fd8}.page .payment .item .iconfont[data-v-5894e1f2]{font-size:%?40?%;color:#ccc}.page .icon-haoyoudaizhifu[data-v-5894e1f2]{color:#f34c3e!important}.page .btn[data-v-5894e1f2]{position:fixed;left:%?30?%;display:flex;flex-direction:column;align-items:center;bottom:%?30?%;bottom:calc(%?30?% + constant(safe-area-inset-bottom));bottom:calc(%?30?% + env(safe-area-inset-bottom))}.page .wait-pay[data-v-5894e1f2]{color:#aaa;font-size:%?24?%;padding-top:%?20?%}.page .button[data-v-5894e1f2]{width:%?690?%;height:%?90?%;border-radius:%?45?%;color:#fff;background-color:#e93323}',""]),t.exports=e},"0db3":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.createWalletRecharge=function(t){return a.default.post("app-api/pay/wallet-recharge/create",t)},e.getPayWallet=function(){return a.default.get("app-api/pay/wallet/get")},e.getWalletRechargePackageList=function(){return a.default.get("app-api/pay/wallet-recharge-package/list")},e.getWalletTransactionPage=function(t){return a.default.get("app-api/pay/wallet-transaction/page",t)};var a=i(n("e145"))},"15c3":function(t,e,n){"use strict";n.r(e);var i=n("d126"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"1ac4":function(t,e,n){"use strict";n.r(e);var i=n("d657"),a=n("ac3d");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("7012");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"5894e1f2",null,!1,i["a"],void 0);e["default"]=s.exports},"38e3":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".p6[data-v-0b41fd40]{padding:0 %?8?%}.styleAll[data-v-0b41fd40]{\n\t/* color: #fff; */font-size:%?24?%;height:%?36?%;line-height:%?36?%;border-radius:%?6?%;text-align:center\n\t/* padding: 0 6rpx; */}.timeTxt[data-v-0b41fd40]{text-align:center;\n\t    /* width: 16rpx; */height:%?36?%;line-height:%?36?%;display:inline-block}.whit[data-v-0b41fd40]{color:#fff!important}.time[data-v-0b41fd40]{display:flex;justify-content:center}.red[data-v-0b41fd40]{color:#fc4141;margin:0 %?4?%}.timeCol[data-v-0b41fd40]{\n\t/* width: 40rpx;\n\theight: 40rpx;\n\tline-height: 40rpx;\n\ttext-align:center;\n\tborder-radius: 6px;\n\tbackground: #fff;\n\tfont-size: 24rpx; */color:#e93323}",""]),t.exports=e},"39d8":function(t,e,n){"use strict";var i=n("8ccd"),a=n.n(i);a.a},"3b65":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d401"),n("d3b7"),n("25f0"),n("cb29"),n("fb6a"),n("14d9");var i={props:{num:[String,Number],color:{type:String,default:"#000000"},width:{type:String,default:"30"},height:{type:String,default:"30"},fontSize:{type:String,default:"30"},fontWeight:{type:[String,Number],default:500}},data:function(){return{indexArr:[]}},created:function(){var t=this.num,e=new Array(t.toString().length);e.fill(0),this.indexArr=e},watch:{num:function(t,e){var n=Array.prototype.slice.apply(this.indexArr),i=t.toString().length,a=e.toString().length;if(i>a){for(var r=0;r<i-a;r++)n.push(0);this.indexArr=n}if(i<a){for(var o=0;o<a-i;o++)n.pop();this.indexArr=n}this.numChange(t)}},mounted:function(){var t=this;this._time=setTimeout((function(){t.numChange(t.num),clearTimeout(t._time)}),50)},methods:{numChange:function(t){var e=this;this.$nextTick((function(){for(var n=e.indexArr,i=Array.prototype.slice.apply(n),a=t.toString(),r=0;r<a.length;r++)"."===a[r]?i[r]=10:i[r]=Number(a[r]);e.indexArr=i}))}}};e.default=i},"3fd0":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getEnableChannelCodeList=function(t){return a.default.get("app-api/pay/channel/get-enable-code-list",{appId:t})};var a=i(n("e145"))},"55e5":function(t,e,n){var i=n("0582");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1320adda",i,!0,{sourceMap:!1,shadowMode:!1})},"5aa5":function(t,e,n){"use strict";n("7a82");var i=n("dbce").default,a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("acd8"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("c975");var r=a(n("e119")),o=a(n("a516")),s=i(n("c023")),l=i(n("3fd0")),c=i(n("0db3")),u=n("5b92"),d=n("26cb"),f={computed:(0,d.mapGetters)(["openid"]),components:{CountDown:r.default,numberScroll:o.default},data:function(){return{orderId:0,returnUrl:"",payPrice:0,invalidTime:0,wallet:{},channelCode:"",channels:[{name:"微信支付",icon:"icon-weixin2",title:"使用微信快捷支付",code:"wx_pub"},{name:"微信支付",icon:"icon-weixin2",title:"使用微信快捷支付",code:"wx_lite"},{name:"支付宝支付",icon:"icon-zhifubao",title:"使用支付宝支付",code:"alipay_wap"},{name:"余额支付",icon:"icon-yuezhifu",title:"可用余额",code:"wallet"},{name:"模拟支付",icon:"icon-yuezhifu",title:"使用模拟支付",code:"mock"},{name:"支付宝支付（PC）",icon:"icon-zhifubao",title:"使用支付宝支付",code:"alipay_pc"}],bgColor:{bgColor:"#fff",Color:"#E93323",width:"44rpx",timeTxtwidth:"16rpx",isDay:!0}}},onLoad:function(t){t.order_id&&(this.orderId=t.order_id),t.returnUrl&&(this.returnUrl=decodeURIComponent(t.returnUrl)),this.getCashierOrder()},methods:{fen2yuan:u.fen2yuan,getCashierOrder:function(){var t=this;uni.showLoading({title:"加载订单中"}),s.getOrder(this.orderId).then((function(e){e.data?10!==e.data.status?20!==e.data.status?(t.payPrice=e.data.price,t.invalidTime=e.data.expireTime,t.removeDisableChannel(e.data.appId),uni.hideLoading()):t.goReturnUrl("close"):t.goReturnUrl("success"):t.goReturnUrl("close")})).catch((function(e){return uni.hideLoading(),t.$util.Tips({title:e})}))},goPay:function(t){var e=this;return this.orderId?"yue"===t&&parseFloat(number)<parseFloat(this.payPrice)?this.$util.Tips({title:"余额不足"}):(uni.showLoading({title:"支付中"}),void s.submitOrder({id:this.orderId,channelCode:t,returnUrl:this.getPayReturnUrl(),channelExtras:{openid:this.openid}}).then((function(t){e.handleSubmitOrderResult(t.data)})).catch((function(t){uni.hideLoading(),e.$util.Tips({title:t})}))):this.$util.Tips({title:"请选择要支付的订单"})},handleSubmitOrderResult:function(t){if(10!==t.status)if(20!==t.status){var e=t.displayMode,n=t.displayContent;if("url"!==e){if("app"===e){if("wx_pub"===this.channelCode)return void this.handleSubmitOrderResultForWxPub(n);if("wx_lite"===this.channelCode)return void this.handleSubmitOrderResultForWxLite(n)}}else window.location=n}else this.goReturnUrl("close");else this.goReturnUrl("success")},handleSubmitOrderResultForWxPub:function(t){var e=this,n=JSON.parse(t);this.$wechat.pay({timestamp:n.timeStamp,nonceStr:n.nonceStr,package:n.packageValue,signType:n.signType,paySign:n.paySign}).then((function(t){return"chooseWXPay:cancel"===t.errMsg?e.$util.Tips({title:"取消微信支付"}):t.errMsg?e.$util.Tips({title:t.errMsg,icon:"error"}):e.$util.Tips({title:"支付成功",icon:"success"},(function(){e.goReturnUrl("success")}))})).catch((function(t){return e.$util.Tips({title:"初始化微信支付失败，请重试或者选择其它支付方式",icon:"error"})}))},handleSubmitOrderResultForWxLite:function(t){var e=this,n=JSON.parse(t);uni.requestPayment({timeStamp:n.timeStamp,nonceStr:n.nonceStr,package:n.packageValue,signType:n.signType,paySign:n.paySign,success:function(t){return uni.hideLoading(),e.$util.Tips({title:"支付成功",icon:"success"},(function(){e.goReturnUrl("success")}))},fail:function(t){return uni.hideLoading(),"requestPayment:cancel"===t.errMsg||"requestPayment:fail cancel"===t.errMsg?e.$util.Tips({title:"取消支付"}):e.$util.Tips({title:t.errMsg,icon:"error"})}})},removeDisableChannel:function(t){var e=this;this.channels=this.channels.filter((function(t){return"wx_lite"!==t.code})),this.$wechat.isWeixin()||(this.channels=this.channels.filter((function(t){return"wx_pub"!==t.code}))),l.getEnableChannelCodeList(t).then((function(t){e.channels=e.channels.filter((function(e){return t.data.includes(e.code)})),e.channels.length>0&&e.payType(e.channels[0].code)})),c.getPayWallet().then((function(t){e.wallet=t.data}))},payType:function(t){this.channelCode=t},getPayReturnUrl:function(){return location.href},goReturnUrl:function(t){uni.reLaunch({url:this.returnUrl.indexOf("?")>=0?this.returnUrl+"&payResult="+t:this.returnUrl+"?payResult="+t})}}};e.default=f},"61da":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* crmeb颜色变量 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.number-box[data-v-e3248744]{display:flex;flex-wrap:wrap;justify-content:center}.swiper[data-v-e3248744]{position:relative}.swiper[data-v-e3248744]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%}',""]),t.exports=e},7012:function(t,e,n){"use strict";var i=n("55e5"),a=n.n(i);a.a},"77a8":function(t,e,n){var i=n("38e3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("8acacd08",i,!0,{sourceMap:!1,shadowMode:!1})},"8ccd":function(t,e,n){var i=n("61da");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7df217fe",i,!0,{sourceMap:!1,shadowMode:!1})},a516:function(t,e,n){"use strict";n.r(e);var i=n("d6a9"),a=n("e3b7");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("39d8");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"e3248744",null,!1,i["a"],void 0);e["default"]=s.exports},ac3d:function(t,e,n){"use strict";n.r(e);var i=n("5aa5"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c023:function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getOrder=function(t){return a.default.get("app-api/pay/order/get",{id:t})},e.submitOrder=function(t){return a.default.post("app-api/pay/order/submit",t)};var a=i(n("e145"))},d029:function(t,e,n){"use strict";var i=n("77a8"),a=n.n(i);a.a},d126:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0},isCol:{type:Boolean,default:!1},bgColor:{type:Object,default:null}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,n=0,i=0,a=0,r=0;e>0?(n=!0===t.isDay?Math.floor(e/86400):0,i=Math.floor(e/3600)-24*n,a=Math.floor(e/60)-24*n*60-60*i,r=Math.floor(e)-24*n*60*60-60*i*60-60*a,i<=9&&(i="0"+i),a<=9&&(a="0"+a),r<=9&&(r="0"+r),t.day=n,t.hour=i,t.minute=a,t.second=r):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}};e.default=i},d657:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.payPrice?n("v-uni-view",{staticClass:"page"},[n("v-uni-view",{staticClass:"pay-price"},[n("v-uni-view",{staticClass:"price"},[n("v-uni-text",{staticClass:"unit"},[t._v("￥")]),n("numberScroll",{attrs:{num:(t.payPrice/100).toFixed(2),color:"#E93323",width:"30",height:"50",fontSize:"50"}})],1),n("v-uni-view",{staticClass:"count-down"},[t._v("支付剩余时间："),n("countDown",{attrs:{"is-day":!1,"tip-text":" ","day-text":" ","hour-text":" : ","minute-text":" : ","second-text":" ",datatime:t.invalidTime/1e3,"is-col":!0,bgColor:t.bgColor}})],1)],1),t.channelCode.length>0?n("v-uni-view",{staticClass:"payment"},[n("v-uni-view",{staticClass:"title"},[t._v("支付方式")]),t._l(t.channels,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item acea-row row-between-wrapper",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.payType(e.code)}}},[n("v-uni-view",{staticClass:"left acea-row row-between-wrapper"},[n("v-uni-view",{staticClass:"iconfont",class:e.icon}),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),"wallet"===e.code?n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title)),n("span",{staticClass:"money"},[t._v("￥"+t._s(t.fen2yuan(t.wallet.balance||0)))])]):n("v-uni-view",{staticClass:"info"},[t._v(t._s(e.title))])],1)],1),n("v-uni-view",{staticClass:"iconfont",class:e.code===t.channelCode?"icon-xuanzhong11 font-num":"icon-weixuan"})],1)}))],2):t._e(),n("v-uni-view",{staticClass:"btn"},[n("v-uni-view",{staticClass:"button acea-row row-center-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPay(t.channelCode)}}},[t._v("确认支付")]),n("v-uni-view",{staticClass:"wait-pay",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goReturnUrl("cancel")}}},[t._v("暂不支付")])],1)],1):t._e()},a=[]},d6a9:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"number-box"},[t._l(t.indexArr,(function(e,i){return[n("v-uni-swiper",{key:i+"_0",staticClass:"swiper",style:{color:t.color,width:10==e?"14rpx":1==e?"22rpx":t.width+"rpx",height:t.height+"rpx",lineHeight:t.fontSize+"rpx",fontSize:t.fontSize+"rpx",fontWeight:t.fontWeight},attrs:{vertical:"true",current:e,circular:"true"}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("0")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("1")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("2")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("3")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("4")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("5")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("6")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("7")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("8")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v("9")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[t._v(".")])],1)],1)]}))],2)},a=[]},e119:function(t,e,n){"use strict";n.r(e);var i=n("f06f"),a=n("15c3");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("d029");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"0b41fd40",null,!1,i["a"],void 0);e["default"]=s.exports},e3b7:function(t,e,n){"use strict";n.r(e);var i=n("3b65"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},f06f:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"time",style:t.justifyLeft},[t.tipText?n("v-uni-text",{},[t._v(t._s(t.tipText))]):t._e(),!0===t.isDay?n("v-uni-text",{staticClass:"styleAll p6",style:{background:t.bgColor.bgColor,color:t.bgColor.Color}},[t._v(t._s(t.day)+t._s(t.bgColor.isDay?"天":""))]):t._e(),t.dayText?n("v-uni-text",{staticClass:"timeTxt",style:{width:t.bgColor.timeTxtwidth,color:t.bgColor.bgColor}},[t._v(t._s(t.dayText))]):t._e(),n("v-uni-text",{staticClass:"styleAll",class:t.isCol?"timeCol":"",style:{background:t.bgColor.bgColor,color:t.bgColor.Color,width:t.bgColor.width}},[t._v(t._s(t.hour))]),t.hourText?n("v-uni-text",{staticClass:"timeTxt",class:t.isCol?"whit":"",style:{width:t.bgColor.timeTxtwidth,color:t.bgColor.bgColor}},[t._v(t._s(t.hourText))]):t._e(),n("v-uni-text",{staticClass:"styleAll",class:t.isCol?"timeCol":"",style:{background:t.bgColor.bgColor,color:t.bgColor.Color,width:t.bgColor.width}},[t._v(t._s(t.minute))]),t.minuteText?n("v-uni-text",{staticClass:"timeTxt",class:t.isCol?"whit":"",style:{width:t.bgColor.timeTxtwidth,color:t.bgColor.bgColor}},[t._v(t._s(t.minuteText))]):t._e(),n("v-uni-text",{staticClass:"styleAll",class:t.isCol?"timeCol":"",style:{background:t.bgColor.bgColor,color:t.bgColor.Color,width:t.bgColor.width}},[t._v(t._s(t.second))]),t.secondText?n("v-uni-text",{staticClass:"timeTxt"},[t._v(t._s(t.secondText))]):t._e()],1)},a=[]}}]);