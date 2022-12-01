import React,{useEffect,useState} from "react";
import "./style.css"
import Addresses from "../dashboard/Addresses";
import { useSelector,useDispatch } from "react-redux";
import { toFarsiNumber,getDiscountPrice } from "../../utils";
import logo from "./logo.svg"
import SignUpSignIn from "../signUpSignIn/SignUpSignIn";
import { paymentRequest } from "../../redux/action/api";
import validator from "validator";
import {setAddressError} from "../../redux/action/appActions"


const CheckoutDetail = ()=>{
    const cart = useSelector(state=>state.cart)
    const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
    const token = useSelector(state=>state.user.token)

    const [totalPrice,setTotalPrice] = useState(0)
    const [grabAddressData,setGrabAddressData] = useState(false)
    const dispatch = useDispatch()

    const calculateTotalPrice=()=>{
        let result = 0
        cart.forEach((cartItem)=>{
            result = result + (getDiscountPrice(cartItem.price,cartItem.discount)*cartItem.quantity)
        })
        setTotalPrice(result)
    }

    const onStartPayingButtonClick=()=>{
        if(isLoggedIn && cart.length > 0){
            setGrabAddressData(true)
        //   dispatch(paymentRequest(token))
        }
    }
    const grabShippingInfo=(name,lastName,state,city,number,address)=>{
         

            if(!name || !lastName || !state || !city || !number || !address){
                console.log("Invalid")
                dispatch(setAddressError("هیچ یک از فیلد های زیر نمی تواند خالی بماند"))
            }
            else if(!validator.isMobilePhone(number)){
                console.log("set mobile phone")

                dispatch(setAddressError("شماره تلفن معتبر نمی باشد"))
            }
            dispatch(paymentRequest(token,{
                name,
                lastName,
                state,
                city,
                phoneNumber:"+98"+number,
                address
            }))
            setGrabAddressData(false)
    }
    useEffect(()=>{
         if(cart.length === 0){
            // window.location.replace(`http://127.0.0.1:3000/cart`);

         }
         calculateTotalPrice()
    },[cart])
    return (
        <>
        {!isLoggedIn && <SignUpSignIn shouldRedirect={false} />}
        <div className="checkout-container">
            <div className="checkout-summary-container">
                <h4>سفارش شما</h4>
                <div className="checkout-header">
                <h5>محصول</h5>

                <h5>جمع جزء</h5>

                </div>
                <hr></hr>
                {cart.map(cartItem=>{
                    return (
                     <>
                          <div className="summary-item">
                           <div className="summary-name"><h5>{cartItem.productName} x {cartItem.quantity}</h5></div>
                           <div className="summary-price"><h5>{toFarsiNumber(getDiscountPrice(cartItem.price,cartItem.discount)*cartItem.quantity)} تومان</h5></div>
                          
                        </div>
                        <hr />
                     </>
                    )
                })}
                <div className="totalPriceContainer">
                    <h5>مجموع</h5>
                    <h5>{toFarsiNumber(totalPrice)} تومان</h5>
                </div>
                <div>
                    <div className="payment-logo">

                    <h5 className="logo-header">درگاه پرداخت زیبال</h5>
                    <img width="100" height="100" src={logo}/>
                    </div>
                   
                </div>
                <button onClick={onStartPayingButtonClick} className="order-button">ثبت سفارش</button>
            </div>
            <div className="address-container">
                {!isLoggedIn && <h4>برای وارد کردن جزئیات آدرس ابتدا باید وارد شوید</h4>}
                {isLoggedIn && <>
                    <div className="shipping-info-title"><h4>جزئیات صورتحساب</h4></div>
                <Addresses grabData={grabAddressData} onGrabData={grabShippingInfo} />
                </>}
            </div>
        </div>
        </>

    )
}


export default CheckoutDetail