import ActionTypes from "../action/actionTypes";



const cardReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        case ActionTypes.ADD_CARD_INFO:
           
            const newCard={
                id:action.payload.id,
                brandName:action.payload.brandName,
                name:action.payload.name,
                price:action.payload.price,
                rate:action.payload.rate,
                discount:action.payload.discount,
                image:action.payload.image
            }
            
          
            return [...state,newCard]
        default:
            return state
    }
  };


export default cardReducer