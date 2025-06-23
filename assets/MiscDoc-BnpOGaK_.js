import{l as $,B,Q as _,m as S,b as h,c as x,p as c,ax as q,S as g,U as y,d as n,n as M,Z as k,ab as K,k as T,L as P,i as z,j as f,M as H,N as V,h as N,T as W,as as D,g as s,r as j,o as O,aZ as G,F as Z,s as J}from"./index-Dy2JIHED.js";import{s as Q}from"./index-B0AhsQIj.js";import{s as ee}from"./index-BY45if1U.js";import{s as te}from"./index-CoTgwpNs.js";import{s as se}from"./index-DtTgNocF.js";var re=$`
    .p-skeleton {
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,ne={root:{position:"relative"}},ie={root:function(e){var o=e.props;return["p-skeleton p-component",{"p-skeleton-circle":o.shape==="circle","p-skeleton-animation-none":o.animation==="none"}]}},oe=B.extend({name:"skeleton",style:re,classes:ie,inlineStyles:ne}),ae={name:"BaseSkeleton",extends:S,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:oe,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function le(t,e,o){return(e=ce(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function ce(t){var e=ue(t,"string");return w(e)=="symbol"?e:e+""}function ue(t,e){if(w(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var a=o.call(t,e);if(w(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var U={name:"Skeleton",extends:ae,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return _(le({},this.shape,this.shape))}}},de=["data-p"];function pe(t,e,o,a,u,i){return h(),x("div",c({class:t.cx("root"),style:[t.sx("root"),i.containerStyle],"aria-hidden":"true"},t.ptmi("root"),{"data-p":i.dataP}),null,16,de)}U.render=pe;var me=$`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`,fe={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},he=B.extend({name:"scrollpanel",style:me,classes:fe}),ve={name:"BaseScrollPanel",extends:S,props:{step:{type:Number,default:5}},style:he,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},C={name:"ScrollPanel",extends:ve,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),o=getComputedStyle(this.$refs.xBar),a=q(this.$el)-parseInt(o.height,10);e["max-height"]!=="none"&&a===0&&(this.$refs.content.offsetHeight+parseInt(o.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var o=this.$refs.content.scrollWidth,a=this.$refs.content.clientWidth,u=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=a/o;var i=this.$refs.content.scrollHeight,r=this.$refs.content.clientHeight,b=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=r/i,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/o*100+"%;bottom:"+u+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/i*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+b+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,o){this.$refs.content[e]+=o,this.moveBar()},setTimer:function(e,o){var a=this;this.clearTimer(),this.timer=setTimeout(function(){a.repeat(e,o)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var o=this,a=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){o.$refs.content.scrollLeft+=a/o.scrollXRatio})},onMouseMoveForYBar:function(e){var o=this,a=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){o.$refs.content.scrollTop+=a/o.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var o=window.requestAnimationFrame||this.timeoutFrame;return o(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var o=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>o?o:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(o){e.onDocumentMouseMove(o)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(o){e.onDocumentMouseUp(o)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.$id+"_content"}}},be=["id"],ge=["aria-controls","aria-valuenow"],ye=["aria-controls","aria-valuenow"];function we(t,e,o,a,u,i){return h(),x("div",c({class:t.cx("root")},t.ptmi("root")),[n("div",c({class:t.cx("contentContainer")},t.ptm("contentContainer")),[n("div",c({ref:"content",id:i.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),onMouseenter:e[1]||(e[1]=function(){return i.moveBar&&i.moveBar.apply(i,arguments)})},t.ptm("content")),[M(t.$slots,"default")],16,be)],16),n("div",c({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":i.contentId,"aria-valuenow":u.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return i.onXBarMouseDown&&i.onXBarMouseDown.apply(i,arguments)}),onKeydown:e[3]||(e[3]=function(r){return i.onKeyDown(r)}),onKeyup:e[4]||(e[4]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[5]||(e[5]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,ge),n("div",c({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":i.contentId,"aria-valuenow":u.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return i.onYBarMouseDown&&i.onYBarMouseDown.apply(i,arguments)}),onKeydown:e[8]||(e[8]=function(r){return i.onKeyDown(r)}),onKeyup:e[9]||(e[9]=function(){return i.onKeyUp&&i.onKeyUp.apply(i,arguments)}),onFocus:e[10]||(e[10]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,ye)],16)}C.render=we;var Be=$`
    .p-scrolltop.p-button {
        position: fixed !important;
        inset-block-end: 20px;
        inset-inline-end: 20px;
    }

    .p-scrolltop-sticky.p-button {
        position: sticky !important;
        display: flex;
        margin-inline-start: auto;
    }

    .p-scrolltop-enter-from {
        opacity: 0;
    }

    .p-scrolltop-enter-active {
        transition: opacity 0.15s;
    }

    .p-scrolltop.p-scrolltop-leave-to {
        opacity: 0;
    }

    .p-scrolltop-leave-active {
        transition: opacity 0.15s;
    }
