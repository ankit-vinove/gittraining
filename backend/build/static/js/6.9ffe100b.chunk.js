(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{124:function(e,t,r){"use strict";r.r(t);var a=r(69),n=r.n(a),o=r(70),c=r(17),s=r(18),i=r(22),l=r(21),u=r(0),d=r.n(u),m=r(20),p=r(11),f=r(86),b=r(67),h=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(c.a)(this,r),(a=t.call(this,e)).handleSubmit=function(){var e=Object(o.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.props.dispatch(Object(b.a)(a.addJobForm.value,a.props.history));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.loading=function(){return d.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.addJobForm=f.c.group({jobTitle:["",[f.d.required]],jobLocation:["",[f.d.required]],jobDescription:["",[f.d.required]],date:["",[f.d.required]],status:["",[f.d.required]]}),a}return Object(s.a)(r,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement("h2",null," Add Job",d.a.createElement("span",{style:{marginLeft:"60%",cursor:"pointer"}}))),d.a.createElement(f.b,{control:this.addJobForm,render:function(t){t.get;var r=t.invalid;return d.a.createElement("form",{onSubmit:e.handleSubmit},d.a.createElement("div",{className:"row"},d.a.createElement(f.a,{name:"jobTitle",render:function(e){var t=e.handler,r=e.touched,a=e.hasError;return d.a.createElement("div",{className:"col-md-12 form-group"},d.a.createElement("label",{for:""},"Job Title"),d.a.createElement("input",Object.assign({className:"form-control rounded-0 border-top-0 border-right-0 border-left-0 px-0",type:"text"},t())),d.a.createElement("span",{className:"pro-error",style:{color:"red"}},r&&a("required")&&"Job title is required"))}}),d.a.createElement(f.a,{name:"jobLocation",render:function(e){var t=e.handler,r=e.touched,a=e.hasError;return d.a.createElement("div",{className:"col-md-12 form-group"},d.a.createElement("label",{for:""},"Job Location"),d.a.createElement("input",Object.assign({className:"form-control rounded-0 border-top-0 border-right-0 border-left-0 px-0",type:"text"},t())),d.a.createElement("span",{className:"pro-error",style:{color:"red"}},r&&a("required")&&"Job location is required"))}}),d.a.createElement(f.a,{name:"jobDescription",render:function(e){var t=e.handler,r=e.touched,a=e.hasError;return d.a.createElement("div",{className:"col-md-12 form-group"},d.a.createElement("label",{for:""},"Job Description"),d.a.createElement("textarea",Object.assign({className:"form-control rounded-0 border-top-0 border-right-0 border-left-0 px-0"},t())),d.a.createElement("span",{className:"pro-error",style:{color:"red"}},r&&a("required")&&"Job description is required"))}}),d.a.createElement(f.a,{name:"date",render:function(e){var t=e.handler,r=e.touched,a=e.hasError;return d.a.createElement("div",{className:"col-md-12 form-group"},d.a.createElement("label",{for:""},"Date"),d.a.createElement("input",Object.assign({className:"form-control rounded-0 border-top-0 border-right-0 border-left-0 px-0",type:"date"},t())),d.a.createElement("span",{className:"pro-error",style:{color:"red"}},r&&a("required")&&"Date is required"))}}),d.a.createElement(f.a,{name:"status",render:function(e){var t=e.handler,r=e.touched,a=e.hasError;return d.a.createElement("div",{className:"col-md-12 form-group"},d.a.createElement("label",{for:""},"Job Status"),d.a.createElement("select",Object.assign({className:"form-control rounded-0 border-top-0 border-right-0 border-left-0 px-0",id:"exampleFormControlSelect1"},t()),d.a.createElement("option",{value:""},"Select an option"),d.a.createElement("option",{value:"Traniee"},"Traniee"),d.a.createElement("option",{value:"Associate"},"Associate"),d.a.createElement("option",{value:"Senior Associate"},"Senior Associate"),d.a.createElement("option",{value:"Manager Level 1"},"Manager Level 1"),d.a.createElement("option",{value:"Senior Manager"},"Senior Manager")),d.a.createElement("span",{className:"pro-error",style:{color:"red"}},r&&a("required")&&"Status is required"))}}),d.a.createElement("div",{className:"col-md-6"},d.a.createElement("button",{type:"submit",className:"btn btn-success text-center",disabled:r},"Submit")),d.a.createElement("div",{className:"col-md-6"},d.a.createElement(p.b,{to:"/"},d.a.createElement("button",{type:"button",className:"btn btn-primary float-right"},"Back")))))}}))}}]),r}(u.Component);t.default=Object(m.b)((function(e,t){return{getPostDetails:e.post.getPostDetails}}))(h)},67:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return b}));var a=r(71),n=r.n(a),o=r(72),c=r.n(o),s=r(19),i=(r(73),r(68)),l=r.n(i);function u(e){return{type:s.a,Payload:e}}function d(){return function(e){return n.a.post(l.a+"/post/getPostList").then((function(t){if(200!==t.data.status)return c.a.error(t.data.msg),!1;e(u(t.data.data))})).catch((function(e){c.a.error("Something went wrong, Please try again")}))}}function m(e,t){return function(r){return n.a.post(l.a+"/post/addJobPost",{data:e}).then((function(e){if(200!==e.data.status)return c.a.error(e.data.msg),!1;c.a.success(e.data.msg),t.push({pathname:"/"})})).catch((function(e){c.a.error("Something went wrong, Please try again")}))}}function p(e,t){return function(r){return n.a.post(l.a+"/post/updateJobData",{data:e}).then((function(e){if(200!==e.data.status)return c.a.error(e.data.msg),!1;c.a.success(e.data.msg),t.push({pathname:"/"})})).catch((function(e){c.a.error("Something went wrong, Please try again")}))}}function f(e,t){return function(t){return n.a.post(l.a+"/post/deleteJobData",{data:e}).then((function(e){return 200===e.data.status?(c.a.success(e.data.msg),t(u(e.data.data)),!0):(c.a.error(e.data.msg),!1)})).catch((function(e){c.a.error("Something went wrong, Please try again")}))}}function b(e,t){return function(t){return n.a.post(l.a+"/post/getJobDataToUpdate",{data:e}).then((function(e){return 200===e.data.status?e.data.data:(c.a.error(e.data.msg),!1)})).catch((function(e){c.a.error("Something went wrong, Please try again")}))}}},68:function(e,t){e.exports="http://localhost:3586"}}]);
//# sourceMappingURL=6.9ffe100b.chunk.js.map