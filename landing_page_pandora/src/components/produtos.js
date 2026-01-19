"use client"

import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Detalheprod from "./detalheprod";

export default function Produtos() {
  return (
    <div className="flex justify-center text-[#020232] font-extrabold text-3xl p-5 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            
            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Viés de<br/>Algodão</h1>
                <Detalheprod produtoId={1} />
                {/* <button className="flex justify-center items-center space-x-3
                bg-[#06903B] text-white rounded-md mx-5 py-1"> <FaPlus className="-ml-2" /><p>Ver mais</p> </button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça de<br/>Algodão</h1>
                <Detalheprod produtoId={2} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça<br/>Canelada</h1>
                <Detalheprod produtoId={3} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça de Algodão<br/>Especial</h1>
                <Detalheprod produtoId={4} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Gorgurão de<br/>Reforço</h1>
                <Detalheprod produtoId={5} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Fita<br/>Galão</h1>
                <Detalheprod produtoId={6} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
            </div>

            <div className="flex flex-col justify-center
                px-5 py-10 space-y-5
                bg-[#F8F8F8] rounded-3xl shadow-xl">
                <Image
                src="/images/foto_pandora.jpg"
                alt="Foto de Produtos Pandora Textil"
                width={300}
                height={350} />
                <h1>Alça Premium<br/>(Alça CHIC)</h1>
                <Detalheprod produtoId={7} />
                {/* <button className="bg-[#06903B] text-white rounded-md mx-5 py-1">Ver mais</button> */}
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
                <Detalheprod produtoId={8} />
            </div>

        </div>
    </div>
  );
}