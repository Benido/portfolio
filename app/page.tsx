import styles from './Home.module.css';

export default function Home() {
  return (
    <main className="container container-flex-centered">
      <div className='flex flex-col items-start justify-between'>
        <h1 className='title leading-big-title my-5'>Rémi Besnié</h1>
        <h2 className='subtitle my-1'>Bonjour !</h2>
        <p className='text mb-3'>Je suis Rémi BESNIÉ, développeur web junior depuis 2024. J’ai effectué une reconversion professionnelle en 2022-2023 auprès de l’école en ligne Studi et j’ai décroché mon titre professionnel en Octobre 2023</p>
      </div>
    </main>
  )
}
