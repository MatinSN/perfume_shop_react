import React,{useState,useEffect} from "react"
import "./style.css"
import { useSelector,useDispatch } from "react-redux"
import {toFarsiNumber,getDiscountPrice} from "../../utils"
import {getOrders} from "../../redux/action/api"

const Orders = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items

  const orders = useSelector(state=>state.orders)
  const token = useSelector(state=>state.user.token)

  const dispatch = useDispatch()
   
  useEffect(()=>{
    dispatch(getOrders(token))
  })
  
   const getTextStatus=(status)=>{
    if(status == "Processing"){
        return "درحال آماده سازی"
    }
    else if(status == "Received"){
        return "تحویل داده شده"
    }
    else if(status == "Sent"){
        return "ارسال شده"
    }
   }

  return (
    <>
       <div className="orders-container">

        {
            orders.map((order)=>{
                return (
                    <>
            <div className="order-container" key={order.id}>
                  <h5 style={{direction:"rtl"}}>{getTextStatus(order.status)} </h5>

            <div className="order-info">
                <h5>{order.paymentDate.toLocaleDateString('fa-IR').toLocaleString()}</h5>
                <h5>کد سفارش {order.trackId}</h5>
                <h5>قیمت {order.amount} تومان</h5>
            </div>
            <div className="orders">
              {order.items.map(item=>{
                return (
                    <>
                       <hr />
               <div className="order-item" key={item.product.id}>
       <img width="100" height="100" src={`http://127.0.0.1:8000${item.product.perfume.image}`} alt='' />      
                
                 <h5 style={{direction:"rtl",width:"100%",marginRight:"20px"}}>{item.product.name} </h5>
                  <h5>{item.quantity}X</h5>
               </div>
                    </>
                )
              })}
               
            </div>

        </div>
      
                    </>
                )
            })
        }

    
  
       </div>

       
    </>
  )
}

export default Orders
