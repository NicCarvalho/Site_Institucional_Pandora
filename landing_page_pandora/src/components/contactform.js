"use client"

import { useForm, ValidationError } from '@formspree/react';

export default ContactForm;

function ContactForm() {
  const [state, handleSubmit] = useForm("mgooeqep");

  if (state.succeeded) {
      return <p>Enviado com Sucesso!!!</p>;
  }
  
  return (
    <form id="contact-form" onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg md:max-w-xl">
            <label>Nome Completo:</label>
            <input className="bg-white px-3 h-8 text-black text-sm rounded-full mb-3"
            placeholder="Seu Nome" 
            id="name"
            type="name"
            name="Nome" />
            <ValidationError
            prefix="Nome"
            field="name"
            errors={state.errors}
            />

            <label>Telefone:</label>
            <input className="bg-white px-3 h-8 text-black text-sm rounded-full mb-3" 
            placeholder="(xx) xxxxx-xxxx"
            id="phone"
            type="phone"
            name="Telefone" />
            <ValidationError
            prefix="Telefone"
            field="phone"
            errors={state.errors}
            />

            <label>Email:</label>
              <input className="bg-white px-3 h-8 text-black text-sm rounded-full mb-3" 
            placeholder="Seu melhor email"
            id="email"
            type="email"
            name="Email" />
            <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            />

            <label>Mensagem:</label>
            <textarea className="bg-white px-3 p-1 text-black text-sm rounded-2xl mb-3 resize-none"
            placeholder="Sua mensagem..."
            id="message"
            type="message"
            name="Mensagem"/>
            <ValidationError
            prefix="Mensagem"
            field="message"
            errors={state.errors}
            />

            <button className="bg-[#F4C317] text-black font-bold py-2 px-4 rounded-md" 
            disabled={state.submitting}
            type="submit">Enviar</button>
          </form>
  );
}