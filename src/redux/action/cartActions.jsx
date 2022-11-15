import ActionTypes from "./actionTypes";


export const addToCartAction=(id,productName,price,image,quantity)=>{
    return {
        type:ActionTypes.ADD_TO_CART,
        payload:{
            id,
            productName,
            price,
            image,
            quantity
        }
    }
}

export const setCart=(cart=[])=>{
    return{
        type:ActionTypes.SET_CART,
        payload:cart
    }
}