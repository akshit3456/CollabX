import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {
    const [menu, setMenu] = useState("HOME");
    const [scroll,setScroll] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            if (window.scrollY > 100){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])
  return (
    <div className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-400 ${scroll ? 'scrolled' : ''}`}>
        <div className='flex gap-2 justify-between relative top-5 navbar'>
        <img className='h-12 pl-25 cursor-pointer relative top-1' src={assets.logo} alt="" />
        <ul className='flex gap-10 relative left-17 top-2 cursor-pointer '>
            <li>
                <a href="" onClick={(e) => {e.preventDefault(),setMenu("HOME")}} className={menu === "HOME" ? "active" : ""}>HOME</a>
            </li>
            <li>
                <a href="" onClick={(e) => {e.preventDefault(),setMenu("ABOUT-US")}} className={menu === "ABOUT-US" ? "active" : ""}>ABOUT US</a>
            </li>
            <li>
                <a href="" onClick={(e) => {e.preventDefault(),setMenu("SERVICES")}} className={menu === "SERVICES" ? "active" : ""}>SERVICES</a>
            </li>
            <li>
                <a href="" onClick={(e) => {e.preventDefault(),setMenu("INFLUENCER")}} className={menu === "INFLUENCER" ? "active" : ""}>INFLUENCER</a>
            </li>
            <li>
                <a href="" onClick={(e) => {e.preventDefault(),setMenu("PAGES")}} className={menu === "PAGES" ? "active" : ""}>PAGES</a>
            </li>
        </ul>
        <button className='w-35 bg-gradient-to-br from-pink-400 to-purple-500 cursor-pointer rounded-3xl relative right-27 bottom-1 text-white font-bold hover:scale-[1.1] transition-transform'>Get Started</button>
    </div>
    </div>
  )
}

export default Navbar