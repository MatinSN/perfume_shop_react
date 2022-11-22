import ActionTypes from "../action/actionTypes";

const InitialState={
    token:"",
    isLoggedIn:false,
    info:{
        username:"",
        email:"",
        
    }
}
// {
//     brandName:"",
//     name:"",
//     price:0,
//     rate:0,
//     discount:0,
//     image:""
// }


const userReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
      
        case ActionTypes.SET_TOKEN:
            localStorage.setItem("token",action.payload)
            return {...state,token:action.payload}
        case ActionTypes.SET_IS_LOGGED_IN:
            return {...state,isLoggedIn:action.payload}
        case ActionTypes.SET_USER_INFO:
            return {...state,info:action.payload}
        default:
            return state
    }
  };


export default userReducer