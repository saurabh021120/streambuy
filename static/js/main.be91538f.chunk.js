(this.webpackJsonpsumedh=this.webpackJsonpsumedh||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(24),r=c.n(s),a=(c(31),c(32),c(33),c(34),c(1));var o=function(){return Object(a.jsx)("header",{class:"navcss",children:Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{class:"navlinks",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/",children:"Landing"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/login",children:"Login"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"/dashboard",children:"Dashboard"})})]})})})},i=c(44),j=c(45);c(36);var l=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)("div",{className:"logincss",children:Object(a.jsxs)(i.a,{children:[Object(a.jsxs)(i.a.Group,{controlId:"formGroupEmail",children:[Object(a.jsx)(i.a.Label,{children:"Email address"}),Object(a.jsx)(i.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(a.jsxs)(i.a.Group,{controlId:"formGroupPassword",children:[Object(a.jsx)(i.a.Label,{children:"Password"}),Object(a.jsx)(i.a.Control,{type:"password",placeholder:"Password"})]}),Object(a.jsx)(j.a,{variant:"primary",size:"lg",children:"Submit"})]})})]})};var d=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)("b",{children:"TOONSTREAM"}),Object(a.jsx)("h1",{children:Object(a.jsx)("b",{children:"TOONSTREAM VER.1.0"})}),Object(a.jsxs)("p",{children:["STREAM BOT",Object(a.jsx)("br",{}),"Starting at $5 for 1000 streams"]}),Object(a.jsx)(j.a,{variant:"outline-primary",size:"lg",children:"Block level button"})]})},b=c(11);var u=function(e){var t=Object(n.useState)(""),c=Object(b.a)(t,2),s=c[0],r=c[1];return Object(a.jsxs)("form",{className:"formcss",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e7*Math.random()),text:s}),r("")},autocomplete:"off",children:[Object(a.jsx)("input",{type:"url",placeholder:"Add stream",value:s,name:"text",className:"inputcss",onChange:function(e){r(e.target.value)}}),Object(a.jsx)("button",{className:"buttoncss",children:"ADD"})]})},O=c(20),h=c(26);var x=function(e){var t=e.todos,c=e.completeTodo,s=e.removeTodo,r=Object(n.useState)({id:null,value:""}),o=Object(b.a)(r,2);return o[0],o[1],t.map((function(e,t){return Object(a.jsxs)("div",{className:e.isComplete?"todo-row complete":"todo-row",children:[Object(a.jsx)("div",{onClick:function(){return c(e.id)},children:e.text},e.id),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(h.a,{onClick:function(){return s(e.id)},className:"delete-icon"})})]},t)}))};var m=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{}),Object(a.jsx)("h1",{children:"DASHBOARD"}),Object(a.jsx)(u,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(O.a)(c));s(t)}}}),Object(a.jsx)(x,{todos:c,completeTodo:function(e){var t=c.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));s(t)},removeTodo:function(e){var t=Object(O.a)(c).filter((function(t){return t.id!==e}));s(t)}})]})},p=c(6),f=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p.a,{exact:!0,path:"/",component:d}),Object(a.jsx)(p.a,{exact:!0,path:"/login",component:l}),Object(a.jsx)(p.a,{exact:!0,path:"/dashboard",component:m})]})},v=c(13);r.a.render(Object(a.jsx)(v.a,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.be91538f.chunk.js.map