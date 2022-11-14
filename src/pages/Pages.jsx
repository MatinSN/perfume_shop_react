import React,{useEffect,useState} from "react"
import Home from "../components/MainPage/Home"
import FlashDeals from "../components/flashDeals/FlashDeals"
import TopCate from "../components/top/TopCate"
import NewArrivals from "../components/newarrivals/NewArrivals"
import Discount from "../components/discount/Discount"
import Shop from "../components/shops/Shop"
import Annocument from "../components/annocument/Annocument"
import Wrapper from "../components/wrapper/Wrapper"
import {useSelector,useDispatch} from "react-redux"
import { testApi } from "../redux/action/api"
import { addNewCard } from "../redux/action/cardAction"
import store from '../redux/getStore'


const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch()
  const [fetchData,setFetchData] = useState(true)
   
  const onClick=()=>{

    
  }

  useEffect(() => {
     
   
    console.log("state")
    console.log(state)
  },[state]);

  return (
    <>
 
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <NewArrivals />
     
      {/* <Discount /> */}
      {/* <TopCate /> */}
      {/* <Annocument /> */}
      <Wrapper />
    </>
  )
}

export default Pages
