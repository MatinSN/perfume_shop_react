import ActionTypes from "../action/actionTypes";

const InitialState=[

]
/*
initialState=[
    {
        id,
        productName,
        price,
        discount,
        image,
        quantity,
        productId,
    }
]
*/


const cartReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        
        case ActionTypes.ADD_TO_CART:
          
            let newState=[...state]
            const existedIndex = newState.findIndex((item)=>{
                return item.id === action.payload.productId
            }) 
            if(existedIndex === -1){
                console.log(existedIndex)

                 newState =[...state,action.payload]
            }
            else{
                 newState[existedIndex].quantity =newState[existedIndex].quantity + action.payload.quantity
            }
            console.log("new state is",newState)
            localStorage.setItem("cart",JSON.stringify(newState))
            return newState

        case ActionTypes.DECREASE_CART_ITEM:
            let decreasedState=[...state]
            const decreaseIndex = decreasedState.findIndex((item)=>{
                return item.id === action.payload.productId
            }) 

            if(decreaseIndex >= 0){
                if(decreasedState[decreaseIndex].quantity - action.payload.quantity <=0){
                    decreasedState.splice(decreaseIndex,1)
                }
                else{
                    decreasedState[decreaseIndex].quantity = decreasedState[decreaseIndex].quantity - action.payload.quantity
                }
            }
            localStorage.setItem("cart",JSON.stringify(decreasedState))

            return decreasedState

        case ActionTypes.INCREASE_CART_ITEM:
            let increasedState=[...state]
            const increaseIndex = increasedState.findIndex((item)=>{
                return item.id === action.payload.productId
            }) 

            if(increaseIndex >= 0){
                
              
                increasedState[increaseIndex].quantity = increasedState[increaseIndex].quantity +action.payload.quantity
            
            }
            localStorage.setItem("cart",JSON.stringify(increasedState))

            return increasedState
        
        case ActionTypes.DELETE_CART_ITEM:

            let deletedState=[...state]
            const deleteIndex  = deletedState.findIndex((item)=>{
                return item.id === action.payload.productId
            }) 

            if(deleteIndex >= 0){
                
              deletedState.splice(deleteIndex,1)
            
            }
            localStorage.setItem("cart",JSON.stringify(deletedState))

            return deletedState

            
        case ActionTypes.SET_CART:
            localStorage.setItem("cart",JSON.stringify(action.payload))

         return action.payload
       
        default:
            return state
    }
  };


export default cartReducer