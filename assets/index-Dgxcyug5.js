import{l as t,B as s,m as l,b as n,c as d,d as a,n as o,p as r}from"./index-Dy2JIHED.js";var p=t`
    .p-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: dt('toolbar.padding');
        background: dt('toolbar.background');
        border: 1px solid dt('toolbar.border.color');
        color: dt('toolbar.color');
        border-radius: dt('toolbar.border.radius');
        gap: dt('toolbar.gap');
    }

    .p-toolbar-start,
    .p-toolbar-center,
    .p-toolbar-end {
        display: flex;
        align-items: center;
    }
`,b={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},i=s.extend({name:"toolbar",style:p,classes:b}),c={name:"BaseToolbar",extends:l,props:{ariaLabelledby:{type:String,default:null}},style:i,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},m={name:"Toolbar",extends:c,inheritAttrs:!1},y=["aria-labelledby"];function u(e,v,$,g,f,B){return n(),d("div",r({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[a("div",r({class:e.cx("start")},e.ptm("start")),[o(e.$slots,"start")],16),a("div",r({class:e.cx("center")},e.ptm("center")),[o(e.$slots,"center")],16),a("div",r({class:e.cx("end")},e.ptm("end")),[o(e.$slots,"end")],16)],16,y)}m.render=u;export{m as s};
