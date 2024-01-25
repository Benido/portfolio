'use client'

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  name: string,
  email: string,
  message: string
};

const Contact: FC = () => {
  const { register, formState: {errors}, handleSubmit } = useForm<FormData>();
  

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  function generateErrorMessage(errorType: string): string {
      
    switch(errorType) {
        case 'required': return "Pssst, n'oubliez pas de remplir ce champ 😉 !"
        case 'maxLength': return"Trop long 😱 !"
        case 'pattern': return"Il y a un problème de format 🤨 !"
        default: return ""
      }    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-8 md:my-5 w-9/12">
      <div className='mb-5'>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium'
        >
          Prénom NOM
        </label>
        <input
          type='text'
          placeholder='Prénom NOM'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-inner'
          {...register('name', { required: true, maxLength: 100, pattern: /^[A-zÀ-ú\s]{2,}$/ })}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name ? (<p className="text-orange-600" role="alert">{generateErrorMessage(errors.name.type)}</p>) : ''}  
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium'
        >
          Adresse email
        </label>
        <input
          type='email'
          placeholder='exemple@domaine.com'
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-inner'
          {...register('email', { required: true, maxLength: 100, pattern:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
        />
        {errors.email ? (<p className="text-orange-600" role="alert">{generateErrorMessage(errors.email.type)}</p>) : ''}
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder='Entrez votre message'
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-inner'
          {...register('message', { required: true, maxLength: 1000})}
        ></textarea>
        {errors.message ? (<p className="text-orange-600" role="alert">{generateErrorMessage(errors.message.type)}</p>) : ''}
      </div>
      <div className="text-center">
        <button className='hover:shadow-form rounded-md bg-grapefruit py-3 px-8 text-base font-semibold text-pale-yellow outline-none'>
          Envoyer
        </button>
      </div>
    </form>  
  )
}

export default Contact;