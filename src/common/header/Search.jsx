import React,{useState,useEffect} from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import {getPerfumes} from "../../redux/action/api"
import ActionTypes from "../../redux/action/actionTypes"
import { toFarsiNumber,getDiscountPrice } from "../../utils"
import {resetSearchResults} from "../../redux/action/searchActions"

const Search = ({ CartItem }) => {
   
   const [numberOfCartItems,setNumberOfCartItems]=useState(0)
   const cart = useSelector(state=>state.cart)
   const token = useSelector(state=>state.user.token)
   const searchResults = useSelector(state=>state.searchCards.searchResults)
   const [searchWord,setSearchWord] = useState("")
   const dispatch = useDispatch()

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

const onSearchWordChange =(e)=>{
      setSearchWord(e.target.value)

      console.log("search word is",searchWord)
      dispatch(resetSearchResults())

      if(e.target.value){
        dispatch(getPerfumes(1,20,false,ActionTypes.ADD_SEARCH_RESULT,"Both","Both",false,false,false,"",searchWord))
         
      }
     
   
}


const handleKeyDown = (event) => {
  if (event.key === 'Enter' && searchWord) {
    // 👇 Get input value

    window.location.replace(`http://127.0.0.1:3000/search/${searchWord}`);
    
  }
};
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex'>
           
            <i className='fa fa-search'></i>

            <input type='text' onKeyDown={handleKeyDown} value={searchWord} onChange={onSearchWordChange} placeholder='جست و جو عطر مورد نظر' />
          
            <span className="search-btn-container"><button className="search-btn">جست و جو</button></span>
            {searchResults.length > 0 && <div className="search-result-container">
              {searchResults.map((result)=>{
                  return(
                    <>                   
                     <div className="search-item-container">
                    <div className="search-item search-item-image">
                      <img width="100" height="100" src={result.image}></img>
                    </div>
                    <div className="search-item search-item-name">
                      <h5> {result.name}</h5>
                      
                    </div>
                    <div className="search-item search-item-price">
                      <h5 className="text-decoration-line-through">{toFarsiNumber(result.price)} <label>تومان</label></h5>
                      
                    </div>
                    <div className="search-item search-item-discount">
                      <h5>{toFarsiNumber(getDiscountPrice(parseFloat(result.price),parseInt(result.discount)))}  <label>تومان</label></h5>
                      
                    </div>
                </div>
                <hr />
                </>

                  )
              })}
          
             
              
              
            </div>}
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
