
var swiper = new Swiper('.swiper-container', {
    //自动发轮播
    //autoplay: {
    //    delay: 2000,
    //},
    //横向箭头
    direction: 'vertical',
    //循环
    loop:true,
    //分页器
    pagination: {
        el: '.swiper-pagination',
        //是否可以点击小圆点
        clickable: true,
    },
    //向右的箭头
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //Swiper4.x
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var mp3=document.querySelector("#mp3");
var mp3Btn=document.querySelector("#mp3Btn");
mp3Btn.onclick=function(){
    if(mp3.paused){
        mp3Btn.style.animationPlayState="running";
        mp3.play();
    }else{
        mp3Btn.style.animationPlayState="pasued";
        mp3.pause();

    }

};





















