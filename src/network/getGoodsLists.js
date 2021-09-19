import { request } from './request.js'
export function goodsLists(ids) {
    return request({
        url: '/api/goods/getshopcarlist/' + ids
    })
}