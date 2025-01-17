import styles from './Home.module.css';

export default function Home() {
  return (
    <main className="container flex grow flex-col items-start px-4 py-24 mx-auto">
      <div className='flex flex-col items-start justify-between'>
        <h1 className='title leading-big-title my-8'>Rémi Besnié</h1>
        <h2 className='subtitle mt-8 mb-4'>Bonjour !</h2>
        <p className='text-2xl mb-3'>Je suis Rémi BESNIÉ, développeur web junior depuis 2024.</p>
      </div>
    </main>
  )
}
