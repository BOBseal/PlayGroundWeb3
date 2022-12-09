//import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
//import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
//import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
//import { BsFillPersonLinesFill } from 'react-icons/bs'
//import logo from '../public/logo.ico'

const Navbar = () => {
   const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  //  const [navBg, setNavBg] = useState('#ecf0f3');
  //  const [linkColor, setLinkColor] = useState('#1f2937'); 
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
    return(
<div>NNNNNNNNNNNNNNNNNNNNNNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVV </div> 
    )
};
export default Navbar
