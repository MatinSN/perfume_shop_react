import axios from "axios"
import {addNewCard,addNewArrival} from "./cardAction"
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

export function getPerfumes(page=1,count=10,dateSort=false,actionType=ActionTypes.ADD_CARD_INFO){
    return dispatch =>{
    
        return axios.get(`http://127.0.0.1:8000/perfumes/?page=${page}&count=${count}&date_sort=${dateSort}`)
         .then((response)=>{
      
            const data =response.data.results
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
                    dispatch(addNewCard(id,brandName,name,price,rate,discount,image))
                }
                else if (actionType === ActionTypes.ADD_NEW_ARRIVAL){
                     dispatch(addNewArrival(id,brandName,name,rate,image))
                }
            })
                    
            // return response
            
        })
    }
}

