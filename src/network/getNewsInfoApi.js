import { request } from './request'
export function newinfo(id) {
    return request({
        url: '/api/getnew/' + id
    })
}