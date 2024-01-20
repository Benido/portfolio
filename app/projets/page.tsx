
import Image from 'next/image'
import Link from 'next/link'
import styles from './projets.module.css'

export default function Projets() {
  return (
    <div className='flex flex-col items-start'>
        <h1 className="title leading-big-title my-5">Projets</h1>
        <div className='flex flex-col md:flex-row my-5'>
          <div className='my-0 md:my-4 me-4 max-w-md'>
            <h2 className="subtitle mt-5 mb-1">Quai Antique</h2>
            <p className="text mb-3">J'ai réalisé ce site dans le cadre de l'examen final auprès de l'école Studi, et je l'ai ensuite présenté pour l'oral du titre professionnel</p>
          </div>        
          <Link href='https://resto-quai-antique.herokuapp.com/reservation' rel='noopener noreferrer' target='_blank'>
            <div className='relative object-cover h-48 md:h-64 w-64 md:w-96 my-4 mx-auto transition-all hover:scale-110'>
              <Image src="/images/page-reservation.jpg" alt="capture d'écran du site Quai Antique" fill={true} ></Image>
            </div> 
          </Link>      
        </div> 
    </div>
  )
  } 