
import ActionTypes from "./actionTypes"

export function addNewCard(id,brandName,name,price,rate,discount,image,count){


 return   {
    type:ActionTypes.ADD_CARD_INFO,
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


export function addNewArrival(id,brandName,name,rate,image){


   return   {
      type:ActionTypes.ADD_NEW_ARRIVAL,
      payload:{
         id,
         brandName,
         name,
         rate,
         image
  }
  }
  }
  

  export const resetCardsReducer = ()=>({
   type:ActionTypes.RESET_CARD_REDUCER
  })
  
