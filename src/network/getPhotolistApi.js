import { request } from './request'
export function photolist() {
    return request({
        url: '/api/getimgcategory'
    })
}