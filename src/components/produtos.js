"use client"

import Image from "next/image";
import Detalheprod from "./detalheprod";
import imagesData from "@/data/images.json";
import descricaoData from "@/data/descricao.json";

export default function Produtos() {

  return (
    <div className="flex justify-center text-[#020232] font-extrabold text-3xl p-5 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xs:grid-cols-4 space-y-5 md:space-y-4 md:space-x-3">
            
            {descricaoData.map((produto, i) => {

                const imageThumb = imagesData.find(img => img.descid === i + 1);

                const checkImageThumb = () => {
                    if (!imageThumb || imageThumb['capa'] === null || imageThumb['capa'] === "") {
                        return `/images/foto_tear.jpg`;
                    }
                    return `/images/mostruario/${imageThumb[`capa`]}`
                }

                return (
                <div key={produto.id} className="flex flex-col justify-start items-center
                    px-5 py-10 space-y-5 w-86 h-120
                    bg-[#F8F8F8] rounded-3xl shadow-xl
                    border-1 border-[#020232]
                    transition duration-50 delay-150 ease-in-out hover:scale-105
                    transform-3d focus:rotate-y-180 hover:rotate-y-180 hover:cursor-pointer" tabIndex="0" data-aos="">
                    <div className="translate-z-1 absolute">
                        <Image className="rounded-2xl h-70"
                        src={checkImageThumb()}
                        alt="Foto de Produtos Pandora Textil"
                        width={300}
                        height={350} />
                        <h1 className="w-72">{produto.nome}</h1>
                    </div>
                    <div className="-translate-z-1 rotate-y-180">
                        <Detalheprod produtoId={produto.id} />
                    </div>
                </div>
            )})}

        </div>
    </div>
  );
}