import{Y as n,_ as r}from"./common-DzJQztrr.js";import"./vendor-B0vIwkRg.js";const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHGSURBVEhL7ZVLSwJRGIZfXWjeiuwi2lVXUdugX9AigtLU+o1BQVGJZZFQYVRQUFQk4o0WtddC1JrvdCYnmXFuuusBmfN9yPswM9+cY/kSQA+x8mvP+Beo0hVBoVhiPzlMT1Hq+BR3d/dsHYuuIhicYmsRU3cgDSeazSZftTAsaA+fm51BKDTNqxaGBHLhS0uLsFgsvNNCt0BPOKFLoDec0CwwEk5oEhgNJ1QFZsKJjgKz4YSioBvhhKygXH7tSjghK7Ba/7Yr1SoajQav9CErGBvzY2FhnlfCblkoYWt7F7VajXe003E3zWSucH5xySsgEPCzHdNut/GOOqrb9fXNLdLpM14BPt8o4rEwHI4+3umMpvOAXjhNlcjI8BDi8TBcLhfvKKP5wHl4eETy8ATi373eQawLEo/Hw2oldJ1oT88vSCSOfg+WgYF+bKyvsasSugRENpvD3n7yd2zdbrcgibA7kkO3gMjni9jZPUC9Xme1y+lEXJDQu2lHcavoBB3s0egKbLafcaUPcXNzG5VKhdVSDAmIyYlxNq7iN/Hx8YlcrsDWUgw9Iilvb+84Sv2McCS8zN6JFNMCNQw/Iq38C1TpsQD4BoWj1W29vRJAAAAAAElFTkSuQmCC",t=o=>(Vue.pushScopeId("data-v-03015128"),o=o(),Vue.popScopeId(),o),V={class:"declare-school"},m=t(()=>Vue.createElementVNode("span",{class:"f16"},"申报学校信息",-1)),A={class:"content"},p={class:"row"},_=t(()=>Vue.createElementVNode("div",{class:"label"},"学校全称",-1)),h={key:0,class:"row"},v=t(()=>Vue.createElementVNode("div",{class:"label"},"所在城市",-1)),N={key:1,class:"department-row"},B=t(()=>Vue.createElementVNode("div",{class:"label"},"信息问题",-1)),E=t(()=>Vue.createElementVNode("div",{class:"right"},[Vue.createElementVNode("span",null,"点击选择(必选)"),Vue.createElementVNode("img",{src:i,alt:""})],-1)),f=[B,E],C=t(()=>Vue.createElementVNode("div",{class:"notice"},"感谢你的反馈，我们将尽快核对信息",-1)),g=Vue.defineComponent({name:"DeclareSchool"}),S=Vue.defineComponent({...g,setup(o){const a=VueRouter.useRouter(),l=VueRouter.useRoute(),e=Vue.reactive({form:{name:"",location:"",departmentInfoType:""},type:1});Vue.onMounted(()=>{e.type=Number(l.query.type)});function u(){if(!e.form.name)return n("请输入学校全称");if(e.type===1&&!e.form.location)return n("请输入学校所在城市");if(e.type===2&&!e.form.departmentInfoType)return n("请选择信息问题");n("申报成功"),setTimeout(a.back,1e3)}return(y,c)=>{const d=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(d,null,{center:Vue.withCtx(()=>[m]),_:1}),Vue.createElementVNode("div",A,[Vue.createElementVNode("div",p,[_,Vue.withDirectives(Vue.createElementVNode("input",{type:"text",placeholder:"请输入学校全称(必填)","onUpdate:modelValue":c[0]||(c[0]=s=>e.form.name=s)},null,512),[[Vue.vModelText,e.form.name]])]),e.type===1?(Vue.openBlock(),Vue.createElementBlock("div",h,[v,Vue.withDirectives(Vue.createElementVNode("input",{type:"text",placeholder:"请输入学校所在城市(必填)","onUpdate:modelValue":c[1]||(c[1]=s=>e.form.location=s)},null,512),[[Vue.vModelText,e.form.location]])])):Vue.createCommentVNode("",!0),e.type===2?(Vue.openBlock(),Vue.createElementBlock("div",N,f)):Vue.createCommentVNode("",!0),C,Vue.createElementVNode("div",{class:"btn",onClick:u},"提交")])])}}}),H=r(S,[["__scopeId","data-v-03015128"]]);export{H as default};
