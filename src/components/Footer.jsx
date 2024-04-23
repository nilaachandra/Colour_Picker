import React from 'react'
import {RiTwitterXLine, RiFacebookFill, RiGithubFill, RiInstagramFill } from '@remixicon/react'
const Footer = () => {
  return (
    <footer className='w-full mt-12'>
        <div className="icons flex justify-center items-center gap-3 text-[#0611f2]">
            <a href='https://twitter.com/nilaacodes'><RiTwitterXLine size={30}/></a>
            <a href=''><RiFacebookFill size={30}/></a>
            <a href='https://github.com/nilaachandra'><RiGithubFill size={30}/></a>
            <a href='https://www.instagram.com/niillaaa.a/'><RiInstagramFill size={30}/></a>
        </div>
        <div className="tags flex flex-col justify-center items-center">
          <h1 className=''><span>©️2024</span> <span className=''>ColorsByNilaa || All Rights Reserved</span> </h1>
          <p className=''>Developed with &#9829; Nilaa Laishram</p>
          <p>Wanna Support Me? <a href='https://buymeacoffee.com/nilaacodes' className='text-[#0611f2]'>Buy me a Coffee to support my Work!</a></p>
        </div>
    </footer>
  )
}

export default Footer