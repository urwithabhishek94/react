(this.webpackJsonplab=this.webpackJsonplab||[]).push([[0],{39:function(e,t,a){e.exports=a(65)},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=a(17),l=a.n(c),s=a(28),m=a(29),u=a(30),d=a(38),v=a(36),h=a(31),f=a.n(h),p=a(37),E=a(69),b=a(68);var y=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),i=a[0],o=a[1],c=function(){return o(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list-group-item font-weight-normal text-info "},"Name: ",e.name,r.a.createElement(E.a,{variant:"success",className:"text-decoration-none float-right",onClick:function(){return o(!0)}}," Activity Periods ")),r.a.createElement("li",{className:"list-group-item font-weight-normal text-info"},"Location: ",e.location),r.a.createElement(b.a,{show:i,onHide:c},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"Activity Periods")),r.a.createElement(b.a.Body,null,e.activity_periods.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",{className:"list-group-item font-weight-normal text-info  mb-2"},"Start Time:  ",e.start_time," ",r.a.createElement("br",null)," End Time: ",e.end_time))}))),r.a.createElement(b.a.Footer,null,r.a.createElement(E.a,{variant:"success",onClick:c},"Close"))))},g=f.a.create({baseURL:"http://localhost:3001/data.json"}),w=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[],activity:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get();case 2:t=e.sent,this.setState({items:t.data.members}),console.log(this.state.items),this.setState({activity:t.data.activity});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderList",value:function(){return this.state.items.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("ul",{className:"list-group mt-3 mb-3"},r.a.createElement(y,{name:e.real_name,location:e.tz,activity_periods:e.activity_periods})))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-3 border border-dark"},r.a.createElement("h3",{className:"text-center mt-2 mb-2"},"List of Members"),this.renderList())}}]),a}(r.a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.5f2dcf39.chunk.js.map