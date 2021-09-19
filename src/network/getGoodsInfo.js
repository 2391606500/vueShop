import { request } from './request.js'
export function getGoodsinfo(id) {
    return request({
        url: '/api/goods/getinfo/' + id
    })
}