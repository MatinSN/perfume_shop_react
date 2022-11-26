
import ActionTypes from "./actionTypes"

export function addNewSearchCard(id,brandName,name,price,rate,discount,image,count){


 return   {
    type:ActionTypes.ADD_SEARCH_CARD,
    payload:{
      id,
       brandName,
       name,
       price,
       rate,
       discount,
       image,
       count
}
}
}


export const resetSearchCardsReducer = ()=>({
    type:ActionTypes.RESET_SEARCH_CARD_REDUCER
   })
   



export function addSearchResult(id,brandName,name,price,discount,image){


    return   {
       type:ActionTypes.ADD_SEARCH_RESULT,
       payload:{
         id,
          brandName,
          name,
          price,
          discount,
          image
   }
   }
   }


export const resetSearchResults=()=>{
  return {
    type:ActionTypes.RESET_SEARCH_RESULTS
  }
}
 
