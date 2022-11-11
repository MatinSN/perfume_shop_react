import ActionTypes from "../action/actionTypes";


const InitialState=[
    
]
// {
//     brandName:"",
//     name:"",
//     price:0,
//     rate:0,
//     discount:0,
//     image:""
// }


const newArrivalsReducer = function(state = InitialState, action) {
    // Do something here
    switch(action.type){
        
        case ActionTypes.ADD_NEW_ARRIVAL:

            console.log("Here in new Arrival")
            const newArrival={
                id:action.payload.id,
                brandName:action.payload.brandName,
                name:action.payload.name,
                rate:action.payload.rate,
                image:action.payload.image
            }
            
          
            return [...state,newArrival]
        default:
            return state
    }
  };


export default newArrivalsReducer