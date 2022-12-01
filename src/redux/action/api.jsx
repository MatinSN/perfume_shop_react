import axios from "axios"
import {addNewCard,addNewArrival,resetCardsReducer} from "./cardAction"
import { addMenCard,addWomenCard,addMenTester,addWomenTester } from "./discountPageActions"
import ActionTypes from "./actionTypes"
import {setToken,setIsLoggedIn,setUserInfo} from "../action/userActions"
import { setCart } from "./cartActions"
import { setDesignerBrands,setLuxBrands } from "./brandActions"
import {addNewSearchCard,addSearchResult} from "./searchActions"
import {addNewPerfume} from "./perfumeDetailActions"
import { resetCommentReducer,addComment,setComments } from "./commentActions"
import { setOrders } from "./ordersActions"

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

export function getPerfumes(page=1,count=10,dateSort=false,actionType=ActionTypes.ADD_CARD_INFO,tester="both",gender="both",rateSort=false,priceSortAce=false,priceSortDec=false,brand="",search="",big_size=false){
    return dispatch =>{
        console.log("here you go", actionType)
        return axios
        .get(`http://127.0.0.1:8000/perfumes/?page=${page}&count=${count}&date_sort=${dateSort}&tester=${tester}&gender=${gender}&rate_sort=${rateSort}&price_sort_dec=${priceSortDec}&price_sort_ace=${priceSortAce}&brand=${brand}&search=${search}&big_size=${big_size}`)
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
                else if(actionType === ActionTypes.ADD_SEARCH_CARD){
                    dispatch(addNewSearchCard(id,brandName,name,price,rate,discount,image,count))

                }
                else if(actionType === ActionTypes.ADD_SEARCH_RESULT){
                    dispatch(addSearchResult(id,brandName,name,price,discount,image))

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
            console.log("login",response.data)
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

export const getPerfumeWithId=(perfumeId)=>{
    return dispatch=>{
        return axios.get(`http://127.0.0.1:8000/perfume/${perfumeId}`)
        .then((response)=>{
            
            console.log("perfume is",response.data)
            console.log("description is", response.data.perfume.description)
            const data = response.data
            const id= data.id

            const perfume = {
                 name:data.perfume.name,
                 rate :data.rate,
                 price : data.price,
                 discount :data.discount,
                 description :data.perfume.description,
                 size : data.size,
                 nature :data.perfume.nature,
                 olfactionGroup : data.perfume.olfaction_group,
                 perfumer :data.perfumer,
                 gender :data.perfume.gender,
                 perfumeType :data.perfume.perfume_type,
                 season :data.perfume.season,
                 dispersal :data.perfume.dispersal,
                 image1 :data.perfume.image,
                 image2 :data.perfume.image2,
                 quantity :data.quantity,
                 details :data.perfume.details,
                 persistence:data.perfume.persistence
            }
           
            dispatch(addNewPerfume(id,perfume))
        })
    }
}

export const addNewComment=(token="",productId,comment="")=>{

    return (dispatch)=>{
        return axios.post(`http://127.0.0.1:8000/add_comment/?product_id=${productId}`,{
            comment
        },{
            headers: {
                'Authorization': `Token ${token}`
              }
        }).then((response)=>{
            dispatch(addComment({
                id:response.data.id,
                comment:response.data.comment,
                createdAt:new Date(response.data.created_at),
                username:response.data.user.username
            }))
        }) 
    }
}


export const getComments=(productId)=>{

    return (dispatch)=>{
        return axios.get(`http://127.0.0.1:8000/perfume_comments/?product_id=${productId}`)
        .then((response)=>{
           const commentsData = response.data
           console.log("Comments data is",commentsData)
           const comments = []
           commentsData.forEach((comment)=>{
            comments.push({
                id:comment.id,
                comment:comment.comment,
                createdAt:new Date(comment.created_at),
                username:comment.user.username
            })
           })
           dispatch(resetCommentReducer())
           dispatch(setComments(comments))
        }) 
    }
}


export const syncCart = (token,cart)=>{
    
    
        return (dispatch)=>{
            return axios.post(`http://127.0.0.1:8000/cart_check/`,{cart:JSON.stringify(cart)},{
                headers: {
                    'Authorization': `Token ${token}`
                  }
            })
            .then((response)=>{
            
              console.log("The synced cart is",response.data)
              dispatch(getCartProducts(token))
            }) 
        }
    
}


export const paymentRequest=(token,address)=>{
    return dispatch=>{
        return axios.post(`http://127.0.0.1:8000/payment_request/`,{address:JSON.stringify(address)},{
            headers: {
                'Authorization': `Token ${token}`
              }
        })
        .then((response)=>{
            console.log("track id data is",response.data.trackId)
            window.open(`https://gateway.zibal.ir/start/${response.data.trackId}`, '_blank').focus();
            // window.location.replace(`https://gateway.zibal.ir/start/${response.data.trackId}`);
       
        }) 
    }
}


export const getOrders=(token)=>{
    return dispatch=>{
        return axios.get(`http://127.0.0.1:8000/orders/`,{
            headers: {
                'Authorization': `Token ${token}`
              }
        })
        .then((response)=>{
           const ordersData = response.data
           const orders = []
           ordersData.forEach(order=>{
                orders.push({
                    id:order.id,
                    trackId:order.trackId,
                    status:order.status,
                    paymentDate:new Date(order.payment_date),
                    amount:order.amount,
                    items:order.orders
                })
           })
            dispatch(setOrders(orders))
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