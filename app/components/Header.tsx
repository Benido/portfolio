'use client'

import React, {useState, useEffect} from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {  
  
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: any) => setIsChecked(e.target.checked) 

  const handleClick = () => setIsChecked(false)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) setIsChecked(false)
    })
  })


  return (
    <div className='h-20 flex justify-end static'>       
      <div className={isChecked ? 'backdrop-blur backdrop-brightness-25 absolute bottom-0 left-0 size-full z-10' : ''}></div>
      <div className={`${ isChecked ? 'absolute left-0' : ''} my-4 ml-4 mr-auto z-10`}>
        <Link className='text-4xl text-pale-yellow' href='/' onClick={handleClick}>RB</Link>
      </div> 
      <div className={isChecked ? 'transition-all flex flex-col items-end absolute z-10' : ''}>
        <label 
          className="btn btn-circle shadow-none m-3 swap swap-rotate md:hidden bg-inherit border-transparent hover:bg-pale-yellow hover:border-pale-yellow hover:scale-110">  
          {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleChange} checked={isChecked}/>          
            {/* <!-- hamburger icon --> */}
            <svg className="swap-off fill-grapefruit" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            {/* <!-- close icon --> */}
            <svg className="swap-on fill-grapefruit" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>  
        </label>
        <nav className={`${ isChecked ? 'flex flex-col items-end' : 'hidden'} md:flex md:h-full `}> 
            <Link className='subtitle m-4 transition-all hover:scale-110' href={'/projets'} onClick={handleClick}>PROJETS</Link>
            <Link className='subtitle m-4 transition-all hover:scale-110' href={'/competences'} onClick={handleClick}>COMPÉTENCES</Link>
            <Link className='subtitle m-4 transition-all hover:scale-110' href={'/contact'} onClick={handleClick}>CONTACT</Link>            
            <div>
              <ThemeSwitch />
            </div>
        </nav>  
      </div>
    </div>
  )
}

export default Header