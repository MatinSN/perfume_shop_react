
import ActionTypes from "./actionTypes"

export const setAddressError=(error)=>{
    return {
        type:ActionTypes.SET_ADDRESS_ERROR,
        payload:error
    }
}