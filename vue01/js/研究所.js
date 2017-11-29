/**
 * Created by lenovo on 17/11/3 003.
 */
Vue.component("life-li",{
    props:['tit','url','text','hot'],
    template:`
        <li>
            <img v-bind:src="url" v-bind:alt="tit">
            <div>
                <h3>{{tit}}</h3>
                <p>{{text}}</p>
                <p><span>❤</span>人气{{hot}}</p>
            </div>
        </li>
    `
});
var app=new Vue({
    el:"#app",
    data:{
        lifes:[
            {tit:"怕冷星人",url:'images/11.webp',text:'过冬必杀技',hot:'11810853'},
            {tit:'家有萌娃',url:'images/16.webp',text:'宝贝快乐成长',hot:'16583382'},
            {tit:'囤货小当家',url:'images/15.webp',text:'会囤会生活',hot:'1047117'},
            {tit:"群控mm",url:'images/14.webp',text:'最美不过裙装',hot:'2015852'},
            {tit:"绝饰佳人",url:"images/155.webp",text:'配饰小心机',hot:'15070521'}

        ]
    }
});