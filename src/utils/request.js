//axios
import axios from "axios";
//1.root domain
//2.time
//3.request / response inteceptor

const request = axios.create({
    //backend domain
    baseURL: '',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    return config
},(error) => {
    return Promise.reject(error)
})

request.interceptors.response.use((response) =>{
    return response.data
},(error) => {
    return Promise.reject(error)
})
export { request }