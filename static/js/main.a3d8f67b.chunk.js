(this["webpackJsonpreact-4"]=this["webpackJsonpreact-4"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n.n(a),l=n(8),i=n.n(l),s=(n(16),n(2));n(17),n(18),n(19);var u=function(t){var e=t.input,n=t.onChange;return Object(c.jsx)("input",{className:"ColorInput",name:"color",value:e,onChange:function(t){return n(t.target.value)}})};function o(t){var e={};return e.r=parseInt(t.slice(1,3),16),e.g=parseInt(t.slice(3,5),16),e.b=parseInt(t.slice(5),16),e}function d(t){var e=o(t);return"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")")}var j=function(t){var e=t.color,n=t.input,a=t.state,r=t.onChangeInput,l=function(t){var e=o(t);return e.r=Math.trunc(e.r/2),e.g=Math.trunc(e.g/2),e.b=Math.trunc(e.b/2),function(t){var e=t.r.toString(16);e.length<2&&(e="0"+e);var n=t.g.toString(16);n.length<2&&(n="0"+n);var c=t.b.toString(16);return c.length<2&&(c="0"+c),"#".concat(e).concat(n).concat(c)}(e)}(e);return Object(c.jsxs)("form",{className:"ColorForm",onSubmit:function(t){return t.preventDefault()},children:[Object(c.jsx)(u,{input:n,onChange:r}),Object(c.jsx)("label",{className:"ColorForm-rgb",style:{backgroundColor:l},children:a?d(e):"\u041e\u0448\u0438\u0431\u043a\u0430"})]})};var b=function(){var t=Object(a.useState)("#FFFFFF"),e=Object(s.a)(t,2),n=e[0],r=e[1],l=Object(a.useState)("#FFFFFF"),i=Object(s.a)(l,2),u=i[0],o=i[1],d=Object(a.useState)(!0),b=Object(s.a)(d,2),h=b[0],f=b[1];return Object(c.jsx)("div",{className:"ColorView",style:{backgroundColor:n},children:Object(c.jsx)(j,{color:n,input:u,state:h,onChangeInput:function(t){if(t.length<2?o("#"):t.length>7?o(t.slice(0,7)):o(t),7===t.length){var e=function(t){return/^#[\dA-Fa-f]{6}$/.test(t)}(t);f(e),e&&r(t)}}})})},h=n(6),f=n(10);n(20),n(21),n(22);var g=function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("label",{className:"DateInput",children:["\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413)",Object(c.jsx)("input",{className:"DateInput-input",name:"date",value:e,onChange:function(t){return n(t.target.value)}})]})};n(23);var O=function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("label",{className:"DistanceInput",children:["\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c",Object(c.jsx)("input",{className:"DistanceInput-input",name:"distance",value:e,onChange:function(t){return n(t.target.value)}})]})},v=n(9),m=function t(e,n,c){Object(v.a)(this,t),this.id=e,this.date=n,this.distance=c},x=m,k=new m(null,null,null),p=n(5),C=n.n(p);function N(t){return t?C()(t).format("DD.MM.YYYY"):""}function S(t,e){if(!t)return"";var n=t.toFixed(1);return e&&3===n.length&&(n="0"+n),n}var F=function(t){var e=t.form,n=t.onSubmit,l=e.id,i=e.date,u=e.distance,o=Object(a.useState)(""),d=Object(s.a)(o,2),j=d[0],b=d[1],h=Object(a.useState)(""),f=Object(s.a)(h,2),v=f[0],m=f[1],p=Object(a.useState)(k),F=Object(s.a)(p,2),W=F[0],w=F[1],D=Object(a.useState)(""),I=Object(s.a)(D,2),Y=I[0],M=I[1];return l===W.id&&i===W.date&&u===W.distance||(w(new x(l,i,u)),b(N(i)),m(S(u,!0))),Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsxs)("form",{className:"WalkAddForm",onSubmit:function(t){t.preventDefault();var e,c=(e=t.target.date.value,C()(e,"DD.MM.YYYY").isValid()?1e3*C()(e,"DD.MM.YYYY").unix():null);if(null!==c){var a=function(t){var e=Number.parseFloat(t);return isNaN(e)?null:(((e=+e.toFixed(1))<0||e>99.9)&&(e=null),e)}(t.target.distance.value);null!==a?(M(""),w(new x(l,c,a)),n({id:l,date:c,distance:a})):M("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 00.0 \u0434\u043e 99.9 \u043a\u043c")}else M("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0434\u0430\u0442\u0443 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0441\u0442\u043e\u043b\u0435\u0442\u0438\u044f")},children:[Object(c.jsx)(g,{value:j,onChange:function(t){b((function(e){return function(t,e){if(t.length<e.length){if(!/\d$/.test(e)||e.length>10)return e.slice(0,e.length-1);switch(e.length){case 2:return e+".";case 3:return e.slice(0,e.length-1)+"."+e[e.length-1];case 5:return e+".20";case 6:return e.slice(0,e.length-1)+".20"+e[e.length-1];default:return e}}if(t.length>e.length)switch(e.length){case 3:return e.slice(0,e.length-1);case 8:return e.slice(0,e.length-3);default:return e}return e}(e,t)}))}}),Object(c.jsx)(O,{value:v,onChange:function(t){m((function(e){return function(t,e){if(t.length<e.length){if(!/\d$/.test(e)||e.length>4)return e.slice(0,e.length-1);switch(e.length){case 2:return e+".";case 3:return e.slice(0,e.length-1)+"."+e[e.length-1];default:return e}}if(t.length>e.length)switch(e.length){case 3:return e.slice(0,e.length-1);default:return e}return e}(e,t)}))}}),Object(c.jsx)("button",{className:"WalkAddForm-button",type:"submit",children:"OK"})]}),Y&&Object(c.jsx)("p",{className:"WalkAddForm-error",children:Y})]})};n(25),n(26);var W=function(t){var e=t.walk,n=t.onEditClick,a=t.onDeleteClick,r=e.id,l=e.date,i=e.distance;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"WalkString-cell WalkString-col1",children:N(l)}),Object(c.jsx)("td",{className:"WalkString-cell WalkString-col2",children:S(i)}),Object(c.jsxs)("td",{className:"WalkString-cell WalkString-col3",children:[Object(c.jsx)("span",{className:"WalkString-button",onClick:function(){return n(r)},children:"\u270e"}),Object(c.jsx)("span",{children:"\xa0"}),Object(c.jsx)("span",{className:"WalkString-button WalkString-delete",onClick:function(){return a(r)},children:"\u2718"})]})]})};var w=function(t){var e=t.walks,n=t.onEditClick,a=t.onDeleteClick;return!!e.length&&Object(c.jsxs)("div",{className:"WalkList",children:[Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"WalkList-cell WalkList-col1",children:"\u0414\u0430\u0442\u0430 (\u0414\u0414.\u041c\u041c.\u0413\u0413\u0413\u0413)"}),Object(c.jsx)("td",{className:"WalkList-cell WalkList-col2",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(c.jsx)("td",{className:"WalkList-cell WalkList-col3",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]})})}),Object(c.jsx)("table",{className:"WalkList-body",children:Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsx)(W,{walk:t,onEditClick:n,onDeleteClick:a},t.id)}))})})]})};function D(t,e){return t.findIndex((function(t){return t.id===e}))}function I(t){return t.sort((function(t,e){return e.date-t.date}))}var Y=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],r=e[1],l=Object(a.useState)(k),i=Object(s.a)(l,2),u=i[0],o=i[1];return Object(c.jsxs)("div",{className:"Walks",children:[Object(c.jsx)(F,{form:u,onSubmit:function(t){var e=t.id,n=t.date,c=t.distance;o(k),r((function(t){var a=Object(h.a)(t);if(null!==e){var r=D(a,e);return a[r].date=n,a[r].distance=c,I(a)}var l=function(t,e){return t.findIndex((function(t){return t.date===e}))}(a,n);return l<0?I([].concat(Object(h.a)(a),[new x(Object(f.a)(),n,c)])):(a[l].distance+=c,a[l].distance>99.9&&(a[l].distance=99.9),a)}))}}),Object(c.jsx)(w,{walks:n,onEditClick:function(t){var e=D(n,t);o(new x(t,n[e].date,n[e].distance))},onDeleteClick:function(t){var e=D(n,t);o(k),r((function(t){var n=Object(h.a)(t);return n.splice(e,1),n}))}})]})};var M=function(){return Object(c.jsxs)(r.a.Fragment,{children:[Object(c.jsx)("div",{className:"task-1",children:Object(c.jsx)(b,{})}),Object(c.jsx)("div",{className:"task-2",children:Object(c.jsx)(Y,{})})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.a3d8f67b.chunk.js.map