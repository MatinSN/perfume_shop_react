import ActionTypes from "../action/actionTypes";

const InitialState={
    addressError:""
}
// [
//     {
//         brandName:"",
//         brandType:"",
//         img:""
//     }
// ]


const appReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.SET_ADDRESS_ERROR:
            return {...state,addressError:action.payload}
          
        default:
            return state
    }
  };


export default appReducer