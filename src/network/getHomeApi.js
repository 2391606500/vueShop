import { request } from "./request";
export function getHomeApi() {
    return request({
        url: '/api/getlunbo'
    })
}