(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){e.exports=a(279)},278:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(21),o=a(34),l=a(105),c=a.n(l),i=a(49),s=a(22),u={toDoList:{},filterType:"all"};var m=a(35),p=Object(m.a)(c.a),d=Object(m.c)({toDos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,n=a(128);switch(t.type){case"ADD_NEW_ITEM":var r=n();return Object(s.a)({},e,{toDoList:Object(s.a)({},e.toDoList,Object(i.a)({},r,{id:r,value:t.payload,status:!1}))});case"UPDATE_ADD_ITEM_TEXT":return Object(s.a)({},e);case"APPLY_FILTER":return Object(s.a)({},e,{filterType:t.payload});case"REMOVE_ITEM":return e.toDoList[t.payload]&&delete e.toDoList[t.payload],Object(s.a)({},e,{toDoList:Object(s.a)({},e.toDoList)});case"TOGGLE_ITEM":var o=!e.toDoList[t.payload].status;return e.toDoList[t.payload].status=o,Object(s.a)({},e,{toDoList:Object(s.a)({},e.toDoList)});case"LOAD_STORE":if(null!=t.payload.toDos)return Object(s.a)({},t.payload.toDos);case"INIT_TODO_LIST":default:return Object(s.a)({},e)}}}),f=Object(m.d)(d,p),O=a(15),b=a(16),E=a(19),h=a(17),y=a(18),v=a(117),j=a.n(v),T=a(23),g=a.n(T),D=a(46),I=a.n(D),L=a(106),k=a.n(L),S=a(107),C=a.n(S),N=a(47),_=a.n(N),w=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"header"},n.createElement(k.a,null,n.createElement(C.a,null,n.createElement(_.a,{variant:"title",color:"inherit"},"To Do List"))))}}]),t}(n.Component),x=a(118),A=a(69),F=a.n(A);var M=a(109),G=a.n(M),P=a(108),R=a.n(P),J=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){a.state.newItemText&&(a.props.addToDoItem(a.state.newItemText),a.setState({newItemText:""}))},a.updateText=function(e){var t=e.target.value;t&&a.setState({newItemText:t})},a.state={newItemText:""},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.createElement(g.a,{container:!0,className:"add-item",alignItems:"flex-end"},n.createElement(g.a,{item:!0,sm:6},n.createElement(R.a,{label:"Enter New Item",className:"add-item-text",fullWidth:!0,onChange:this.updateText,value:this.state.newItemText})),n.createElement(g.a,{item:!0},n.createElement(G.a,{variant:"contained",color:"primary",className:"add-item-button",onClick:this.handleClick},"Add Item")))}}]),t}(n.Component),W=Object(o.b)(null,function(e){return{addToDoItem:function(t){return e(function(e){return{type:"ADD_NEW_ITEM",payload:e}}(t))}}})(J),V=a(68),Y=a.n(V),B=a(50),U=a.n(B),X=a(67),q=a.n(X),z=a(51),H=a.n(z),K=a(110),Q=a.n(K),Z=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.changeFilter(e.target.value)},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.createElement(Y.a,null,n.createElement(q.a,null,"Filter"),n.createElement(g.a,{container:!0},n.createElement(Q.a,{value:this.props.option,onChange:this.handleChange,style:{flexDirection:"row"}},n.createElement(U.a,{value:"all",control:n.createElement(H.a,{color:"primary"}),label:"All",className:"MuiGrid-grid-sm-4-100"}),n.createElement(U.a,{value:"active",control:n.createElement(H.a,{color:"primary"}),label:"Active",className:"MuiGrid-grid-sm-4-100"}),n.createElement(U.a,{value:"completed",control:n.createElement(H.a,{color:"primary"}),label:"Completed",className:"MuiGrid-grid-sm-4-100"}))))}}]),t}(n.Component),$=a(112),ee=a.n($),te=a(116),ae=a.n(te),ne=a(70),re=a.n(ne),oe=a(111),le=a.n(oe),ce=a(114),ie=a.n(ce),se=a(113),ue=a.n(se),me=a(115),pe=a.n(me),de=function(e){function t(){var e,a;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).toggleStatus=function(){a.props.handleClick(a.props.item.id,"status")},a.removeItem=function(){a.props.handleClick(a.props.item.id,"remove")},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.item.status?"completed":"active";return this.props.isFiltered?n.createElement("div",null,n.createElement(le.a,{className:e,onClick:this.toggleStatus,button:!0},n.createElement(ee.a,{checked:this.props.item.status,color:this.props.isFiltered?"secondary":"default"}),n.createElement(ue.a,{primary:this.props.item.value}),n.createElement(ie.a,null,n.createElement(re.a,{"aria-label":"Delete",onClick:this.removeItem},n.createElement(pe.a,null)))),n.createElement(ae.a,null)):n.createElement("div",null)}}]),t}(n.Component),fe=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(E.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(e,t){"remove"===t?a.props.removeItem(e):"status"===t&&a.props.toggleItem(e)},a.toggleFilters=function(e){a.props.applyFilter(e)},a.state={toDoList:[],filterActive:!1},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")||""):{};e&&this.props.loadStore(e),this.setState({})}},{key:"render",value:function(){var e=this;return n.createElement(g.a,{className:"list filter-".concat(this.props.filterType),container:!0},n.createElement(W,null),n.createElement(Z,{option:this.props.filterType,changeFilter:this.toggleFilters}),n.createElement(g.a,{item:!0,xs:12},n.createElement(F.a,null,this.state.toDoList.map(function(t,a){var r=!0;return"active"===e.props.filterType&&t.status?r=!1:"completed"!==e.props.filterType||t.status||(r=!1),n.createElement(de,{key:a,index:a,item:e.props.todos[t.id],handleClick:e.handleClick,isFiltered:r})}))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){var n=Object.keys(e.todos).map(function(t){return e.todos[t]}),r=!0;return"all"===e.filterType?r=!1:n=t.getListFromStore(e.todos,e.filterType),{toDoList:Object(x.a)(n),filterActive:r}}}]),t}(n.Component);fe.getListFromStore=function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return"active"===t?a=a.sort(function(e,t){return e.status?1:t.status?-1:0}):"completed"===t&&(a=a.sort(function(e,t){return e.status?-1:t.status?1:0})),a};var Oe=Object(o.b)(function(e){return{todos:e.toDos.toDoList,filterType:e.toDos.filterType}},function(e){return{initList:function(){return e({type:"INIT_TODO_LIST",payload:""})},loadStore:function(t){return e({type:"LOAD_STORE",payload:t})},toggleItem:function(t){return e(function(e){return{type:"TOGGLE_ITEM",payload:e}}(t))},removeItem:function(t){return e(function(e){return{type:"REMOVE_ITEM",payload:e}}(t))},applyFilter:function(t){return e({type:"APPLY_FILTER",payload:t})}}})(fe),be=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.createElement("div",{id:"home",className:"page"},n.createElement(w,null),n.createElement(I.a,{className:"inner-page"},n.createElement(g.a,{className:"todo-list",container:!0,justify:"center"},n.createElement(Oe,null))))}}]),t}(n.Component),Ee=function(e){function t(){return Object(O.a)(this,t),Object(E.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"app"},n.createElement(j.a,null),n.createElement(be,null))}}]),t}(n.Component);a(278);f.subscribe(function(){localStorage.setItem("reduxState",JSON.stringify(f.getState()))}),r.render(n.createElement(o.a,{store:f},n.createElement(Ee,null)),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.0163f9a7.chunk.js.map