"use client"

import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import descricaoData from "@/data/descricao.json";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Detalheprod({produtoId}) {
    // constante do produto
    const descricao = descricaoData.find(d => d.id === produtoId);

    const [showOverlay, setShowOverlay]  = useState(false);

    const handleContactForm = () => {
        setShowOverlay(true);
    };

    const checkValuable = (campo) => {
        if (!descricao || descricao[campo] == null || descricao === "") {
            return "hidden";
        }
        return "";
    }

    return (
        <div>
            <div>
                <button onClick={handleContactForm} className="flex justify-center items-center space-x-3
                bg-[#06903B] text-white rounded-md mx-5 py-1"> <FaPlus className="-ml-2" /><p>Ver mais</p> </button>
            </div>
            {showOverlay && descricao && (
                <div className="fixed inset-0 bg-[rgba(255,255,25,0.8)] flex justify-center items-center z-40">
                    <div className="flex flex-col items-center bg-white w-90 h-120 p-5 rounded-xl">
                        {/*  botão de voltar */}
                        <div className="self-end">
                            <button onClick={() => setShowOverlay(false)}>
                                <IoClose className="size-6 active:text-[#f00] active:bg-[rgba(255,255,255,0)] hover:text-white hover:bg-black rounded-full" />
                            </button>
                        </div>

                        {/* Conteúdo da caixa */}
                        <div className="text-black space-y-3">
                            <div>
                                <h1>{descricao.nome}</h1>
                            </div>

                            <div className="flex flex-col overflow-auto space-y-3">
                                <div className="flex overflow-x-auto snap-x space-x-3 w-80">
                                    <div>
                                        <Image className="max-h-40 min-w-60"
                                        src="/images/foto_tear.jpg"
                                        alt="foto do tear"
                                        width={300}
                                        height={300}
                                        />
                                    </div>
                                    <div>
                                        <Image className="max-h-40 min-w-60"
                                        src="/images/foto_tear.jpg"
                                        alt="foto do tear"
                                        width={300}
                                        height={300}
                                        />
                                    </div>
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
                </div>
            )}
        </div>
    )
}