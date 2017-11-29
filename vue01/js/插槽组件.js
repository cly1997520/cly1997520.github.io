/**
 * Created by lenovo on 17/11/1 001.
 */
//Vue.component('my-div',{
//    template:'<div>hello vue</div>'
//});
//var app=new Vue({
//    el:"#app"
//});
//局部组件-----------------------
//Vue.component('my-div',{
//    props:['message'],
//    template:'<div>{{message}}</div>'
//});
//var app=new Vue({
//    el:"#app"
//});




///----<slot></slot>---------插槽组件----
//Vue.component('my-div',{
//    template:'<div>1<slot></slot>6</div>'
//});
//var app=new Vue({
//    el:"#app"
//});
//-----------------------------------
Vue.component('my-ul',{
    template:'<ul><slot></slot></ul>'
});
Vue.component('my-li',{
    template:'<li><slot></slot></li>'
});
var app=new Vue({
    el:"#app",
    data:{
        lists:[
            {id:0,fruit:"香蕉",url:"1.html"},
            {id:1,fruit:"苹果",url:"2.html"},
            {id:2,fruit:"鸭梨",url:"3.html"}
        ]
    }
});





















