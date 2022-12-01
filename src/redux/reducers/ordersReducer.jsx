import ActionTypes from "../action/actionTypes";

const InitialState=[]
// [
//     {
//         brandName:"",
//         brandType:"",
//         img:""
//     }
// ]


const ordersReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.SET_ORDERS_REDUCER:
            return action.payload
          
        default:
            return state
    }
  };


export default ordersReducer