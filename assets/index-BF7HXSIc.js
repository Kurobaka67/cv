import{l as R,B as P,Z as S,q as k,x,G as L,z as j,D as q,C as B,E as G,Q as A,J,m as I,aS as Q,p as r,R as z,_ as $,b as o,c as d,d as v,a0 as C,i as h,M as H,N as w,h as f,t as W,L as V,j as E,g as _,T as X,n as m,F as y,f as M,e as Y,aw as K,ac as F,ay as tt,ap as T,ax as et,ad as O,W as it}from"./index-Dy2JIHED.js";import{C as nt,O as at}from"./index-DYQig9CN.js";import{s as st}from"./index-BOwEasnq.js";import{s as rt}from"./index-BBJNaqiQ.js";var ot=R`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,lt={root:function(t){var i=t.props;return["p-menu p-component",{"p-menu-overlay":i.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var i=t.instance;return["p-menu-item",{"p-focus":i.id===i.focusedOptionId,"p-disabled":i.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},dt=P.extend({name:"menu",style:ot,classes:lt}),ut={name:"BaseMenu",extends:I,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:dt,provide:function(){return{$pcMenu:this,$parentInstance:this}}},U={name:"Menuitem",hostName:"Menu",extends:I,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,i){return t&&t.item?Q(t.item[i]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var i=this.getItemProp(this.item,"command");i&&i({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return A({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:z}},ct=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],bt=["data-p"],pt=["href","target"],ft=["data-p"],ht=["data-p"];function mt(e,t,i,a,s,n){var u=$("ripple");return n.visible()?(o(),d("li",r({key:0,id:i.id,class:[e.cx("item"),i.item.class],role:"menuitem",style:i.item.style,"aria-label":n.label(),"aria-disabled":n.disabled(),"data-p-focused":n.isItemFocused(),"data-p-disabled":n.disabled()||!1,"data-p":n.dataP},n.getPTOptions("item")),[v("div",r({class:e.cx("itemContent"),onClick:t[0]||(t[0]=function(c){return n.onItemClick(c)}),onMousemove:t[1]||(t[1]=function(c){return n.onItemMouseMove(c)}),"data-p":n.dataP},n.getPTOptions("itemContent")),[i.templates.item?i.templates.item?(o(),h(w(i.templates.item),{key:1,item:i.item,label:n.label(),props:n.getMenuItemProps(i.item)},null,8,["item","label","props"])):f("",!0):C((o(),d("a",r({key:0,href:i.item.url,class:e.cx("itemLink"),target:i.item.target,tabindex:"-1"},n.getPTOptions("itemLink")),[i.templates.itemicon?(o(),h(w(i.templates.itemicon),{key:0,item:i.item,class:H(e.cx("itemIcon"))},null,8,["item","class"])):i.item.icon?(o(),d("span",r({key:1,class:[e.cx("itemIcon"),i.item.icon],"data-p":n.dataP},n.getPTOptions("itemIcon")),null,16,ft)):f("",!0),v("span",r({class:e.cx("itemLabel"),"data-p":n.dataP},n.getPTOptions("itemLabel")),W(n.label()),17,ht)],16,pt)),[[u]])],16,bt)],16,ct)):f("",!0)}U.render=mt;function D(e){return kt(e)||yt(e)||gt(e)||vt()}function vt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(e,t){if(e){if(typeof e=="string")return N(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?N(e,t):void 0}}function yt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function kt(e){if(Array.isArray(e))return N(e)}function N(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}var Lt={name:"Menu",extends:ut,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&S.clear(this.container),this.container=null},methods:{itemClick:function(t){var i=t.item;this.disabled(i)||(i.command&&i.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(k(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)k(this.target),this.hide(),t.preventDefault();else{var i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var i=L(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),a=i&&L(i,'a[data-pc-section="itemlink"]');this.popup&&k(this.target),a?a.click():i&&i.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var i=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=D(i).findIndex(function(s){return s.id===t});return a>-1?a+1:0},findPrevOptionIndex:function(t){var i=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=D(i).findIndex(function(s){return s.id===t});return a>-1?a-1:0},changeFocusedOptionIndex:function(t){var i=x(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=t>=i.length?i.length-1:t<0?0:t;a>-1&&(this.focusedOptionIndex=i[a].getAttribute("id"))},toggle:function(t,i){this.overlayVisible?this.hide():this.show(t,i)},show:function(t,i){this.overlayVisible=!0,this.target=i??t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){j(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&S.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&k(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&S.clear(t)},alignOverlay:function(){q(this.container,this.target);var t=B(this.target);t>B(this.container)&&(this.container.style.minWidth=B(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(i){var a=t.container&&!t.container.contains(i.target),s=!(t.target&&(t.target===i.target||t.target.contains(i.target)));t.overlayVisible&&a&&s?t.hide():!t.popup&&a&&s&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new nt(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!G()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){at.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return A({popup:this.popup})}},components:{PVMenuitem:U,Portal:J}},wt=["id","data-p"],It=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],xt=["id"];function Tt(e,t,i,a,s,n){var u=V("PVMenuitem"),c=V("Portal");return o(),h(c,{appendTo:e.appendTo,disabled:!e.popup},{default:E(function(){return[_(X,r({name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},e.ptm("transition")),{default:E(function(){return[!e.popup||s.overlayVisible?(o(),d("div",r({key:0,ref:n.containerRef,id:e.$id,class:e.cx("root"),onClick:t[3]||(t[3]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),"data-p":n.dataP},e.ptmi("root")),[e.$slots.start?(o(),d("div",r({key:0,class:e.cx("start")},e.ptm("start")),[m(e.$slots,"start")],16)):f("",!0),v("ul",r({ref:n.listRef,id:e.$id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return n.onListFocus&&n.onListFocus.apply(n,arguments)}),onBlur:t[1]||(t[1]=function(){return n.onListBlur&&n.onListBlur.apply(n,arguments)}),onKeydown:t[2]||(t[2]=function(){return n.onListKeyDown&&n.onListKeyDown.apply(n,arguments)})},e.ptm("list")),[(o(!0),d(y,null,M(e.model,function(l,b){return o(),d(y,{key:n.label(l)+b.toString()},[l.items&&n.visible(l)&&!l.separator?(o(),d(y,{key:0},[l.items?(o(),d("li",r({key:0,id:e.$id+"_"+b,class:[e.cx("submenuLabel"),l.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[m(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[Y(W(n.label(l)),1)]})],16,xt)):f("",!0),(o(!0),d(y,null,M(l.items,function(p,g){return o(),d(y,{key:p.label+b+"_"+g},[n.visible(p)&&!p.separator?(o(),h(u,{key:0,id:e.$id+"_"+b+"_"+g,item:p,templates:e.$slots,focusedOptionId:n.focusedOptionId,unstyled:e.unstyled,onItemClick:n.itemClick,onItemMousemove:n.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):n.visible(p)&&p.separator?(o(),d("li",r({key:"separator"+b+g,class:[e.cx("separator"),l.class],style:p.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):n.visible(l)&&l.separator?(o(),d("li",r({key:"separator"+b.toString(),class:[e.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(o(),h(u,{key:n.label(l)+b.toString(),id:e.$id+"_"+b,item:l,index:b,templates:e.$slots,focusedOptionId:n.focusedOptionId,unstyled:e.unstyled,onItemClick:n.itemClick,onItemMousemove:n.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,It),e.$slots.end?(o(),d("div",r({key:1,class:e.cx("end")},e.ptm("end")),[m(e.$slots,"end")],16)):f("",!0)],16,wt)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Lt.render=Tt;var Ot=R`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
    }

    .p-tabs-scrollable > .p-tablist {
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Bt={root:function(t){var i=t.props;return["p-tabs p-component",{"p-tabs-scrollable":i.scrollable}]}},Ct=P.extend({name:"tabs",style:Ot,classes:Bt}),Pt={name:"BaseTabs",extends:I,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Ct,provide:function(){return{$pcTabs:this,$parentInstance:this}}},At={name:"Tabs",extends:Pt,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function St(e,t,i,a,s,n){return o(),d("div",r({class:e.cx("root")},e.ptmi("root")),[m(e.$slots,"default")],16)}At.render=St;var Kt={root:"p-tablist",content:function(t){var i=t.instance;return["p-tablist-content",{"p-tablist-viewport":i.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Et=P.extend({name:"tablist",classes:Kt}),Nt={name:"BaseTabList",extends:I,props:{},style:Et,provide:function(){return{$pcTabList:this,$parentInstance:this}}},zt={name:"TabList",extends:Nt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,i=this.getVisibleButtonWidths(),a=K(t)-i,s=Math.abs(t.scrollLeft),n=a*.8,u=s-n,c=Math.max(u,0);t.scrollLeft=F(t)?-1*c:c},onNextButtonClick:function(){var t=this.$refs.content,i=this.getVisibleButtonWidths(),a=K(t)-i,s=Math.abs(t.scrollLeft),n=a*.8,u=s+n,c=t.scrollWidth-a,l=Math.min(u,c);t.scrollLeft=F(t)?-1*l:l},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,i=t.content,a=t.inkbar,s=t.tabs;if(a){var n=L(i,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(a.style.height=tt(n)+"px",a.style.top=T(n).top-T(s).top+"px"):(a.style.width=B(n)+"px",a.style.left=T(n).left-T(s).left+"px")}},updateButtonState:function(){var t=this.$refs,i=t.list,a=t.content,s=a.scrollTop,n=a.scrollWidth,u=a.scrollHeight,c=a.offsetWidth,l=a.offsetHeight,b=Math.abs(a.scrollLeft),p=[K(a),et(a)],g=p[0],Z=p[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=s!==0,this.isNextButtonEnabled=i.offsetHeight>=l&&parseInt(s)!==u-Z):(this.isPrevButtonEnabled=b!==0,this.isNextButtonEnabled=i.offsetWidth>=c&&parseInt(b)!==n-g)},getVisibleButtonWidths:function(){var t=this.$refs,i=t.prevButton,a=t.nextButton,s=0;return this.showNavigators&&(s=((i==null?void 0:i.offsetWidth)||0)+((a==null?void 0:a.offsetWidth)||0)),s}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return A({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:st,ChevronRightIcon:rt},directives:{ripple:z}},$t=["data-p"],Vt=["aria-label","tabindex"],Mt=["data-p"],Ft=["aria-orientation"],Dt=["aria-label","tabindex"];function Rt(e,t,i,a,s,n){var u=$("ripple");return o(),d("div",r({ref:"list",class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[n.showNavigators&&s.isPrevButtonEnabled?C((o(),d("button",r({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(o(),h(w(n.templates.previcon||"ChevronLeftIcon"),r({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Vt)),[[u]]):f("",!0),v("div",r({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},e.ptm("content")),[v("div",r({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[m(e.$slots,"default"),v("span",r({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Ft)],16,Mt),n.showNavigators&&s.isNextButtonEnabled?C((o(),d("button",r({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(o(),h(w(n.templates.nexticon||"ChevronRightIcon"),r({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Dt)),[[u]]):f("",!0)],16,$t)}zt.render=Rt;var Ht={root:function(t){var i=t.instance,a=t.props;return["p-tab",{"p-tab-active":i.active,"p-disabled":a.disabled}]}},Wt=P.extend({name:"tab",classes:Ht}),Ut={name:"BaseTab",extends:I,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Wt,provide:function(){return{$pcTab:this,$parentInstance:this}}},Zt={name:"Tab",extends:Ut,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()},onEndKey:function(t){var i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=i?t:t.nextElementSibling;return a?O(a,"data-p-disabled")||O(a,"data-pc-section")==="activebar"?this.findNextTab(a):L(a,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=i?t:t.previousElementSibling;return a?O(a,"data-p-disabled")||O(a,"data-pc-section")==="activebar"?this.findPrevTab(a):L(a,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,i){k(i),this.scrollInView(i)},scrollInView:function(t){var i;t==null||(i=t.scrollIntoView)===null||i===void 0||i.call(t,{block:"nearest"})}},computed:{active:function(){var t;return it((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return A({active:this.active})}},directives:{ripple:z}};function jt(e,t,i,a,s,n){var u=$("ripple");return e.asChild?m(e.$slots,"default",{key:1,dataP:n.dataP,class:H(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):C((o(),h(w(e.as),r({key:0,class:e.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:E(function(){return[m(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[u]])}Zt.render=jt;export{Zt as a,zt as b,Lt as c,At as s};
