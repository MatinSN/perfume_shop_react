import React,{useState,useEffect} from "react"
import "./style.css"
import {useParams} from "react-router-dom"
import queryString from 'query-string';

const CallbackPage=()=>{
   const {trackId,success,status} = queryString.parse(window.location.search)
   let message=""

   if(status==="1"){
    message=`با موفقیت انجام شد${trackId}سفارش شما با شماره پیگیری`
  }
    
   useEffect(()=>{
         
   },[])
   
    console.log(queryString.parse(window.location.search));
    return(
        <>
        <div style={
        {    width:"100%",
            height:"1000px",
        }
        }>
            <div>
                 <h4>
                    {message}
                 </h4>
            </div>
        </div>
        </>
    )
}


export default CallbackPage