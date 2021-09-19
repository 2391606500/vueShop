import { request } from './request'
export function goodsdesc(id) {
    return request({
        url: "/api/goods/getdesc/" + id,
    })
}