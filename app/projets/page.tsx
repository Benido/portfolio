
import Image from 'next/image'
import Link from 'next/link'
import styles from './projets.module.css'

export default function Projets() {
  return (
    <div className='flex flex-col items-start w-full'>
        <h1 className="title leading-big-title my-8">Projets</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full my-5'>
          <div className='my-0 md:my-4 me-8 max-w-xl'>
            <h2 className="subtitle mb-3">Quai Antique</h2>
            <p className="text-xl/8 mb-3">Projet final du cursus développeur web chez Studi, présenté pour l&apos;oral du titre professionnel.
            Quai Antique est un restaurant (fictif) pour lequel j&apos;ai réalisé un site présentant l&apos;établissement, publiant les menus et la carte, et permettant la réservation de table ainsi que la création de compte.</p>
            <p>Back-end : Symfony - MariaDB</p>
            <p>Front-end : Twig - Stimulus - jQuery - Bootstrap</p>
          </div>
          <div className='flex justify-center my-12 lg:my-4'>        
            <Link href='https://resto-quai-antique.herokuapp.com/reservation' rel='noopener noreferrer' target='_blank'>
              <div className='relative object-cover h-72 sm:h-96 w-96 sm:w-[32rem] mx-auto transition-all hover:scale-110'>
                <Image src="/images/page-reservation.jpg" alt="capture d'écran du site Quai Antique" fill={true} ></Image>
              </div> 
            </Link>     
          </div> 
        </div> 
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full my-8'>
          <div className='my-0 md:my-4 me-8 max-w-xl'>
            <h2 className="subtitle mb-3">Charles Cantin - Photographe</h2>
            <p className="text-xl/8 mb-3">Site vitrine pour un photographe (fictif)</p>
            <p>Back-end : Netlify - Formspree</p>
            <p>Front-end : Next.js - CSS</p>
          </div>
          <div className='flex justify-center my-12 lg:my-4'>      
            <Link href='https://charles-cantin-vous-photographie.netlify.app/prestations' rel='noopener noreferrer' target='_blank'>
              <div className='relative object-cover h-72 sm:h-96 w-96 sm:w-[32rem] mx-auto transition-all hover:scale-110'>
              <Image src="/images/charles-cantin.jpg" alt="capture d'écran du site Charles Cantin vous photographie" fill={true} ></Image>
              </div> 
            </Link>
          </div>        
        </div> 
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full my-8'>
          <div className='my-0 md:my-4 me-8 max-w-xl'>
            <h2 className="subtitle mb-3">Les Meubles de Néron - relooking de meubles</h2>
            <p className="text-xl/8 mb-3">Site vitrine pour une revalorisatrice de meubles d&apos;occasion</p>
          </div>
          <div className='flex justify-center my-12 lg:my-4'>      
            <Link href='https://www.les-meubles-de-neron.fr/' rel='noopener noreferrer' target='_blank'>
              <div className='relative object-cover h-72 sm:h-96 w-96 sm:w-[32rem] mx-auto transition-all hover:scale-110'>
              <Image src="/images/meubles-de-neron.jpg" alt="capture d'écran du site Les Meubles de Néron" fill={true} ></Image>
              </div> 
            </Link>
          </div>           
        </div> 
    </div>
  )
  } 