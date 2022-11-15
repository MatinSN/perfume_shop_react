import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import Shop from "../../components/shops/Shop"
import ReactPaginate from 'react-paginate';
import ActionTypes from "../../redux/action/actionTypes"
import "./style.css"

const LongList = ({ shopItems,title="A title for the list",pageCount ,getPageData,itemsPerPage}) => {
  const [open, setOpen] = useState(false);
  
  const dateSort="مرتب سازی براساس آخرین"
  const priceDec="مرتب سازی بر اساس گرانترین"
  const priceAce ="مرتب سازی بر اساس ارزانترین"
  const rateSort = "مرتب سازی با اساس امتیاز"

  const [selectedFilter,setSelectedFilter]=useState(rateSort)
  const [forcedPage,setForcePage]=useState(0)

  const handleOpen = () => {
    setOpen(!open);
  };

  const dateSortHandler=()=>{
    setForcePage(0)
    getPageData("1",true,false,false,false)
    setSelectedFilter(dateSort)
    setOpen(false)
  }

  const priceDecHandler=()=>{
    setForcePage(0)
    getPageData("1",false,false,true,false)
    setSelectedFilter(priceDec)
     
    setOpen(false)
  }
  const priceAceHandler=()=>{
    setForcePage(0)
    getPageData("1",false,false,false,true)
    setSelectedFilter(priceAce)
    setOpen(false)
  }
  const rateSortHandler=()=>{
    setForcePage(0)
    getPageData("1",false,true,false,false)
    setSelectedFilter(rateSort)
    setOpen(false)
  }

    const handlePageClick = (event) => {
  
        console.log(
          `User requested page number ${event.selected} `
        );
        
        getPageData((parseInt(event.selected)+1).toString())
        setForcePage(parseInt(event.selected))
      };
   

    return (
      <>
    
    
    
       <div className='page-heading mrg-small'>
       <div className="dropdown">
          <button onClick={handleOpen}>{selectedFilter}</button>
          {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button onClick={rateSortHandler}>{rateSort}</button>
          </li>
          <li className="menu-item">
            <button onClick={dateSortHandler}>{dateSort}</button>
          </li>
          <li className="menu-item">
            <button onClick={priceDecHandler}>{priceDec}</button>
          </li>
          <li className="menu-item">
            <button onClick={priceAceHandler}>{priceAce}</button>
          </li>
        </ul>
      ) : null}
      </div>
        <h3 className="page-title">{title} </h3>
        
        </div>
       <Shop shopItems={shopItems} />
       <div >
       <ReactPaginate
       className="pagginator"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        breakClassName="pagginator-break"
        activeClassName="activatePage"
        forcePage={forcedPage}
      />
       </div>
    
      </>
    )
  }
  
  export default LongList
  