import React from 'react'
import logo from '../assets/Colorsbynilaa.png'
import Button from './Button'
import { RiGitForkFill } from '@remixicon/react'
const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center'>
        <img src={logo} alt="logo" height={100} width={200}/>
        <Button href='https://github.com/nilaachandra/Colour_Picker' className='hover:bg-white hover:text-blue-700 border-blue-700 bg-blue-700 font-bold flex gap-2'>
          <RiGitForkFill size={24}/>
          <span>Fork</span>
        </Button>
    </nav>
  )
}

export default Navbar

