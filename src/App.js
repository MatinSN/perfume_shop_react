import React, { useState,useEffect } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import DetailView from "./components/DetailView/DetailView"
import DiscountPage from "./pages/discountsPage/DiscountPage"
import WomenPerfumes from "./pages/womenPefumes/WomenPerfumes"
import MenPerfumes from "./pages/menPerfumes/MenPerfumes"
import MenTesters from "./pages/menTesters/menTesters"
import WomenTesters from "./pages/womenTesters/womenTesters"
import BrandPerfumes from "./pages/brandPerfumes/brandPerfumes"
import SignUpSignIn from "./pages/signUpSignIn/SignUpSignIn"
import SearchResultPage from "./pages/searchResultPage/SearchResultPage"
import CheckoutDetail from "./pages/checkoutDetail/CheckoutDetail"
import BigSizePerfumesPage from "./pages/bigSizePerfumesPage/BigSizePerfumesPage"
import CallbackPage from "./pages/callbackPage/CallbackPage"
import BrandPage from "./pages/brandPage/BrandPage"
import {useDispatch} from "react-redux"
import {setCart} from "./redux/action/cartActions"
import axios from "axios"
import Dashboard from "./pages/dashboard/Dashboard"
import {signUp,login,getCartProducts,addProductToCart,deleteItemWithQuantity,deleteCartItem,syncCart} from "./redux/action/api"
import {useSelector} from "react-redux"
import {setToken,setIsLoggedIn} from "./redux/action/userActions"


function App() {
  /*
  step1 :  const { productItems } = Data 
  lai pass garne using props
  
  Step 2 : item lai cart ma halne using useState
  ==> CartItem lai pass garre using props from  <Cart CartItem={CartItem} /> ani import garrxa in cartItem ma
 
  Step 3 :  chai flashCard ma xa button ma

  Step 4 :  addToCart lai chai pass garne using props in pages and cart components
  */

  //Step 1 :
  const { productItems } = Data
  const { shopItems } = Sdata

  //Step 2 :
  const [CartItem, setCartItem] = useState([])
  const dispatch =useDispatch()

  const setUserCart=()=>{
    const token = localStorage.getItem("token")

    if(token){
     dispatch(setToken(token))
     dispatch(setIsLoggedIn(true))
     dispatch(getCartProducts(token))

    }
    else{
      let cart = JSON.parse(localStorage.getItem("cart"))
      console.log("Cart cart",cart)
        if(cart===null){
          cart =[]
        }

        dispatch(setCart(cart))

    }
  }
  
   const [fetch,setFetch]= useState(true)
   const isLoggedIn =useSelector(state=>state.user.isLoggedIn)
   const storeToken = useSelector(state=>state.user.token)
   const storeCart = useSelector(state=>state.cart)
   useEffect(()=>{
    if(fetch){
      
      setUserCart()
      setFetch(false)   
    }
    console.log("is logged in",isLoggedIn)
    if(isLoggedIn){
      console.log("User has logged in")
      const extractedCart =[]
      storeCart.forEach((item)=>{
        extractedCart.push({
          id:item.productId,
          quantity:item.quantity
        })
      })

      dispatch(syncCart(storeToken,extractedCart))
      
    }
  //   axios.post('https://gateway.zibal.ir/v1/request', {
  //     "merchant": "zibal",
  //     "amount": 160000,
  //     "callbackUrl": "http://yourapiurl.com/callback.php",
  //     "description": "Hello World!",

  // })
  //   .then((response) => {
  //     console.log("Response",response);
  //   }, (error) => {
  //     console.log(error);
  //   })
      // if(fetch){
      //       dispatch(login("temp5","1234"))
      //       setUserCart()
      //       setFetch(false)
      // }
     
      
   },[isLoggedIn])
  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)
    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    const productExit = CartItem.find((item) => item.id === product.id)

    // if product is exit and its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
    
    
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          {/* <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route> */}
          <Route path='/checkout' exact>
            <CheckoutDetail  />
          </Route>
          <Route path='/bigSize' exact>
            <BigSizePerfumesPage  />
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard  />
          </Route>
          <Route path='/product/:id' exact>
            <DetailView />
            </Route>
            <Route path='/search/:searchWord' exact>
            <SearchResultPage />
            </Route>
            <Route path='/' exact>
            <DiscountPage />
            </Route>
            <Route path='/callback' exact>
            <CallbackPage />
            </Route>
            <Route path='/womenPerfumes' exact>
            <WomenPerfumes />
            </Route>
            <Route path='/womenTesters' exact>
            <WomenTesters />
            </Route>
            <Route path='/menPerfumes' exact>
            <MenPerfumes />
            </Route>
            <Route path='/menTesters' exact>
            <MenTesters />
            </Route>
            <Route path='/brands' exact>
            <BrandPage    />
          </Route>
            <Route path='/brands/:name' exact>
            <BrandPerfumes />
            </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path='/signUpSignIn' exact>
             <SignUpSignIn />
          </Route>
        </Switch>
        <Footer />
      </Router>
    
    </>
  )
}

export default App
