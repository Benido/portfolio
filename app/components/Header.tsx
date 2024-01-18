'use client'

import React, {useState} from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e: any) => setIsOpen(e.target.checked) 


  return (
    <>
    
    <div className='h-20 flex justify-end static'>
      <div className={isOpen ? 'transition-all backdrop-blur absolute bottom-0 left-0 size-full' : ''}></div>
      <div className={isOpen ? 'transition-all flex flex-col items-end absolute h-screen' : ''}>         
        <label 
          className="btn btn-circle shadow-none m-3 swap swap-rotate sm:hidden bg-inherit border-transparent hover:bg-pale-yellow hover:border-pale-yellow hover:scale-110">  
          {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleChange}/>          
            {/* <!-- hamburger icon --> */}
            <svg className={["swap-off ", styles.grapefruit].join(' ')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            {/* <!-- close icon --> */}
            <svg className={["swap-on ", styles.grapefruit].join(' ')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>  
        </label>
        <nav className={`${ isOpen ? 'flex flex-col items-end' : 'hidden'} sm:flex bg-cool-blue `}>
          <Link className='subtitle m-4 transition-all hover:scale-110' href={'/projets'}>PROJETS</Link>
          <Link className='subtitle m-4 transition-all hover:scale-110' href={'/competences'}>COMPÉTENCES</Link>
          <Link className='subtitle m-4 transition-all hover:scale-110' href={'/contact'}>CONTACT</Link> 
        </nav>  
      </div>
    </div>
    </>
  )
}

export default Header