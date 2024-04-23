import React, {useRef} from 'react'
import logo from '../assets/Colorsbynilaa.png'
import Button from './Button'
import { RiGitForkFill } from '@remixicon/react'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef()
  useGSAP(() => {
    gsap.from(".box", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      ease:'power2.in',
    })
  
  }, { scope: container });


  return (
    <nav ref={container} className='w-full'>
      <div className='box w-full flex justify-between items-center'>
        <Link to=''><img src={logo} alt="logo" height={100} width={200}/></Link>
        <Button href='https://github.com/nilaachandra/Colour_Picker' className='hover:bg-white hover:text-blue-700 transition-all duration-500 border-blue-700 bg-blue-700 font-bold flex gap-2'>
          <RiGitForkFill size={24}/>
          <span>Fork</span>
        </Button>
        </div>
    </nav>
  )
}

export default Navbar

