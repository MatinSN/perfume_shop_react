import React,{useState,useEffect} from "react"
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./DetailView.css"
import { toFarsiNumber,getDiscountPrice } from "../../utils";
import { useSelector,useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/action/cartActions";
import {getPerfumeWithId,addProductToCart,getComments, addNewComment} from "../../redux/action/api"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


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
   const [commentText,setCommentText] = useState("")
   const user = useSelector(state=>state.user)
   const storeCart = useSelector(state=>state.cart)
   const dispatch = useDispatch()
   const [fetch,setFetch] = useState(true)
   const perfumes = useSelector(state=>state.perfumes)
   const comments = useSelector(state=>state.comments)
   const [perfumeDetail,setPerfumeDetail] = useState  ({
    name:"",
    rate :0,
    price : 0,
    discount :0,
    description :"",
    size : 0,
    nature :"",
    olfactionGroup : "",
    perfumer :"",
    gender :"",
    perfumeType :"",
    season :"",
    dispersal :"",
    image1 :"",
    image2 :"",
    quantity :0,
    details :[]
})

   useEffect(()=>{
        
        if(fetch){
          window.scrollTo(0, 0);
          dispatch(getPerfumeWithId(id))
          dispatch(getComments(id))
          setFetch(false)
        }

        if(perfumes[id] !== undefined){
          setPerfumeDetail(perfumes[id])
        }
   },[perfumes])

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

  const onCommentTextChange=(e)=>{
       setCommentText(e.target.value)
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

  const onCommentSubmit=(e)=>{
         e.preventDefault()
         dispatch(addNewComment(user.token,id,commentText))
         setCommentText("")

  }
  const onAddToCartClick =(productName,price,discount,image)=>{

    if(user.isLoggedIn){
         dispatch(addProductToCart(user.token,id,numberOfPerfumes))
    }else{
    
      dispatch(addToCartAction(id,productName,id,price,discount,image,numberOfPerfumes))
 

  }
}
  return (
    <>
     <div className="mrg perfume-detail-container">
 
    
     <div className="d-flex justify-content-center perfume-images">
      <div >
           <div className="slider_box">
           <Slider {...settings}>
      <img width="300" height="300" src={`http://127.0.0.1:8000${perfumeDetail.image1}`} alt='' />      
      <img width="300" height="300" src={`http://127.0.0.1:8000${perfumeDetail.image2}`} alt='' />      
      
      
      </Slider>
                  
           </div>
               
       </div>

      </div>
      <div md='8'>
        
      <div className='d-flex flex-column mb-3'> 
      
         <div className="mrg-top">
             <h2 className="text">{perfumeDetail.name}</h2>
         </div>
         <div className='d-flex justify-content-end'>
         <Rater interactive={false}   total={5} rating={perfumeDetail.rate} />
          </div>
          <div className='rate d-flex justify-content-end m-t-5'>
            <h3 className="mrg-small"><label>تومان</label>{toFarsiNumber(getDiscountPrice(parseFloat(perfumeDetail.price),parseInt(perfumeDetail.discount)))}  </h3>
            <h3 className="mrg-small text-decoration-line-through"><label>تومان</label>{toFarsiNumber(perfumeDetail.price)}  </h3>

          </div>
       
          
          
  
          <div className="description-container">
              <p className="text">
                {perfumeDetail.description}
              </p>
          </div>
          <table class="text">
              <tbody>
              <tr className="mrg-top-ms">
                <td><span >سایز</span></td>
                <td ><span >{perfumeDetail.size}&nbsp; میل</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >طبع</span></td>
                <td ><span > 	{perfumeDetail.nature}</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >گروه بویایی</span></td>
                <td ><span > 	{perfumeDetail.olfactionGroup}</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >عطار</span></td>
                <td ><span >{perfumeDetail.perfumer}</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >جنسیت</span></td>
                <td >{(perfumeDetail.gender === "Male" && <span>مردانه</span>)|| (perfumeDetail.gender==="Female" && <span>زنانه</span>)||(perfumeDetail.gender==="Both" && <span>هر دو</span>)}</td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >نوع عطر	</span></td>
                <td ><span >{perfumeDetail.perfumeType}
</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >فصل</span></td>
                <td ><span > {perfumeDetail.season}</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >ماندگاری</span></td>
                <td ><span > {perfumeDetail.persistence}
</span></td>
                
             </tr>
             <tr className="mrg-top-ms">
                <td><span >پراکندگی</span></td>
                <td ><span > {perfumeDetail.dispersal}</span></td>
                
             </tr>
           
             
              </tbody>

          </table>
        
          {(perfumeDetail.quantity === 0 && <h2>ناموجود</h2>)|| (<div className="addToCart-container">
            <div className="addToCart">
            <button className="addToCart-btn" onClick={onDecreaseClick}>-</button>
             <input className="addToCart-input" value={numberOfPerfumes} type="number" />
             <button className="addToCart-btn" onClick={onIncreaseClick}>+</button>
            </div>
            <div >
            <button className="addBtn" onClick={()=>
              onAddToCartClick(perfumeDetail.name,perfumeDetail.price,perfumeDetail.discount,perfumeDetail.image1)
            }>افزودن به سبد خرید</button>

            </div>
          </div>)}
      </div>
      <div className="description">
        <hr />
        <div className="description-content">
        {perfumeDetail.details.map((detail)=>{
          return (
            <div className="detail-container" key={detail.id}>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
            <div className="description-img">
            {/* <div>
               <p>this is the title of the image</p>
            </div> */}
            </div>
       
    
          </div>
          )
         })}
          </div>
        
      <div  >توضیحات</div>
    </div>

      </div>
  
     </div>
     <hr />
      <div className="comment-form-container">
      <form onSubmit={onCommentSubmit} className="comment-form">
          <h3 className="form-comment-header">دیدگاه خود را بنویسید</h3>
          <div className="form-comment">
            <label>دیدگاه شما</label>
            <textarea required value={commentText} onChange={onCommentTextChange} className="comment-text" />
          </div>
          <button className="comment-form-button">ثبت</button>
        </form>
      </div>
       
     
      <hr />
      <div className="comments-container">
          {comments.map((comment)=>{
            return (
              <>
               <div className="comment-container" key={comment.id}>
               <hr />
            <div className="comment-header">
              <div><h4>-{comment.username}</h4></div>
              <div>{comment.createdAt.toLocaleDateString('fa-IR').toLocaleString()}</div>
            </div>
            <div className="comment-body">
              
              <p>{comment.comment}</p>
              
            </div>
            
          </div>
       

              </>
            )
          })}
      </div>
     
    </>
  )
}

export default DetailView
