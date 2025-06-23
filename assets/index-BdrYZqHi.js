import{l as f,B as e,m as n,b as s,c as o,n as d,p as r}from"./index-Dy2JIHED.js";var m=f`
    .p-iconfield {
        position: relative;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`,u={root:"p-iconfield"},h=e.extend({name:"iconfield",style:m,classes:u}),$={name:"BaseIconField",extends:n,style:h,provide:function(){return{$pcIconField:this,$parentInstance:this}}},g={name:"IconField",extends:$,inheritAttrs:!1};function v(i,l,p,a,c,t){return s(),o("div",r({class:i.cx("root")},i.ptmi("root")),[d(i.$slots,"default")],16)}g.render=v;var x={root:"p-inputicon"},z=e.extend({name:"inputicon",classes:x}),I={name:"BaseInputIcon",extends:n,style:z,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},y={name:"InputIcon",extends:I,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function B(i,l,p,a,c,t){return s(),o("span",r({class:t.containerClass},i.ptmi("root")),[d(i.$slots,"default")],16)}y.render=B;export{g as a,y as s};
