import React from 'react'
import './navbar.scss'
import { iconsmenu } from './icons'
import { navbarmenu } from './data'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate= useNavigate()
  // const goToCart = () => {
  //   navigate('/cart');
  // };
  // const goToWishlist = () => {
  //   navigate('/wishlist');
  // };

  return (
    <div className='Navbar_Main'>
        <div className='Navbar_Sub'>
          {/* Logo plus header */}
                 <div className='Navbar_Logo'>
                    <div className='Logo_continer'>
                    <img src={require('../../Images/shinobisign.png')} alt="" />
                    </div>
                     <div className='Navbar_Logo_Header'>
                       MissxArtist
                     </div>
                 </div>
                 {/* Navbar list */}
            <div className='Navbar_Menu'>
                {navbarmenu.map((item,id)=>{
                  return(
                    <div key={id} className='Navbar_Menu_Items' onClick={()=>navigate(item.url)} >
                      {item.name}
                    </div>
                  )
                })}
            </div>
            {/* Navbar icons  */}
            <div className='Navbar_Icons'>
          {
            iconsmenu.map((item,id)=>{
              return(
                <div key={id} className='nav-items' onClick={()=>navigate(item.url)}>{item.icons}</div>
              )
            })
          }
            </div>
        </div>
    </div>
  )
}

export default Navbar

 