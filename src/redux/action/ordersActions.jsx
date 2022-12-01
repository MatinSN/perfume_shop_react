import ActionTypes from "./actionTypes";


export const setOrders=(orders=[])=>{
    return {
        type:ActionTypes.SET_ORDERS_REDUCER,
        payload:orders
    }
}