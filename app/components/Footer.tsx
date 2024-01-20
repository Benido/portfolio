import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container h-20 flex flex-col items-center mx-auto'>
      <p className='my-2 text-sm sm:text-base'>© Copyright 2022 - Rémi BESNIÉ. Tous droits réservés.</p>
      <p className='my-2 text-sm sm:text-base'>
        <Link className='mx-1' href=''>Plan du site</Link>
        <span> | </span>
        <Link className='mx-1' href=''>Mentions légales</Link>
        <span> | </span>  
        <Link className='mx-1' href=''>Cookies</Link>
      </p>
    </div>
  )
}

export default Footer