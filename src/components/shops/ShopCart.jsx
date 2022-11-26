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
import { Link } from "react-router-dom"
import { toFarsiNumber,getDiscountPrice } from "../../utils"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const ShopCart = ({ shopItems, addToCart,cards }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      {cards.map((perfume)=> {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                <span className='discount'>{perfume.discount}% Off</span>
                <Link to={`/product/${perfume.id}`}>
                   <img width={200} height={200} src={perfume.image} alt='' />
                </Link>
              </div>
              <div className='product-details'>
                <h3>{perfume.name}</h3>
                <Rater interactive={false}   total={5} rating={perfume.rate} />

                <div className='price'>
                <div>
                      <h6 className="text-decoration-line-through fw-light text-secondary"><label>تومان</label>{toFarsiNumber(perfume.price)}  </h6>
                      <h6><label>تومان</label>{toFarsiNumber(getDiscountPrice(parseFloat(perfume.price),parseInt(perfume.discount)))}  </h6>
                    </div>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
