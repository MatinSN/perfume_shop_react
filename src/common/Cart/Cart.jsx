import React,{useState,useEffect} from "react"
import "./style.css"
import { useSelector,useDispatch } from "react-redux"
import {toFarsiNumber,getDiscountPrice} from "../../utils"
import {deleteCartItem,deleteItemWithQuantity,addProductToCart} from "../../redux/action/api"
import {increaseCartItem,decreaseCartItem,deleteCartItemAction} from "../../redux/action/cartActions"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const [totalPrice,setTotalPrice] = useState(0)
  const [numberOfPerfumes,setNumberOfPerfumes]=useState(1)
  const cart = useSelector(state=>state.cart)
  const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
  const token = useSelector(state=>state.user.token)

  const dispatch = useDispatch()
  // prodcut qty total
   
  const calculateTotalPrice = ()=>{
     let result = 0
     cart.forEach((item)=>{
        result = result + (getDiscountPrice(item.price,item.discount) * item.quantity)
     })
     setTotalPrice(result)
  }

  useEffect(()=>{
     calculateTotalPrice()
  },[cart])

  const onIncreaseClick=(productId="")=>{
  
    
    if(isLoggedIn){
         dispatch(addProductToCart(token,productId,1))
    }
    else{
           dispatch(increaseCartItem(productId,1))
    }
    
 }
 const onDecreaseClick = (productId="",currentQuantity)=>{
   
    if(currentQuantity > 1){
      const token = localStorage.getItem("token")
      if(isLoggedIn){
           dispatch(deleteItemWithQuantity(token,productId,1))
      }
      else{
        dispatch(decreaseCartItem(productId,1))
  
      }
    }
 }

 const onRemoveBtnPress=(productId)=>{
       if(isLoggedIn){
         dispatch(deleteCartItem(token,productId))
         
       }
       else{
          dispatch(deleteCartItemAction(productId))
       }
 }

 const onStartPayingButtonClick=()=>{
      if(cart.length > 0){
        window.location.replace(`http://127.0.0.1:3000/checkout`);

      }
 }

  return (
    <>
       <div className="cart-page-container">
        
       
        <div className="cart-summary-container">
          <div className="cart-summary">
              <h6>جمع کل سبد خرید</h6>
              <hr />
               {cart.map((item)=>{
                return (
                  <div className="total-price-container">
                  <p>جمع جزء </p>
                  <h6> {toFarsiNumber(item.quantity*getDiscountPrice(item.price,item.discount))} تومان</h6>
                </div>
                )
               })}
              <hr/>

              <div className="total-price-container">
                <p>مجموع </p>
                <h6>{toFarsiNumber(totalPrice)} تومان</h6>
              </div>
              <hr />
              <button onClick={onStartPayingButtonClick} className="start-pay-button">ادامه جهت تسویه حساب</button>
          </div>
        </div>
        <div className="cart-container">
            <div className="cart-info">
                <div className="cart-item">

                  <div className="product-name-container"><h6>محصول</h6></div>
                  <div className="product-price"><h6>قیمت </h6></div>
                  <div className="product-quantity"><h6>تعداد</h6></div>
                  <div className="product-subtotal"><h6>جمع جزء</h6></div>
                   
                 
                </div>
                <hr></hr>
                 {cart.map((item)=>{
                  return (
                    <div className="cart-item" key={item.id}>

                    <div className="product-name-container">
                      <button  onClick={()=>{onRemoveBtnPress(item.productId)}} className="remove-item-btn"><h6>X </h6></button>
                      <img width="100" height="100" src={`http://127.0.0.1:8000${item.image}`} />
                      <div className="product-name">
                      <h6>{item.productName}</h6>

                      </div>
                    </div>
                    <div className="product-price"><h6>{toFarsiNumber(getDiscountPrice(item.price,item.discount))}تومان </h6></div>
                    <div className="product-quantity"> 
                      <button className="decrease-btn" onClick={()=>{onDecreaseClick(item.productId,item.quantity)}}>-</button>
                      <input className="quantity-input" value={item.quantity} type="number" />
                      <button className="increase-btn" onClick={()=>{onIncreaseClick(item.productId)}}>+</button></div>
                    <div className="product-subtotal"><h6> {toFarsiNumber(item.quantity*getDiscountPrice(item.price,item.discount))} تومان</h6></div>
                </div>
                  )
                 })}
            </div>
              
        </div>
       </div>

       
    </>
  )
}

export default Cart
