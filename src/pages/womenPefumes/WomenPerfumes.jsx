import React,{useEffect,useState} from "react"
import LongList from "../../components/longList/LongList"
import { useDispatch,useSelector } from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import ActionTypes from "../../redux/action/actionTypes"
import { resetCardsReducer } from "../../redux/action/cardAction"


const WomenPerfumes = () => {
  
    const [pageNum,setPageNum]=useState("1")
    const [fetchData,setFetchData] = useState(true)
    const [pageCount,setPageCount]=useState(1)
    const cardsInfo = useSelector(state=>state.cards)
    const itemsPerPage = 6
    const dispatch = useDispatch()

  const getPageData=(pageNum)=>{
       dispatch(resetCardsReducer())
       dispatch(getPerfumes(pageNum,itemsPerPage,false,ActionTypes.ADD_CARD_INFO,false,"Female"))
  }
  
  const setNumberOfPages=()=>{
    setPageCount(Math.ceil((cardsInfo.count/itemsPerPage)))
  }

  useEffect(()=>{
    if(fetchData){
      getPageData("1")
      setFetchData(false)
    }
    setNumberOfPages()
    
  },[cardsInfo.count])


  return (
    <>
    <LongList getPageData={getPageData} pageCount={pageCount} shopItems={cardsInfo.cards} title="عطرهای زنانه"  />

    </>
  )
}

export default WomenPerfumes
