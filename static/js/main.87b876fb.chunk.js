(this["webpackJsonpreact-todo-list-classic"]=this["webpackJsonpreact-todo-list-classic"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(2),s=n.n(i),o=n(14),c=n.n(o),r=n(5),d=n(6),u=n(8),h=n(7),j=(n(21),n(15)),b=n(3),l=(n(22),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={taskName:""},a.taskName=s.a.createRef(),a.handleNameChange=a.handleNameChange.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"handleNameChange",value:function(t){this.setState({taskName:t.target.value})}},{key:"addItem",value:function(t){t.preventDefault(),this.setState({taskName:""}),this.taskName.current.focus(),this.props.onSubmit(this.state.taskName)}},{key:"render",value:function(){return Object(a.jsxs)("form",{id:"todo-form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Please, Create a Task!",value:this.state.taskName,onChange:this.handleNameChange,ref:this.taskName}),Object(a.jsx)("button",{id:"todo-form-button",type:"submit",children:"Add Task"})]})}}]),n}(i.Component)),m=n(10),O=(n(23),n(13)),f=n(4),p=n(9);f.b.add(p.b),f.b.add(p.a);var v=function(t){var e=t.item,n=t.onDelete,i=t.onSwitch,s=t.onItemChange;return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("div",{className:"listItem",children:[Object(a.jsx)("input",{onChange:function(t){return s(e.id,t.target.value)},value:e.name}),Object(a.jsx)("div",{onClick:function(){return i(e.id)},children:Object(a.jsx)(O.a,{className:"faicons check-mark",icon:"check"})}),Object(a.jsx)("div",{onClick:function(){return n(e.id)},children:Object(a.jsx)(O.a,{className:"faicons trash-can",icon:"trash"})})]})})},k=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).onDeleteItem=a.onDeleteItem.bind(Object(b.a)(a)),a.onSwitchItem=a.onSwitchItem.bind(Object(b.a)(a)),a.onItemChangeHandler=a.onItemChangeHandler.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"onDeleteItem",value:function(t){this.props.onChange(this.props.todos.filter((function(e){return e.id!==t})))}},{key:"onSwitchItem",value:function(t){this.props.onChange(this.props.todos.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{isDone:!e.isDone}):e})))}},{key:"onItemChangeHandler",value:function(t,e){this.props.onChange(this.props.todos.map((function(n){return n.id===t?Object(m.a)(Object(m.a)({},n),{},{name:e}):n})))}},{key:"renderItem",value:function(t){return Object(a.jsx)(v,{item:t,onSwitch:this.onSwitchItem,onDelete:this.onDeleteItem,onItemChange:this.onItemChangeHandler},t.id)}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:["PLANS FOR TODAY:",this.props.todos.map((function(e){return!e.isDone&&t.renderItem(e)}))]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{children:["TASKS THAT HAVE BEEN COMPLETED:",this.props.todos.map((function(e){return e.isDone&&t.renderItem(e)}))]})]})}}]),n}(i.Component);f.b.add(p.b);var I=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={todos:[]},a.addItem=a.addItem.bind(Object(b.a)(a)),a}return Object(d.a)(n,[{key:"addItem",value:function(t){var e={id:Date.now(),name:t,isDone:!1};this.setState({todos:[].concat(Object(j.a)(this.state.todos),[e])})}},{key:"render",value:function(){var t=this;return Object(a.jsxs)("div",{className:"Todo",children:[Object(a.jsx)(l,{onSubmit:this.addItem}),Object(a.jsx)(k,{todos:this.state.todos,onChange:function(e){return t.setState({todos:e})}})]})}}]),n}(i.Component),C=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(I,{})}}]),n}(s.a.Component);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.87b876fb.chunk.js.map