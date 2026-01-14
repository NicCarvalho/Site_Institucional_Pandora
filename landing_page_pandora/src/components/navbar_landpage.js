"use client"

import Image from "next/image";
import Link from "next/link";

export default function Navbar_landpage() {
  return (
    <div id="home">
      <nav className="bg-white text-black
      flex flex-row justify-around items-center 
      space-y-4 border-b-4 
      border-[#F4C317]">
        <div className="md:hidden">
          <Image 
          src="/icon/ptextil.png" 
          alt="P de Pandora" 
          width={100}
          height={100} />
        </div>
        <div className="hidden md:flex">
          <Image 
          src="/icon/pandoratextil.jpeg" 
          alt="Logo da Pandora" 
          width={100}
          height={100} />
        </div>
        <div className="flex flex-row space-x-10 font-semibold">
            <Link href="/#home"> <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Home</button> </Link>
            <Link href="/#sobre_nos"> <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Sobre Nós</button> </Link>
            <Link href="/#produtos"> <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Produtos</button> </Link>
            <Link href="/#contato"> <button className="transition duration-300 hover:-translate-y-1 hover:scale-150 hover:text-[#06903B]">Contato</button> </Link>
        </div>
      </nav>
    </div>
  );
}