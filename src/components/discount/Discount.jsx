import React from "react"
import Dcard from "./Dcard"

const Discount = () => {
  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row'>
            <i className='fa-solid fa-caret-left'></i> 
            <span>View all</span>
            </div>
            <div className='heading-right row flex-row-reverse d-flex'>
              
          
             <h2>حراج روزانه</h2>
{/* 
              <img  src='https://img.icons8.com/windows/32/fa314a/gift.png' /> */}
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  )
}

export default Discount
