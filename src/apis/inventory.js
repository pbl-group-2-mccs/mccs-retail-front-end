import { request } from "@/utils";

export function getInventoryListAPI(param){
    return request({
        url: '/api/inventory',
        method: 'GET',
        param
    })
}

export function deleteInventoryAPI(id){
    return request({
        url: '/api/inventory/${id}',
        method:'DELETE'
    })
}