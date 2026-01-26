"use client"

import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

export default function Footer_landpage() {
  return (
    <div>
      <footer className="flex flex-col md:flex-row justify-between
      bg-white text-black text-center px-10 py-2">
        <div className="flex flex-row justify-between items-center">
            <div>
                <Image
                src="/icon/ptextil.png"
                alt="Logo da Pandora"
                width={50}
                height={50} />
            </div>
            <div className="flex flex-row justify-between text-sm sm:text-base space-x-6">
                <div className="flex flex-row space-x-3"><FaWhatsapp /><p>(11) 96172-2824</p></div>
                <div className="flex flex-row space-x-3"><FaPhone /><p>(11) 4638-4001</p></div>
            </div>
        </div>
        <div className="flex flex-row space-y-5 justify-center p-2">
            <p>&copy; 2024 PandoraTextil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}