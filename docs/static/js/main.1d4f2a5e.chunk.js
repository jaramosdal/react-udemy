(this["webpackJsonp05-hook-app"]=this["webpackJsonp05-hook-app"]||[]).push([[0],{28:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c(15),r=c.n(s),i=c(17),j=c(7),b=c(2),l=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(n.jsx)(j.b,{to:"/",className:"navbar-brand",children:"useContext"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)(j.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link",to:"/",children:"Home"}),Object(n.jsx)(j.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link",to:"/about",children:"About"}),Object(n.jsx)(j.c,{exact:!0,activeClassName:"active",className:"nav-item nav-link",to:"/login",children:"Login"})]})})]})},o=Object(a.createContext)(null),x=function(){var e=Object(a.useContext)(o),t=e.user,c=e.setUser;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"AboutScreen"}),Object(n.jsx)("hr",{}),Object(n.jsx)("pre",{children:JSON.stringify(t,null,3)}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){c({})},children:"Logout"})]})},d=function(){var e=Object(a.useContext)(o).user;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"HomeScreen"}),Object(n.jsx)("hr",{}),Object(n.jsx)("pre",{children:JSON.stringify(e,null,3)})]})},O=function(){var e=Object(a.useContext)(o).setUser;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"LoginScreen"}),Object(n.jsx)("hr",{}),Object(n.jsx)("button",{className:"btn btn-primary",onClick:function(){return e({id:1234,name:"Javi",email:"javi@email.com"})},children:"Login"})]})},u=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",component:d}),Object(n.jsx)(b.b,{exact:!0,path:"/about",component:x}),Object(n.jsx)(b.b,{exact:!0,path:"/login",component:O}),Object(n.jsx)(b.a,{to:"/"})]})})]})})},v=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(n.jsx)(o.Provider,{value:{user:c,setUser:s},children:Object(n.jsx)(u,{})})};r.a.render(Object(n.jsx)(v,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.1d4f2a5e.chunk.js.map