import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://www.liulongbin.top:3005'
    })
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err);
        return err
    })
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
        return err
    })
    return instance(config)
}