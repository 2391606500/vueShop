import { request } from './request'
export function photoinfo(id) {
    return request({
        url: '/api/getimageInfo/' + id
    })
}