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

    return (
        <div>
            <a>
                <button onClick={handleContactForm} className="p-2 bg-[#06903B] text-white rounded-md mx-5 py-1">Ver catálogo</button>
            </a>
            {showOverlay && (
                <div className="fixed inset-0 bg-[rgba(255,255,255,0.5)] flex items-center justify-center z-50">
                    <div className="flex flex-col items-end rounded-xl bg-[#0E4935] text-white
                    px-6 py-9 text-base font-normal">
                        <div>
                            {/* Botao de fechar */}
                            <button onClick={() => setShowOverlay(false)}>
                                <IoClose className="active:text-[#f00] active:bg-[rgba(255,255,255,0)] hover:text-white hover:bg-black  rounded-full"/>
                            </button>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-3 md:space-x-10">
                            <div>
                                <h1 className="font-semibold text-lg">Ops... antes de baixar nosso catálogo</h1>
                                <p className="font-medium">Deixe seu contato</p>
                            </div>
                            <div className="md:min-w-1/2">
                                {/* Formulário igual ao da página princípal, mas com um css diferente */}

                                <form onSubmit={handleSubmit}
                                    className="flex flex-col">
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