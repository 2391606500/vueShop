import { request } from './request'
export function photo(id) {
    return request({
        url: '/api/getthumimages/' + id
    })
}