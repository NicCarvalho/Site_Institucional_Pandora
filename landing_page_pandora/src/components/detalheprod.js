"use client"

import { FaPlus } from "react-icons/fa";
import descricaoData from "@/data/descricao.json";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

export default function Detalheprod({produtoId}) {
    // constante do produto
    const descricao = descricaoData.find(d => d.id === produtoId);

    const checkValuable = (campo) => {
        if (!descricao || descricao[campo] == null || descricao === "") {
            return "hidden";
        }
        return "";
    }

    return (
        <div>
            {/* Conteúdo da caixa */}
                <div className="text-black space-y-3">
                    <div>
                        <h1>{descricao.nome}</h1>
                    </div>

                    <div className="flex flex-col overflow-none space-y-3">
                        <ul className="flex overflow-x-auto snap-x space-x-3 w-80 first:rounded-l-xl">
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
                        </ul>

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