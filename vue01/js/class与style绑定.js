/**
 * Created by lenovo on 17/10/30 030.
 */
//var app=new Vue({
//    el:"#app",
//    data:{
//        classObject:{
//            h:false,
//            t:true
//        }
//    }
//});
//style绑定-------------222-----------------
//var app=new Vue({
//    el:"#app",
//    data:{
//        styleObject:{
//            color:"orange",
//            fontSize:"32px",
//            'background-color':"#00f"
//        }
//    },
//    methods:{
//        changeStyle:function(){
//           //改变当前data，styleObject里面的color
//            this.styleObject.color="red",
//            this.styleObject.background="orange",
//            //this.styleObject.fontSize=18 + "px",
//            this.styleObject.fontSize="18px"
//        }
//    }
//});
//---------------333-------------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        c:{
//            active:false,
//            'text-center':true
//        }
//    },
//    methods:{
//        e:function(){
//          this.c.active=!this.c.active
//        }
//    }
//});
//----------组件----444---------------------------
//全局组件  component组件
Vue.component('my-component',{
    template:'<div>创建一个全局组件</div>'
});
Vue.component('my-name',{
    template:'<div>hello</div>'
});
Vue.component('my-component',{
    template:`
    <div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    </div>
    `
});
var app=new Vue({
    el:"#app"
});

















