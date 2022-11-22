import React,{useState,useEffect} from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Search = ({ CartItem }) => {
   
   const [numberOfCartItems,setNumberOfCartItems]=useState(0)
   const cart = useSelector(state=>state.cart)
   const token = useSelector(state=>state.user.token)

   const countCartItems=()=>{
      let result=0
      console.log("cart is",cart)
      cart.forEach((item)=>{
        result = result + item.quantity
      })
      setNumberOfCartItems(result)
   }

   useEffect(()=>{
      
      countCartItems()
   },[cart])
 

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  const profileIconJsx=()=>{
    
    if(token){
      return (
        <Link to="/dashboard">
           <i className='fa fa-user icon-circle'></i>

        </Link>

      )
    }
    else{
      return (
        <Link to="/signUpSignIn">
           <h5>ورود</h5>
        </Link>
      )
    }
  }

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='جست و جو عطر مورد نظر' />
            <span className="search-btn-container"><button className="search-btn">جست و جو</button></span>
            {/* <div className="search-result-container">
              <div className="search-item-container">
                  <div className="search-item">
                    <img width="50" height="50"></img>
                  </div>
                  <div className="search-item">
                    <h5>عطر مورد نظر</h5>
                    
                  </div>
              </div>
             
              
              
            </div> */}
          </div>
  
          <div className='icon f_flex width icon-container'>
            {profileIconJsx()}
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{numberOfCartItems}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
