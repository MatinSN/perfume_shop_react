import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import Shop from "../../components/shops/Shop"
import axios from "axios"
import ActionTypes from "../../redux/action/actionTypes"
import "./style.css"

const DiscountPage = ({ addToCart, shopItems }) => {
    const [fetchData,setFetchData] = useState(true)
    const cards = useSelector((state)=>state.pageCards)
    const dispatch = useDispatch()
  
  
    useEffect(()=>{
       if(fetchData){
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_MEN_CARD,"false","Male"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_WOMEN_CARD,"false","Female"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_MEN_TESTER_CARD,"true","Male"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_WOMEN_TESTER_CARD,"true","Female"))

          setFetchData(false)
       }
       console.log("CARD",cards)
    },[cards])
   

    return (
      <>
       <div className='d-flex justify-content-center mrg-small'><h3>حراج عطر های مردانه</h3></div>
       <Shop shopItems={cards.menPerfumes} addToCart={addToCart} />
       <hr />
       <div className='d-flex justify-content-center mrg-small'><h3>حراج عطر های زنانه</h3></div>
       <Shop shopItems={cards.womenPerfumes} addToCart={addToCart} />
       <hr />
       <div className='d-flex justify-content-center mrg-small'><h3>حراج تستر های زنانه</h3></div>
       <Shop shopItems={cards.womenTesters} addToCart={addToCart} />
       <hr />
       <div className='d-flex justify-content-center mrg-small'><h3>حراج تستر های مردانه</h3></div>
       <Shop shopItems={cards.menTesters} addToCart={addToCart} />
      </>
    )
  }
  
  export default DiscountPage
  