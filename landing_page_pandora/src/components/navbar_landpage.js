"use client"

import Image from "next/image";

export default function Navbar_landpage() {
  return (
    <div>
      <nav className="bg-white text-black flex flex-row justify-around items-center space-y-4">
        <div className="">
          <Image 
          src="/icon/pandoratextil.jpeg" 
          alt="Logo da Pandora" 
          width={100}
          height={100} />
        </div>
        <div className="flex flex-row space-x-10 font-semibold">
          <h1>Sobre Nós</h1>
          <h1>Produtos</h1>
          <h1>Contato</h1>
        </div>
      </nav>
    </div>
  );
}