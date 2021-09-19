import { request } from './request'
export function getNewComment(id, msg) {
    return request({
        url: 'api/postcomment/' + id,
        params: {
            content: msg
        }
    })
}