/**
 * Created by lenovo on 17/10/31 031.
 */
//全局组件
//Vue.component('my-component',{
//   template:`
//   <header>
//        <nav>
//            <ul>
//                <li><a href="">1</a></li>
//                <li><a href="">2</a></li>
//                <li><a href="">3</a></li>
//            </ul>
//        </nav>
//        <div class="banner">
//            <img src="images/banner1.jpg" alt="">
//        </div>
//   </header>
//             `
//});
//var app=new Vue({
//    el:"#app"
//
//});

//局部组件
//var sbshChild={
//    template:'<div>局部组件</div>'
//};
//var app=new Vue({
//    el:'#app',
//    components:{
//        sbsh1:sbshChild
//    }
//});
//传递参数的组件

//Vue.component('sbsh3',{
//    props:["message"],
//    template:'<div>{{message}}</div>'
//});
//var app=new Vue({
//    el:"#app"
//});

//练习-----------------------------

var s={
    template:'<div>局部</div>'
};
var app=new Vue({
    el:"#app",
    component:{
        sbsh1:s
    }
});

 Vue.component('sbsh3',{
    props:["message"],
    template:'<div>{{message}}</div>'
});
var app=new Vue({
    el:'#app'
});



















