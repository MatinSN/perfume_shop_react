import React,{useEffect,useState} from "react"
import LongList from "../../components/longList/LongList"
import { useDispatch,useSelector } from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import ActionTypes from "../../redux/action/actionTypes"
import { resetCardsReducer } from "../../redux/action/cardAction"


const WomenTesters = () => {
  
    const [pageNum,setPageNum]=useState("1")
    const [fetchData,setFetchData] = useState(true)
    const [pageCount,setPageCount]=useState(1)
    const cardsInfo = useSelector(state=>state.cards)
    const itemsPerPage = 6
    const dispatch = useDispatch()

    

  const getPageData=(pageNum,dateSort=false,rateSort=false,priceDec=false,priceAce=false)=>{
       dispatch(resetCardsReducer())
       dispatch(getPerfumes(pageNum,itemsPerPage,dateSort,ActionTypes.ADD_CARD_INFO,true,"Female",rateSort,priceAce,priceDec))
  }
  
  const setNumberOfPages=()=>{
    setPageCount(Math.ceil((cardsInfo.count/itemsPerPage)))
  }

  useEffect(()=>{
    if(fetchData){
      getPageData("1",true)
      setFetchData(false)
    }
    setNumberOfPages()
    console.log(cardsInfo)
  },[cardsInfo])


  return (
    <>
    <LongList itemsPerPage={itemsPerPage} getPageData={getPageData} pageCount={pageCount} shopItems={cardsInfo.cards} title="تستر زنانه "  />

    </>
  )
}

export default WomenTesters
