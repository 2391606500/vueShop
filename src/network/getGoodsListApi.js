import { request } from './request.js'
export function getgoodslist(pageindex) {
    return request({
        url: 'api/getgoods',
        params: {
            'pageindex=': pageindex
        }
    })
}