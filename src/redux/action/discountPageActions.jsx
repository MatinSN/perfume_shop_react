import ActionTypes from "./actionTypes";


export const addMenCard=(id,brandName,name,price,rate,discount,image)=>{
    return {
        type:ActionTypes.ADD_MEN_CARD,
        payload:{
            id,
             brandName,
             name,
             price,
             rate,
             discount,
             image
      }
    }
}

export const addWomenCard=(id,brandName,name,price,rate,discount,image)=>{

    return {
        type:ActionTypes.ADD_WOMEN_CARD,
        payload:{
            id,
             brandName,
             name,
             price,
             rate,
             discount,
             image
      }
    }
}

export const addMenTester=(id,brandName,name,price,rate,discount,image)=>{
    return {
        type:ActionTypes.ADD_MEN_TESTER_CARD,
        payload:{
            id,
             brandName,
             name,
             price,
             rate,
             discount,
             image
      }
    }
}

export const addWomenTester=(id,brandName,name,price,rate,discount,image)=>{
    return {
        type:ActionTypes.ADD_WOMEN_TESTER_CARD,
        payload:{
            id,
             brandName,
             name,
             price,
             rate,
             discount,
             image
      }
    }
}