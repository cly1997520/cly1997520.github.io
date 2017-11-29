/**
 * Created by lenovo on 17/11/3 003.
 */
Vue.component("hot-shop",{
    props:['url','text','tit','shou','money','sos','month'],
    template:`
    <li>
            <a href="#">
                <img v-bind:src="url" v-bind:alt="text">
            </a>
            <a href="#">{{text}}</a>
            <div class="lie1">
                <a href="#">{{tit}}</a>
                <a href="#">收藏{{shou}}</a>
            </div>
            <div class="lie2">
                <a href="#"><span>￥</span>{{money}}</a>
                <s><span>￥</span>{{sos}}</s>
                <em>{{month}}</em>
            </div>
    </li>
    `
});
var app=new Vue({
    el:"#app",
    data:{
        shops:[
            {url:'images/2.webp',
                text:'润帛 山羊绒围巾大披肩女灰色 加厚春秋冬季',
                tit:'评价253',
                shou:'29762',
                money:'198',
                sos:'398',
                month:'月销515笔'},
            {url:'images/3.webp',
                text:'织锦楼 真丝羊毛围巾印花女春秋冬季薄款',
                tit:'评价0',
                shou:'28',
                money:'398',
                sos:'1299',
                month:'月销1笔'},
            {
                url:'images/4.webp',
                text:'100%纯羊毛披肩围巾两用秋冬季加厚卷后78元',
                tit:'评价20',
                shou:'336',
                money:'88',
                sos:'209',
                month:'月销20笔'
            },
            {
                url:'images/5.webp',
                text:'故事情丝保暖羊毛围巾披肩两用女春秋冬韩版',
                tit:'评价0',
                shou:'268',
                money:'29.9',
                sos:'99',
                month:'月销255笔'
            },
            {
                url:'images/66.webp',
                text:'2017秋冬新款女羊绒围巾加厚保暖披肩两用斗篷式',
                tit:'评价0',
                shou:'1930',
                money:'138',
                sos:'299',
                month:'月销652笔'
            },
            {
                url:'images/7.webp',
                text:'奥茵娜春秋冬季加厚款保暖羊毛围巾披肩两用超长欧美韩版百搭女士',
                tit:'评价598',
                shou:'2734',
                money:'88',
                sos:'299',
                month:'月销491笔'
            },
            {
                url:'images/8.webp',
                text:'润帛 时尚英伦经典格子纯羊毛披肩女 高端春秋冬季保暖围巾两用长',
                tit:'评价552',
                shou:'16590',
                money:'188',
                sos:'349',
                month:'月销1092笔'
            },
            {
                url:'images/9.webp',
                text:'新款春秋冬季围巾加厚保暖套头日韩学生针织女士脖套毛线围脖百搭',
                tit:'评价33',
                shou:'5498',
                money:'8.8',
                sos:'30',
                month:'月销265笔'
            },
            {
                url:'images/10.webp',
                text:'羊毛围巾大披肩女两用羊绒围脖欧美春秋冬季长款纯色加厚保暖黑色',
                tit:'评价1989',
                shou:'15498',
                money:'99',
                sos:'218',
                month:'月销4298笔'
            },
            {
                url:'images/17.webp',
                text:'羊绒围巾女冬季披肩两用长款加厚冬天春秋格子羊毛大围脖韩版百搭',
                tit:'评价163',
                shou:'6842',
                money:'399',
                sos:'778',
                month:'月销404笔'
            }
        ]
    }
});