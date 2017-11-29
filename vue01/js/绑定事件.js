/**
 * Created by lenovo on 17/10/23 023.
 */
//new Vue({
//    el:"#app",
//    methods:{
//        my:function(){
//            alert("hello Vue")
//        }
//    }
//});
//var app=new Vue({
//    el:"#app",
//    data:{
//        btn:"点击切换",
//        images:"images/banner1.jpg",
//        image:"images/banner2.jpg"
//    }
//});

//var app=new Vue({
//    el:"#app",
//    data:{
//        linkurl:"http://www.qq.com",
//        linktext:"腾讯QQ",
//        btn:"点击切换",
//        imgsrc:"img/1.jpg",
//        imgalt:"1.jpg"
//    }
//});


//var app = new Vue({
//    el: "#app",
//    data: {
//        message: "images/banner1.jpg"
//    },
//    methods: {
//        e: function () {
//            this.message = "images/banner2.jpg"
//        }
//    }
//});


//var app = new Vue({
//    el: "#app",
//    data:{
//        //baidu:"百度",
//        //baidusrc:"http://www.baidu.com",
//        //tengxun:"腾讯",
//        //tengxunsrc:"http://www.tengxun.com"
//        baidu: {
//            name:"百度",
//            url:"http://www.baidu.com/"
//        },
//        tengxun:{
//            name:"腾讯",
//            url:"http://www.tengxun.com/"
//        }
//    }
//});

var app = new Vue({
    el: "#app",
    data: {
        imgsrc: "images/banner1.jpg"

    },
    methods: {
        e: function () {
            //this.imgsrc = "images/banner2.jpg";
            if (this.imgsrc === "images/banner1.jpg") {
                this.imgsrc = "images/banner2.jpg"
            } else {
                this.imgsrc = "images/banner1.jpg"
            }
        }
        //},
        //e1: function () {
        //    this.imgsrc = "images/banner1.jpg"
        //}
    }

});





