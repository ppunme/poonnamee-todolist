(function(){"use strict";var t={7354:function(t,o,e){var s=e(9242),a=e(3396);const n={class:"min-h-screen bg-gradient-to-r from-light-blue to-light-purple py-5 sm:pt-10 sm:pb-3"};function i(t,o,e,s,i,l){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(r,{isLoggedIn:i.isLoggedIn,signOut:l.signOut,logIn:l.logIn},null,8,["isLoggedIn","signOut","logIn"])])}e(2801);var l=e(6265),r=e.n(l),d=()=>r().create({baseURL:"https://candidate.neversitup.com/todo"}),c={login(t){return d().post("users/auth",t)},logout(){localStorage.removeItem("token")}},u={data(){return{isLoggedIn:null}},methods:{async checkLoggedIn(){const t=await JSON.parse(localStorage.getItem("token"));if(t){const o=t.token,e=JSON.parse(window.atob(o.split(".")[1])),s=e.exp,a=parseInt(String(Date.now()/1e3));s-a<0?(this.isLoggedIn=!1,this.$router.push({name:"login"})):this.isLoggedIn=!0}},signOut(){this.isLoggedIn=!1,c.logout(),this.$router.push({name:"login"})},logIn(){this.isLoggedIn=!0}},async mounted(){await this.checkLoggedIn()}},g=e(89);const m=(0,g.Z)(u,[["render",i]]);var p=m,h=e(2483),w=e(7139);const f={class:"w-80 sm:w-96 mx-auto pt-10"},b=(0,a._)("p",{class:"text-center text-2xl font-bold"},"Login",-1),v={class:"grid grid-cols-1 gap-6"},y={class:"block"},_=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Username",-1),k={key:0,class:"text-sm text-red-500 font-semibold pt-1"},x={key:1,class:"text-sm text-red-500 font-semibold pt-1"},I={class:"block"},D=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Password",-1),T={key:0,class:"text-sm text-red-500 font-semibold pt-1"},L={type:"submit",class:"w-full h-12 btn btn-create mt-5"},C={key:0},O={key:1},q={key:0},E=["innerHTML"];function M(t,o,e,n,i,l){const r=(0,a.up)("BeatLoader");return(0,a.wg)(),(0,a.iD)("div",f,[b,(0,a._)("form",{onSubmit:o[2]||(o[2]=(...t)=>l.loginHandle&&l.loginHandle(...t)),class:"mt-3"},[(0,a._)("div",v,[(0,a._)("label",y,[_,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>i.email=t),class:(0,w.C_)(["form-input",[!i.validEmail&&"border-red-300 ring ring-red-200 ring-opacity-50",!i.validEmailForm&&"border-red-300 ring ring-red-200 ring-opacity-50"]])},null,2),[[s.nr,i.email]]),i.validEmail?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",k," * Required field ")),i.validEmailForm?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",x," * Invalid email address "))]),(0,a._)("label",I,[D,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>i.password=t),class:(0,w.C_)(["form-input",!i.validPassword&&"border-red-300 ring ring-red-200 ring-opacity-50"])},null,2),[[s.nr,i.password]]),i.validPassword?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",T," * Required field "))])]),(0,a._)("button",L,[i.isLoading?((0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(r,{color:"#ffffff"})])):(0,a.kq)("",!0),i.isLoading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",O,"Login"))]),i.error?((0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",{innerHTML:i.error,class:"mt-3 text-sm text-red-700 bg-red-200 rounded-lg p-3"},null,8,E)])):(0,a.kq)("",!0)],32)])}var S=e(2317),F={name:"login-comp",components:{BeatLoader:S.Z},props:{logIn:Function},data(){return{email:null,password:null,error:null,validEmail:!0,validEmailForm:!0,validPassword:!0,validCredential:!0,isLoading:null}},methods:{async loginHandle(){try{const t=this.validateForm(this.email,this.password);if("success"===t){this.isLoading=!0;const t=await c.login({username:this.email,password:this.password});200===t.status&&(t.data.token&&localStorage.setItem("token",JSON.stringify(t.data)),this.logIn(),setTimeout((()=>this.$router.push({name:"todolist"})),700))}}catch(t){this.isLoading=!1,this.error=t.response.data.message}},validateForm(t,o){if(!t&&!o)return this.validEmail=!1,void(this.validPassword=!1);if(t)if(/\S+@\S+\.\S+/.test(t)){if(o)return"success";this.validPassword=!1}else this.validEmailForm=!1;else this.validEmail=!1}},watch:{email(){this.validEmail=!0,this.validEmailForm=!0},password(){this.validPassword=!0}}};const P=(0,g.Z)(F,[["render",M]]);var j=P;const z=(0,a._)("span",{class:"hidden sm:block"},"Sign out",-1),Z=(0,a._)("p",{class:"text-center text-2xl font-bold uppercase"},"To-do list",-1),B={class:"pt-4"},$={key:0},W={key:1,class:"h-[calc(100vh_-_16rem)] sm:h-[calc(100vh_-_13rem)] min-h-[20rem] flex items-center justify-center pt-2"},U={key:2},H={class:"relative overflow-y-auto h-[calc(100vh_-_16rem)] sm:h-[calc(100vh_-_13rem)] min-h-[20rem] max-w-sm mx-auto flex flex-col pt-2"},V={key:0},R={key:0},J=(0,a._)("p",null,"Empty press 'Create' for add new todo",-1),N=[J],Y={class:"relative bg-white border rounded-lg shadow-sm gap-4 mx-auto h-24 max-w-[90%] hover:ring-2 hover:ring-blue-400 hover:ring-offset-2"},A=["onClick"],X=["onClick"],K={class:"ml-5 mt-5 select-none text-slate-900 capitalize font-medium"},G={class:"ml-5 select-none text-slate-500 font-medium"},Q={key:0,class:"modal-mask"},tt={class:"absolute top-20 left-0 right-0 md:h-full"},ot={class:"relative p-6 max-w-[90%] sm:max-w-[25rem] h-full md:h-auto mx-auto bg-white rounded-lg shadow"},et={class:"text-center"},st=(0,a._)("p",{class:"text-xl font-bold py-4"},"Are you sure?",-1),at=(0,a._)("p",{class:"pb-5 text-md text-gray-500 font-medium"}," Do you really want to delete this to-do entry? ",-1),nt=(0,a.Uk)("Create "),it=(0,a._)("h3",null,"custom header",-1),lt=(0,a._)("h3",null,"custom header",-1);function rt(t,o,e,n,i,l){const r=(0,a.up)("LogoutIcon"),d=(0,a.up)("BeatLoader"),c=(0,a.up)("TrashIcon"),u=(0,a.up)("XIcon"),g=(0,a.up)("PlusIcon"),m=(0,a.up)("create-todo"),p=(0,a.up)("edit-todo");return(0,a.wg)(),(0,a.iD)("div",null,[e.isLoggedIn?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:o[0]||(o[0]=(...t)=>e.signOut&&e.signOut(...t)),class:"absolute right-3 top-3 sm:right-5 sm:top-5 p-3 rounded-full font-semibold text-gray-800 bg-white/50 hover:bg-white"},[(0,a.Wm)(r,{class:"h-6 w-6 block sm:hidden"}),z])):(0,a.kq)("",!0),(0,a._)("div",null,[Z,(0,a._)("div",B,[!1===i.show?((0,a.wg)(),(0,a.iD)("div",$,"401 Unauthorizes")):(0,a.kq)("",!0),i.isLoading?((0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(d,{color:"#3b82f6"})])):(0,a.kq)("",!0),i.isLoading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("div",H,[!1!==i.show?((0,a.wg)(),(0,a.iD)("div",V,[0===i.todos.length?((0,a.wg)(),(0,a.iD)("div",R,N)):(0,a.kq)("",!0)])):(0,a.kq)("",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.todos,((t,o)=>((0,a.wg)(),(0,a.iD)("div",{key:o,class:"pb-2"},[(0,a._)("div",Y,[(0,a._)("button",{onClick:e=>l.toggleDeleteModal(t._id,o),class:"absolute top-3 right-3"},[(0,a.Wm)(c,{class:"h-5 w-5 text-red-500"})],8,A),(0,a._)("div",{class:"flex flex-col",onClick:o=>l.editTodo(t._id)},[(0,a._)("strong",K,(0,w.zw)(t.title),1),(0,a._)("span",G,(0,w.zw)(t.description),1)],8,X)])])))),128))])]))]),(0,a.Wm)(s.uT,{name:"modal"},{default:(0,a.w5)((()=>[i.showDeleteModal?((0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("div",tt,[(0,a._)("div",ot,[(0,a._)("button",{onClick:o[1]||(o[1]=t=>i.showDeleteModal=!1),type:"button",class:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"},[(0,a.Wm)(u,{class:"h-5 w-5"})]),(0,a._)("div",et,[st,at,(0,a._)("button",{onClick:o[2]||(o[2]=t=>i.showDeleteModal=!1),type:"button",class:"btn text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 border border-gray-200 px-5 py-2.5 hover:text-gray-900 mr-2"}," Cancel "),(0,a._)("button",{onClick:o[3]||(o[3]=(...t)=>l.deleteTodo&&l.deleteTodo(...t)),type:"button",class:"btn bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 inline-flex items-center px-5 py-2.5 text-center"}," Delete ")])])])])):(0,a.kq)("",!0)])),_:1}),e.isLoggedIn?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:o[4]||(o[4]=t=>i.showModal=!0),class:"btn btn-create flex mx-auto mt-5 text-white shadow-lg shadow-gray-500/50"},[(0,a.Wm)(g,{class:"h-5 w-5 text-white mr-2"}),nt])):(0,a.kq)("",!0)]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(m,{show:i.showModal,pullData:l.pullData,onClose:o[5]||(o[5]=t=>i.showModal=!1)},{header:(0,a.w5)((()=>[it])),_:1},8,["show","pullData"]),i.todoId?((0,a.wg)(),(0,a.j4)(p,{key:0,show:i.showEditModal,todoId:i.todoId,pullData:l.pullData,onClose:o[6]||(o[6]=t=>i.showEditModal=!1)},{header:(0,a.w5)((()=>[lt])),_:1},8,["show","todoId","pullData"])):(0,a.kq)("",!0)]))])}const dt={key:0,class:"modal-mask"},ct={class:"modal-wrapper"},ut={class:"modal-container"},gt={class:"grid grid-cols-1 gap-6"},mt={class:"block"},pt=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Title",-1),ht={key:0,class:"absolute text-sm text-red-500 font-semibold pt-1"},wt={class:"block"},ft=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Description",-1),bt={class:"flex justify-between mt-3"},vt=(0,a._)("button",{type:"submit",class:"btn btn-create"},"Create",-1);function yt(t,o,e,n,i,l){const r=(0,a.up)("PuzzleIcon");return(0,a.wg)(),(0,a.j4)(s.uT,{name:"modal"},{default:(0,a.w5)((()=>[e.show?((0,a.wg)(),(0,a.iD)("div",dt,[(0,a._)("div",ct,[(0,a._)("div",ut,[(0,a.Wm)(r,{class:"h-10 w-10 text-gray-800 mx-auto"}),(0,a._)("form",{onSubmit:o[3]||(o[3]=(...t)=>l.create&&l.create(...t))},[(0,a._)("div",gt,[(0,a._)("label",mt,[pt,(0,a.wy)((0,a._)("input",{type:"text",class:(0,w.C_)(["form-input relative",!1===i.validTitle&&"border-red-300 ring ring-red-200 ring-opacity-50"]),"onUpdate:modelValue":o[0]||(o[0]=t=>i.todo.title=t)},null,2),[[s.nr,i.todo.title]]),!1===i.validTitle?((0,a.wg)(),(0,a.iD)("p",ht," * Required field ")):(0,a.kq)("",!0)]),(0,a._)("label",wt,[ft,(0,a.wy)((0,a._)("textarea",{class:"form-input",rows:"3","onUpdate:modelValue":o[1]||(o[1]=t=>i.todo.description=t)},null,512),[[s.nr,i.todo.description]])])]),(0,a._)("div",bt,[(0,a._)("button",{type:"button",class:"btn btn-cancel",onClick:o[2]||(o[2]=(...t)=>l.cancel&&l.cancel(...t))}," Cancel "),vt])],32)])])])):(0,a.kq)("",!0)])),_:1})}const _t=()=>{const t=JSON.parse(localStorage.getItem("token"));return t&&t.token?{Authorization:"Bearer "+t.token}:{}};var kt=_t,xt={postTodo(t){return d().post("todos",t,{headers:kt()})},updateTodo(t,o){return d().put(`todos/${t}`,o,{headers:kt()})},deleteTodo(t){return d().delete(`todos/${t}`,{headers:kt()})},getTodos(){return d().get("todos",{headers:kt()})},getTodoById(t){return d().get(`todos/${t}`,{headers:kt()})},deleteBook(t){return d().delete(`books/${t}`)}},It=e(4371),Dt={props:{show:Boolean,pullData:Function},components:{PuzzleIcon:It.Z},data(){return{todo:{title:"",description:""},validTitle:null}},methods:{async create(){try{if(""===this.todo.title)return void(this.validTitle=!1);const t=await xt.postTodo(this.todo);200==t.status&&(alert("Your todo is added!"),this.pullData(),this.$emit("close")),this.clearForm()}catch(t){console.log(t)}},cancel(){this.clearForm(),this.$emit("close")},clearForm(){this.todo.title="",this.todo.description=""}},watch:{"todo.title"(){this.validTitle=null}}};const Tt=(0,g.Z)(Dt,[["render",yt]]);var Lt=Tt;const Ct={key:0,class:"modal-mask"},Ot={class:"modal-wrapper"},qt={class:"modal-container"},Et={class:"grid grid-cols-1 gap-6"},Mt={class:"block"},St=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Title",-1),Ft={class:"block"},Pt=(0,a._)("span",{class:"text-gray-700 font-semibold"},"Description",-1),jt={class:"flex justify-between mt-3"},zt=(0,a._)("button",{type:"submit",class:"btn btn-create"},"Edit",-1);function Zt(t,o,e,n,i,l){const r=(0,a.up)("PuzzleIcon");return(0,a.wg)(),(0,a.j4)(s.uT,{name:"modal"},{default:(0,a.w5)((()=>[e.show?((0,a.wg)(),(0,a.iD)("div",Ct,[(0,a._)("div",Ot,[(0,a._)("div",qt,[(0,a.Wm)(r,{class:"h-10 w-10 text-gray-800 mx-auto"}),(0,a._)("form",{onSubmit:o[3]||(o[3]=(...t)=>l.updateTodo&&l.updateTodo(...t))},[(0,a._)("div",Et,[(0,a._)("label",Mt,[St,(0,a.wy)((0,a._)("input",{type:"text",class:"form-input","onUpdate:modelValue":o[0]||(o[0]=t=>i.todo.title=t)},null,512),[[s.nr,i.todo.title]])]),(0,a._)("label",Ft,[Pt,(0,a.wy)((0,a._)("textarea",{class:"form-input",rows:"3","onUpdate:modelValue":o[1]||(o[1]=t=>i.todo.description=t)},null,512),[[s.nr,i.todo.description]])])]),(0,a._)("div",jt,[(0,a._)("button",{type:"button",class:"btn btn-cancel",onClick:o[2]||(o[2]=o=>t.$emit("close"))}," Cancel "),zt])],32)])])])):(0,a.kq)("",!0)])),_:1})}var Bt={props:{show:Boolean,todoId:String,pullData:Function},components:{PuzzleIcon:It.Z},data(){return{todo:{}}},methods:{async updateTodo(){try{const t=await xt.updateTodo(this.todo._id,this.todo);200==t.status&&(alert("Your todo is updated!"),this.pullData(),this.$emit("close"))}catch(t){console.log(t)}},clearTodo(){this.$emit("close")}},watch:{async todoId(){this.todo=(await xt.getTodoById(this.todoId)).data}},async mounted(){this.todo=(await xt.getTodoById(this.todoId)).data}};const $t=(0,g.Z)(Bt,[["render",Zt]]);var Wt=$t,Ut=e(1984),Ht=e(9456),Vt=e(2966),Rt=e(6674),Jt={name:"todolist-comp",props:{isLoggedIn:Boolean,signOut:Function},components:{CreateTodo:Lt,EditTodo:Wt,TrashIcon:Ut.Z,PlusIcon:Vt.Z,XIcon:Rt.Z,LogoutIcon:Ht.Z,BeatLoader:S.Z},data(){return{todos:"",todoId:"",edit:!1,showModal:!1,showEditModal:!1,showDeleteModal:!1,deleteIndex:null,isLoading:null,show:null}},methods:{async pullData(){try{this.isLoading=!0,this.todos=(await xt.getTodos()).data,setTimeout((()=>{this.isLoading=!1}),400)}catch(t){t&&(this.show=!1,this.isLoading=!1),console.log(t)}},editTodo(t){this.showEditModal=!0,this.todoId=t},async deleteTodo(){this.todos.splice(this.deleteIndex,1),await xt.deleteTodo(this.todoId),this.showDeleteModal=!1},toggleDeleteModal(t,o){this.todoId=t,this.deleteIndex=o,this.showDeleteModal=!0}},mounted(){this.pullData()}};const Nt=(0,g.Z)(Jt,[["render",rt]]);var Yt=Nt;const At=[{path:"/",name:"login",component:j},{path:"/todolist",name:"todolist",component:Yt}],Xt=(0,h.p7)({history:(0,h.r5)(),routes:At});var Kt=Xt;(0,s.ri)(p).use(Kt).mount("#app")}},o={};function e(s){var a=o[s];if(void 0!==a)return a.exports;var n=o[s]={exports:{}};return t[s](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(o,s,a,n){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],a=t[c][1],n=t[c][2];for(var l=!0,r=0;r<s.length;r++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](s[r])}))?s.splice(r--,1):(l=!1,n<i&&(i=n));if(l){t.splice(c--,1);var d=a();void 0!==d&&(o=d)}}return o}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[s,a,n]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,s){var a,n,i=s[0],l=s[1],r=s[2],d=0;if(i.some((function(o){return 0!==t[o]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(r)var c=r(e)}for(o&&o(s);d<i.length;d++)n=i[d],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(c)},s=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(7354)}));s=e.O(s)})();
//# sourceMappingURL=app.61a2a843.js.map