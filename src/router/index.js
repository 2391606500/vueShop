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
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/vip', component: Vip },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search }


]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router