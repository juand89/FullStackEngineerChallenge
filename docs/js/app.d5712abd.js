(function(e){function t(t){for(var o,n,i=t[0],l=t[1],c=t[2],u=0,p=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],o=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=n(n.s=s[0]))}return e}var o={},r={app:0},a=[];function n(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=o,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/employee-manager/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0fdb":function(e,t,s){},"405e":function(e,t,s){"use strict";var o=s("4e7a"),r=s.n(o);t["default"]=r.a},"4e7a":function(e,t){},"53f4":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var o=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.showHeader?s("TheHeader"):e._e(),s("router-view")],1)},a=[],n=s("1da1"),i=(s("96cf"),s("d3b7"),s("260b"));s("e71f"),s("ea7b");i["a"].apps.length||i["a"].initializeApp({apiKey:"AIzaSyDjEnYd_BhEzhJeK5hokQnr9XfebbqQ9nA",authDomain:"employees-913bf.firebaseapp.com",projectId:"employees-913bf",storageBucket:"employees-913bf.appspot.com",messagingSenderId:"798605891433",appId:"1:798605891433:web:0c5d57b415a451f4258ff8"}),i["a"].getCurrentUser=function(){return new Promise((function(e,t){var s=i["a"].auth().onAuthStateChanged((function(t){s(),e(t)}),t)}))};var l=i["a"].firestore(),c=i["a"].auth(),d=l.collection("employees"),u=i["a"].firestore.FieldValue.serverTimestamp(),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"bg-green-400 border-b "},[s("div",{staticClass:"flex justify-around w-full bg-teal p-4"},[s("router-link",{staticClass:"cursor-pointer font-semibold text-xl tracking-tight text-white",attrs:{to:"/"}},[e._v(" Employees Review ")]),s("div",{staticClass:"flex-grow flex-row-reverse  flex"},[s("button",{staticClass:"text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white ",on:{click:e.logout}},[e._v(" Log Out ")])])],1)])},m=[],f={name:"TheHeader",methods:{logout:function(){var e=this;c.signOut().then((function(){e.$router.go("login")})).catch((function(e){console.error(e),alert(e)}))}}},h=f,v=s("2877"),w=Object(v["a"])(h,p,m,!1,null,null,null),y=w.exports,g={name:"App",components:{TheHeader:y},data:function(){return{showHeader:!1}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].getCurrentUser();case 2:if(!t.sent){t.next=4;break}e.showHeader=!0;case 4:case"end":return t.stop()}}),t)})))()},watch:{"$route.path":function(e){this.showHeader="/login"!==e}}},b=g,x=Object(v["a"])(b,r,a,!1,null,null,null),C=x.exports,_=(s("b0c0"),s("8c4f")),E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-screen bg-gray-50",attrs:{id:"main"}},[s("div",{staticClass:"flex flex-col justify-center items-center w-full h-7/1"},[s("h2",{staticClass:"text-center text-4xl text-blue-500 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold sm:mb-24 sm:mt-0 mt-10 mb-10"},[e._v(" Employee Login ")]),s("div",[s("form",{staticClass:"flex flex-col justify-center space-y-5 mt-5 bg-white max-w-xs md:max-w-md w-96 shadow-xl rounded p-5"},[s("div",[s("TheInput",{attrs:{label:"Email",type:"email",name:"email",id:"email",placeholder:"Enter email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("div",{staticClass:"mt-8"},[s("div",[s("TheInput",{attrs:{label:"Password",type:"password",name:"password",placeholder:"Enter password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),s("div",{staticClass:"mt-10"},[s("button",{staticClass:"bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide\n                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600\n                  shadow-lg",on:{click:e.login}},[e._v(" Log In ")])])])])])])},k=[],M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"TheInput"}},[s("div",{staticClass:"text-sm font-bold text-gray-700 tracking-wide"},[e._v(" "+e._s(e.label)+" ")]),s("input",{staticClass:"w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500",attrs:{placeholder:e.placeholder,type:e.type},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value.trim())},blur:function(t){e.onBlur(t.target.value.trim())}}})])},j=[],N={props:{label:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:""},type:{type:String,default:"text"}},methods:{onBlur:function(e){this.$emit("blur",e)}}},R=N,O=Object(v["a"])(R,M,j,!1,null,null,null),$=O.exports,S={data:function(){return{email:"",password:""}},components:{TheInput:$},methods:{login:function(){var e=this;c.signInWithEmailAndPassword(this.email,this.password).then((function(){e.$router.push("/")})).catch((function(e){alert(e.message)}))}}},A=S,I=Object(v["a"])(A,E,k,!1,null,null,null),D=I.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-gray-100 h-screen overflow-y-hidden",attrs:{id:"main"}},[e.showReviewModal?s("ReviewModal",{attrs:{employee:e.employee,userId:e.user.uid},on:{closeModal:function(t){e.showReviewModal=!e.showReviewModal},updateStatus:e.updateStatus}}):e._e(),e.showCreateModal?s("EmployeeInputModal",{on:{closeModal:function(t){e.showCreateModal=!e.showCreateModal},fetchEmployees:e.fetchEmployees}}):e._e(),s("div",{staticClass:"container flex border-b-2 justify-between w-full bg-teal sm:px-10 px-2 py-10 items-center pb-5"},[s("span",{staticClass:"mb-2 font-semibold text-gray-700 text-xl"},[e._v(" Employees ")]),e.isAdmin?s("button",{staticClass:"bg-blue-500 text-gray-100 p-3 rounded-full tracking-wide py-2\n            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600\n            shadow-lg text-sm sm:text-base",on:{click:function(t){e.showCreateModal=!e.showCreateModal}}},[e._v(" Add Employee ")]):e._e()]),s("div",{staticClass:"container py-2 md:px-5 grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl h-fit-screen overflow-y-scroll sm:overflow-y-auto sm:h-auto"},e._l(e.employees,(function(t){return s("div",{key:t.id},[s("EmployeeCard",{attrs:{employee:t,isAdmin:e.isAdmin},on:{handleButton:function(s){return e.onEmployeeButton(t)}}})],1)})),0)],1)},L=[],T=(s("159b"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"h-fit  bg-white rounded-lg overflow-hidden shadow-md mx-2  mb-5 "},[s("div",{staticClass:"p-7 bg-blue-100"},[s("div",{staticClass:"flex items-center mt-2"},[s("p",{staticClass:"flex items-center justify-center w-14 h-14 mr-4 bg-blue-500 rounded-full"},[s("span",{staticClass:"text-sm font-bold text-white"},[e._v(e._s(e.showInitials))])]),s("div",[s("h2",{staticClass:"font-bold"},[e._v(" "+e._s(e.employee.firstName+" "+e.employee.lastName)+" ")]),s("p",{staticClass:"text-gray-600"},[e._v(e._s(e.employee.position))])])])]),s("div",{staticClass:"flex items-baseline  justify-between sm:p-7 p-3"},[e.isAdmin?s("p",{staticClass:"pl-1 text-sm "},[e._v("Started On: "+e._s(e.formatDate))]):s("p",{staticClass:"pl-1 text-sm "},[e._v(" Requested On: "+e._s(e.formatDate)+" ")]),s("button",{staticClass:"px-2.5 sm:ml-3 ml-9 py-1  font-bold text-center text-white bg-green-400 hover:bg-green-600 rounded-full text-xs sm:text-base",on:{click:function(t){return e.$emit("handleButton")}}},[e._v(" "+e._s(e.isAdmin?"Employee Detail":e.employee.review?"Show review":"Submit a review")+" ")])])])}),P=[],z=(s("498a"),{props:{employee:{type:Object,default:function(){return{id:"",firstName:"",lastName:"",position:"",review:""}}},date:{type:String,default:""},isAdmin:{type:Boolean,default:!1}},computed:{showInitials:function(){return this.employee.firstName&&this.employee.lastName?this.employee.firstName.trim().substring(0,1).toUpperCase()+this.employee.lastName.trim().substring(0,1).toUpperCase():"NA"},formatDate:function(){if(this.employee.createdAt){var e={year:"numeric",month:"short",day:"numeric"},t=new Date(this.employee.createdAt.toDate());return t.toLocaleDateString(e)}return""}}}),H=z,U=Object(v["a"])(H,T,P,!1,null,null,null),q=U.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseModal",{on:{close:function(t){return e.$emit("closeModal")}}},[s("div",{staticClass:"flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"},[s("div",{staticClass:"flex flex-row justify-between p-5 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"},[s("p",{staticClass:"font-semibold text-gray-800"},[e._v(" "+e._s(this.employee.firstName+" "+this.employee.lastName)+" ")]),s("svg",{staticClass:"w-6 h-6 cursor-pointer",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.$emit("closeModal")}}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),s("div",{staticClass:"flex flex-col px-6 py-5 bg-gray-50",class:{"rounded-b-lg":e.employee.review}},[s("p",{staticClass:"mb-2 font-semibold text-gray-700"},[e._v("Your review")]),e.employee.review?s("p",{staticClass:"p-4 m-6 font-semibold bg-blue-100 border rounded-lg"},[e._v(" "+e._s(e.employee.review)+" ")]):s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],staticClass:"p-5 mb-5 focus:border-blue-500 bg-white border border-gray-200 rounded shadow-sm h-36",attrs:{type:"text",name:"review",placeholder:"Type review...",id:"review"},domProps:{value:e.review},on:{input:function(t){t.target.composing||(e.review=t.target.value)}}})]),e.employee.review?e._e():s("div",{staticClass:"flex flex-row-reverse p-4 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"},[s("button",{staticClass:"px-4 py-2 text-gray-700 font-medium bg-white border border-gray-400 rounded hover:bg-gray-100",class:e.isLoading&&"opacity-50 cursor-not-allowed",attrs:{disabled:e.isLoading},on:{click:e.submitReview}},[e._v(" Submit ")])])])])},F=[],V=s("c1ec"),W={components:{BaseModal:V["default"]},props:{employee:{type:Object,default:function(){return{firstName:"",lastName:""}}},userId:{type:String,default:"",required:!0}},data:function(){return{review:"",isLoading:!1}},methods:{submitReview:function(){var e=this;this.review&&(this.isLoading=!0,d.doc(this.userId).collection("reviews").doc(this.employee.id).update({review:this.review,updatedAt:u,status:"completed"}).then((function(){e.isLoading=!1,e.$emit("closeModal"),e.$emit("updateStatus",e.employee,e.review)})).catch((function(t){e.isLoading=!1,console.error(t),alert(t)})))}}},K=W,Q=(s("74a7"),Object(v["a"])(K,J,F,!1,null,"56fc1622",null)),Y=Q.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseModal",{on:{close:function(t){return e.$emit("closeModal")}}},[s("div",{staticClass:"max-w-xs md:max-w-md"},[s("div",{staticClass:"flex flex-row-reverse justify-between p-5 py-3 bg-white border-b border-gray-200 "},[s("svg",{staticClass:"w-6 h-6 cursor-pointer",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.$emit("closeModal")}}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),s("form",{staticClass:"flex flex-col justify-center space-y-5  bg-white w-96 max-w-xs md:max-w-md shadow-xl p-5"},[s("div",[s("TheInput",{attrs:{label:"First Name",type:"text",name:"first name",id:"fist name",placeholder:"Enter first name"},model:{value:e.employee.firstName,callback:function(t){e.$set(e.employee,"firstName",t)},expression:"employee.firstName"}})],1),s("div",[s("TheInput",{attrs:{label:"Last Name",type:"text",name:"last name",id:"position",placeholder:"Enter last name"},model:{value:e.employee.lastName,callback:function(t){e.$set(e.employee,"lastName",t)},expression:"employee.lastName"}})],1),s("div",[s("TheInput",{attrs:{label:"Positon",type:"text",name:"position",id:"position",placeholder:"Enter position of the employee"},model:{value:e.employee.position,callback:function(t){e.$set(e.employee,"position",t)},expression:"employee.position"}})],1),e.isEdit?e._e():s("div",[s("TheInput",{attrs:{label:"Email",type:"email",name:"email",id:"email",placeholder:"Enter email"},model:{value:e.employee.email,callback:function(t){e.$set(e.employee,"email",t)},expression:"employee.email"}})],1),e.isEdit?e._e():s("div",{staticClass:"mt-8"},[s("div",[s("TheInput",{attrs:{label:"Password",type:"password",name:"password",placeholder:"Enter password"},model:{value:e.employee.password,callback:function(t){e.$set(e.employee,"password",t)},expression:"employee.password"}})],1)]),s("div",{staticClass:"mt-10"},[s("button",{staticClass:"bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide\n                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600\n                  shadow-lg",class:e.isLoading&&"opacity-50 cursor-not-allowed",attrs:{disabled:e.isLoading},on:{click:e.submitEmployee}},[e._v(" "+e._s(e.isEdit?"Update Employee":"Register Employee")+" ")])])])])])},G=[],Z={components:{BaseModal:V["default"],TheInput:$},data:function(){return{employee:{firstName:"",lastName:"",position:"",email:"",password:""},isLoading:!1}},props:{employeeEdit:{type:Object,default:function(){return{id:"",firstName:"",lastName:"",position:"",email:"",password:""}}},isEdit:{type:Boolean,default:!1}},created:function(){this.isEdit&&(this.employee=JSON.parse(JSON.stringify(this.employeeEdit)))},methods:{updateEmployee:function(){var e=this;d.doc(this.employee.id).update({firstName:this.employee.firstName,lastName:this.employee.lastName,position:this.employee.position,updatedAt:u}).then((function(){e.$emit("updateEmployee"),e.$emit("closeModal"),e.isLoading=!1})).catch((function(t){e.isLoading=!1,console.error(t),alert(t)}))},submitEmployee:function(){var e=this;this.employee.firstName&&this.employee.lastName&&this.employee.position&&(this.isLoading=!0,this.isEdit?this.updateEmployee():c.createUserWithEmailAndPassword(this.employee.email,this.employee.password).then((function(t){d.doc(t.user.uid).set({email:e.employee.email,firstName:e.employee.firstName,lastName:e.employee.lastName,position:e.employee.position,createdAt:u,updatedAt:u,role:"employee"}).then((function(){c.signInWithEmailAndPassword("admin@example.com","asdf0987").then((function(){e.$emit("fetchEmployees"),e.$emit("closeModal"),e.isLoading=!1}))}))})).catch((function(t){e.isLoading=!1,alert(t),console.error(t)})))}}},ee=Z,te=Object(v["a"])(ee,X,G,!1,null,null,null),se=te.exports,oe={components:{EmployeeCard:q,ReviewModal:Y,EmployeeInputModal:se},data:function(){return{employees:[],employeeReview:{},showCreateModal:!1,showReviewModal:!1,isAdmin:!1,snapshot:null,user:{}}},created:function(){this.checkAdmin()},methods:{checkAdmin:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i["a"].getCurrentUser();case 2:return s=t.sent,e.user=s,t.next=6,d.doc(s.uid).get();case 6:o=t.sent,e.isAdmin=!o.exists,e.isAdmin?e.fetchEmployees():e.fetchReviewers(s.uid);case 9:case"end":return t.stop()}}),t)})))()},fetchEmployees:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.employees=[],t.next=3,d.where("createdAt","<",new Date).orderBy("createdAt","desc").get();case 3:s=t.sent,s.forEach((function(t){var s=Object.assign({id:t.id},t.data());e.employees.push(s)}));case 5:case"end":return t.stop()}}),t)})))()},addEmployee:function(e){this.employees.unshift(e)},fetchReviewers:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var o,r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,d.doc(e).collection("reviews").get();case 2:o=s.sent,r=[],o.size&&o.forEach((function(e){var t=Object.assign({id:e.id},e.data());r.push(t)})),t.employees=r;case 6:case"end":return s.stop()}}),s)})))()},onEmployeeButton:function(e){this.isAdmin?this.$router.push({name:"employee",params:{id:e.id}}):(this.employee=e,this.showReviewModal=!this.showReviewModal)},updateStatus:function(e,t){e.status="completed",e.review=t}}},re=oe,ae=(s("c10f"),Object(v["a"])(re,B,L,!1,null,"70460e3a",null)),ne=ae.exports,ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bg-gray-100 h-screen overflow-y-hidden px-4 md:px-10 py-10",attrs:{id:"employee"}},[e.showSelectEmployees?s("SelectEmployeesModal",{attrs:{employees:e.employees},on:{selectEmployee:e.selectEmployee,closeModal:function(t){e.showSelectEmployees=!e.showSelectEmployees}}}):e._e(),e.showRegisterEmployees?s("EmployeeInputModal",{attrs:{employeeEdit:e.employee,isEdit:!0},on:{closeModal:function(t){e.showRegisterEmployees=!e.showRegisterEmployees},updateEmployee:e.getEmployee}}):e._e(),e.showDeleteModal?s("DeleteModal",{on:{onDelete:e.deleteEmployee,closeModal:function(t){e.showDeleteModal=!e.showDeleteModal}}}):e._e(),s("div",{staticClass:"flex flex-row-reverse border-b-2 justify-between w-full bg-teal items-center pb-5"},[s("button",{staticClass:"bg-red-400 text-gray-100 p-3 rounded-full tracking-wide py-2\n            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600\n            shadow-lg text-sm sm:text-base",on:{click:function(t){e.showDeleteModal=!e.showDeleteModal}}},[e._v(" Remove Employee ")])]),s("div",{staticClass:"bg-white p-3 shadow-sm rounded-sm"},[s("div",{staticClass:"flex items-center space-x-2 font-semibold text-gray-900 leading-8"},[s("span",{staticClass:"text-gray-500"},[s("svg",{staticClass:"h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}})])]),s("span",{staticClass:"tracking-wide text-sm md:text-base"},[e._v(" Employee Information ")]),s("div",{staticClass:"flex-grow flex-row-reverse flex"},[s("button",{staticClass:"flex items-center text-gray-500 space-x-2 border border-gray-400 px-2 py-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2",on:{click:function(t){e.showRegisterEmployees=!e.showRegisterEmployees}}},[s("svg",{staticClass:"fill-current w-3 h-3",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"}})]),s("span",{staticClass:"uppercase md:text-sm text-xs  font-semibold "},[e._v(" Edit ")])])])]),s("div",{staticClass:"text-gray-700"},[s("div",{staticClass:"grid md:grid-cols-2 text-sm"},[s("div",{staticClass:"grid grid-cols-2"},[s("div",{staticClass:"px-2 sm:px-4 py-2 font-semibold"},[e._v("First Name")]),s("div",{staticClass:"px-2 sm:px-4 py-2"},[e._v(e._s(e.employee.firstName))])]),s("div",{staticClass:"grid grid-cols-2"},[s("div",{staticClass:"px-2 sm:px-4 py-2 font-semibold"},[e._v("Last Name")]),s("div",{staticClass:"px-2 sm:px-4 py-2"},[e._v(e._s(e.employee.lastName))])]),s("div",{staticClass:"grid grid-cols-2"},[s("div",{staticClass:"px-2 sm:px-4 py-2 font-semibold"},[e._v("Position")]),s("div",{staticClass:"px-2 sm:px-4 py-2"},[e._v(e._s(e.employee.position))])]),s("div",{staticClass:"grid grid-cols-2"},[s("div",{staticClass:"px-2 sm:px-4 py-2 font-semibold"},[e._v("Email")]),s("div",{staticClass:"px-2 sm:px-4 py-2"},[e._v(" "+e._s(e.employee.email)+" ")])])])])]),s("div",{staticClass:"bg-white p-3 shadow-sm rounded-sm mt-8"},[s("div",{staticClass:"flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"},[s("span",[s("svg",{staticClass:"h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}})])]),s("span",{staticClass:"tracking-wide w-1/6"},[e._v("Reviews")]),s("div",{staticClass:"flex-grow flex-row-reverse flex"},[s("button",{staticClass:"flex items-center text-gray-500 space-x-2 border border-gray-400 px-2 py-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2",on:{click:function(t){e.showSelectEmployees=!e.showSelectEmployees}}},[s("span",{staticClass:"text-green-500"},[s("svg",{staticClass:"h-5 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}})])]),s("span",{staticClass:"uppercase md:text-sm text-xs font-semibold"},[e._v(" Select Employees ")])])])]),e.reviewers.length?e._e():s("div",[s("span",{staticClass:"font-bold"},[e._v(" This employee has no reviewers assigned yet. ")])]),e._l(e.reviewers,(function(t){return s("div",{key:t.reviewerId},[s("div",{staticClass:"flex items-start mb-4 text-sm border-b-2 pb-4"},[s("p",{staticClass:"flex items-center justify-center w-10 h-10 mr-4 bg-gray-400 rounded-full"},[s("span",{staticClass:"text-sm font-bold text-white"},[e._v(" "+e._s(e.getInitials(t.firstName,t.lastName))+" ")])]),s("div",{staticClass:"flex-1 overflow-hidden"},[s("div",[s("span",{staticClass:"font-bold"},[e._v(" "+e._s(t.firstName+" "+t.lastName)+" ")]),s("span",{staticClass:"text-grey text-xs"},[e._v(" "+e._s(e.getDate(t.updatedAt))+" ")])]),s("p",{staticClass:"text-black leading-normal"},[e._v(" "+e._s("pending"===t.status||void 0===t.status?"This review is pending..":""+t.review)+" ")])])])])}))],2)],1)},le=[],ce=(s("7db0"),s("4de4"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseModal",{on:{close:function(t){return e.$emit("closeModal")}}},[s("div",{staticClass:"max-w-xs md:max-w-md"},[s("div",{staticClass:"flex flex-row-reverse justify-between p-5 py-3 bg-white border-b border-gray-200 "},[s("svg",{staticClass:"w-6 h-6 cursor-pointer",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.$emit("closeModal")}}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])]),s("div",{staticClass:"flex flex-col justify-center space-y-5 bg-white w-96 shadow-xl p-5 max-w-xs md:max-w-md"},[s("TheInput",{attrs:{label:"Search Employee",type:"text",name:"search",id:"serach_employee",placeholder:"Enter employee name"},model:{value:e.employeeName,callback:function(t){e.employeeName=t},expression:"employeeName"}}),s("div",{staticClass:"shadow  bg-white rounded overflow-y-auto"},[s("div",{staticClass:"flex flex-col h-72 w-full"},[e._l(e.employees,(function(t){return s("div",{key:t.id,staticClass:"cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-green-100"},[s("div",{staticClass:"flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative",class:t.isSelected&&"border-green-600 border-l-2",on:{click:function(s){return e.assignReviewer(t)}}},[s("div",{staticClass:"w-full items-center flex"},[s("div",{staticClass:"mx-2 leading-6  "},[e._v(" "+e._s(t.firstName+" "+t.lastName)+" ")])])])])})),s("div",{staticClass:"cursor-pointer w-full border-gray-100 border-b hover:bg-green-100"})],2)])],1)])])}),de=[],ue={components:{BaseModal:V["default"],TheInput:$},data:function(){return{employeeName:"",employeeId:this.$route.params.id}},props:{employees:{type:Array,default:function(){return[]},required:!0}},methods:{checkEmployee:function(e){e.isSelected=!e.isSelected},assignReviewer:function(e){var t=this;e.isSelected?d.doc(this.employeeId).collection("reviews").doc(e.id).delete().then((function(){t.$emit("selectEmployee",e)})).catch((function(e){alert(e),console.error(e)})):d.doc(this.employeeId).collection("reviews").doc(e.id).set({review:"",firstName:e.firstName,lastName:e.lastName,position:e.position,updatedAt:u,createdAt:u,status:"pending",reviewerId:e.id}).then((function(){t.$emit("selectEmployee",e)})).catch((function(e){alert(e),console.error(e)}))}}},pe=ue,me=Object(v["a"])(pe,ce,de,!1,null,null,null),fe=me.exports,he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("BaseModal",{on:{close:function(t){return e.$emit("closeModal")}}},[s("div",{staticClass:"max-w-xs md:max-w-md  p-5 py-7 bg-white border-b border-gray-200 rounded-lg"},[s("div",{staticClass:"text-center font-semibold text-gray-700 mb-8"},[e._v(" Do you really want to delete these employee? This process cannot be undone. ")]),s("div",{staticClass:"flex justify-center"},[s("button",{staticClass:"bg-gray-300 text-gray-900 rounded hover:bg-gray-200 px-6 py-2\n      focus:outline-none font-semibold mx-1",on:{click:function(t){return e.$emit("closeModal")}}},[e._v(" Cancel ")]),s("button",{staticClass:"bg-red-500 text-gray-200 rounded hover:bg-red-400 px-6 py-2 focus:outline-none font-semibold mx-1",on:{click:function(t){return e.$emit("onDelete")}}},[e._v(" Delete ")])])])])},ve=[],we={components:{BaseModal:V["default"]}},ye=we,ge=Object(v["a"])(ye,he,ve,!1,null,null,null),be=ge.exports,xe={components:{SelectEmployeesModal:fe,EmployeeInputModal:se,DeleteModal:be},data:function(){return{showSelectEmployees:!1,showRegisterEmployees:!1,showDeleteModal:!1,employee:{},employees:[],reviewers:[]}},mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getEmployee();case 2:return t.next=4,e.fetchEmployees();case 4:case"end":return t.stop()}}),t)})))()},methods:{getEmployee:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=e.$route.params.id,t.next=3,d.doc(s).get();case 3:o=t.sent,e.employee=Object.assign({id:o.id},o.data());case 5:case"end":return t.stop()}}),t)})))()},getInitials:function(e,t){return e&&t?e.trim().substring(0,1).toUpperCase()+t.trim().substring(0,1).toUpperCase():"NA"},getDate:function(e){if(e){var t={year:"numeric",month:"short",day:"numeric"},s=new Date(e.toDate());return s.toLocaleDateString(t)}return""},fetchEmployees:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.where("createdAt","<",new Date).orderBy("createdAt","desc").get();case 2:return s=t.sent,t.next=5,e.fetchReviewers();case 5:s.forEach((function(t){if(e.employee.id!==t.id){var s=!1;s=e.reviewers.find((function(e){return e.id===t.id}));var o=Object.assign({id:t.id,isSelected:!!s},t.data());e.employees.push(o)}}));case 6:case"end":return t.stop()}}),t)})))()},fetchReviewers:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.doc(e.employee.id).collection("reviews").get();case 2:s=t.sent,e.reviewers=[],s.size&&s.forEach((function(t){var s=Object.assign({id:t.id},t.data());e.reviewers.push(s)}));case 5:case"end":return t.stop()}}),t)})))()},selectEmployee:function(e){e.isSelected?this.reviewers=this.reviewers.filter((function(t){return t.id!==e.id})):this.reviewers.push(e),e.isSelected=!e.isSelected},deleteEmployee:function(){var e=this;this.showDeleteModal=!1,d.doc(this.employee.id).delete().then((function(){e.$router.push("/")})).catch((function(e){console.error(e),alert(e)}))}}},Ce=xe,_e=Object(v["a"])(Ce,ie,le,!1,null,null,null),Ee=_e.exports;o["a"].use(_["a"]);var ke=[{path:"/",name:"Home",component:ne,meta:{authRequired:!0}},{path:"/employee/:id",name:"employee",component:Ee,meta:{authRequired:!0}},{path:"/login",name:"login",component:D}],Me=new _["a"]({routes:ke});Me.beforeEach(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,s,o){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.authRequired}))){e.next=10;break}return e.next=3,i["a"].getCurrentUser();case 3:if(!e.sent){e.next=7;break}o(),e.next=8;break;case 7:o({path:"/login"});case 8:e.next=20;break;case 10:return e.next=12,i["a"].getCurrentUser();case 12:if(e.t0=e.sent,!e.t0){e.next=15;break}e.t0="login"===t.name;case 15:if(!e.t0){e.next=19;break}o({path:"/"}),e.next=20;break;case 19:o();case 20:case"end":return e.stop()}}),e)})));return function(t,s,o){return e.apply(this,arguments)}}());var je=Me;s("a766");o["a"].config.productionTip=!1,new o["a"]({router:je,render:function(e){return e(C)}}).$mount("#app")},"74a7":function(e,t,s){"use strict";s("0fdb")},"776c":function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return r}));var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",on:{click:function(t){return t.target!==t.currentTarget?null:e.$emit("close")}}},[e._t("default")],2),s("div",{staticClass:"opacity-25 fixed inset-0 z-40 bg-black"})])},r=[]},a766:function(e,t,s){},c10f:function(e,t,s){"use strict";s("53f4")},c1ec:function(e,t,s){"use strict";var o=s("776c"),r=s("405e"),a=s("2877"),n=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=n.exports}});
//# sourceMappingURL=app.d5712abd.js.map