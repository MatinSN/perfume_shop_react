import React from "react"
import FlashCard from "./FlashCard"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
    
      <section className='flash'>
        <div className='container'>
       
          <div className='d-flex justify-content-center'>
            <div className="f_flex">
          
            <h3>  حراج روزانه</h3>
           
            </div>
           
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
