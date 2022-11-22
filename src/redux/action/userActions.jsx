import ActionTypes from "./actionTypes";


export const setToken=(token="")=>{
    return {
        type:ActionTypes.SET_TOKEN,
        payload:token,
     
    }
}

export const setIsLoggedIn=(isLoggedIn=false)=>{
    return {
        type:ActionTypes.SET_IS_LOGGED_IN,
        payload:isLoggedIn
    }
}


export const setUserInfo=(info={username:"",email:""})=>{
    return {
        type:ActionTypes.SET_USER_INFO,
        payload:info
    }
}