import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    //每次刚打开网站，会先从本地存储中调出car数组
    // parse表示转换成数组
    //stringify表示转换成字符串
let car = JSON.parse(localStorage.getItem('car') || [])
const store = new Vuex.Store({
    state: {
        car //将购物车商品的数据用一个数组存储中 {id:Id，count:数量，price:价格，selected:true/false是否勾选购买}
    }, //this.$store.state.xxx
    mutations: {
        addtocar(state, goodsinfo) {
            let flag = false
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.unshift(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        add(state, isdisabled) {
            //console.log(isdisabled.id);
            state.car.forEach(item => {
                if (item.id == isdisabled.id) {
                    if (item.count < 10) {
                        item.count++
                            //console.log(state.car.count);
                    } else {
                        isdisabled.isdisabledadd = true
                    }
                    isdisabled.isdisabledsub = false
                    localStorage.setItem('car', JSON.stringify(state.car))
                }
            })
        },
        sub(state, isdisabled) {
            state.car.forEach(item => {
                if (item.id == isdisabled.id) {
                    if (item.count > 1) {
                        item.count--
                            // this.isdisabled=false
                    } else {
                        isdisabled.isdisabledsub = true
                    }
                    isdisabled.isdisabledadd = false
                    localStorage.setItem('car', JSON.stringify(state.car))
                }
            })
        },
        deleteGoods(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selectd = info.selectd
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        statechange(state, isTrue) {
            state.car.forEach(item => {
                item.selectd = isTrue
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
    }, //this.$store.commit('方法名称','按需传入参数')
    getters: {
        getAllCount(state) {
            let c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        //如何从购物车获得商品数量创建一个空对象 然后循环购物车中所有商品的数据，把当前循环这条商品的ID，作为对象的属性名，count为对象属性的值
        getGoodsCount(state) {
            const o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            const o = {}
            state.car.forEach(item => {
                o[item.id] = item.selectd
            })
            return o
        },
        getGoodsCountAmount(state) {
            const o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.selectd) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        },
        allstate(state) {
            return state.car.every(item => item.selectd == true)

        }
    } //this.$store.getters.xxx
})
export default store