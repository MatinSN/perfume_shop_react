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
                return item.id === action.payload.id
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

        case ActionTypes.SET_CART:
            localStorage.setItem("cart",JSON.stringify(action.payload))

         return action.payload
       
        default:
            return state
    }
  };


export default cartReducer