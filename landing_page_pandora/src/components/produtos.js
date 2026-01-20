"use client"

import Image from "next/image";
import Detalheprod from "./detalheprod";
import descricaoData from "@/data/descricao.json";

export default function Produtos() {

  return (
    <div className="flex justify-center text-[#020232] font-extrabold text-3xl p-5 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xs:grid-cols-4 space-y-2 md:space-y-3 md:space-x-3">
            
            {descricaoData.map((produto, i) => (
                <div key={produto.id === i} className="flex flex-col justify-start items-center
                    px-5 py-10 space-y-5 w-86
                    bg-[#F8F8F8] rounded-3xl shadow-xl
                    border-1
                    transition duration-1200 ease-in-out hover:scale-105
                    transform-3d hover:rotate-y-180 hover:cursor-pointer" data-aos="">
                    <div className="translate-z-1 absolute">
                        <Image className="rounded-2xl"
                        src="/images/foto_pandora.jpg"
                        alt="Foto de Produtos Pandora Textil"
                        width={300}
                        height={350} />
                        <h1 className="w-72">{produto.nome}</h1>
                    </div>
                    <div className="-translate-z-1 rotate-y-180">
                        <Detalheprod produtoId={produto.id} />
                    </div>
                </div>
            ))}

        </div>
    </div>
  );
}