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

export const decreaseCartItem=(productId,quantity)=>{
    return {
        type:ActionTypes.DECREASE_CART_ITEM,
        payload:{
            productId,
            quantity
        }
    }
}

export const increaseCartItem=(productId,quantity)=>{
    return {
        type:ActionTypes.INCREASE_CART_ITEM,
        payload:{
            productId,
            quantity
        }
    }
}

export const deleteCartItemAction=(productId)=>{
    return {
        type:ActionTypes.DELETE_CART_ITEM,
        payload:{
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