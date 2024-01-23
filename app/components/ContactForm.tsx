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
  const { register, handleSubmit } = useForm<FormData>();
  

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-5">
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
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-md'
          {...register('name', { required: true })}
        />
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
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-md'
          {...register('email', { required: true })}
        />
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
          className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-grapefruit focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
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