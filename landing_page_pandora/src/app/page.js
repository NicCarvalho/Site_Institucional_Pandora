import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">

      {/* Seção da Home */}

        <div className="bg-[url(/images/foto_tear.jpg)] bg-cover
        min-h-[82dvh]
        flex flex-col justify-center items-center">
          <div className="flex bg-[rgba(255,255,255,0.8)] 
            p-10 md:p-8
            rounded-full md:rounded-lg space-y-4
            flex flex-col justify-center items-center">
            <div className="hidden md:flex flex-col">
              <h1 className="text-[#06903B] text-6xl font-bold">Sinônimo de Qualidade!</h1>
              <p className="text-black text-xl font-semibold">Aviamentos têxteis de qualidade para você em poliéster e algodão!</p>
            </div>
            <div className="md:hidden flex flex-row items-end">
                <Image
                  src="/images/pandoratextil_semfundo.png"
                  alt="P de Pandora"
                  width={250}
                  height={250} />
            </div>  
          </div>
        </div>
      

      {/* Seção Sobre nós */}

      <div className="py-20 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center
        md:pl-40 md:-me-50">
          <div className="text-black text-lg
          m-8 p-6 md:max-w-lg max-h-fit
          flex flex-col 
          border-2 rounded-lg gap-3">
            <p>A PANDORA TÊXTIL foi fundada em Março de 2011, unindo o conhecimento técnico e comercial, acumulado ao longo de 20 anos, para atender ao público com uma estrutura enxuta,  ágil e focada em atingir padrões de excelência.</p>
            <p>Desta forma,  nos sentimos seguros em oferecer os nossos produtos aos mais variados clientes, com alta qualidade, agilidade e preço justo.</p>
            <p>Isto faz com que nossa empresa, sinta-se confiante e  capaz de ampliar seu mercado.</p>
            <p>Muito trabalho, dedicação, seriedade e transparência, esses são os valores que fazem parte do nosso dia-a-dia.</p>
            <p>Com profissionais de alto desempenho, que lutam pelo crescimento pessoal e empresarial, zelamos pela melhoria contínua de nossos produtos.</p>
          </div>
          <div>
            <Image
            src="/images/foto_pandora.jpg"
            alt="Foto da Loja Pandora Textil"
            width={800}
            height={800} />
          </div>
        </div>
      </div>

      {/* Seção Produtos */}

      <div>
      Seção de produtos
      </div>

      {/* Seção Contato */}

      <div className="w-full ">
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1095622845205!2d-46.35558309831287!3d-23.52856147832905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7ad9d2dded4b%3A0xc81cc5ac08018643!2sPANDORA%20T%C3%8AXTIL!5e0!3m2!1spt-BR!2sbr!4v1767967784527!5m2!1spt-BR!2sbr" 
        width={411} height={400}
        />
        {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" /> */}
        </div>
      </div>

    </div>
  );
}
