import Catalogo from "@/components/catalogo";
import ContactForm from "@/components/contactform";
import Produtos from "@/components/produtos";
import Image from "next/image";
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

export default function Home() {

  return (
    <div className="bg-white">

      {/* Seção da Home */}

        <div className="bg-[url(/images/foto_tear.jpg)] bg-cover
        min-h-[82dvh]
        flex flex-col justify-center items-center">
          <div className="flex bg-[rgba(255,255,255,0.8)] 
            p-10 md:p-8
            rounded-full lg:rounded-lg space-y-4
            flex flex-col justify-center items-center">
            <div className="hidden lg:flex flex-col">
              <h1 className="text-[#06903B] text-6xl font-bold">Sinônimo de Qualidade!</h1>
              <p className="text-black text-xl font-semibold">Aviamentos têxteis de qualidade para você em poliéster e algodão!</p>
            </div>
            <div className="lg:hidden flex flex-row items-end">
                <Image
                  src="/images/pandoratextil_semfundo.png"
                  alt="P de Pandora"
                  width={250}
                  height={250} />
            </div>  
          </div>
        </div>
      

      {/* Seção Sobre nós */}
      
      <div className="py-15 lg:py-20 overflow-x-hidden">
        <hr id="sobre_nos" className="hidden" name="ancora" />
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center
          lg:-me-[15%]">
          <div className="text-black text-lg bg-[#F8F8F8]
          xl:ml-25 xl:max-w-lg
          lg:ml-15 lg:max-w-md
          md:max-w-160
          max-w-120 max-h-fit
          m-8 p-6
          flex flex-col 
          shadow-xl/20 rounded-lg gap-3">
            <p>A PANDORA TÊXTIL foi fundada em Março de 2011, unindo o conhecimento técnico e comercial, acumulado ao longo de 20 anos, para atender ao público com uma estrutura enxuta,  ágil e focada em atingir padrões de excelência.</p>
            <p>Desta forma,  nos sentimos seguros em oferecer os nossos produtos aos mais variados clientes, com alta qualidade, agilidade e preço justo.</p>
            <p>Isto faz com que nossa empresa, sinta-se confiante e  capaz de ampliar seu mercado.</p>
            <p>Muito trabalho, dedicação, seriedade e transparência, esses são os valores que fazem parte do nosso dia-a-dia.</p>
            <p>Com profissionais de alto desempenho, que lutam pelo crescimento pessoal e empresarial, zelamos pela melhoria contínua de nossos produtos.</p>
          </div>
          <div>
            <Image className="lg:max-w-150 xl:max-w-200 lg:mask-l-from-60%"
            src="/images/foto_pandora.jpg"
            alt="Foto da Loja Pandora Textil"
            width={1200}
            height={1200} />
          </div>
        </div>
      </div>

      {/* Seção Produtos */}

      <hr id="produtos" className="hidden" name="ancora" />

      <div className="flex flex-col items-center">
        <div><h1 className="text-black font-extrabold text-3xl
        sm:text-4xl
        lg:text-5xl">Nossos Produtos</h1></div>
        <div><Produtos /></div>
        <div className="flex flex-col items-center text-black font-bold text-lg my-3 md:space-y-2
        sm:text-xl md:text-2xl lg:text-3xl">
          <div>
            <h1 className="">Veja nosso catálogo de cores</h1>
          </div>

          <Catalogo />

        </div>
      </div>

      {/* Seção Contato */}

      <hr id="contato" className="hidden" name="ancora" />

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
              <div className="flex flex-col sm:flex-row mt-5 items-start justify-center space-x-6">
                <a href="https://api.whatsapp.com/send?phone=5511961722824&text=Ol%C3%A1%21%21%20Meu%20nome%20%C3%A9%20Gustavo%2C%20vamos%20fazer%20um%20or%C3%A7amento%3F">
                  <div className="flex flex-row space-x-3"><FaWhatsapp /><p>(11) 96172-2824</p></div>
                </a>
                <div className="flex flex-row space-x-3"><FaPhone /><p>(11) 4638-4001</p></div>
              </div>
            </div>
          </div>

          {/* <form action="https://formspree.io/f/mgooeqep" method="POST" 
          className="flex flex-col w-full max-w-lg md:max-w-xl">
            <label>Nome Completo:</label>
            <input className="bg-white px-2 p-1 text-black rounded-md mb-3 maxlenth" name="inpNome" />

            <label>Telefone:</label>
            <input className="bg-white px-2 p-1 text-black rounded-lg mb-3" name="inpTelefone" />

            <label>Email:</label>
            <input className="bg-white px-2 p-1 text-black rounded-lg mb-3" name="inpEmail" />

            <label>Mensagem:</label>
            <textarea className="bg-white px-2 p-1 text-black rounded-lg mb-3" name="inpMensagem"/>

            <button className="bg-[#F4C317] text-black font-bold py-2 px-4 rounded-md" type="submit">Enviar</button>
          </form> */}

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
