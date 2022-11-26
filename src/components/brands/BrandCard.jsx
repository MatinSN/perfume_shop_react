//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import React, { useState } from "react"
import { toFarsiNumber,getDiscountPrice } from "../../utils"
import { Link } from "react-router-dom"
import "./style.css"

const BrandCard = ({ brands }) => {


  return (
    <>
      {brands.map((item)=> {
        return (
          <div className='box ' key={item.id}>
            <div className='product mtop brand-container'>
              <div className='img '>
                <Link to={`brands/${item.name}`}>
                  <img width={100} height={100} src={item.image} alt='' />
                </Link>
              </div>
            
            
              
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BrandCard
