/**
 * Created by lenovo on 17/10/27 027.
 */

//--------{{message}}----------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        message:"hello Vue"
//    }
//});

//------------v-bind-----------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        url:"http://www.baidu.com",
//        text:"百度",
//        imgsrc:"pic/baidu.jpg",
//        imgalt:"百度"
//    }
//});

//-----------v-on--------------------------

//var app=new Vue({
//   el:"#app",
//    data:{
//       text:"hello javascript!"
//    },
//    methods:{
//        e:function(){
//           this.text="我是一个警告框"
//        }
//    }
//});

//----v-for----v-bind----------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        imgs:["香蕉","苹果","鸭梨"]
//    }
//});

//----v-model-----------------------------

//var app=new Vue({
//   el:"#app",
//    data:{
//        text:"hello"
//    }
//});

//-------v-if------------------------------

//var app=new Vue({
//   el:"#app",
//    data:{
//        seen:false
//    },
//    methods:{
//        e:function(){
//            this.seen=!this.seen
//        }
//    }
//});

//------v-else-if---------------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        ok:"2"
//    }
//});

//-------------------------------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        classObject:{
//            active:true,
//            'text-center':true
//        }
//    },
//    methods:{
//        ee:function(){
//          this.classObject=true
//        }
//    }
//});

//-----------ctrl-shift--alt------事件修饰符---

//var app=new Vue({
//   el:"#app",
//    methods:{
//        e:function(){
//            alert("hello")
//        }
//    }
//});

//----------------键盘事件------------------------

//var app=new Vue({
//    el:"#app",
//    methods:{
//        e:function(){
//            alert("hello")
//        }
//    }
//});

//---------------computed--计算属性--------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        xiaolang:"小狼",
//        xiangbailang:"小白狼"
//    },
//    computed:{
//        fullName:function(){
//            return this.xiaolang +this.xiangbailang
//        }
//    }
//});

//-------------------------------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        num1:1,
//        num2:2
//    },
//    computed:{
//        e:function(){
//            return this.num1 +this.num2
//        }
//    }
//});

//--------------------------------------------

//var app=new Vue({
//    el:"#app",
//    data:{
//        n1:1,
//        n2:2
//    },
//    computed:{
//        e:function(){
//            return this.n1 +this.n2
//        }
//    }
//});

//-------------------------------------------

var app=new Vue({
    el:"#app",
    data:{
        n1:"小明",
        n2:"小红"
    },
    computed:{
        e:function(){
            return this.n1 +"和" +this.n2
        }
    }
});






