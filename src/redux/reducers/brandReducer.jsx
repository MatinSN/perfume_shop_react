import ActionTypes from "../action/actionTypes";

const InitialState={
        luxBrands:[],
        designerBrands:[]
}
// [
//     {
//         brandName:"",
//         brandType:"",
//         img:""
//     }
// ]


const brandReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.SET_LUX_BRANDS:
            return {...state,luxBrands:action.payload}
        case ActionTypes.SET_DESIGNER_BRANDS:
            return {...state,designerBrands:action.payload}
        default:
            return state
    }
  };


export default brandReducer