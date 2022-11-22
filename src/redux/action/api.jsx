import axios from "axios"
import {addNewCard,addNewArrival,resetCardsReducer} from "./cardAction"
import { addMenCard,addWomenCard,addMenTester,addWomenTester } from "./discountPageActions"
import ActionTypes from "./actionTypes"
import {setToken,setIsLoggedIn,setUserInfo} from "../action/userActions"
import { setCart } from "./cartActions"
import { setDesignerBrands,setLuxBrands } from "./brandActions"

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

export const login=(username="",password="")=>{

    return dispatch=>{
        return axios.post("http://127.0.0.1:8000/login/",{
            username:username,
            password
        }).then((response)=>{
            
            dispatch(setToken(response.data.token))
            dispatch(setUserInfo({email:response.data.email,username:response.data.username}))
            dispatch(setIsLoggedIn(true))
        })
    }
}


export const signUp=(email="",password="",password2="",username="")=>{
    return dispatch=>{
        return axios.post("http://127.0.0.1:8000/signup/",{
            email,
            username,
            password,
            password2
        }).then((response)=>{
            dispatch(setToken(response.data.token))
            dispatch(setUserInfo({email:response.data.email,username:response.data.username}))
            dispatch(setIsLoggedIn(true))
        }) 
    }
}



export const getCartProducts=(token="")=>{
    return dispatch=>{
        return axios.get("http://127.0.0.1:8000/cart/",{
            headers: {
                'Authorization': `Token ${token}`
              }
        }).then((response)=>{
            
            console.log("cart is",response.data.cart_products)
            const cartData= response.data.cart_products
            const cart=getExtractedCart(cartData)
             dispatch(setCart(cart))
             console.log("Extracted item is",cart)
        })
    }
}

export const addProductToCart=(token="",productId="",quantity="")=>{
    console.log(token)
    return dispatch=>{
        return axios.put(`http://127.0.0.1:8000/cart/?product_id=${productId}&quantity=${quantity}`,{},{
            headers: {
                'Authorization': `Token ${token}`
              }
        }).then((response)=>{
            
            console.log("cart is",response.data.cart_products)
            const cartData= response.data.cart_products
            const cart=getExtractedCart(cartData)
            dispatch(setCart(cart))
        })
    }
}

export const deleteItemWithQuantity = (token,productId="",quantity="")=>{

    return dispatch=>{
        return axios.delete(`http://127.0.0.1:8000/cart/?product_id=${productId}&quantity=${quantity}`,{
            headers: {
                'Authorization': `Token ${token}`
              }
        }).then((response)=>{
            
            console.log("cart is",response.data.cart_products)
            const cartData= response.data.cart_products
            const cart=getExtractedCart(cartData)
            dispatch(setCart(cart))
        })
    }
}

export const deleteCartItem = (token,productId="")=>{

    return dispatch=>{
        return axios.delete(`http://127.0.0.1:8000/cart/?product_id=${productId}`,{
            headers: {
                'Authorization': `Token ${token}`
              }
        }).then((response)=>{
            
            console.log("cart is",response.data.cart_products)
            const cartData= response.data.cart_products
            const cart=getExtractedCart(cartData)
            dispatch(setCart(cart))
        })
    }
}


export const getBrands=(page="1",count="20",brandType="")=>{

    return dispatch =>{
        return axios.get(`http://127.0.0.1:8000/brands/?page=${page}&count=${count}&brandType=${brandType}`)
        .then((response)=>{
            
          
            const brandData= response.data.results
            const brandCards = []
            brandData.forEach((brand)=>{
                const id= brand.id
                const name = brand.name
                const category = brand.category
                const image = brand.image
                const brandObject={
                    id,
                    name,
                    category,
                    image
                }
                brandCards.push(brandObject)
            })
            if(brandType === "LUX"){
                dispatch(setLuxBrands(brandCards))

            }
            else if(brandType === "Designer"){
                dispatch(setDesignerBrands(brandCards))
                 
            }
        })
    }
}


const getExtractedCart=(cartData=[])=>{
   
    const cart=[]
    
    cartData.forEach((item)=>{
      const cartItem = {}
        cartItem.id = item.id
        cartItem.productName=item.product.perfume.name
        cartItem.price=item.product.price
        cartItem.discount = item.product.discount
        cartItem.image = item.product.perfume.image
        cartItem.quantity = item.quantity
        cartItem.productId = item.product.id
        cart.push(cartItem)
    })

    return cart
}