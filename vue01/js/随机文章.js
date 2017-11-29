///**
// * Created by lenovo on 17/10/31 031.
// */
//






Vue.component('my-header',{
    template:`
    <header>
        <nav>
            <ul>
                <li><a href="随机文章.html">文章1</a></li>
                <li><a href="文章2.html">文章2</a></li>
                <li><a href="文章3.html">文章3</a></li>
                <li><a href="文章4.html">文章4</a></li>
                <li><a href="文章5.html">文章5</a></li>
                <li><a href="文章6.html">文章6</a></li>
                <li><a href="文章7.html">文章7</a></li>
                <li><a href="关于.html">关于</a></li>
            </ul>
        </nav>
    </header>
    `
});
Vue.component('my-footer',{
    template:`

        <div class="need">
            <p>版权广告</p>
            <p>手机用户</p>
            <p>联系我们</p>
            <p>关于我们</p>
        </div>
    `
});
var app=new Vue({
    el:"#app"
});