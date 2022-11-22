import React from "react";
import "./style.css"
import BrandCard from "./BrandCard";

const Brands =({brands})=>{

    return(
        <>
         <section className='shop background'>
                <div className='container d_flex'>
 

                <div className='contentWidth'>
                
                    <div className='product-content  grid1'>
                      <BrandCard  brands={brands} />
                    </div>
                </div>
                </div>
      </section>
        </>
    )
}


export default Brands