(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(t,e,s){},12:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),a=s(4),i=s.n(a),r=(s(9),s(2)),o=s(0);var b=function(t){return Object(o.jsxs)("div",{className:"main-section",children:[0===t.time.h?"00":Object(o.jsx)("span",{children:t.time.h>=10?t.time.h:"0"+t.time.h}),"\xa0:\xa0",Object(o.jsx)("span",{children:t.time.m>=10?t.time.m:"0"+t.time.m}),"\xa0:\xa0",Object(o.jsx)("span",{children:t.time.s>=10?t.time.s:"0"+t.time.s}),"\xa0"]})};var j=function(t){return Object(o.jsxs)("div",{children:[0===t.status?Object(o.jsx)("button",{className:"stopwatch-btn stopwatch-btn-blue",onClick:t.start,children:"Start"}):"",1===t.status?Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"stopwatch-btn stopwatch-btn-red",onClick:t.stop,children:"Stop"}),Object(o.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.reset,children:"Reset"})]}):"",2===t.status?Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"stopwatch-btn stopwatch-btn-blue",onClick:t.resume,children:"Resume"}),Object(o.jsx)("button",{className:"stopwatch-btn stopwatch-btn-gre",onClick:t.reset,children:"Reset"})]}):""]})};s(11);var l=function(){var t=Object(n.useState)({s:0,m:0,h:0}),e=Object(r.a)(t,2),s=e[0],c=e[1],a=Object(n.useState)(),i=Object(r.a)(a,2),l=i[0],h=i[1],u=Object(n.useState)(0),m=Object(r.a)(u,2),d=m[0],p=m[1],O=function(){w(),p(1),h(setInterval(w,10))},x=s.s,v=s.m,f=s.h,w=function(){return 60===v&&(x++,v=0),60===f&&(v++,f=0),f++,c({s:f,m:v,h:x})};return Object(o.jsx)("div",{className:"main-section",children:Object(o.jsx)("div",{classname:"clock-holder",children:Object(o.jsxs)("div",{classname:"stopwatch",children:[Object(o.jsx)(b,{time:s}),Object(o.jsx)(j,{status:d,resume:function(){return O()},reset:function(){return clearInterval(l),p(0),c({s:0,m:0,h:0})},stop:function(){clearInterval(l),p(2)},start:O})]})})})},h=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,13)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;s(t),n(t),c(t),a(t),i(t)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()},9:function(t,e,s){}},[[12,1,2]]]);
//# sourceMappingURL=main.d2573b78.chunk.js.map