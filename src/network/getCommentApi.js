import { request } from './request'
export function newsinfo(pageIndex, id) {
    return request({
        url: "api/getcomments/" + id,
        params: { pageIndex }
    })
}