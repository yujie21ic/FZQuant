webpackJsonp([2],{239:function(t,e,n){n(505);var o=n(0)(n(380),n(581),"data-v-b69b7ce6",null);t.exports=o.exports},240:function(t,e,n){n(504);var o=n(0)(n(381),n(580),"data-v-b67f4de4",null);t.exports=o.exports},266:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAAFdQTFRFycnPycnNycnOysrOyMjNycnOycnOycnOyMjOysrNycnOycnOycnOzMzVzs7O1dXVyMjNyMjOzMzSzc3NyMjOAAAAycnO0NDU3Nzf////1dXY/Pz8yMjN8tBjEQAAABZ0Uk5TiXv4fPeI/d6/j6Wh2R4VBsPgLS7zADM/FUgAAAEISURBVDjLldXrtkMwEAXgUXUXlyRK2e//nHUOVpuYtGb/Evks5DKhwY2Oyry2ts7LSHtd5Lgiw0eyQgeoqlJ4SSvF0Da5gck9aX3adAika1xqegTTm09qLL7EmjdtenxN3xy07fAjXbtTws8kG1X3rfmYRl+M02MfM/VPq/3+9FxmV87Lc9ovqz+qjzkaF8+ucjlelOqVFk7XjECzWGkW6PQezAYy/itnVgKGYrD2JBFTCc6eJUrKwVhGIqcajGUkajqvqdUyElZCBR8g+C3BYF2egoj01YnVkuUiWYSCpS3YMIO6Xd6Ggs0tKRmCQiQpb5KiKSnFkgIvOTZEh9H2f/FxxMXG63oBio6sx0K4vB0AAAAASUVORK5CYII="},268:function(t,e,n){t.exports=n.p+"static/img/eye1.5ccc850.png"},269:function(t,e,n){t.exports=n.p+"static/img/eye2.17abc45.png"},270:function(t,e,n){t.exports=n.p+"static/img/loading.618a14f.gif"},271:function(t,e,n){t.exports=n.p+"static/img/ok_1.b6e52e8.png"},272:function(t,e,n){t.exports=n.p+"static/img/ok_2.9b25cfd.png"},273:function(t,e,n){t.exports=n.p+"static/img/padking-icon-1.ba69c4b.png"},274:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAMCAYAAABfnvydAAAAAXNSR0IArs4c6QAAAHdJREFUGBljXL16dQcDHsAClJNgYmJqwqbm379/dSz///+X+/v3rws2BUAxORZGRsYroaGhs7ApAFqvw4RNAllsMCgAeVNn1apVacgOg7FBciBvPgIG1B6QIFDABxg4oczMzPEgPpBtBQrJF0AGzAROoIYHSPwXAGJVL+MvIcM/AAAAAElFTkSuQmCC"},276:function(t,e,n){t.exports=n.p+"static/img/user.3ccad4e.png"},380:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),r=n.n(o);e.default={name:"userLogin",components:{BlCustPicker:function(){return n.e(16).then(n.bind(null,323))},BlActionSheet:function(){return n.e(19).then(n.bind(null,547))}},data:function(){return{sheetVisible:!1,test:!1,storeVisible:!1,merchantVisible:!1,store:"请选择",shop:"请选择",storeList:[],merchantList:[],name:"",noid:"",role:"请选择",perfectInfoParam:{commercialCode:null,jobNumber:null,memberId:null,merchantId:null,merchantName:null,name:null,roleId:null,roleName:null,storeCode:null,storeName:null},actions:[{name:"店长",key:"0"},{name:"店员",key:"1"}]}},mounted:function(){this.perfectInfoParam.memberId=this.$route.params.memberId,this.findSignMerchant(),this.findMerchantRole()},methods:{onCancel:function(){this.merchantVisible=!1},onDone:function(){console.log("选择。。。。"),this.merchantVisible=!1;var t=this.$refs.myPicker.getValues(0)[0];console.log("picker======",t);var e=this.$_.findWhere(this.merchantList,{name:t});this.perfectInfoParam.merchantName=e.shopName,this.perfectInfoParam.merchantId=e.merchantId,this.shop=e.shopName},returnVal:function(t){this.perfectInfoParam.roleId=t.roleId,this.perfectInfoParam.roleName=t.roleName,this.role=t.roleName},storeVal:function(t){this.perfectInfoParam.storeCode=t.storeCode,this.perfectInfoParam.storeName=t.storeName,this.perfectInfoParam.commercialCode=t.bizTypeCode,this.store=t.storeName,this.merchantList=t.shopList,this.merchantList.forEach(function(t){t.name=t.shopName}),this.perfectInfoParam.merchantName="",this.perfectInfoParam.merchantId="",this.shop="请选择"},shopVal:function(t){this.perfectInfoParam.merchantName=t.shopName,this.perfectInfoParam.merchantId=t.merchantId,this.shop=t.shopName},isVisible:function(){this.merchantList.length>0?this.merchantVisible=!this.merchantVisible:this.$toast("请先选择所属门店")},onBack:function(){var t=this;this.$modal({content:"您确定要离开吗？若离开，已输入的内容将丢失。",buttons:[{text:"取消",onClick:function(){}},{text:"确定离开",onClick:function(){t.$router.go(-1)}}]})},findMerchantRole:function(){var t=this;this.$merchantlib.findMerchantRole(function(e,n){if(e)return t.$toast(e);t.actions=n.list,t.actions.forEach(function(t){t.name=t.roleName}),console.log("1.2.1 findSignMerchant",r()(t.storeList))})},findSignMerchant:function(){var t=this;this.$merchantlib.findSignMerchant(function(e,n){if(e)return t.$toast(e);t.storeList=n.storeList,t.storeList.forEach(function(t){t.name=t.storeName}),console.log("1.2.1 findSignMerchant",r()(t.storeList))})},submit:function(){var t=this;this.validationData()&&(this.perfectInfoParam.name=this.name,this.perfectInfoParam.jobNumber=this.noid,console.log("1.2.1 findSignMerchant",r()(this.perfectInfoParam)),this.$merchantlib.addMemberAllInfo(this.perfectInfoParam,function(e,n){if(e)return t.$toast(e);t.$toast("操作成功"),t.$router.push({name:"1"})}))},validationData:function(){return"请选择"==this.store?(this.$toast("请选择所属门店"),!1):"请选择"==this.shop?(this.$toast("请选择所属商户"),!1):0==this.name.length?(this.$toast("请输入姓名"),!1):/^([\u4e00-\u9fa5]|[A-Za-z])+$/.test(this.name)?"请选择"==this.shop?(this.$toast("请选择角色"),!1):0!=this.noid.length||(this.$toast("请输入工号"),!1):(this.$toast("姓名中不能含有数字"),!1)}},computed:{disabled:function(){return"请选择"!=this.role&&"请选择"!=this.shop&&"请选择"!=this.merchant&&""!=this.name&&""!=this.noid},slots:function(){return[{values:this.$_.pluck(this.merchantList,"name")}]}}}},381:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"userLogin",components:{},data:function(){return{avatar:"",memberId:"",roleName:"",auditingFlag:"",denyReason:""}},mounted:function(){console.log("mounted"),this.avatar=this.$route.query.avatar,this.memberId=this.$route.query.memberId,this.roleName=this.$route.query.roleName,this.auditingFlag=this.$route.query.auditingFlag,this.denyReason=this.$route.query.denyReason,console.log("avatar:"+this.avatar+",memberId:"+this.memberId+",roleName:"+this.roleName+",auditingFlag:"+this.auditingFlag+",denyReason:"+this.denyReason)},computed:{},methods:{anewPerfectInfo:function(){2==this.auditingFlag&&this.$router.push({name:"1.2.1",params:{memberId:this.memberId}})}}}},450:function(t,e,n){e=t.exports=n(233)(),e.push([t.i,".write[data-v-b67f4de4]{background:#fff}.user-content[data-v-b67f4de4]{padding-top:.88rem}.user-content .close[data-v-b67f4de4]{color:#ccc}.user-content .hrad-right[data-v-b67f4de4]{font-size:.3rem;color:#999;margin-right:.3rem;cursor:pointer}.user-content .button[data-v-b67f4de4]{padding:0 .3rem}.user-content .arrow-back[data-v-b67f4de4]{color:#ccc}.user-content .setarrow-back[data-v-b67f4de4]{color:#fff}.user-content .fback[data-v-b67f4de4]{color:#999;font-style:normal;position:absolute;left:.52rem;top:.22rem;font-size:.3rem}.user-content .titlecolor[data-v-b67f4de4]{color:#000}.user-content .setps[data-v-b67f4de4]{color:#fff}.user-content .fclose[data-v-b67f4de4]{position:absolute;left:1.5rem;top:.22rem;color:#999;font-style:normal;font-size:.3rem}.user-content .bar-dark-write[data-v-b67f4de4]{background:none}.user-content .bar-dark-write .fback[data-v-b67f4de4]{left:.68rem}.user-content .defaultBackColor[data-v-b67f4de4]{background:#4b4b64}.user-content .bar-dark-linear .fback[data-v-b67f4de4]{color:#fff;font-style:normal;position:absolute;left:.52rem;top:.22rem;font-size:.3rem;left:.66rem}.user-content .bar-dark-linear .arrow-back[data-v-b67f4de4]{color:#fff}.user-content .user[data-v-b67f4de4]{margin:0 auto;padding:0 1rem}.user-content .user .user-head[data-v-b67f4de4]{width:1.5rem;height:1.5rem;background:url("+n(276)+") no-repeat;border-radius:.75rem;margin:1.2rem auto .92rem;background-size:100%}.user-content .user .unline[data-v-b67f4de4]{width:100%;height:.88rem;line-height:.88rem;color:#b2b2b2;font-size:.28rem;border-bottom:1px solid #d9d9d9;margin:0 auto .4rem;overflow:hidden;position:relative}.user-content .user .unline input[data-v-b67f4de4]{width:4.5rem;height:.8rem;line-height:.8rem;border:0;font-size:.28rem}.user-content .user .unline .sms[data-v-b67f4de4]{width:3rem}.user-content .user .unline .sendsms[data-v-b67f4de4]{width:2.08rem;height:.56rem;padding:0;float:right;background:#f7f7f7;border:0;color:#585858;font-size:.24rem;margin:.14rem 0 0}.user-content .user .unline i[data-v-b67f4de4]{width:.6rem;height:.6rem;position:absolute;right:0;top:.15rem}.user-content .user .unline .clears[data-v-b67f4de4]{background:url("+n(266)+") no-repeat 100%;background-size:60%}.user-content .user .unline .code[data-v-b67f4de4]{right:2.4rem}.user-content .user .unline .pass[data-v-b67f4de4]{right:.6rem}.user-content .user .unline .eye[data-v-b67f4de4]{background:url("+n(268)+") no-repeat 100%;background-size:70%}.user-content .user .unline .open[data-v-b67f4de4]{background:url("+n(269)+") no-repeat 100%;background-size:70%}.user-content .user .loginbtn[data-v-b67f4de4]{margin:.8rem auto 0}@keyframes indexload{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes indexload{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}.user-content .user .bl-button.loading[data-v-b67f4de4]:after{background:#66667b url("+n(270)+") no-repeat 4rem;background-size:.5rem}.user-content .user .loading[data-v-b67f4de4]{width:.3rem;margin:0 .2rem 0 0;animation:indexload 1s infinite linear;-webkit-animation:indexload 1s infinite linear;position:absolute;left:1.9rem;top:.29rem}.user-content .user p[data-v-b67f4de4]{clear:both;color:#888;font-size:.24rem;padding:.2rem 0;overflow:hidden}.user-content .user p .phone[data-v-b67f4de4]{float:left;background:url("+n(274)+") no-repeat 0;padding:0 0 0 .24rem;background-position:0 .05rem}.user-content .user p .forget[data-v-b67f4de4]{float:right;text-decoration:underline}.user-content .user .ftop[data-v-b67f4de4]{margin-top:1.2rem}.user-content .user .reg[data-v-b67f4de4]{padding:0}.user-content .user .checkbox[data-v-b67f4de4]{width:.32rem;height:.32rem;background:url("+n(271)+") no-repeat;float:left;margin:0 .2rem 0 0;background-size:100%}.user-content .user .sure[data-v-b67f4de4]{background:url("+n(272)+") no-repeat;background-size:100%}.user-content .user .blue[data-v-b67f4de4]{color:#118fea}.user-content .logininfo[data-v-b67f4de4]{padding:.3rem 0}.user-content .logininfo .top[data-v-b67f4de4]{margin:.4rem auto 0}.user-content .logininfo .right-box[data-v-b67f4de4]{position:relative;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-moz-box-pack:justify;box-pack:justify;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.user-content .logininfo .right-box .right-l[data-v-b67f4de4],.user-content .logininfo .right-box .right-r[data-v-b67f4de4]{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.user-content .logininfo .right-box .right-l input[data-v-b67f4de4],.user-content .logininfo .right-box .right-r input[data-v-b67f4de4]{width:80%;border:none;outline:none}.user-content .logininfo .right-box .arrow-back[data-v-b67f4de4]{color:#c7c7cc!important;line-height:1}.user-content .logininfo .right-box .right-r[data-v-b67f4de4]{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1;color:#b2b2b2;text-align:right;padding-right:.1rem}.user-content .logininfo .submit[data-v-b67f4de4]{margin:.6rem .4rem}.user-content .logininfo .notices[data-v-b67f4de4]{width:1.86rem;height:1.86rem;display:block;margin:1rem auto .5rem;background:url("+n(273)+") no-repeat;background-size:100%}.user-content .logininfo h1[data-v-b67f4de4]{font-size:.6rem;text-align:center;padding:0 .3rem;font-weight:400;margin-bottom:.4rem}.user-content .logininfo p[data-v-b67f4de4]{font-size:.28rem;color:#888;text-align:center;padding:0 .4rem}",""])},451:function(t,e,n){e=t.exports=n(233)(),e.push([t.i,".write[data-v-b69b7ce6]{background:#fff}.user-content[data-v-b69b7ce6]{padding-top:.88rem}.user-content .close[data-v-b69b7ce6]{color:#ccc}.user-content .hrad-right[data-v-b69b7ce6]{font-size:.3rem;color:#999;margin-right:.3rem;cursor:pointer}.user-content .button[data-v-b69b7ce6]{padding:0 .3rem}.user-content .arrow-back[data-v-b69b7ce6]{color:#ccc}.user-content .setarrow-back[data-v-b69b7ce6]{color:#fff}.user-content .fback[data-v-b69b7ce6]{color:#999;font-style:normal;position:absolute;left:.52rem;top:.22rem;font-size:.3rem}.user-content .titlecolor[data-v-b69b7ce6]{color:#000}.user-content .setps[data-v-b69b7ce6]{color:#fff}.user-content .fclose[data-v-b69b7ce6]{position:absolute;left:1.5rem;top:.22rem;color:#999;font-style:normal;font-size:.3rem}.user-content .bar-dark-write[data-v-b69b7ce6]{background:none}.user-content .bar-dark-write .fback[data-v-b69b7ce6]{left:.68rem}.user-content .defaultBackColor[data-v-b69b7ce6]{background:#4b4b64}.user-content .bar-dark-linear .fback[data-v-b69b7ce6]{color:#fff;font-style:normal;position:absolute;left:.52rem;top:.22rem;font-size:.3rem;left:.66rem}.user-content .bar-dark-linear .arrow-back[data-v-b69b7ce6]{color:#fff}.user-content .user[data-v-b69b7ce6]{margin:0 auto;padding:0 1rem}.user-content .user .user-head[data-v-b69b7ce6]{width:1.5rem;height:1.5rem;background:url("+n(276)+") no-repeat;border-radius:.75rem;margin:1.2rem auto .92rem;background-size:100%}.user-content .user .unline[data-v-b69b7ce6]{width:100%;height:.88rem;line-height:.88rem;color:#b2b2b2;font-size:.28rem;border-bottom:1px solid #d9d9d9;margin:0 auto .4rem;overflow:hidden;position:relative}.user-content .user .unline input[data-v-b69b7ce6]{width:4.5rem;height:.8rem;line-height:.8rem;border:0;font-size:.28rem}.user-content .user .unline .sms[data-v-b69b7ce6]{width:3rem}.user-content .user .unline .sendsms[data-v-b69b7ce6]{width:2.08rem;height:.56rem;padding:0;float:right;background:#f7f7f7;border:0;color:#585858;font-size:.24rem;margin:.14rem 0 0}.user-content .user .unline i[data-v-b69b7ce6]{width:.6rem;height:.6rem;position:absolute;right:0;top:.15rem}.user-content .user .unline .clears[data-v-b69b7ce6]{background:url("+n(266)+") no-repeat 100%;background-size:60%}.user-content .user .unline .code[data-v-b69b7ce6]{right:2.4rem}.user-content .user .unline .pass[data-v-b69b7ce6]{right:.6rem}.user-content .user .unline .eye[data-v-b69b7ce6]{background:url("+n(268)+") no-repeat 100%;background-size:70%}.user-content .user .unline .open[data-v-b69b7ce6]{background:url("+n(269)+") no-repeat 100%;background-size:70%}.user-content .user .loginbtn[data-v-b69b7ce6]{margin:.8rem auto 0}@keyframes indexload{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}@-webkit-keyframes indexload{to{transform:rotate(1turn);-webkit-transform:rotate(1turn)}}.user-content .user .bl-button.loading[data-v-b69b7ce6]:after{background:#66667b url("+n(270)+") no-repeat 4rem;background-size:.5rem}.user-content .user .loading[data-v-b69b7ce6]{width:.3rem;margin:0 .2rem 0 0;animation:indexload 1s infinite linear;-webkit-animation:indexload 1s infinite linear;position:absolute;left:1.9rem;top:.29rem}.user-content .user p[data-v-b69b7ce6]{clear:both;color:#888;font-size:.24rem;padding:.2rem 0;overflow:hidden}.user-content .user p .phone[data-v-b69b7ce6]{float:left;background:url("+n(274)+") no-repeat 0;padding:0 0 0 .24rem;background-position:0 .05rem}.user-content .user p .forget[data-v-b69b7ce6]{float:right;text-decoration:underline}.user-content .user .ftop[data-v-b69b7ce6]{margin-top:1.2rem}.user-content .user .reg[data-v-b69b7ce6]{padding:0}.user-content .user .checkbox[data-v-b69b7ce6]{width:.32rem;height:.32rem;background:url("+n(271)+") no-repeat;float:left;margin:0 .2rem 0 0;background-size:100%}.user-content .user .sure[data-v-b69b7ce6]{background:url("+n(272)+") no-repeat;background-size:100%}.user-content .user .blue[data-v-b69b7ce6]{color:#118fea}.user-content .logininfo[data-v-b69b7ce6]{padding:.3rem 0}.user-content .logininfo .top[data-v-b69b7ce6]{margin:.4rem auto 0}.user-content .logininfo .right-box[data-v-b69b7ce6]{position:relative;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-moz-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;box-align:center;-webkit-align-items:center;-moz-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-moz-box-pack:justify;box-pack:justify;-webkit-justify-content:space-between;-moz-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.user-content .logininfo .right-box .right-l[data-v-b69b7ce6],.user-content .logininfo .right-box .right-r[data-v-b69b7ce6]{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1}.user-content .logininfo .right-box .right-l input[data-v-b69b7ce6],.user-content .logininfo .right-box .right-r input[data-v-b69b7ce6]{width:80%;border:none;outline:none}.user-content .logininfo .right-box .arrow-back[data-v-b69b7ce6]{color:#c7c7cc!important;line-height:1}.user-content .logininfo .right-box .right-r[data-v-b69b7ce6]{-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1;color:#b2b2b2;text-align:right;padding-right:.1rem}.user-content .logininfo .submit[data-v-b69b7ce6]{margin:.6rem .4rem}.user-content .logininfo .notices[data-v-b69b7ce6]{width:1.86rem;height:1.86rem;display:block;margin:1rem auto .5rem;background:url("+n(273)+") no-repeat;background-size:100%}.user-content .logininfo h1[data-v-b69b7ce6]{font-size:.6rem;text-align:center;padding:0 .3rem;font-weight:400;margin-bottom:.4rem}.user-content .logininfo p[data-v-b69b7ce6]{font-size:.28rem;color:#888;text-align:center;padding:0 .4rem}",""])},504:function(t,e,n){var o=n(450);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(234)("318a8a64",o,!0)},505:function(t,e,n){var o=n(451);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(234)("29625534",o,!0)},580:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-content write"},[n("bl-bar",{attrs:{barStyle:"bar-dark-linear"}},[n("div",{staticClass:"button",attrs:{slot:"left-button"},on:{click:function(e){t.$router.go(-1)}},slot:"left-button"},[n("div",{staticClass:"iconfont arrow-back"},[n("i",{staticClass:"fback"},[t._v("返回")])])]),t._v(" "),n("div",{attrs:{slot:"title"},slot:"title"},[t._v("审核结果")])]),t._v(" "),n("div",{staticClass:"logininfo"},[n("em",{staticClass:"notices"},[n("img",{attrs:{src:t.avatar}})]),t._v(" "),n("h1",[0==t.auditingFlag?n("div",[t._v("注册信息正在审核中...")]):t._e(),2==t.auditingFlag?n("div",[t._v("注册信息审核不通过")]):t._e()]),t._v(" "),n("p"),0==t.auditingFlag?n("div",{staticStyle:{padding:"0 .3rem"}},[t._v("您提交的注册信息，当前正在等待 店长 的审核，请密切关注")]):t._e(),t._v(" "),2==t.auditingFlag?n("div",{staticStyle:{padding:"0 .3rem"}},[t._v("您提交的注册信息，因 "+t._s(t.denyReason)+" 审核不通过，请重新提交注册信息")]):t._e(),t._v(" "),n("p"),t._v(" "),2==t.auditingFlag?n("bl-button",{staticClass:"submit",on:{click:t.anewPerfectInfo}},[t._v("重新提交注册信息")]):t._e()],1)],1)},staticRenderFns:[]}},581:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-content"},[n("bl-bar",{attrs:{barStyle:"bar-dark-linear"}},[n("div",{staticClass:"button",attrs:{slot:"left-button"},on:{click:t.onBack},slot:"left-button"},[n("div",{staticClass:"iconfont arrow-back"},[n("i",{staticClass:"fback"},[t._v("返回")])])]),t._v(" "),n("div",{attrs:{slot:"title"},slot:"title"},[t._v("完善商户信息")])]),t._v(" "),n("div",{staticClass:"logininfo"},[n("bl-comli",[n("div",{staticClass:"left-box",attrs:{slot:"left-text"},slot:"left-text"},[t._v("所属门店")]),t._v(" "),n("div",{staticClass:"right-box",attrs:{slot:"right-text"},on:{click:function(e){t.storeVisible=!t.storeVisible}},slot:"right-text"},[n("div",{staticClass:"right-r"},[t._v(t._s(t.store))]),t._v(" "),n("div",{staticClass:"iconfont arrow-back"})])]),t._v(" "),n("bl-comli",[n("div",{staticClass:"left-box",attrs:{slot:"left-text"},slot:"left-text"},[t._v("所属商户")]),t._v(" "),n("div",{staticClass:"right-box",attrs:{slot:"right-text"},on:{click:t.isVisible},slot:"right-text"},[n("div",{staticClass:"right-r"},[t._v(t._s(t.shop))]),t._v(" "),n("div",{staticClass:"iconfont arrow-back"})])]),t._v(" "),n("bl-comli",{staticClass:"top"},[n("div",{staticClass:"left-box",attrs:{slot:"left-text"},slot:"left-text"},[t._v("姓名")]),t._v(" "),n("div",{staticClass:"right-box",attrs:{slot:"right-text"},slot:"right-text"},[n("div",{staticClass:"right-r"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请填写真实姓名",maxlength:"30"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])])]),t._v(" "),n("bl-comli",[n("div",{staticClass:"left-box",attrs:{slot:"left-text"},slot:"left-text"},[t._v("工号")]),t._v(" "),n("div",{staticClass:"right-box",attrs:{slot:"right-text"},slot:"right-text"},[n("div",{staticClass:"right-r"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.noid,expression:"noid"}],attrs:{type:"text",placeholder:"请填写您在该商户的员工号",maxlength:"10"},domProps:{value:t.noid},on:{input:function(e){e.target.composing||(t.noid=e.target.value)}}})])])]),t._v(" "),n("bl-comli",{staticClass:"top"},[n("div",{staticClass:"left-box",attrs:{slot:"left-text"},slot:"left-text"},[t._v("角色")]),t._v(" "),n("div",{staticClass:"right-box",attrs:{slot:"right-text"},on:{click:function(e){t.sheetVisible=!t.sheetVisible}},slot:"right-text"},[n("div",{staticClass:"right-r"},[t._v(t._s(t.role))]),t._v(" "),n("div",{staticClass:"iconfont arrow-back"})])]),t._v(" "),n("bl-button",{staticClass:"submit",attrs:{disabled:!t.disabled},on:{click:t.submit}},[t._v("提交审核")])],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:t.storeVisible,callback:function(e){t.storeVisible=e},expression:"storeVisible"}},[n("bl-action-sheet",{attrs:{actions:t.storeList},on:{thisValue:t.storeVal},model:{value:t.storeVisible,callback:function(e){t.storeVisible=e},expression:"storeVisible"}})],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:t.merchantVisible,callback:function(e){t.merchantVisible=e},expression:"merchantVisible"}},[n("BlCustPicker",{attrs:{"show-toolbar":""},on:{cancel:t.onCancel,done:t.onDone}},[n("mt-picker",{ref:"myPicker",attrs:{slot:"content",slots:t.slots},slot:"content"})],1)],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%"},attrs:{position:"bottom"},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}},[n("bl-action-sheet",{attrs:{actions:t.actions},on:{thisValue:t.returnVal},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}})],1)],1)},staticRenderFns:[]}}});