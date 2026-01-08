import Image from "next/image";

export default function Home() {
  return (
    <div>

      {/* Seção da Home */}

      <div className="bg-[url(/images/foto_tear.jpg)] bg-cover
      min-w-[300px] min-h-[700px] 
      flex flex-col justify-center items-center">
        <div className="bg-[rgba(255,255,255,0.8)] 
        min-w-[1150px] min-h-[250px] 
        rounded-lg space-y-4
        flex flex-col justify-center items-center">
          <h1 className="text-[#06903B] text-6xl font-bold">Sinônimo de Qualidade!</h1>
          <p className="text-black text-xl font-semibold">Aviamentos têxteis de qualidade para você em poliéster e algodão!</p>
        </div>
      </div>

      {/* Seção Sobre nós */}

      <div className="bg-white py-20">
        <div className="flex flex-row justify-center space-x-30 overflow-hidden">
          <div className="text-black text-xl 
          border-2 rounded-lg space-y-1
          max-w-[700px] max-h-[600px]
          py-12 px-25">
            <p>A PANDORA TÊXTIL foi fundada em Março de 2011, unindo o conhecimento técnico e comercial, acumulado ao longo de 20 anos, para atender ao público com uma estrutura enxuta,  ágil e focada em atingir padrões de excelência.</p>
            <p>Desta forma,  nos sentimos seguros em oferecer os nossos produtos aos mais variados clientes, com alta qualidade, agilidade e preço justo.</p>
            <p>Isto faz com que nossa empresa, sinta-se confiante e  capaz de ampliar seu mercado.</p>
            <p>Muito trabalho, dedicação, seriedade e transparência, esses são os valores que fazem parte do nosso dia-a-dia.</p>
            <p>Com profissionais de alto desempenho, que lutam pelo crescimento pessoal e empresarial, zelamos pela melhoria contínua de nossos produtos.</p>
          </div>
          <div className="-me-100">
            <Image
            src="/images/foto_pandora.jpg"
            alt="Foto da Loja Pandora Textil"
            width={800}
            height={800} />
          </div>
        </div>
      </div>

      {/* Seção Produtos */}

      {/* Seção Contato */}

    </div>
  );
}
