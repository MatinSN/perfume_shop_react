import ActionTypes from "./actionTypes";


export const addNewPerfume = (id="",perfume={})=>{

   return {
    type:ActionTypes.ADD_PERFUME,
    payload:{
        id,
        perfume
    }
   }
}