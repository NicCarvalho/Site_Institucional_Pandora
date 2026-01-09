"use client"

import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

export default function Footer_landpage() {
  return (
    <div>
      <footer className="bg-white text-black text-center p-4 border-t-4 border-[#F4C317]">
        <div className="flex flex-row justify-around items-center border-b-2">
            <div>
                <Image
                src="/icon/ptextil.png"
                alt="Logo da Pandora"
                width={50}
                height={50} />
            </div>
            <div className="flex flex-row justify-between space-x-6">
                <div className="flex flex-row space-x-3"><FaWhatsapp /><p>(96) 98220-7455</p></div>
                <div className="flex flex-row space-x-3"><FaPhone /><p>(96) 3538-6839</p></div>
            </div>
        </div>
        <div className="flex flex-row space-y-5 justify-center">
            <p>&copy; 2024 PandoraTextil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}