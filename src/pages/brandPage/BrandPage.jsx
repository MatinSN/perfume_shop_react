import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes,getBrands } from "../../redux/action/api"


import {Link} from "react-router-dom"
import {resetDiscountPageReducer} from "../../redux/action/discountPageActions"
import Brands from "../../components/brands/Brands"

const BrandPage = ({ addToCart, shopItems }) => {
    const [fetchData,setFetchData] = useState(true)
    const cards = useSelector((state)=>state.pageCards)
    const brands = useSelector(state=>state.brands)
    const dispatch = useDispatch()
  
  
    useEffect(()=>{
       if(fetchData){
          dispatch(resetDiscountPageReducer())
          
          dispatch(getBrands("1",10,"LUX"))
          dispatch(getBrands("1",10,"Designer"))

          setFetchData(false)
       }
       console.log("CARD",cards)
    },[cards])
   

    return (
      <>
       

       
       <div className='shop-header'>
          <h5>  </h5>

         <h3>برندهای لوکس</h3>
       </div>
       <Brands brands={brands.luxBrands} />

       <hr />
       <div className='shop-header'>
          <h5>  </h5>

         <h3>برندهای دیزاینر</h3>
       </div>
       <Brands brands={brands.designerBrands} />
      </>
    )
  }
  
  export default BrandPage
  