"use client"

import Image from "next/image";

export default function Produtos() {
  return (
    <div className="flex text-[#020232] font-extrabold text-3xl p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            
            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Viés de<br/>Algodão</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça de<br/>Algodão</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça<br/>Canelada</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça de Algodão<br/>Especial</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Gorgurão de<br/>Reforço</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Fita<br/>Galão</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça Premium<br/>(Alça CHIC)</h1>
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                border-2 rounded-3xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça Premium<br/>Sublimação</h1>
            </div>

        </div>
    </div>
  );
}