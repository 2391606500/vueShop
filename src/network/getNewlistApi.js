import { request } from './request'
export function getNewlist() {
    return request({
        url: '/api/getnewslist'
    })
}