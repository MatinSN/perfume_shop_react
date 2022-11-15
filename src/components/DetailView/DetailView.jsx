import React,{useState} from "react"
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./DetailView.css"
import { toFarsiNumber } from "../../utils";
import { useSelector,useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/action/cartActions";


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}

const DetailView = () => {
   const {id} = useParams()
   const [numberOfPerfumes,setNumberOfPerfumes]=useState(1)
   const user = useSelector(state=>state.user)
   const dispatch = useDispatch()


   const settings = {
    rows:1,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  const onIncreaseClick=(e)=>{
     e.preventDefault()
     setNumberOfPerfumes(numberOfPerfumes+1)
  }
  const onDecreaseClick = (e)=>{
    e.preventDefault()
     if(numberOfPerfumes > 1){
      setNumberOfPerfumes(numberOfPerfumes-1)
     }
  }
  const onAddToCartClick =()=>{

    if(user.token){

    }else{
    console.log("For setting ")

      dispatch(addToCartAction("1","test",20,"",numberOfPerfumes))
    }

  }
  return (
    <>
     <div className="mrg">
 
    
     <div className="d-flex justify-content-center">
      <div >
           <div className="slider_box">
           <Slider {...settings}>
      <img width="300" height="300" src={"http://127.0.0.1:8000/media/perfumes/p1.jpg"} alt='' />      
      <img width="300" height="300" src={"http://127.0.0.1:8000/media/perfumes/p1.jpg"} alt='' />      
      
      
      </Slider>
                  
           </div>
               
       </div>

      </div>
      <div md='8'>
        
      <div className='d-flex flex-column mb-3'> 
      
         <div className="mrg-top">
             <h2 className="text">عطر ادکلن تام فورد اومبره لدر | Tom Ford Ombré Leather 2018</h2>
         </div>
         <div className='rate d-flex justify-content-end'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half'></i>
          </div>
          <div className='rate d-flex justify-content-end m-t-5'>
            <h3 className="mrg-small"><label>تومان</label>{toFarsiNumber(12000000)}  </h3>
            <h3 className="mrg-small"><label>تومان</label>{toFarsiNumber(12000000)}  </h3>
          </div>
       
            <div className="addToCart">
            <button className="addToCart-btn" onClick={onDecreaseClick}>-</button>
             <input className="addToCart-input" value={numberOfPerfumes} type="number" />
             <button className="addToCart-btn" onClick={onIncreaseClick}>+</button>
            </div>
            <div >
            <button className="addBtn" onClick={onAddToCartClick}>افزودن به سبد خرید</button>

            </div>
          
  
          <div className="d-flex">
              <p className="text">
              عطر ادکلن تام فورد اومبره لدر-Tom Ford Ombré Leather عطری است با رایحه کمی گرم و چرمی. این عطر در سال ۲۰۱۸ به بازار عطر و ادکلن عرضه شد . تام فورد اومبره لدر- Tom Ford Ombré Leather عطری است مردانه و بسیار شیک. 
              </p>
          </div>
          <table class="text">
              <tbody>
              <tr className="mrg-top-ms">
                <td><span >سایز</span></td>
                <td ><span >100&nbsp; میل</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >طبع</span></td>
                <td ><span > 	گرم و تلخ</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >عطار</span></td>
                <td ><span ></span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >جنسیت</span></td>
                <td ><span >مرد</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >نوع عطر	</span></td>
                <td ><span >ادو پرفیوم
</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >فصل</span></td>
                <td ><span >همه فصل ها</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >ماندگاری</span></td>
                <td ><span >بسیار خوب
</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >پراکندگی</span></td>
                <td ><span >بسیار خوب</span></td>
                
             </tr>
           
             
              </tbody>

          </table>
        
        
      </div>
      <div className="description">
        <hr />
      <div className="description-content">
        <h2>عطر ادکلن بودیسیا د ویکتوریوس بلو سفیر-Boadicea the Victorious Blue Sapphire</h2>
        <p>عطر ادکلن بودیسیا د ویکتوریوس بلو سفیر-Boadicea the Victorious Blue Sapphire عطری است گرم و تلخ.این عطر در سال 2013 به بازار عطر و ادکلن عرضه شد.عطر ادکلن بودیسیا د ویکتوریوس بلو سفیر-Boadicea the Victorious Blue Sapphire عطری است زنانه و مردانه و لاکچری.</p>
        <div className="description-img">
        <img  width="300" height="300" src={""} alt='' />      
        <div>
           <p>this is the title of the image</p>
        </div>
        </div>
   

      </div>
      <div  >توضیحات</div>
    </div>

      </div>
  
     </div>

     
    </>
  )
}

export default DetailView
