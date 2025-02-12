import React, {useState, useEffect, useRef} from 'react'
import logo from '../assets/icons/TradExpress.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef()
  const handleSetActive = (link) => {
      setActiveLink(link)
  }
  const closeMenubar = () => {
      setMenuOpen(false)
  }

  const openMenubar = () =>{
    if (window.innerWidth < 1024) { // Check if the screen width is less than 1024px (mobile devices)
        setMenuOpen(!menuOpen);
      }
}
const handleClickOutside = (event) => {
    if(navRef.current && !navRef.current.contains(event.target)){
        closeMenubar()
    }
}

//The mousedown event is used to detect when a mouse button is pressed down. 
useEffect(()=> {
    if(menuOpen){
        document.addEventListener("mousedown", handleClickOutside)
    } else{
        document.removeEventListener("mousedown", handleClickOutside)
    }
    return()=>{
        document.removeEventListener("mousedown", handleClickOutside)
    }
},[menuOpen])
// The return statement provides a cleanup function that removes the handleClickOutside event listener when the component unmounts or before the effect re-runs.

  return (
    <nav className='bg-[#7C20BE] max-w-[1440px] mx-auto  flex py-4 px-16 fixed top-0 left-0 right-0 z-50'>
      <div className=' flex flex-row w-full   justify-between items-center'>
      <NavLink to='/'>
      <img src={logo} alt="" />
      </NavLink>

      <div className='lg:hidden text-2xl  justify-items-center cursor-pointer'
      onClick={openMenubar}>
        {menuOpen ? <IoCloseOutline className='text-red-500' /> : <RxHamburgerMenu className='text-white' />}

      </div>

        <div className=  {`lg:static absolute  text-white text-[16px] top-16 grid rounded-sm  ${
  menuOpen ? 'block opacity-100 w-[280px] right-0 p-8 bg-gray-500 ' : 'hidden opacity-0 top-[100%]'
} lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}  ref={navRef}>

          <NavLink to='Instant'>
          <h3>Instant Buy/Sell</h3>
          </NavLink>
        
          <NavLink to='/'>
          <h3>Learn</h3>
          </NavLink>

          <NavLink to='/Login'>
          <button className='bg-[#7C20BE] px-10 py-2 border  rounded-md'>Login</button>
          </NavLink>
          
          <NavLink to='SignUp'>
          <button className='bg-white  py-2 px-6 rounded-md text-[#B145FF]'>Get Started</button>
          </NavLink>
          
        </div>
      </div>

      
      
    </nav>
  )
}

export default NavBar
