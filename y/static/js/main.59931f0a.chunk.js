(this["webpackJsonpspu-dashboard"]=this["webpackJsonpspu-dashboard"]||[]).push([[0],{142:function(e,t,n){},144:function(e,t,n){},175:function(e,t){},177:function(e,t){},188:function(e,t){},190:function(e,t){},217:function(e,t){},219:function(e,t){},220:function(e,t){},225:function(e,t){},227:function(e,t){},246:function(e,t){},258:function(e,t){},261:function(e,t){},266:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(5),r=n.n(a),i=n(133),c=n.n(i),h=(n(142),n(134)),l=n(68),u=n.n(l),d=n(135),o=n(16),b=n(17),j=n(19),m=n(18),x=(n(144),{members:[["1\tAn Chun","2\tAn Khang","3\tAnh Khoa","4\tAnh V\u0169"],["5\tB\u1ea3o L\xea","6\tC\xf4ng Ph\xfac","7\tD\u01b0\u01a1ng Quang","8\tDuy C\u1ea9n","9\tH\u1ea3i S\u01a1n","10\tHo\xe0ng Anh"],["11\tHo\xe0ng Giang","12\tHo\xe0ng H\u1ea3i","13\tHo\xe0ng Quang","14\tH\u1eefu T\xe0i","19\tNguy\u1ec5n D\u01b0\u01a1ng","25\tPh\u01b0\u01a1ng Quang","31\tTh\xe0nh T\xe2m","20\tNguy\xean Kh\xe1nh","26\tQu\u1ed1c Anh","32\tThi\xean Tri\u1ec7u","15\tKh\xe1nh An","21\tNguy\u1ec5n Minh","27\tQu\u1ed1c Kh\xe1nh","33\tTi\u1ebfn Nguy\u1ec5n","16\tL\xe2m B\xf9i","22\tPh\u1ea1m Thanh","28\tQu\u1ed1c Th\u01a1m"],["34\tTr\xed D\u01b0\u01a1ng","17\tL\xe2m Th\xe0nh","23\tPh\xf9ng Kh\xe1nh","29\tSong S\u01a1n","35\tTr\u1ecdng Ngh\u0129a","18\tMinh Ki\xean","24\tPh\xf9ng Thi\xean","30\tHu\u1ef3nh Ph\u01b0\u01a1ng","36\tV\u0129nh Th\xf4ng"]],assigned:[]}),O=n(136),p=n.n(O),f=n(38),g=n.n(f),v=g.a.ExcelFile,C=g.a.ExcelFile.ExcelSheet,L=g.a.ExcelFile.ExcelColumn,y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={currentMember:"",isSetup:!1,timer:5,delay:50,isRandoming:!1},s}return Object(b.a)(n,[{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"delayedRandom",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=this.props.members).length<1)){e.next=3;break}return e.abrupt("return",null);case 3:this.setState({isRandoming:!0}),n=1e3*this.state.timer/this.state.delay,s=1;case 6:if(!(s<=n)){e.next=14;break}return a=Math.floor(Math.random()*t.length),this.setState({currentMember:t[a]}),e.next=11,this.sleep(this.state.delay);case 11:s++,e.next=6;break;case 14:return this.setState({isRandoming:!1}),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleClickSetupCheckbox",value:function(){this.setState((function(e,t){return{isSetup:!e.isSetup}}))}},{key:"handleRandomClick",value:function(){var e=this;this.delayedRandom().then((function(t){e.props.handleRandomClick(t)}))}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{id:"randBoard",children:[Object(s.jsxs)("span",{children:[this.props.members.length," member(s) left\xa0"]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{className:"buttonBG skewBtn lorange",disabled:this.state.isRandoming,onClick:function(){return e.handleRandomClick()},children:"Random.."})}),Object(s.jsxs)("div",{id:"randName",className:this.state.isRandoming?"card cardActive":"card",children:[Object(s.jsx)("p",{children:"Lucky Spin"}),Object(s.jsx)("h2",{children:this.state.currentMember})]}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{children:"Random Setup\xa0"}),Object(s.jsx)("span",{children:Object(s.jsx)("input",{type:"checkbox",value:this.state.isSetup,onClick:function(){return e.handleClickSetupCheckbox()}})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{hidden:!this.state.isSetup,children:[Object(s.jsx)("label",{htmlFor:"timer",children:"Timer (sec) "}),Object(s.jsx)("input",{type:"number",min:"1",max:"10",name:"timer",id:"timer",value:this.state.timer,onChange:function(t){return e.handleChange(t)}}),Object(s.jsx)("br",{}),Object(s.jsx)("label",{htmlFor:"delay",children:"Delay (msec) "}),Object(s.jsx)("input",{type:"number",min:"30",max:"150",name:"delay",id:"delay",value:this.state.delay,onChange:function(t){return e.handleChange(t)}}),Object(s.jsx)("br",{})]}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{})]})}}]),n}(r.a.Component),k=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={teams:["A","B","C","D","E","F"],rows:6},s}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state.teams.map((function(e,t){return Object(s.jsx)("th",{children:e},t+1)})),n=new Array(this.state.rows).fill(""),a=this.state.rows,r=[],i=this.state.teams.map((function(t,i){var c={},h=n.map((function(t,n){var r=n+i*a,h=e.state.teams[n],l=e.props.randoms[r].toString();return c[h]=l,Object(s.jsx)("td",{children:e.props.randoms[r]},r)}));return r.push(c),Object(s.jsx)("tr",{children:h},i+1)}));this.props.assigned;return Object(s.jsxs)("div",{id:"resultBoard",children:[Object(s.jsx)("h1",{children:"The 6th SPU Football Season"}),Object(s.jsxs)("table",{className:"styled-table",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:t})}),Object(s.jsx)("tbody",{children:i})]}),Object(s.jsx)(S,{team_members:r})]})}}]),n}(r.a.Component),S=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsx)(v,{element:Object(s.jsx)("button",{className:"buttonBG skewBtn lorange",id:"excelExport",children:"Excel Export"}),children:Object(s.jsxs)(C,{data:this.props.team_members,name:"SPU Team Members",children:[Object(s.jsx)(L,{label:"A",value:"A"}),Object(s.jsx)(L,{label:"B",value:"B"}),Object(s.jsx)(L,{label:"C",value:"C"}),Object(s.jsx)(L,{label:"D",value:"D"}),Object(s.jsx)(L,{label:"E",value:"E"}),Object(s.jsx)(L,{label:"F",value:"F"})]})})}}]),n}(r.a.Component),M=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{id:"topBoard",children:[Object(s.jsx)(y,{members:this.props.members,handleRandomClick:this.props.handleRandomClick}),Object(s.jsx)(k,{assigned:this.props.assigned,randoms:this.props.randoms})]})}}]),n}(r.a.Component),T=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(o.a)(this,n),s=t.call(this,e),console.log(s.props.data.members),s.state={data:s.props.data,randoms:new Array(36).fill(""),currentIdx:0,currentListIdx:0},s}return Object(b.a)(n,[{key:"handleRandomClick",value:function(e,t){var n=this;if(!(null===e&&!this.state.currentListIdx<this.state.data.members.length-1)){var s=p.a.remove(this.state.data.members[this.state.currentListIdx],(function(t,n){return n===e}));this.state.data.assigned.unshift(s),this.state.randoms[this.state.currentIdx]=s,this.setState((function(e){return{currentIdx:e.currentIdx+1}})),this.state.currentListIdx<this.state.data.members.length-1&&0===this.state.data.members[this.state.currentListIdx].length&&this.setState((function(e){return{currentListIdx:n.state.currentListIdx+1}}))}}},{key:"handleMemberListChange",value:function(e,t){this.state.data.members[e]=t.target.value.split("\n"),this.setState({})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)(M,{members:this.state.data.members[this.state.currentListIdx],handleRandomClick:function(t){return e.handleRandomClick(t)},randoms:this.state.randoms}),Object(s.jsxs)("div",{id:"randList",children:[Object(s.jsxs)("div",{id:"memberList1",className:"labelList memberList",children:[Object(s.jsx)("p",{children:"1st Mems List"}),Object(s.jsx)("textarea",{rows:"10",cols:"35",value:this.state.data.members[0].join("\n"),onChange:function(t){return e.handleMemberListChange(0,t)}})]}),Object(s.jsxs)("div",{id:"memberList2",className:"labelList memberList",children:[Object(s.jsx)("p",{children:"2nd Mems List"}),Object(s.jsx)("textarea",{rows:"10",cols:"35",value:this.state.data.members[1].join("\n"),onChange:function(t){return e.handleMemberListChange(1,t)}})]}),Object(s.jsxs)("div",{id:"memberList3",className:"labelList memberList",children:[Object(s.jsx)("p",{children:"3rd Mems List"}),Object(s.jsx)("textarea",{rows:"10",cols:"35",value:this.state.data.members[2].join("\n"),onChange:function(t){return e.handleMemberListChange(2,t)}})]}),Object(s.jsxs)("div",{id:"memberList4",className:"labelList memberList",children:[Object(s.jsx)("p",{children:"4th Mems List"}),Object(s.jsx)("textarea",{rows:"10",cols:"35",value:this.state.data.members[3].join("\n"),onChange:function(t){return e.handleMemberListChange(3,t)}})]}),Object(s.jsxs)("div",{id:"assignedList",className:"labelList memberList",children:[Object(s.jsx)("p",{children:"Assigned Mems List"}),Object(s.jsx)("textarea",{rows:"15",cols:"35",value:this.state.data.assigned.join("\n"),readOnly:!0})]})]})]})}}]),n}(r.a.Component),w=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(b.a)(n,[{key:"render",value:function(){return Object(s.jsx)(T,{data:x})}}]),n}(r.a.Component),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,267)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(w,{})}),document.getElementById("root")),R()}},[[266,1,2]]]);
//# sourceMappingURL=main.59931f0a.chunk.js.map