import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <div className='w-full flex flex-col md:flex-row xl:w-3/4'>
      <div className="flex flex-col items-center md:items-start">
          <h1 className="title leading-big-title my-8 ">Contact</h1>
          <h2 className="subtitle">Échangeons ! &#128512;</h2>        
      </div>
      <div className='w-full flex justify-center '>
        <ContactForm />
      </div>
  </div>
  )
  }  