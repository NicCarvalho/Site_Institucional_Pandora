"use client"

import Image from "next/image";
import Detalheprod from "./detalheprod";
import imagesData from "@/data/images.json";
import descricaoData from "@/data/descricao.json";
import Link from "next/link";

export default function Produtos() {

  return (
    <div className="flex flex-col justify-center items-center text-[#020232] font-extrabold text-3xl p-5 lg:p-12">
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
                    space-y-5 w-86 h-120
                    bg-[#F8F8F8] rounded-3xl shadow-xl
                    border-1 border-[#020232] hover:cursor-pointer
                    transition duration-50 delay-150 ease-in-out hover:scale-105
                    transform-3d focus:rotate-y-180 hover:rotate-y-180 
                    group" tabIndex="0" data-aos="">
                    <div className="translate-z-1 absolute pt-10">
                        <Image className="rounded-2xl h-70"
                        src={checkImageThumb()}
                        alt="Foto de Produtos Pandora Textil"
                        width={300}
                        height={350} />
                        <h1 className="w-72">{produto.nome}</h1>
                    </div>
                    <div className="flex justify-center pt-5 -translate-z-1 rotate-y-180 w-full h-full rounded-3xl hover:cursor-pointer overflow-hidden">
                        <Detalheprod produtoId={produto.id} />
                        <div className="flex justify-center absolute bottom-[-40] w-full pb-1
                        bg-[#F4C317] md:bg-[#F4C317] text-white 
                        transition duration-400 delay-400 group-hover:-translate-y-10 group-focus:-translate-y-10">
                            <Link href="/#contato">
                                <h1>
                                    Orçar
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            )})}
        </div>
        <div className="text-base self-start mt-5 max-md:ml-3">
            <h1>
              * Produzimos também larguras personalizadas, entre em contato e saiba mais
            </h1>    
        </div>
    </div>
  );
}