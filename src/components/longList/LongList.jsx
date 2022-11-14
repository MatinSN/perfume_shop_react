import React,{useState,useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import { getPerfumes } from "../../redux/action/api"
import Shop from "../../components/shops/Shop"
import ReactPaginate from 'react-paginate';
import ActionTypes from "../../redux/action/actionTypes"
import "./style.css"

const LongList = ({ shopItems,title="A title for the list",pageCount ,getPageData}) => {
   
  
    const handlePageClick = (event) => {
  
        console.log(
          `User requested page number ${event.selected} `
        );
        
        getPageData((parseInt(event.selected)+1).toString())
      };
   

    return (
      <>
  
       <div className='d-flex justify-content-center mrg-small'><h3>{title} </h3></div>
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
      />
       </div>
    
      </>
    )
  }
  
  export default LongList
  