import ActionTypes from "./actionTypes";


export const addToCartAction=(id,productName,productId,price,discount,image,quantity)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:{
            id,
            productName,
            price,
            discount,
            image,
            quantity,
            productId
        }
    }
}

export const setCart=(cart=[])=>{
    return{
        type:ActionTypes.SET_CART,
        payload:cart
    }
}