import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes,getBrands } from "../../redux/action/api"
import Shop from "../../components/shops/Shop"
import axios from "axios"
import ActionTypes from "../../redux/action/actionTypes"
import "./style.css"
import {Link} from "react-router-dom"
import {resetDiscountPageReducer} from "../../redux/action/discountPageActions"
import Brands from "../../components/brands/Brands"

const DiscountPage = ({ addToCart, shopItems }) => {
    const [fetchData,setFetchData] = useState(true)
    const cards = useSelector((state)=>state.pageCards)
    const brands = useSelector(state=>state.brands)
    const dispatch = useDispatch()
  
  
    useEffect(()=>{
       if(fetchData){
          dispatch(resetDiscountPageReducer())
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_MEN_CARD,"false","Male"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_WOMEN_CARD,"false","Female"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_MEN_TESTER_CARD,"true","Male"))
          dispatch(getPerfumes(1,20,false,ActionTypes.ADD_WOMEN_TESTER_CARD,"true","Female"))
          dispatch(getBrands("1",20,"LUX"))
          dispatch(getBrands("1",20,"Designer"))

          setFetchData(false)
       }
       console.log("CARD",cards)
    },[cards])
   

    return (
      <>
       <div className='shop-header'>

       <Link to="menPerfumes"> <h5>مشاهده همه </h5></Link>

         <h3>حراج عطر های مردانه</h3>
         </div>
       <Shop shopItems={cards.menPerfumes} addToCart={addToCart} />
       <hr />
       <div className='shop-header'>
       <Link to="womenPerfumes"><h5>مشاهده همه </h5></Link>

         <h3>حراج عطر های زنانه</h3>
         
       </div>
       <Shop shopItems={cards.womenPerfumes} addToCart={addToCart} />
       <hr />
       <div className='shop-header'>
        <Link to="womenTesters"> <h5>مشاهده همه </h5></Link> 

         <h3>حراج تستر های زنانه</h3>
         
         </div>
       <Shop shopItems={cards.womenTesters} addToCart={addToCart} />
       <hr />
       <div className='shop-header'>
         <Link to="menTesters"> <h5>مشاهده همه </h5></Link>

         <h3>حراج تستر های مردانه</h3>
       </div>
       <Shop shopItems={cards.menTesters} addToCart={addToCart} />
       <hr />
       {/* <div className='shop-header'>
          <h5>مشاهده همه </h5>

         <h3>برندهای لوکس</h3>
       </div>
       <Brands brands={brands.luxBrands} />

       <hr />
       <div className='shop-header'>
          <h5>مشاهده همه </h5>

         <h3>برندهای دیزاینر</h3>
       </div>
       <Brands brands={brands.designerBrands} /> */}
      </>
    )
  }
  
  export default DiscountPage
  