"use client"

import { useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import descricaoData from "@/data/descricao.json";
import imagesData from "@/data/images.json";
import Image from "next/image";

export default function Detalheprod({produtoId}) {
    const scrollContainerRef = useRef(null);

    // constante do produto
    const descricao = descricaoData.find(d => d.id === produtoId);

    // constante das imagens
    const images = imagesData.find(img => img.descid === produtoId);

    const checkImage = (img) => {
        if (!images || images[img] === null || images[img] === "") {
            return `/images/foto_tear.jpg`;
        }
        return `/images/mostruario/${images[img]}`;
    }

    const checkValuable = (campo) => {
        if (!descricao || descricao[campo] == null || descricao === "") {
            return "hidden";
        }
        return "";
    }

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = 200;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth"});
        } else {
            container.scrollBy({ left: scrollAmount, behavior:"smooth"});
        }
    }
    
    return (
        <div>
            {/* Conteúdo da caixa */}
                <div className="text-black space-y-3 max-w-70">
                    <div>
                        <h1>{descricao.nome}</h1>
                    </div>

                    <div className="flex flex-col overflow-none space-y-3">

                        <div className="flex flex-row">
                            <button onClick={() => scroll("left")} className="rotate-180 hover:cursor-pointer">
                                <MdNavigateNext />
                            </button>

                            <ul ref={scrollContainerRef} className="flex items-center justify-start overflow-x-scroll snap-x w-80">
                                <div className="h-40 min-w-50 ml-4 mr-2 snap-center">
                                    <Image className="size-full"
                                    src={checkImage("imagem1")}
                                    alt="Produto"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div className="h-40 min-w-50 mx-2 snap-center">
                                    <Image className="size-full"
                                    src={checkImage("imagem2")}
                                    alt="Produto"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                                <div className="h-40 min-w-50 ml-2 mr-4 snap-center">
                                    <Image className="size-full"
                                    src={checkImage("imagem3")}
                                    alt="Produto"
                                    width={300}
                                    height={300}
                                    />
                                </div>
                            </ul>

                            <button onClick={() => scroll("right")} className="hover:cursor-pointer">
                                <MdNavigateNext />
                            </button>
                        </div>

                        <div>
                            <div className="font-normal text-base pt-2">
                                <ul className="list-inside list-disc">
                                    <li className={checkValuable("material")}>{descricao.material}</li>
                                    <li className={checkValuable("calandra")}>{descricao.calandra}</li>
                                    <li className={checkValuable("caracteristica")}>{descricao.caracteristica}</li>
                                    <li className={checkValuable("larguras")}>{descricao.larguras}</li>
                                    <li className={checkValuable("cores")}>{descricao.cores}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>            
        </div>
    )
}