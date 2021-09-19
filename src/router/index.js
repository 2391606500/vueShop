import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () =>
    import ('@/views/home/home.vue')
const Vip = () =>
    import ('@/views/vip/vip.vue')
const Cart = () =>
    import ('@/views/cart/cart.vue')
const Search = () =>
    import ('@/views/search/search.vue')
const Newlist = () =>
    import ('@/views/newlist/newlist.vue')
const Newsinfo = () =>
    import ('@/views/newsinfo/newsinfo.vue')
const Photolist = () =>
    import ('@/views/photolist/photolist.vue')
const Photoinfo = () =>
    import ('@/views/photoinfo/photoinfo.vue')
const Goodslist = () =>
    import ('@/views/GoodsList/goodslist.vue')
const Goddsinfo = () =>
    import ('@/views/GoodsList/goodsinfo.vue')
const Goodsdesc = () =>
    import ('@/views/GoodsList/goodsdesc.vue')
const Goodscomment = () =>
    import ('@/views/GoodsList/goodscomment.vue')
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/vip', component: Vip },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search },
    { path: '/home/newlist', component: Newlist },
    { path: '/home/photolist', component: Photolist },
    { path: '/home/newsinfo/:id', component: Newsinfo, props: true },
    { path: '/home/photoinfo/:id', component: Photoinfo },
    { path: '/home/goodslist', component: Goodslist },
    { path: '/home/goodsinfo/:id', component: Goddsinfo, name: "goodsinfo" },
    { path: '/home/goodsdesc/:id', component: Goodsdesc },
    { path: '/home/goodscomment/:id', component: Goodscomment, name: "goodscomment" }
]

const router = new VueRouter({
    mode: 'history',
    routes

})

export default router