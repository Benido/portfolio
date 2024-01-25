
import Image from 'next/image'
import Link from 'next/link'
import styles from './projets.module.css'

export default function Projets() {
  return (
    <div className='flex flex-col items-start'>
        <h1 className="title leading-big-title my-8">Projets</h1>
        <div className='flex flex-col md:flex-row my-5'>
          <div className='my-0 md:my-4 me-8 max-w-md'>
            <h2 className="subtitle mb-1">Quai Antique</h2>
            <p className="text mb-3">Projet final du cursus développeur web chez Studi, présenté pour l&apos;oral du titre professionnel.
            Quai Antique est un restaurant (fictif) pour lequel j&apos;ai réalisé un site présentant l&apos;établissement, publiant les menus et la carte, et permettant la réservation de table ainsi que la création de compte.</p>
            <p>Back-end : Symfony - MariaDB</p>
            <p>Front-end : Twig - Stimulus - jQuery - Bootstrap</p>
          </div>        
          <Link href='https://resto-quai-antique.herokuapp.com/reservation' rel='noopener noreferrer' target='_blank'>
            <div className='relative object-cover h-48 md:h-64 w-64 md:w-96 my-4 mx-auto transition-all hover:scale-110'>
              <Image src="/images/page-reservation.jpg" alt="capture d'écran du site Quai Antique" fill={true} ></Image>
            </div> 
          </Link>      
        </div> 
        <div className='flex flex-col md:flex-row my-8'>
          <div className='my-0 md:my-4 me-8 max-w-md'>
            <h2 className="subtitle mb-1">Charles Cantin - Photographe</h2>
            <p className="text mb-3">Site vitrine pour un photographe (fictif)</p>
            <p>Back-end : Netlify - Formspree</p>
            <p>Front-end : Next.js - CSS</p>
          </div>        
          <Link href='https://charles-cantin-vous-photographie.netlify.app/prestations' rel='noopener noreferrer' target='_blank'>
            <div className='relative object-cover h-48 md:h-64 w-64 md:w-96 my-4 mx-auto transition-all hover:scale-110'>
            <Image src="/images/charles-cantin.jpg" alt="capture d'écran du site Charles Cantin vous photographie" fill={true} ></Image>
            </div> 
          </Link>      
        </div> 
        <div className='flex flex-col md:flex-row my-8'>
          <div className='my-0 md:my-4 me-8 max-w-md'>
            <h2 className="subtitle mb-1">Laura Chaponot - restauratrice de céramique</h2>
            <p className="text mb-3">Site vitrine pour une restauratrice d&apos;oeuvres d&apos;art</p>
          </div>        
          <Link href='' rel='noopener noreferrer' target='_blank'>
            <div className='relative object-cover h-48 md:h-64 w-64 md:w-96 my-4 mx-auto text-center transition-all hover:scale-110'>
              Incoming
            </div> 
          </Link>      
        </div> 
    </div>
  )
  } 