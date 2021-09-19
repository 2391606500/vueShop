import { request } from './request'
export function list(id) {
    return request({
        url: '/api/getimages/' + id
    })
}