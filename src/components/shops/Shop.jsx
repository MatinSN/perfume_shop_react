import React,{useState,useEffect} from "react"
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes } from "../../redux/action/api"

const Shop = ({ addToCart, shopItems }) => {
  const [fetchData,setFetchData] = useState(true)
  const cardsData = useSelector((state)=>state.cards)
  const dispatch = useDispatch()


 
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
          {/* <Catg /> */}

          <div className='contentWidth'>
         
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart} cards={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop
