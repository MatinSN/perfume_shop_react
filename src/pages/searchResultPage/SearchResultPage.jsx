import React,{useEffect,useState} from "react"
import LongList from "../../components/longList/LongList"
import { useDispatch,useSelector } from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import ActionTypes from "../../redux/action/actionTypes"
import { resetCardsReducer } from "../../redux/action/cardAction"
import {resetSearchCardsReducer} from "../../redux/action/searchActions"
import { useParams } from "react-router-dom"

const SearchResultPage = () => {
    const {searchWord} =useParams()
    const [pageNum,setPageNum]=useState("1")
    const [fetchData,setFetchData] = useState(true)
    const [pageCount,setPageCount]=useState(1)
    const searchCards = useSelector(state=>state.searchCards)
    const itemsPerPage = 6
    const dispatch = useDispatch()

    

  const getPageData=(pageNum,dateSort=false,rateSort=false,priceDec=false,priceAce=false)=>{
       dispatch(resetSearchCardsReducer())
       console.log("search Word",searchWord)
       dispatch(getPerfumes(pageNum,itemsPerPage,dateSort,ActionTypes.ADD_SEARCH_CARD,"Both","Both",rateSort,priceAce,priceDec,"",searchWord))
  }
  
  const setNumberOfPages=()=>{
    setPageCount(Math.ceil((searchCards.count/itemsPerPage)))
  }

  useEffect(()=>{
    if(fetchData){
      getPageData("1",true)
      setFetchData(false)
    }
    setNumberOfPages()
    console.log(searchCards)
  },[searchCards])


  return (
    <>
    <LongList itemsPerPage={itemsPerPage} getPageData={getPageData} pageCount={pageCount} shopItems={searchCards.cards} title=" نتیجه جست و جو "  />

    </>
  )
}

export default SearchResultPage
