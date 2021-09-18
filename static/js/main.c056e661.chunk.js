(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(17),n(12)),i=n(3),l=n(4),u=n(6),b=n(5),m=n(7),h=n.n(m),j=n(0);function d(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:h.a.list,children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(j.jsxs)("li",{className:h.a.listItem,children:["".concat(e,": ").concat(a),Object(j.jsx)("button",{className:h.a.btn,type:"button",onClick:function(){return n(c)},children:"delete"})]},c)}))})}var f=n(21),p=n(11),O=n(2),v=n.n(O),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.submit=function(e){e.preventDefault(),t.reset(),t.props.onSubmit(t.state)},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.submit,className:v.a.form,children:[Object(j.jsxs)("label",{className:v.a.label,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",className:v.a.input,value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:v.a.label,children:["Phone",Object(j.jsx)("input",{type:"tel",name:"number",className:v.a.input,value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:v.a.button,children:"Submit"})]})}}]),n}(a.Component),x=function(t){var e=t.filterInput,n=t.filterValue;return Object(j.jsx)("label",{children:Object(j.jsx)("input",{type:"text",name:"filter",value:n,onChange:e})})},g=n(9),y=n.n(g),S=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.nametoLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts"));else{var c={name:n,number:a,id:Object(f.a)()};t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[c])}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:y.a,children:"Phonebook"}),Object(j.jsx)(C,{onSubmit:this.addContact}),Object(j.jsx)("h2",{className:y.a,children:"Contacts"}),0===this.state.contacts.length?null:Object(j.jsx)(x,{value:t,onChange:this.changeFilter}),0===this.state.contacts.length?Object(j.jsx)("p",{children:" No contacts"}):Object(j.jsx)(d,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__YQElY",button:"Form_button__edxox"}},7:function(t,e,n){t.exports={list:"ContactList_list__U7TlC",listItem:"ContactList_listItem__2k8Sa"}},9:function(t,e,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.c056e661.chunk.js.map