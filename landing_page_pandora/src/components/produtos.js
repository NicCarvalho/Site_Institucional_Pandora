"use client"

import Image from "next/image";
import Detalheprod from "./detalheprod";
import { useState } from "react";

export default function Produtos() {

    const [showOverlay, setShowOverlay]  = useState(false);
    
    const handleProdDetails = () => {
        setShowOverlay(true);
    };
    
    const closeProdDetails = () => {
        setShowOverlay(false);
    };

  return (
    <div className="flex justify-center text-[#020232] font-extrabold text-3xl p-5 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 space-y-2 md:space-y-3">
            
            <div className="flex flex-col justify-center items-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Viés de<br/>Algodão</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={1} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Alça de<br/>Algodão</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={2} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Alça<br/>Canelada</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={3} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Alça de Algodão<br/>Especial</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={4} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Gorgurão de<br/>Reforço</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={5} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Fita<br/>Galão</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={6} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Alça Premium<br/>(Alça CHIC)</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={7} />
                </div>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5 w-86
                bg-[#F8F8F8] rounded-3xl shadow-xl
                border-1
                transition duration-350 ease-in-out hover:scale-105
                transform-3d focus:rotate-y-180 hover:cursor-pointer" tabIndex={0}>
                <div className="translate-z-1 absolute">
                    <Image className="rounded-2xl"
                    src="/images/foto_pandora.jpg"
                    alt="Foto de Produtos Pandora Textil"
                    width={300}
                    height={350} />
                    <h1>Alça Premium<br/>Sublimação</h1>
                </div>
                <div className="-translate-z-1 rotate-y-180">
                    <Detalheprod produtoId={8} />
                </div>
            </div>

        </div>
    </div>
  );
}