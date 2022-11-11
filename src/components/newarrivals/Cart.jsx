import React ,{useEffect,useState}from "react"
import Ndata from "./Ndata"
import {useDispatch,useSelector} from "react-redux"
import ActionTypes from "../../redux/action/actionTypes"
import { getPerfumes } from "../../redux/action/api"

const Cart = () => {

  const [count, setCount] = useState(0)
  const [fetchData,setFetchData] = useState(true)
  const cardsData = useSelector((state)=>state.newArrivals)
  const dispatch = useDispatch()

  console.log("newArrivals reverse",cardsData.reverse())
  useEffect(()=>{
     if(fetchData){
        dispatch(getPerfumes(1,6,true,ActionTypes.ADD_NEW_ARRIVAL))
        setFetchData(false)
     }
  },[])

  const reversedData = [...cardsData].reverse();
  return (
    <>
      <div className='content grid product'>
        {reversedData.map((perfume) => {
          return (
            <div className='box' key={perfume.id}>
              <div className='img'>
                <img src={perfume.image} alt='' />
              </div>
              <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star-half-o'></i>
                    <i className='fa fa-star-o'></i>
                  </div>
              <p className="fw-light text-secondary">{perfume.brandName}</p>
              <p>{perfume.name}</p>
            
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart
