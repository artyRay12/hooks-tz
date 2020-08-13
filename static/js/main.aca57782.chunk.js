(this["webpackJsonptz-emphasoft"]=this["webpackJsonptz-emphasoft"]||[]).push([[0],{29:function(e,t,a){e.exports=a(62)},34:function(e,t,a){},35:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(34),a(35),a(2)),s=a(1),u=a(10),i=a(15),m={token:localStorage.getItem("token")||null,data:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return Object(i.a)({},e,{token:t.payload});case"SET_USERS":if(!t.payload)return;return Object(i.a)({},e,{data:Object(u.a)(t.payload)});default:return e}},d=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useReducer)(f,m);return r.a.createElement(d.Provider,{value:a},t)},b=function(e){var t=Object(n.useContext)(d);return Object(s.a)(t,1)[0].token?r.a.createElement(l.b,e):r.a.createElement(l.a,{to:"/login"})},E=a(28),O=a.n(E),j=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(null),l=Object(s.a)(o,2),u=l[0],i=l[1],m=Object(n.useState)(null),f=Object(s.a)(m,2),d=f[0],p=f[1],b=Object(n.useState)({}),E=Object(s.a)(b,2),j=E[0],g=E[1],h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(n.useState)((function(){return localStorage.getItem(e)||t})),r=Object(s.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){localStorage.setItem(e,c)}),[c,e]),[c,o]}("token"),v=Object(s.a)(h,1)[0];return Object(n.useEffect)((function(){r&&O()("".concat("http://emphasoft-test-assignment.herokuapp.com").concat(e),j).then((function(e){c(!1),i(e.data)})).catch((function(e){c(!1),p(e)}))}),[v,u,e,r,j]),[{isLoading:r,response:u,error:d},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g(e),c(!0)}]},g=(a(58),/^[\w\d\@\-\+]{1,150}$/),h=/^(?=.*[A-Z])(?=.*\d).{8,128}$/,v=function(e){return function(t){return e.test(t)}},S=function(){var e=Object(n.useState)("test_super"),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],m=u[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),b=p[0],E=p[1],O=Object(n.useState)(!1),S=Object(s.a)(O,2),k=S[0],N=S[1],y=Object(n.useState)(!1),C=Object(s.a)(y,2),w=C[0],x=C[1],_=Object(n.useContext)(d),T=Object(s.a)(_,2)[1],A=j("/api-token-auth/"),I=Object(s.a)(A,2),L=I[0],R=L.isLoading,U=L.response,z=L.error,F=I[1],D=v(g),J=v(h);return console.log(b+"    "+k),Object(n.useEffect)((function(){U&&(T({type:"SET_TOKEN",payload:U.token}),localStorage.setItem("token",U.token),x(!0))}),[U,T]),w?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3 col-xs-12"},r.a.createElement("h1",{className:"text-xs-center login-title"},"Login"),r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),console.log("username ".concat(D(a))),console.log("password ".concat(J(i))),D(a)?E(!1):E(!0),J(i)?N(!1):N(!0),b&&k||F({method:"post",data:{username:a,password:i}})}},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg form-input",placeholder:"username",value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{class:"error-text"},r.a.createElement("p",null,b&&"Username should atleast 1 letter, and you can use '@' '+' '-' '_'")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control form-control-lg form-input",autoComplete:"current-pass",placeholder:"password",value:i,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{class:"error-text"},r.a.createElement("p",null,k&&"Password must contain at least one uppercase letter and number, and 8chars min"),r.a.createElement("p",null,z&&!k&&!b&&"Your username or password is invalid")),r.a.createElement("button",{className:"btn btn-outline-light btn-lg login-btn",type:"submit",disabled:R},"Enter")))))},k=(a(59),function(e){var t=e.item,a=t.first_name,n=t.id,c=t.last_name,o=t.username;return r.a.createElement("tr",null,r.a.createElement("th",{className:"row-item",scope:"row"},n),r.a.createElement("td",{className:"row-item"},o),r.a.createElement("td",{className:"row-item"},a),r.a.createElement("td",{className:"row-item"},c))}),N=(a(60),function(e){var t=e.onSort,a=e.data;return console.log("render"),r.a.createElement("div",{className:"table-responsive-lg table-responsive-md table-responsive-sm"},r.a.createElement("table",{className:"table table-dark"},r.a.createElement("caption",null,"List of users"),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col",onClick:function(){return t("id")}},"id"),r.a.createElement("th",{scope:"col",onClick:function(){return t("username")}},"user name"),r.a.createElement("th",{scope:"col",onClick:function(){return t("first_name")}},"first name"),r.a.createElement("th",{scope:"col",onClick:function(){return t("last_name")}},"last name"))),r.a.createElement("tbody",null,a.slice(1,100).map((function(e,t){return r.a.createElement(k,{item:e,key:e.id})})))))}),y=function(e){var t=e.onFilterChange,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1];return t(o),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return l(e.target.value)},className:"form-control form-control-lg search-input mb-4",placeholder:"filter by username"})},C=(a(61),function(e){return r.a.createElement("div",{class:"lds-hourglass"})}),w=function(){var e=Object(n.useState)("ASC"),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(d),l=Object(s.a)(o,2),i=l[0],m=i.token,f=i.data,p=l[1],b=j("/api/v1/users/"),E=Object(s.a)(b,2),O=E[0],g=O.isLoading,h=O.response,v=E[1],S=Object(n.useState)(""),k=Object(s.a)(S,2),w=k[0],x=k[1];Object(n.useEffect)((function(){v({method:"get",headers:{Authorization:"Token ".concat(m)}})}),[m]),Object(n.useEffect)((function(){h&&p({type:"SET_USERS",payload:h})}),[h,p]);var _=f.filter((function(e){return-1!==e.username.indexOf(w)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{onFilterChange:function(e){x(e)}}),g?r.a.createElement(C,null):r.a.createElement(N,{data:""===w?f:_,onSort:function(e){var t=Object(u.a)(f);c("ASC"===a?"DESC":"ASC"),"ASC"===a?t.sort((function(t,a){return t[e]>a[e]?1:-1})):t.sort((function(t,a){return t[e]<a[e]?1:-1})),p({type:"SET_USERS",payload:t})}}))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(l.d,null,r.a.createElement(b,{path:"/",component:w,exact:!0}),r.a.createElement(l.b,{path:"/login",component:S}))))},_=a(6);o.a.render(r.a.createElement(p,null,r.a.createElement(_.a,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.aca57782.chunk.js.map