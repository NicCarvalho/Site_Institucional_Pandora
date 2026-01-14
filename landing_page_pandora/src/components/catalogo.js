"use client"

import { useState, useEffect, useEffectEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useForm, ValidationError } from '@formspree/react';


export default function Catalogo() {
    const [showOverlay, setShowOverlay] = useState(false);

    // torna o overlay visível
    const handleContactForm = () => {
        setShowOverlay(true);
    };

    const downloadFile = () => {
        const link = document.createElement("a");
        link.href = "/doc/apresentação_pandora.pdf";
        link.download = "Catálogo";
        link.click();
        setShowOverlay(false);
    }

    // constante do formulário externo
    const [state, handleSubmit] = useForm("mgooeqep");

    // useEffect para iniciar o download do catálogo
    useEffect(() => {
        if (state.succeeded) {
            downloadFile();
        }
    }, [state.succeeded]);

    // if (state.succeeded) {
    //     setShowOverlay(false);
    // }

    // if (state.succeeded) {
    //   return (
    //   <p>Baixando Catálogo</p>
    //   );
    // }

    return (
        <div>
            <a>
                <button onClick={handleContactForm} className="p-2 bg-[#06903B] text-white rounded-md mx-5 py-1">Ver catálogo</button>
            </a>
            {showOverlay && (
                <div className="fixed inset-0 bg-[rgba(255,255,255,0.3)] flex items-center justify-center z-50">
                    <div className="flex flex-col max-w-90 px-8 py-10 rounded-xl justify-center items-end
                    md:max-w-170 lg:max-w-300
                    text-white bg-[#0E4935]">
                        <div>
                            {/* Botao de fechar */}
                            <button onClick={() => setShowOverlay(false)}>
                                <IoClose/>
                            </button>
                        </div>
                        <div className="flex flex-col space-y-3 font-medium sm:font-normal
                        md:flex-row md:font-light md:space-x-9 lg:space-x-10
                        lg:space-x-2">
                            <div className="md:space-y-1">
                                <h1 className="text-xl font-semibold">Ops... antes de baixar nosso catálogo</h1>
                                <p className="text-md">Deixe seu contato</p>
                            </div>
                            <div>
                                {/* Formulário igual ao da página princípal, mas com um css diferente */}

                                <form onSubmit={handleSubmit}
                                    className="flex flex-col w-full max-w-lg md:max-w-xl text-base">
                                    <label>Nome Completo:</label>
                                    <input className="bg-white px-2 p-1 text-black rounded-md mb-3" 
                                    id="name"
                                    type="name"
                                    name="Nome" />
                                    <ValidationError
                                    prefix="Nome"
                                    field="name"
                                    errors={state.errors}
                                    />

                                    <label>Telefone:</label>
                                    <input className="bg-white px-2 p-1 text-black rounded-lg mb-3" 
                                    id="phone"
                                    type="phone"
                                    name="Telefone" />
                                    <ValidationError
                                    prefix="Telefone"
                                    field="phone"
                                    errors={state.errors}
                                    />

                                    <label>Email:</label>
                                    <input className="bg-white px-2 p-1 text-black rounded-lg mb-3" 
                                    id="email"
                                    type="email"
                                    name="Email" />
                                    <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                    />

                                    <label>Mensagem:</label>
                                    <textarea className="bg-white px-2 p-1 text-black rounded-lg mb-3" 
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
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

//  href="/doc/apresentação_pandora.pdf" download="Catálogo"