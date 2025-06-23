import{l as H,B as P,H as Se,aw as Ae,ax as xe,C as E,ay as L,ac as ze,az as Te,Q as U,m as $,b as p,c as v,F as T,f as ne,i as m,N as b,p as c,d as a,h as S,n as f,R as ie,aA as we,at as _e,_ as re,t as O,a0 as w,M as A,g as s,j as l,ai as F,T as oe,W as ke,G as Ie,ad as Y,q as Ee,L as B,r as N,aB as Le,aC as qe,e as x,k as Ce}from"./index-Dy2JIHED.js";import{g as J}from"./index-DYQig9CN.js";import{s as Me}from"./index-DKV429ub.js";import{s as De,a as Ke,b as Be,c as Ne}from"./index-BF7HXSIc.js";import{s as Oe}from"./index-BBJNaqiQ.js";import{s as ae}from"./index-BY45if1U.js";import{s as je}from"./index-viJW6dj5.js";import{s as He}from"./index-Dgxcyug5.js";import{s as Ue}from"./index-CR48LPo_.js";import{s as Fe,a as Re}from"./index-BdrYZqHi.js";import{s as Ge}from"./index-D-5ETD8b.js";import"./index-BOwEasnq.js";import"./index-9BngRsvA.js";import"./index-1PCj8mdw.js";import"./index-DQgLDH70.js";var Ve=H`
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
        border: 1px solid dt('splitter.border.color');
        background: dt('splitter.background');
        border-radius: dt('border.radius.md');
        color: dt('splitter.color');
    }

    .p-splitter-vertical {
        flex-direction: column;
    }

    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        background: dt('splitter.gutter.background');
    }

    .p-splitter-gutter-handle {
        border-radius: dt('splitter.handle.border.radius');
        background: dt('splitter.handle.background');
        transition:
            outline-color dt('splitter.transition.duration'),
            box-shadow dt('splitter.transition.duration');
        outline-color: transparent;
    }

    .p-splitter-gutter-handle:focus-visible {
        box-shadow: dt('splitter.handle.focus.ring.shadow');
        outline: dt('splitter.handle.focus.ring.width') dt('splitter.handle.focus.ring.style') dt('splitter.handle.focus.ring.color');
        outline-offset: dt('splitter.handle.focus.ring.offset');
    }

    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }

    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }

    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: dt('splitter.handle.size');
        width: 100%;
    }

    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: dt('splitter.handle.size');
        height: 100%;
    }

    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }

    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }

    .p-splitterpanel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitterpanel-nested {
        display: flex;
    }

    .p-splitterpanel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
`,We={root:function(t){var n=t.props;return["p-splitter p-component","p-splitter-"+n.layout]},gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Xe=P.extend({name:"splitter",style:Ve,classes:We}),Ye={name:"BaseSplitter",extends:$,props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"},step:{type:Number,default:5}},style:Xe,provide:function(){return{$pcSplitter:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function Q(e,t,n){return(t=Je(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Je(e){var t=Qe(e,"string");return _(t)=="symbol"?t:t+""}function Qe(e,t){if(_(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(_(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Z(e){return nt(e)||tt(e)||et(e)||Ze()}function Ze(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function et(e,t){if(e){if(typeof e=="string")return j(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function tt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nt(e){if(Array.isArray(e))return j(e)}function j(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var se={name:"Splitter",extends:Ye,inheritAttrs:!1,emits:["resizestart","resizeend","resize"],dragging:!1,mouseMoveListener:null,mouseUpListener:null,touchMoveListener:null,touchEndListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,timer:null,data:function(){return{prevSize:null}},mounted:function(){this.initializePanels()},beforeUnmount:function(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel:function(t){return t.type.name==="SplitterPanel"},initializePanels:function(){var t=this;if(this.panels&&this.panels.length){var n=!1;if(this.isStateful()&&(n=this.restoreState()),!n){var o=Z(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"}),d=[];this.panels.map(function(i,r){var h=i.props&&Se(i.props.size)?i.props.size:null,y=h||100/t.panels.length;d[r]=y,o[r].style.flexBasis="calc("+y+"% - "+(t.panels.length-1)*t.gutterSize+"px)"}),this.panelSizes=d,this.prevSize=parseFloat(d[0]).toFixed(4)}}},onResizeStart:function(t,n,o){this.gutterElement=t.currentTarget||t.target.parentElement,this.size=this.horizontal?Ae(this.$el):xe(this.$el),o||(this.dragging=!0,this.startPos=this.layout==="horizontal"?t.pageX||t.changedTouches[0].pageX:t.pageY||t.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,o?(this.prevPanelSize=this.horizontal?E(this.prevPanelElement,!0):L(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal?E(this.nextPanelElement,!0):L(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal?E(this.prevPanelElement,!0):L(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?E(this.nextPanelElement,!0):L(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=n,this.$emit("resizestart",{originalEvent:t,sizes:this.panelSizes}),this.$refs.gutter[n].setAttribute("data-p-gutter-resizing",!0),this.$el.setAttribute("data-p-resizing",!0)},onResize:function(t,n,o){var d,i,r;o?this.horizontal?(i=100*(this.prevPanelSize+n)/this.size,r=100*(this.nextPanelSize-n)/this.size):(i=100*(this.prevPanelSize-n)/this.size,r=100*(this.nextPanelSize+n)/this.size):(this.horizontal?ze(this.$el)?d=(this.startPos-t.pageX)*100/this.size:d=(t.pageX-this.startPos)*100/this.size:d=(t.pageY-this.startPos)*100/this.size,i=this.prevPanelSize+d,r=this.nextPanelSize-d),this.validateResize(i,r)||(i=Math.min(Math.max(this.prevPanelMinSize,i),100-this.nextPanelMinSize),r=Math.min(Math.max(this.nextPanelMinSize,r),100-this.prevPanelMinSize)),this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+r+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=r,this.prevSize=parseFloat(i).toFixed(4),this.$emit("resize",{originalEvent:t,sizes:this.panelSizes})},onResizeEnd:function(t){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:t,sizes:this.panelSizes}),this.$refs.gutter.forEach(function(n){return n.setAttribute("data-p-gutter-resizing",!1)}),this.$el.setAttribute("data-p-resizing",!1),this.clear()},repeat:function(t,n,o){this.onResizeStart(t,n,!0),this.onResize(t,o,!0)},setTimer:function(t,n,o){var d=this;this.timer||(this.timer=setInterval(function(){d.repeat(t,n,o)},40))},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},onGutterKeyUp:function(){this.clearTimer(),this.onResizeEnd()},onGutterKeyDown:function(t,n){switch(t.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(t,n,this.step*-1),t.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(t,n,this.step),t.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(t,n,this.step*-1),t.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(t,n,this.step),t.preventDefault();break}}},onGutterMouseDown:function(t,n){this.onResizeStart(t,n),this.bindMouseListeners()},onGutterTouchStart:function(t,n){this.onResizeStart(t,n),this.bindTouchListeners(),t.preventDefault()},onGutterTouchMove:function(t){this.onResize(t),t.preventDefault()},onGutterTouchEnd:function(t){this.onResizeEnd(t),this.unbindTouchListeners(),t.preventDefault()},bindMouseListeners:function(){var t=this;this.mouseMoveListener||(this.mouseMoveListener=function(n){return t.onResize(n)},document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=function(n){t.onResizeEnd(n),t.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},bindTouchListeners:function(){var t=this;this.touchMoveListener||(this.touchMoveListener=function(n){return t.onResize(n.changedTouches[0])},document.addEventListener("touchmove",this.touchMoveListener)),this.touchEndListener||(this.touchEndListener=function(n){t.resizeEnd(n),t.unbindTouchListeners()},document.addEventListener("touchend",this.touchEndListener))},validateResize:function(t,n){return!(t>100||t<0||n>100||n<0||this.prevPanelMinSize>t||this.nextPanelMinSize>n)},unbindMouseListeners:function(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},unbindTouchListeners:function(){this.touchMoveListener&&(document.removeEventListener("touchmove",this.touchMoveListener),this.touchMoveListener=null),this.touchEndListener&&(document.removeEventListener("touchend",this.touchEndListener),this.touchEndListener=null)},clear:function(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful:function(){return this.stateKey!=null},getStorage:function(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState:function(){Te(this.panelSizes)&&this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState:function(){var t=this,n=this.getStorage(),o=n.getItem(this.stateKey);if(o){this.panelSizes=JSON.parse(o);var d=Z(this.$el.children).filter(function(i){return i.getAttribute("data-pc-name")==="splitterpanel"});return d.forEach(function(i,r){i.style.flexBasis="calc("+t.panelSizes[r]+"% - "+(t.panels.length-1)*t.gutterSize+"px)"}),!0}return!1},resetState:function(){this.initializePanels()}},computed:{panels:function(){var t=this,n=[];return this.$slots.default().forEach(function(o){t.isSplitterPanel(o)?n.push(o):o.children instanceof Array&&o.children.forEach(function(d){t.isSplitterPanel(d)&&n.push(d)})}),n},gutterStyle:function(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal:function(){return this.layout==="horizontal"},getPTOptions:function(){var t;return{context:{nested:(t=this.$parentInstance)===null||t===void 0?void 0:t.nestedState}}},prevPanelMinSize:function(){var t=J(this.panels[this.prevPanelIndex],"minSize");return this.panels[this.prevPanelIndex].props&&t?t:0},nextPanelMinSize:function(){var t=J(this.panels[this.prevPanelIndex+1],"minSize");return this.panels[this.prevPanelIndex+1].props&&t?t:0},dataP:function(){var t;return U(Q(Q({},this.layout,this.layout),"nested",((t=this.$parentInstance)===null||t===void 0?void 0:t.nestedState)!=null))}}},it=["data-p"],rt=["onMousedown","onTouchstart","onTouchmove","onTouchend","data-p"],ot=["aria-orientation","aria-valuenow","onKeydown","data-p"];function at(e,t,n,o,d,i){return p(),v("div",c({class:e.cx("root"),"data-p-resizing":!1,"data-p":i.dataP},e.ptmi("root",i.getPTOptions)),[(p(!0),v(T,null,ne(i.panels,function(r,h){return p(),v(T,{key:h},[(p(),m(b(r),{tabindex:"-1"})),h!==i.panels.length-1?(p(),v("div",c({key:0,ref_for:!0,ref:"gutter",class:e.cx("gutter"),role:"separator",tabindex:"-1",onMousedown:function(u){return i.onGutterMouseDown(u,h)},onTouchstart:function(u){return i.onGutterTouchStart(u,h)},onTouchmove:function(u){return i.onGutterTouchMove(u,h)},onTouchend:function(u){return i.onGutterTouchEnd(u,h)},"data-p-gutter-resizing":!1,"data-p":i.dataP},e.ptm("gutter")),[a("div",c({class:e.cx("gutterHandle"),tabindex:"0",style:[i.gutterStyle],"aria-orientation":e.layout,"aria-valuenow":d.prevSize,onKeyup:t[0]||(t[0]=function(){return i.onGutterKeyUp&&i.onGutterKeyUp.apply(i,arguments)}),onKeydown:function(u){return i.onGutterKeyDown(u,h)},"data-p":i.dataP,ref_for:!0},e.ptm("gutterHandle")),null,16,ot)],16,rt)):S("",!0)],64)}),128))],16,it)}se.render=at;var st={root:function(t){var n=t.instance;return["p-splitterpanel",{"p-splitterpanel-nested":n.isNested}]}},lt=P.extend({name:"splitterpanel",classes:st}),dt={name:"BaseSplitterPanel",extends:$,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:lt,provide:function(){return{$pcSplitterPanel:this,$parentInstance:this}}},le={name:"SplitterPanel",extends:dt,inheritAttrs:!1,data:function(){return{nestedState:null}},computed:{isNested:function(){var t=this;return this.$slots.default().some(function(n){return t.nestedState=n.type.name==="Splitter"?!0:null,t.nestedState})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function ct(e,t,n,o,d,i){return p(),v("div",c({ref:"container",class:e.cx("root")},e.ptmi("root",i.getPTOptions)),[f(e.$slots,"default")],16)}le.render=ct;var ut=H`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,pt={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},ht=P.extend({name:"fieldset",style:ut,classes:pt}),ft={name:"BaseFieldset",extends:$,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:ht,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},de={name:"Fieldset",extends:ft,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return U({toggleable:this.toggleable})}},directives:{ripple:ie},components:{PlusIcon:we,MinusIcon:_e}};function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),n.push.apply(n,o)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ee(Object(n),!0).forEach(function(o){mt(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function mt(e,t,n){return(t=vt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt(e){var t=gt(e,"string");return k(t)=="symbol"?t:t+""}function gt(e,t){if(k(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t);if(k(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var bt=["data-p"],yt=["data-p"],Pt=["id"],$t=["id","aria-controls","aria-expanded","aria-label"],St=["id","aria-labelledby"];function At(e,t,n,o,d,i){var r=re("ripple");return p(),v("fieldset",c({class:e.cx("root"),"data-p":i.dataP},e.ptmi("root")),[a("legend",c({class:e.cx("legend"),"data-p":i.dataP},e.ptm("legend")),[f(e.$slots,"legend",{toggleCallback:i.toggle},function(){return[e.toggleable?S("",!0):(p(),v("span",c({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),O(e.legend),17,Pt)),e.toggleable?w((p(),v("button",c({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!d.d_collapsed,"aria-label":i.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),onKeydown:t[1]||(t[1]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},te(te({},e.toggleButtonProps),e.ptm("toggleButton"))),[f(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:d.d_collapsed,class:A(e.cx("toggleIcon"))},function(){return[(p(),m(b(d.d_collapsed?"PlusIcon":"MinusIcon"),c({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),a("span",c({class:e.cx("legendLabel")},e.ptm("legendLabel")),O(e.legend),17)],16,$t)),[[r]]):S("",!0)]})],16,yt),s(oe,c({name:"p-toggleable-content"},e.ptm("transition")),{default:l(function(){return[w(a("div",c({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[a("div",c({class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16)],16,St),[[F,!d.d_collapsed]])]}),_:3},16)],16,bt)}de.render=At;var xt={root:"p-tabpanels"},zt=P.extend({name:"tabpanels",classes:xt}),Tt={name:"BaseTabPanels",extends:$,props:{},style:zt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},ce={name:"TabPanels",extends:Tt,inheritAttrs:!1};function wt(e,t,n,o,d,i){return p(),v("div",c({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[f(e.$slots,"default")],16)}ce.render=wt;var _t={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},kt=P.extend({name:"tabpanel",classes:_t}),It={name:"BaseTabPanel",extends:$,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},ue={name:"TabPanel",extends:It,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return ke((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Et(e,t,n,o,d,i){var r,h;return i.$pcTabs?(p(),v(T,{key:1},[e.asChild?f(e.$slots,"default",{key:1,class:A(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(p(),v(T,{key:0},[!((r=i.$pcTabs)!==null&&r!==void 0&&r.lazy)||i.active?w((p(),m(b(e.as),c({key:0,class:e.cx("root")},i.attrs),{default:l(function(){return[f(e.$slots,"default")]}),_:3},16,["class"])),[[F,(h=i.$pcTabs)!==null&&h!==void 0&&h.lazy?!0:i.active]]):S("",!0)],64))],64)):f(e.$slots,"default",{key:0})}ue.render=Et;var Lt={root:"p-accordioncontent",content:"p-accordioncontent-content"},qt=P.extend({name:"accordioncontent",classes:Lt}),Ct={name:"BaseAccordionContent",extends:$,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:qt,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},R={name:"AccordionContent",extends:Ct,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Mt(e,t,n,o,d,i){return e.asChild?f(e.$slots,"default",{key:1,class:A(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(p(),m(oe,c({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:l(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?w((p(),m(b(e.as),c({key:0,class:e.cx("root")},i.attrs),{default:l(function(){return[a("div",c({class:e.cx("content")},e.ptm("content",i.ptParams)),[f(e.$slots,"default")],16)]}),_:3},16,["class"])),[[F,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):S("",!0)]}),_:3},16))}R.render=Mt;var Dt={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},Kt=P.extend({name:"accordionheader",classes:Dt}),Bt={name:"BaseAccordionHeader",extends:$,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Kt,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},G={name:"AccordionHeader",extends:Bt,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return Ie(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.nextElementSibling;return o?Y(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=n?t:t.previousElementSibling;return o?Y(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){Ee(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return U({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:ae,ChevronDownIcon:je},directives:{ripple:ie}};function Nt(e,t,n,o,d,i){var r=re("ripple");return e.asChild?f(e.$slots,"default",{key:1,class:A(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):w((p(),m(b(e.as),c({key:0,"data-p":i.dataP,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:l(function(){return[f(e.$slots,"default",{active:i.$pcAccordionPanel.active}),f(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:A(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(p(),m(b(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),c({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(p(),m(b(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),c({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[r]])}G.render=Nt;var Ot={root:function(t){var n=t.instance,o=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":o.disabled}]}},jt=P.extend({name:"accordionpanel",classes:Ot}),Ht={name:"BaseAccordionPanel",extends:$,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:jt,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},V={name:"AccordionPanel",extends:Ht,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ut(e,t,n,o,d,i){return e.asChild?f(e.$slots,"default",{key:1,class:A(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(p(),m(b(e.as),c({key:0,class:e.cx("root")},i.attrs),{default:l(function(){return[f(e.$slots,"default")]}),_:3},16,["class"]))}V.render=Ut;var Ft=H`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,Rt={root:"p-accordion p-component"},Gt=P.extend({name:"accordion",style:Ft,classes:Rt}),Vt={name:"BaseAccordion",extends:$,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Gt,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},pe={name:"Accordion",extends:Vt,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,o=this.isItemActive(t);this.multiple?o?this.d_value=this.d_value.filter(function(d){return d!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=o?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var o=this;return{root:c({onClick:function(i){return o.onTabClick(i,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:c(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:c(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,o){var d=this.tabs.length,i={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:d,first:o===0,last:o===d-1,active:this.isItemActive("".concat(o))}};return c(this.ptm("accordiontab.".concat(n),i),this.ptmo(this.getTabProp(t,"pt"),n,i))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,o){return t.isAccordionTab(o)?n.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(d){t.isAccordionTab(d)&&n.push(d)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:V,AccordionHeader:G,AccordionContent:R,ChevronUpIcon:ae,ChevronRightIcon:Oe}};function Wt(e,t,n,o,d,i){var r=B("AccordionHeader"),h=B("AccordionContent"),y=B("AccordionPanel");return p(),v("div",c({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(p(!0),v(T,{key:0},ne(i.tabs,function(u,g){return p(),m(y,{key:i.getKey(u,g),value:"".concat(g),pt:{root:i.getTabPT(u,"root",g)},disabled:i.getTabProp(u,"disabled")},{default:l(function(){return[s(r,{class:A(i.getTabProp(u,"headerClass")),pt:i.getHeaderPT(u,g)},{toggleicon:l(function(z){return[z.active?(p(),m(b(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),c({key:0,class:[e.collapseIcon,z.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(u,"headericon",g)),null,16,["class"])):(p(),m(b(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),c({key:1,class:[e.expandIcon,z.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(u,"headericon",g)),null,16,["class"]))]}),default:l(function(){return[u.children&&u.children.headericon?(p(),m(b(u.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(g)),active:i.isItemActive("".concat(g)),index:g},null,8,["isTabActive","active","index"])):S("",!0),u.props&&u.props.header?(p(),v("span",c({key:1,ref_for:!0},i.getTabPT(u,"headertitle",g)),O(u.props.header),17)):S("",!0),u.children&&u.children.header?(p(),m(b(u.children.header),{key:2})):S("",!0)]}),_:2},1032,["class","pt"]),s(h,{pt:i.getContentPT(u,g)},{default:l(function(){return[(p(),m(b(u)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):f(e.$slots,"default",{key:1})],16)}pe.render=Wt;const Xt={class:"flex flex-col"},Yt={class:"card"},Jt={class:"flex flex-col md:flex-row gap-8"},Qt={class:"md:w-1/2"},Zt={class:"card"},en={class:"card"},tn={class:"md:w-1/2 mt-6 md:mt-0"},nn={class:"card"},rn={class:"card"},on={class:"flex items-center justify-between mb-0"},an={class:"card mt-8"},sn={class:"flex flex-col md:flex-row"},ln={class:"w-full md:w-5/12 flex flex-col items-center justify-center gap-3 py-5"},dn={class:"flex flex-col gap-2"},cn={class:"flex flex-col gap-2"},un={class:"flex"},pn={class:"w-full md:w-2/12"},hn={class:"w-full md:w-5/12 flex items-center justify-center py-5"},fn={class:"card"},In={__name:"PanelsDoc",setup(e){const t=N([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]),n=N([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),o=N(null);function d(){o.value.toggle(event)}return(i,r)=>{const h=Ce,y=Fe,u=Ge,g=Re,z=Ue,he=He,q=G,C=R,M=V,fe=pe,D=Ke,me=Be,K=ue,ve=ce,ge=De,be=Le,ye=de,Pe=Ne,$e=qe,W=Me,I=le,X=se;return p(),v("div",Xt,[a("div",Yt,[r[1]||(r[1]=a("div",{class:"font-semibold text-xl mb-4"},"Toolbar",-1)),s(he,null,{start:l(()=>[s(h,{icon:"pi pi-plus",class:"mr-2",severity:"secondary",text:""}),s(h,{icon:"pi pi-print",class:"mr-2",severity:"secondary",text:""}),s(h,{icon:"pi pi-upload",severity:"secondary",text:""})]),center:l(()=>[s(g,null,{default:l(()=>[s(y,null,{default:l(()=>r[0]||(r[0]=[a("i",{class:"pi pi-search"},null,-1)])),_:1}),s(u,{placeholder:"Search"})]),_:1})]),end:l(()=>[s(z,{label:"Save",model:t.value},null,8,["model"])]),_:1})]),a("div",Jt,[a("div",Qt,[a("div",Zt,[r[8]||(r[8]=a("div",{class:"font-semibold text-xl mb-4"},"Accordion",-1)),s(fe,{value:"0"},{default:l(()=>[s(M,{value:"0"},{default:l(()=>[s(q,null,{default:l(()=>r[2]||(r[2]=[x("Header I")])),_:1}),s(C,null,{default:l(()=>r[3]||(r[3]=[a("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),_:1}),s(M,{value:"1"},{default:l(()=>[s(q,null,{default:l(()=>r[4]||(r[4]=[x("Header II")])),_:1}),s(C,null,{default:l(()=>r[5]||(r[5]=[a("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])),_:1})]),_:1}),s(M,{value:"2"},{default:l(()=>[s(q,null,{default:l(()=>r[6]||(r[6]=[x("Header III")])),_:1}),s(C,null,{default:l(()=>r[7]||(r[7]=[a("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])),_:1})]),_:1})]),_:1})]),a("div",en,[r[15]||(r[15]=a("div",{class:"font-semibold text-xl mb-4"},"Tabs",-1)),s(ge,{value:"0"},{default:l(()=>[s(me,null,{default:l(()=>[s(D,{value:"0"},{default:l(()=>r[9]||(r[9]=[x("Header I")])),_:1}),s(D,{value:"1"},{default:l(()=>r[10]||(r[10]=[x("Header II")])),_:1}),s(D,{value:"2"},{default:l(()=>r[11]||(r[11]=[x("Header III")])),_:1})]),_:1}),s(ve,null,{default:l(()=>[s(K,{value:"0"},{default:l(()=>r[12]||(r[12]=[a("p",{class:"m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1}),s(K,{value:"1"},{default:l(()=>r[13]||(r[13]=[a("p",{class:"m-0"}," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ",-1)])),_:1}),s(K,{value:"2"},{default:l(()=>r[14]||(r[14]=[a("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])),_:1})]),_:1})]),_:1})])]),a("div",tn,[a("div",nn,[r[17]||(r[17]=a("div",{class:"font-semibold text-xl mb-4"},"Panel",-1)),s(be,{header:"Header",toggleable:!0},{default:l(()=>r[16]||(r[16]=[a("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),a("div",rn,[r[19]||(r[19]=a("div",{class:"font-semibold text-xl mb-4"},"Fieldset",-1)),s(ye,{legend:"Legend",toggleable:!0},{default:l(()=>r[18]||(r[18]=[a("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})]),s($e,null,{title:l(()=>[a("div",on,[r[20]||(r[20]=a("div",{class:"font-semibold text-xl mb-4"},"Card",-1)),s(h,{icon:"pi pi-plus",class:"p-button-text",onClick:d})]),s(Pe,{id:"config_menu",ref_key:"menuRef",ref:o,model:n.value,popup:!0},null,8,["model"])]),content:l(()=>r[21]||(r[21]=[a("p",{class:"leading-normal m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1)])),_:1})])]),a("div",an,[r[26]||(r[26]=a("div",{class:"font-semibold text-xl mb-4"},"Divider",-1)),a("div",sn,[a("div",ln,[a("div",dn,[r[22]||(r[22]=a("label",{for:"username"},"Username",-1)),s(u,{id:"username",type:"text"})]),a("div",cn,[r[23]||(r[23]=a("label",{for:"password"},"Password",-1)),s(u,{id:"password",type:"password"})]),a("div",un,[s(h,{label:"Login",icon:"pi pi-user",class:"w-full max-w-[17.35rem] mx-auto"})])]),a("div",pn,[s(W,{layout:"vertical",class:"!hidden md:!flex"},{default:l(()=>r[24]||(r[24]=[a("b",null,"OR",-1)])),_:1}),s(W,{layout:"horizontal",class:"!flex md:!hidden",align:"center"},{default:l(()=>r[25]||(r[25]=[a("b",null,"OR",-1)])),_:1})]),a("div",hn,[s(h,{label:"Sign Up",icon:"pi pi-user-plus",severity:"success",class:"w-full max-w-[17.35rem] mx-auto"})])])]),a("div",fn,[r[30]||(r[30]=a("div",{class:"font-semibold text-xl mb-4"},"Splitter",-1)),s(X,{style:{height:"300px"},class:"mb-8"},{default:l(()=>[s(I,{size:30,minSize:10},{default:l(()=>r[27]||(r[27]=[a("div",{className:"h-full flex items-center justify-center"},"Panel 1",-1)])),_:1}),s(I,{size:70},{default:l(()=>[s(X,{layout:"vertical"},{default:l(()=>[s(I,{size:15},{default:l(()=>r[28]||(r[28]=[a("div",{className:"h-full flex items-center justify-center"},"Panel 2",-1)])),_:1}),s(I,{size:50},{default:l(()=>r[29]||(r[29]=[a("div",{className:"h-full flex items-center justify-center"},"Panel 3",-1)])),_:1})]),_:1})]),_:1})]),_:1})])])}}};export{In as default};
