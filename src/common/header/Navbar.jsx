import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex nav-container'>
        {/* onClick={() => setMobileMenu(false)} */}
        {/* MobileMenu ? "nav-links-MobileMenu" :  */}
          <div className='navlink'>
            <ul className={"link f_flex capitalize"}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
            
              <li className="nav-item">
                <Link to='/brands'> <h5>برندها</h5> </Link>
              </li>
              <li className="nav-item">
                <Link to='/bigSize'><h5>ادکلن های سایز بزرگ</h5>   </Link>
              </li>
              <li className="nav-item">
                <Link to='/track'>  <h4>تستر ها</h4></Link>
              </li>
              <li className="nav-item">
                <Link to='/'>   <h4>خانه</h4></Link>
              </li>
              {/* <li>
                <Link to='/'>خانه</Link>
              </li> */}
            </ul>

            {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
