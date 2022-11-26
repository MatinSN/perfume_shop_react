import ActionTypes from "../action/actionTypes";

const InitialState=[]


const commentReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.SET_COMMENTS:
            return action.payload
        case ActionTypes.ADD_COMMENT:
             return [action.payload,...state]
        case ActionTypes.RESET_COMMENT_REDUCER:
            return []
        default:
            return state
    }
  };


export default commentReducer