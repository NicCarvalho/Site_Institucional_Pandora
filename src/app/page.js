"use client";

import Catalogo from "@/components/catalogo";
import ContactForm from "@/components/contactform";
import Produtos from "@/components/produtos";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="bg-white">

      {/* Seção da Home */}

        <div className="bg-[url(/images/banner_pandora.jpeg)] max-md:bg-bottom bg-cover
        min-h-[100dvh]
        flex flex-col justify-center items-center">
          <div className="bg-[rgba(255,255,255,0.8)] 
            p-10 md:p-8
            rounded-full space-y-4
            flex flex-col justify-center items-center">
            {/* <div className="hidden lg:flex flex-col">
              <h1 className="text-[#06903B] text-6xl font-bold">Sinônimo de Qualidade!</h1>
              <p className="text-black text-xl font-semibold">Aviamentos têxteis de qualidade para você em poliéster e algodão!</p>
            </div> */}
            <div className="flex flex-row items-end">
                <Image className="max-w-63"
                  src="/images/pandoratextil_semfundo.png"
                  alt="P de Pandora"
                  width={250}
                  height={250} />
            </div>  
          </div>
        </div>
      

      {/* Seção Sobre nós */}
      
      <div id="sobre_nos" className="py-15 lg:py-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center
          lg:-me-[15%]">
          <div className="text-black text-base bg-[#F8F8F8]
          xl:ml-25 xl:max-w-lg
          lg:ml-15 lg:max-w-md
          md:max-w-160
          max-w-120 max-h-fit
          m-8 p-6
          flex flex-col 
          shadow-xl/20 rounded-lg gap-3
          border border-[#020232]"
          data-aos="flip-right"
          data-aos-delay="200">
            <p>A PANDORA TÊXTIL foi fundada em Março de 2011, unindo o conhecimento técnico e comercial, acumulado ao longo de 20 anos, para atender ao público com uma estrutura enxuta,  ágil e focada em atingir padrões de excelência.</p>
            <p>Desta forma,  nos sentimos seguros em oferecer os nossos produtos aos mais variados clientes, com alta qualidade, agilidade e preço justo.</p>
            <p>Isto faz com que nossa empresa, sinta-se confiante e  capaz de ampliar seu mercado.</p>
            <p>Muito trabalho, dedicação, seriedade e transparência, esses são os valores que fazem parte do nosso dia-a-dia.</p>
            <p>Com profissionais de alto desempenho, que lutam pelo crescimento pessoal e empresarial, zelamos pela melhoria contínua de nossos produtos.</p>
          </div>
          <div data-aos="fade-left" data-aos-delay="150">
              {/* lg:max-w-150 xl:max-w-200 */}
            <Image className="lg:max-w-150 xl:max-w-200 lg:mask-l-from-60%"
            src="/images/foto_pandora.jpg"
            alt="Foto da Loja Pandora Textil"
            width={1200}
            height={1200} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse justify-around items-center 
        py-12 mt-12 space-y-5 lg:space-y-10 bg-[#0E4935]">
          
          <div data-aos="zoom-in-left" className="flex flex-col items-center text-white text-wrap 
          w-[90dvw] md:w-150 lg:w-100 xl:w-150
          lg:space-y-3">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                CONFIANÇA E AGILIDADE, SEMPRE!
              </h1>
              <p className="text-base text-center">Produzimos milhões de 
                metros de fitas todos os meses, com 
                isso, garantimos que a necessidade 
                da sua empresa seja atendida no 
                melhor prazo possível.
              </p>
          </div>
          <div data-aos="zoom-in-right">
            <iframe className="rounded-xl shadow-xl/30 w-[90dvw] h-[51dvw]
              md:w-[80dvw] md:h-[45dvw]
              lg:w-120 lg:h-68
              xl:w-150 xl:h-85" 
              src="https://www.youtube.com/embed/GCabTpCrQv4?si=zJoDoPujfux_2qN1&amp;controls=0" 
              title="YouTube video player" frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin">
            </iframe>
          </div>

        </div>
      </div>

      <hr id="produtos" className="invisible z-50 -translate-y-15" name="ancora" />

      {/* Seção Produtos */}

      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-black font-extrabold text-3xl
          sm:text-4xl
          lg:text-5xl">Nossos Produtos</h1>
        </div>

        <div>
          <Produtos />
        </div>

        <div className="flex flex-col md:flex-row bg-[url(/images/bg_catalogo.jpeg)] justify-around items-center w-full h-180 md:h-120 bg-cover 
          py-20 space-y-10">
          <div className="flex flex-col items-center bg-[url(/images)]
          text-white font-bold text-lg space-y-4
          text-xl sm:text-xl md:text-2xl lg:text-3xl
          md:pl-10">
            <div className="text-wrap text-center
            max-w-70 sm:max-w-125 md:max-w-md lg:max-w-xl">
              <h1>Baixe nosso catálogo e conheça mais das cores que temos disponíveis</h1>
            </div>
            <Catalogo />
          </div>
          <div className="">
              <Image className="h-100 w-100"
              src="/images/catalogo_pandora.png"
              alt=""
              width={200}
              height={200}
              />
          </div>
        </div>
      </div>

      <div className="my-4"></div>

      {/* Seção Contato */}

      <hr id="contato" className="invisible z-50 -translate-y-15" name="ancora" />

      <div className="flex flex-col size-full bg-[#0E4935]">
        <div className="flex flex-col md:flex-row items-center justify-evenly py-10
        mx-20 md:space-x-10 space-y-8
        text-white">
          <div>
            <div className="flex flex-col items-center space-x-3 space-y-3
            md:flex-row md:space-x-5">
              <div className="bg-[rgba(255,255,255,0.95)] rounded-full">
                <Image
                src="/icon/ptextil.png"
                alt="Logo da Pandora"
                width={200}
                height={200}
                />
              </div>
              <div className="flex flex-col max-w-lg">
                <h1 className="text-[#F4C317] text-4xl font-semibold">Fale Conosco</h1>
                <p className="text-justify md:text-left">Entre em contato conosco, peça um orçamento sem compromisso e descubra como podemos transformar o seu negócio hoje.</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col mt-5 items-center justify-center space-y-5
              sm:flex-row sm:space-x-15
              md:flex-col md:space-x-0
              lg:flex-row lg:justify-end lg:space-x-10 
              xl:justify-center xl:space-x-20">
                <div className="flex flex-col items-center text-center space-y-1">
                  <FaWhatsapp className="mb-3"/>
                  
                  <a href="https://api.whatsapp.com/send?phone=5511961722824&text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento">
                    <div className="flex flex-row space-x-3">
                      <h1 className="w-15"> Gustavo </h1>
                      <p>(11) 96172-2824</p>
                    </div>
                  </a>

                  <a href="https://api.whatsapp.com/send?phone=5511939379486&text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento">
                    <div className="flex flex-row space-x-3">
                      <h1 className="w-15"> Victor </h1>
                      <p>(11) 93937-9486</p>
                    </div>
                  </a>

                  <a href="https://api.whatsapp.com/send?phone=5511998610123&text=Ol%C3%A1%2C%20gostaria%20de%20realizar%20um%20or%C3%A7amento">
                    <div className="flex flex-row space-x-3">
                      <h1 className="w-15"> Cida </h1>
                      <p>(11) 99861-0123</p>
                    </div>
                  </a>
                </div>

                <div className="flex flex-col items-center">
                  <FaPhone className="mb-3"/>
                  <p>(11) 4638-4001</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />

        </div>


        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1095622845205!2d-46.35558309831287!3d-23.52856147832905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7ad9d2dded4b%3A0xc81cc5ac08018643!2sPANDORA%20T%C3%8AXTIL!5e0!3m2!1spt-BR!2sbr!4v1767967784527!5m2!1spt-BR!2sbr" 
        className="min-w-full min-h-[400px]"
        />
        {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
        </div>
      </div>

    </div>
  );
}
