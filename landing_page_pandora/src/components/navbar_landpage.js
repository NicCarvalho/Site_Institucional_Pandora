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
          <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Home</button>
            <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Sobre Nós</button>
            <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Produtos</button>
            <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Contato</button>
        </div>
      </nav>
    </div>
  );
}