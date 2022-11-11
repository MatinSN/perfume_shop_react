import React from "react"
import Cart from "./Cart"
import "./style.css"


const NewArrivals = () => {
  

  return (
    <>
      <section className='NewArrivals background'>
        <div className='container'>
       
            
           
            <div className='d-flex justify-content-center'>
              <h3 className="text-decoration-underline">محصولات جدید</h3>
            </div>
 

          <Cart />
        </div>
      </section>
    </>
  )
}

export default NewArrivals
