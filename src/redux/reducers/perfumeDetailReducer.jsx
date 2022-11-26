import ActionTypes from "../action/actionTypes";

const InitialState={}



const perfumeDetailReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.ADD_PERFUME:
            const newState = {...state}
            newState[action.payload.id]= action.payload.perfume
            return newState
            
        default:
            return state
    }
  };


export default perfumeDetailReducer