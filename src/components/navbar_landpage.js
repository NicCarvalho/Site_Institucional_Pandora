"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; 

export default function Navbar_landpage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div id="home">
      <nav className="bg-white text-black h-15
      flex flex-row px-12 md:px-30 justify-between items-center">
        <div className="md:hidden h-full">
          <Image
          src="/icon/ptextil.png" 
          alt="P de Pandora" 
          width={60}
          height={60} />
        </div>
        <div className="hidden md:flex h-full">
          <Image
          src="/icon/pandoratextil.jpeg" 
          alt="Logo da Pandora" 
          width={55}
          height={55} />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex flex-row h-full font-semibold">
            <div className="flex items-center px-5 transition duration-300 hover:bg-gray-100 hover:-translate-y-1/25 hover:text-[#06903B]">
              <Link href="/#home">      <button className="">Home</button></Link>
            </div>
            <div className="flex items-center px-5 transition duration-300 hover:bg-gray-100 hover:-translate-y-1/25 hover:text-[#06903B]">
              <Link href="/#sobre_nos"> <button className="">Sobre Nós</button> </Link>
            </div>
            <div className="flex items-center px-5 transition duration-300 hover:bg-gray-100 hover:-translate-y-1/25 hover:text-[#06903B]">
              <Link href="/#produtos">  <button className="">Produtos</button> </Link>
            </div>
            <div className="flex items-center px-5 transition duration-300 hover:bg-gray-100 hover:-translate-y-1/25 hover:text-[#06903B]">
              <Link href="/#contato">   <button className="">Contato</button> </Link>
            </div>
        </div>

        {/* Botão Hamburguer */}
        <button onClick={toggleMenu} 
        className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8" >
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Menu Mobile */}
        {isOpen && (
          // hover:bg-gray-100
          <div className="md:hidden bg-[rgba(245,245,245,1)] border-[#F4C317] absolute top-15 left-0 w-full flex flex-col items-center font-semibold">
            <div className="flex items-center px-5">
              <Link href="/#home">
                <button onClick={() => setIsOpen(false)} className="transition duration-300 hover:-translate-y-1/15 hover:text-[#06903B]">Home</button> 
              </Link>
            </div>
            <div className="flex items-center px-5">
              <Link href="/#sobre_nos"> 
                <button onClick={() => setIsOpen(false)} className="transition duration-300 hover:-translate-y-1/15 hover:text-[#06903B]">Sobre Nós</button> 
              </Link>
            </div>
            <div className="flex items-center px-5">
              <Link href="/#produtos">
                <button onClick={() => setIsOpen(false)} className="transition duration-300 hover:-translate-y-1/15 hover:text-[#06903B]">Produtos</button>
              </Link>
            </div>
            <div className="flex items-center px-5">
              <Link href="/#contato">   
                <button onClick={() => setIsOpen(false)} className="transition duration-300 hover:-translate-y-1/15 hover:text-[#06903B]">Contato</button> 
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}