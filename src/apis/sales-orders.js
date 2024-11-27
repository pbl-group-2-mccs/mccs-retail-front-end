import { request } from "@/utils";

export function getSalesOrdersListAPI(param){
    return request({
        url: '/api/sales-orders',
        method: 'GET',
        param
    })
}