import axios from "axios"
import {addNewCard,addNewArrival,resetCardsReducer} from "./cardAction"
import { addMenCard,addWomenCard,addMenTester,addWomenTester } from "./discountPageActions"
import ActionTypes from "./actionTypes"
export function testApi(){
    return dispatch =>{
        return axios.get("http://127.0.0.1:8000/perfumes/").then((response)=>{
          
           
            const data =response.data.results
            console.log(data.length())
            data.forEach((item)=>{
               
                const brandName=item.perfume.brand.name
                const name=item.name
                const price=item.price
                const rate=item.rate
                const discount=item.discount
                const image=item.image
                dispatch(addNewCard(brandName,name,price,rate,discount,image))
            })
                    
            // return response
            
        })
    }
}

export function getPerfumes(page=1,count=10,dateSort=false,actionType=ActionTypes.ADD_CARD_INFO,tester="both",gender="both",rateSort=false,priceSortAce=false,priceSortDec=false){
    return dispatch =>{
        console.log("here you go", actionType)
        return axios
        .get(`http://127.0.0.1:8000/perfumes/?page=${page}&count=${count}&date_sort=${dateSort}&tester=${tester}&gender=${gender}&rate_sort=${rateSort}&price_sort_dec=${priceSortDec}&price_sort_ace=${priceSortAce}`)
         .then((response)=>{
           const count = response.data.count
            const data =response.data.results
            console.log("response",response)
            data.forEach((item)=>{
                console.log("item",item)
                const id = item.id
                const brandName=item.perfume.brand.name
                const name=item.perfume.name
                const price=item.price
                const rate=item.rate
                const discount=item.discount
                const image=item.perfume.image
                if(actionType === ActionTypes.ADD_CARD_INFO){
                    dispatch(addNewCard(id,brandName,name,price,rate,discount,image,count))
                }
                else if (actionType === ActionTypes.ADD_NEW_ARRIVAL){
                     
                     dispatch(addNewArrival(id,brandName,name,rate,image))
                }
                else if(actionType === ActionTypes.ADD_MEN_CARD){
                    dispatch(addMenCard(id,brandName,name,price,rate,discount,image))
                }
                else if(actionType === ActionTypes.ADD_WOMEN_CARD){
                   
                    dispatch(addWomenCard(id,brandName,name,price,rate,discount,image))
                }
                else if(actionType === ActionTypes.ADD_MEN_TESTER_CARD){
                    dispatch(addMenTester(id,brandName,name,price,rate,discount,image))
                }
                else if(actionType === ActionTypes.ADD_WOMEN_TESTER_CARD){
                    dispatch(addWomenTester(id,brandName,name,price,rate,discount,image))
                }
            })
                    
            // return response
            
        })
    }
}