`,xe={root:function(e){var o=e.props;return["p-scrolltop",{"p-scrolltop-sticky":o.target!=="window"}]},icon:"p-scrolltop-icon"},Le=B.extend({name:"scrolltop",style:Be,classes:xe}),$e={name:"BaseScrollTop",extends:S,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:Le,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},F={name:"ScrollTop",extends:$e,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(k.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(K())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){k.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){k.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:ee,Button:T}};function Se(t,e,o,a,u,i){var r=P("Button");return h(),z(W,c({name:"p-scrolltop",appear:"",onEnter:i.onEnter,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:f(function(){return[u.visible?(h(),z(r,c({key:0,ref:i.containerRef,class:t.cx("root"),onClick:i.onClick,"aria-label":i.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:t.ptm("root")}),{icon:f(function(b){return[M(t.$slots,"icon",{class:H(t.cx("icon"))},function(){return[(h(),z(V(t.icon?"span":"ChevronUpIcon"),c({class:[t.cx("icon"),t.icon,b.class]},t.ptm("root").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):N("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}F.render=Se;var Me={root:"p-avatar-group p-component"},ke=B.extend({name:"avatargroup",classes:Me}),ze={name:"BaseAvatarGroup",extends:S,style:ke,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},R={name:"AvatarGroup",extends:ze,inheritAttrs:!1};function De(t,e,o,a,u,i){return h(),x("div",c({class:t.cx("root")},t.ptmi("root")),[M(t.$slots,"default")],16)}R.render=De;var Ae=$`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,Te={root:"p-overlaybadge"},Pe=B.extend({name:"overlaybadge",style:Ae,classes:Te}),Ue={name:"OverlayBadge",extends:D,style:Pe,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},X={name:"OverlayBadge",extends:Ue,inheritAttrs:!1,components:{Badge:D}};function Ce(t,e,o,a,u,i){var r=P("Badge");return h(),x("div",c({class:t.cx("root")},t.ptmi("root")),[M(t.$slots,"default"),s(r,c(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}X.render=Ce;const Fe={class:"card"},Re={class:"flex flex-col md:flex-row gap-4"},Xe={class:"md:w-1/2"},Ee={class:"md:w-1/2"},Ie={class:"flex flex-col md:flex-row gap-8"},Ye={class:"md:w-1/2"},_e={class:"card"},qe={class:"flex gap-2"},Ke={class:"flex gap-6"},He={class:"flex gap-2"},Ve={class:"flex items-start gap-2"},Ne={class:"card"},We={class:"card"},je={class:"md:w-1/2"},Oe={class:"card"},Ge={class:"flex gap-2"},Ze={class:"flex gap-2"},Je={class:"flex gap-2"},Qe={class:"card"},et={class:"flex items-center flex-col sm:flex-row"},tt={class:"flex items-center flex-col sm:flex-row"},st={class:"flex items-center flex-col sm:flex-row"},rt={class:"card"},nt={class:"rounded-border border border-surface p-6"},it={class:"flex mb-4"},ot={class:"flex justify-between mt-4"},pt={__name:"MiscDoc",setup(t){const e=j(0);let o=null;function a(){o=setInterval(()=>{let i=e.value+Math.floor(Math.random()*10)+1;i>=100&&(i=100),e.value=i},2e3)}function u(){clearInterval(o),o=null}return O(()=>{a()}),G(()=>{u()}),(i,r)=>{const b=se,m=D,L=X,A=T,p=te,E=R,I=F,Y=C,l=J,d=Q,v=U;return h(),x(Z,null,[n("div",Fe,[r[0]||(r[0]=n("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1)),n("div",Re,[n("div",Xe,[s(b,{value:e.value},null,8,["value"])]),n("div",Ee,[s(b,{value:50,showValue:!1})])])]),n("div",Ie,[n("div",Ye,[n("div",_e,[r[4]||(r[4]=n("div",{class:"font-semibold text-xl mb-4"},"Badge",-1)),n("div",qe,[s(m,{value:2}),s(m,{value:8,severity:"success"}),s(m,{value:4,severity:"info"}),s(m,{value:12,severity:"Warn"}),s(m,{value:3,severity:"danger"})]),r[5]||(r[5]=n("div",{class:"font-semibold my-4"},"Overlay",-1)),n("div",Ke,[s(L,{value:"2"},{default:f(()=>r[1]||(r[1]=[n("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1)])),_:1}),s(L,{value:"4",severity:"danger"},{default:f(()=>r[2]||(r[2]=[n("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1)])),_:1}),s(L,{severity:"danger"},{default:f(()=>r[3]||(r[3]=[n("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1)])),_:1})]),r[6]||(r[6]=n("div",{class:"font-semibold my-4"},"Button",-1)),n("div",He,[s(A,{label:"Emails",badge:"8",class:"mr-2"}),s(A,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),r[7]||(r[7]=n("div",{class:"font-semibold my-4"},"Sizes",-1)),n("div",Ve,[s(m,{value:2}),s(m,{value:4,size:"large",severity:"warn"}),s(m,{value:6,size:"xlarge",severity:"success"})])]),n("div",Ne,[r[8]||(r[8]=n("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1)),r[9]||(r[9]=n("div",{class:"font-semibold mb-4"},"Group",-1)),s(E,null,{default:f(()=>[s(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",size:"large",shape:"circle"}),s(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),s(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),s(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),s(p,{image:"https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),s(p,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),r[10]||(r[10]=n("div",{class:"font-semibold my-4"},"Label - Circle",-1)),s(p,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),s(p,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),s(p,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),r[11]||(r[11]=n("div",{class:"font-semibold my-4"},"Icon - Badge",-1)),s(L,{value:"4",severity:"danger",class:"inline-flex"},{default:f(()=>[s(p,{label:"U",size:"xlarge"})]),_:1})]),n("div",We,[r[13]||(r[13]=n("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1)),s(Y,{style:{width:"250px",height:"200px"}},{default:f(()=>[r[12]||(r[12]=n("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1)),s(I,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),n("div",je,[n("div",Oe,[r[14]||(r[14]=n("div",{class:"font-semibold text-xl mb-4"},"Tag",-1)),r[15]||(r[15]=n("div",{class:"font-semibold mb-4"},"Default",-1)),n("div",Ge,[s(l,{value:"Primary"}),s(l,{severity:"success",value:"Success"}),s(l,{severity:"info",value:"Info"}),s(l,{severity:"warn",value:"Warn"}),s(l,{severity:"danger",value:"Danger"})]),r[16]||(r[16]=n("div",{class:"font-semibold my-4"},"Pills",-1)),n("div",Ze,[s(l,{value:"Primary",rounded:!0}),s(l,{severity:"success",value:"Success",rounded:!0}),s(l,{severity:"info",value:"Info",rounded:!0}),s(l,{severity:"warn",value:"Warn",rounded:!0}),s(l,{severity:"danger",value:"Danger",rounded:!0})]),r[17]||(r[17]=n("div",{class:"font-semibold my-4"},"Icons",-1)),n("div",Je,[s(l,{icon:"pi pi-user",value:"Primary"}),s(l,{icon:"pi pi-check",severity:"success",value:"Success"}),s(l,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),s(l,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),s(l,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),n("div",Qe,[r[18]||(r[18]=n("div",{class:"font-semibold text-xl mb-4"},"Chip",-1)),r[19]||(r[19]=n("div",{class:"font-semibold mb-4"},"Basic",-1)),n("div",et,[s(d,{label:"Action",class:"mr-2 mb-2"}),s(d,{label:"Comedy",class:"mr-2 mb-2"}),s(d,{label:"Mystery",class:"mr-2 mb-2"}),s(d,{label:"Thriller",removable:!0,class:"mb-2"})]),r[20]||(r[20]=n("div",{class:"font-semibold my-4"},"Icon",-1)),n("div",tt,[s(d,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),s(d,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),s(d,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),s(d,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),r[21]||(r[21]=n("div",{class:"font-semibold my-4"},"Image",-1)),n("div",st,[s(d,{label:"Amy Elsner",image:"https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),s(d,{label:"Asiya Javayant",image:"https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),s(d,{label:"Onyama Limba",image:"https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),n("div",rt,[r[22]||(r[22]=n("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1)),n("div",nt,[n("div",it,[s(v,{shape:"circle",size:"4rem",class:"mr-2"}),n("div",null,[s(v,{width:"10rem",class:"mb-2"}),s(v,{width:"5rem",class:"mb-2"}),s(v,{height:".5rem"})])]),s(v,{width:"100%",height:"150px"}),n("div",ot,[s(v,{width:"4rem",height:"2rem"}),s(v,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{pt as default};
