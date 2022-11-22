import ActionTypes from "../action/actionTypes";


const InitialState={
    menPerfumes:[],
    womenPerfumes:[],
    menTesters:[],
    womenTesters:[]
}
// {
//     brandName:"",
//     name:"",
//     price:0,
//     rate:0,
//     discount:0,
//     image:""
// }



const getNewCard=(cardInfo)=>{
   return{
    id:cardInfo.id,
    brandName:cardInfo.brandName,
    name:cardInfo.name,
    price:cardInfo.price,
    rate:cardInfo.rate,
    discount:cardInfo.discount,
    image:cardInfo.image
   }
}


const pageReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        
  
        case ActionTypes.ADD_MEN_CARD:

            const newState={...state,menPerfumes:[...state.menPerfumes,getNewCard(action.payload)]}
            return newState
        case ActionTypes.ADD_WOMEN_CARD:
            console.log("Women Cards")
            const newState2={...state,womenPerfumes:[...state.womenPerfumes,getNewCard(action.payload)]}
            return newState2
        case ActionTypes.ADD_MEN_TESTER_CARD:
            const newState3={...state,menTesters:[...state.menTesters,getNewCard(action.payload)]}
            return newState3
        case ActionTypes.ADD_WOMEN_TESTER_CARD:
             const newState4={...state,womenTesters:[...state.womenTesters,getNewCard(action.payload)]}
            return newState4
        case ActionTypes.RESET_PAGE_REDUCER:
            return {
                menPerfumes:[],
                womenPerfumes:[],
                menTesters:[],
                womenTesters:[]
            }
        default:
            return state
    }
  };


export default pageReducer