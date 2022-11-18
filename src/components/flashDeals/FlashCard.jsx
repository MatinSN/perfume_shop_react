import React, { useState,useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useDispatch,useSelector} from "react-redux"
import {getPerfumes} from "../../redux/action/api"
import {toFarsiNumber,getDiscountPrice} from "../../utils"
import ActionTypes from "../../redux/action/actionTypes"

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
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const [fetchData,setFetchData] = useState(true)
  const cardsData = useSelector((state)=>state.cards)
  const dispatch = useDispatch()


  useEffect(()=>{
     if(fetchData){
        dispatch(getPerfumes(1,6,false,ActionTypes.ADD_CARD_INFO,"both","both",false,false,false))
        setFetchData(false)
     }
  },[])

  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    rows:1,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <Slider {...settings}>
        {cardsData.map((perfume) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{perfume.discount}% Off</span>
                  <img width="200" height="200" src={perfume.image} alt='' />
                  <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div>
                </div>
                <div className='product-details'>
                <p className="fw-light text-secondary">{perfume.brandName}</p>
                  <h3>{perfume.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-o'></i>
                  </div>
                  <div className='price'>
                    <div>
                      <h6 className="text-decoration-line-through fw-light text-secondary"><label>تومان</label>{toFarsiNumber(perfume.price)}  </h6>
                      <h6><label>تومان</label>{toFarsiNumber(getDiscountPrice(parseFloat(perfume.price),parseInt(perfume.discount)))}  </h6>
                    </div>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(perfume)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
