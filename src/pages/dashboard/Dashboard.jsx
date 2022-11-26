import React,{useState,useEffect} from "react"
import "./style.css"

import UserInfo from "./UserInfo"
import Addresses from "./Addresses"
import Orders from "./Orders"
import { Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard=()=>{

    const [showUserInfoView,setShowUserInfoView]=useState(true)
    const [showAddressesView,setShowAddressesView]=useState(false)
    const [showOrdersView,setShowOrdersView]=useState(false)
    const token = useSelector(state=>state.user.token)
   
    useEffect(()=>{
       checkForRedirect()
    },[token])

    const onViewOptionClick=(name="UserInfo")=>{
        if(name === "UserInfo"){
            setShowUserInfoView(true);
            setShowAddressesView(false);
            setShowOrdersView(false);
        }
        else if(name === "Addresses"){
            setShowUserInfoView(false);
            setShowAddressesView(true);
            setShowOrdersView(false);
        }
        else if(name === "Orders"){
            setShowUserInfoView(false);
            setShowAddressesView(false);
            setShowOrdersView(true);
        }
    }
    const checkForRedirect=()=>{
        if(token){
            return renderDashboard()
        }
        else{
            return <Redirect to="/signUpSignIn" />
        }
    }
    const renderDashboard=()=>{
        return (
            <div className="dashboard-container">
           
            <div className="dashboard-content">
              {showUserInfoView && <UserInfo />}
              {showAddressesView && <Addresses />}
              {showOrdersView && <Orders />}

            </div>

            <div className="dashboard-links">
                   <ul>
                     <li onClick={()=>{onViewOptionClick("UserInfo")}}>اطلاعات کاربری</li>
                     <li onClick={()=>{onViewOptionClick("Addresses")}}> آدرس ها</li>
                     <li onClick={()=>{onViewOptionClick("Orders")}}> سفارش ها</li>
                     <li>خروج از سیستم</li>

                   </ul>
            </div>
        </div>
        )
    }
    
    return (
        <>
     
         {checkForRedirect()}
        </>
    )
}


export default Dashboard