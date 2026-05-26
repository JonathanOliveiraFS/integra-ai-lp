import { Button } from "@/components/ui/button";
import jonathanPhoto from "@/assets/jonathan-2.jpg";

export function Hero() {
  const whatsappUrl = "https://wa.me/558597685040?text=" + encodeURIComponent("Olá Jonathan! Vi seu site e gostaria de saber mais sobre a Gestão de Tráfego Pago.");

  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Gestão de Tráfego Pago & Performance
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Alcance o próximo nível: colocamos seu <span className="text-blue-600">negócio local</span> na frente de quem já quer comprar.
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Fature até <span className="font-bold text-slate-900">3x mais</span> com anúncios estratégicos no Google e Meta Ads, gerenciados por quem entende de <span className="font-bold text-slate-900">vendas e escala.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full h-16 text-xl font-bold shadow-xl shadow-blue-200 transition-all hover:scale-105">
                  Quero Vender Mais Agora
                </Button>
              </a>
              <a href="#especialista">
                <Button variant="outline" size="lg" className="px-8 rounded-full h-16 text-lg border-2 border-slate-200 hover:bg-slate-50">
                  Conhecer o Especialista
                </Button>
              </a>
            </div>
          </div>

          {/* Jonathan Photo with Background Elements */}
          <div className="flex-1 w-full max-w-xl relative">
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/5]">
              <img 
                src={jonathanPhoto} 
                alt="Jonathan Oliveira - Especialista em Tráfego" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-bold text-lg">Jonathan Oliveira</p>
                <p className="text-sm opacity-90">Especialista em Tráfego para Negócios Locais</p>
              </div>
            </div>
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>

        {/* High Conversion Banner */}
        <div className="mt-24 p-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 shadow-2xl">
          <div className="bg-slate-900 rounded-[2.4rem] p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
              <div>
                <div className="text-5xl font-extrabold text-blue-400 mb-2">3x+</div>
                <div className="text-slate-300 text-sm font-bold uppercase tracking-[0.2em]">Faturamento Estimado</div>
              </div>
              <div className="border-y md:border-y-0 md:border-x border-slate-800 py-10 md:py-0">
                <div className="text-5xl font-extrabold text-blue-400 mb-2">24h</div>
                <div className="text-slate-300 text-sm font-bold uppercase tracking-[0.2em]">Anúncios no Ar</div>
              </div>
              <div>
                <div className="text-5xl font-extrabold text-blue-400 mb-2">100%</div>
                <div className="text-slate-300 text-sm font-bold uppercase tracking-[0.2em]">Foco em Leads Qualificados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
