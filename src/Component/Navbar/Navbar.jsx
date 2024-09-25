import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from 'react-router-dom';

function Navbar({isDark, isLight}) {

    const [menu, setMenu] = useState("Home")

    const [isDarkBg, setIsDarkBg] = useState(false)
    useEffect(()=>{
      if(isDark){
        setIsDarkBg(true);
      }
      if(isLight){
        setIsDarkBg(false)
      }
    },[isDark, isLight])

    const navMenu = [
        {
          name : "Home",
          path: "/",
        },
        {
          name : "About",
          path: "/#about",
        },
        {
          name : "Case Studies",
          path: "/#caseStudies",
        },
        {
          name : "Contact",
          path: "/#contact",
        }
    ]

    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
          const elementId = hash.substring(1);
          const element = document.getElementById(elementId);
          
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
    
            history.replaceState(null, '', pathname);
          }
        }
    }, [hash, pathname]);

  return (
    <div>
        <div className='navbarDiv'>
            <ul className='navMenuDiv'>
                {navMenu.map((item, index)=>(
                    <li key={index} onClick={()=>{setMenu(item.name)}} className={`cursor-pointer ${menu === item.name ? `${isDarkBg ? 'text-[#FFFFFF]' : 'text-black'} font-semibold` : `${isDarkBg ? 'text-[#ECEAEA]' : 'text-[#666666]'} font-normal`}`}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <div className={`searchBox ${isDarkBg ? 'border-[#CCCCCC] ' : 'border-[#8F8F8F]'}`}>
                <input className={`bg-transparent ${isDarkBg ? 'text-[#CCCCCC]' : 'text-[#8F8F8F]'}`} type="text" placeholder='I’m looking for... '/>
                <button><CiSearch color={`${isDarkBg ? '#CCCCCC' : '#8F8F8F'}`} size={22}/></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar