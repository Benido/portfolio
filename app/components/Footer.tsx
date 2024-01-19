import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-20 flex flex-col items-center'>
      <p className='my-2'>© Copyright 2022 - Rémi BESNIÉ. Tous droits réservés.</p>
      <p className='my-2'>
        <Link className='mx-1' href=''>Plan du site</Link>
        <Link className='mx-1' href=''>Mentions légales</Link>
        <Link className='mx-1' href=''>Cookies</Link>
      </p>
    </div>
  )
}

export default Footer