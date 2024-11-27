import { request } from "@/utils";

export function getInventoryListAPI(param){
    return request({
        url: '/api/inventory',
        method: 'GET',
        param
    })
}