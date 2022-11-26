import ActionTypes from "../action/actionTypes";

const InitialState={
    cards:[],
    searchResults:[],
    count:0,

}
// {
//     brandName:"",
//     name:"",
//     price:0,
//     rate:0,
//     discount:0,
//     image:""
// }


const searchReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){

        case ActionTypes.ADD_SEARCH_RESULT:
            const searchResult={
                id:action.payload.id,
                brandName:action.payload.brandName,
                name:action.payload.name,
                price:action.payload.price,
                discount:action.payload.discount,
                image:action.payload.image
            }
            return {...state,searchResults:[...state.searchResults,searchResult]}
        case ActionTypes.RESET_SEARCH_RESULTS:
            console.log("search result has reset")
            return {...state,searchResults:[]}
        case ActionTypes.ADD_SEARCH_CARD:
           
            const newCard={
                id:action.payload.id,
                brandName:action.payload.brandName,
                name:action.payload.name,
                price:action.payload.price,
                rate:action.payload.rate,
                discount:action.payload.discount,
                image:action.payload.image
            }
            
            const count=action.payload.count
            return {...state,cards:[...state.cards,newCard],count}
        case ActionTypes.RESET_SEARCH_CARD_REDUCER:
            return {cards:[],searchResults:[],count:0}
        default:
            return state
    }
  };


export default searchReducer