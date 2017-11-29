/**
 * Created by lenovo on 17/10/26 026.
 */
//var app=new Vue({
//    el:"#app"
//});

//----------------------------------
//var app=new Vue({
//    el:"#app",
//    data:{
//        classObject:{
//            v:true
//        }
//    }
//});
//-------------------------------------
var app = new Vue({
    el: "#app",
    data: {
        classObject: {
            h: false
        }
    },
    methods: {
        e: function () {
            this.classObject.h = !this.classObject.h
        }
    }
});