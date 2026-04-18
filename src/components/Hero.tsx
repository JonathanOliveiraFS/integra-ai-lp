import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Automação Inteligente
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Transformamos a operação de <span className="text-blue-600">clínicas e escritórios</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              Integrando assistentes inteligentes e painéis de dados para que foque no que realmente importa: <span className="font-bold text-slate-900 uppercase">Vendas!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full h-14 text-lg">
                  Agendar demonstração
                </Button>
              </a>
            </div>
          </div>

          {/* Flowchart Placeholder */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center p-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              {/* Abstract Flowchart Representation */}
              <div className="relative w-full h-full flex flex-col items-center justify-center space-y-6">
                <div className="w-32 h-16 bg-white shadow-sm rounded-xl border border-slate-100 flex items-center justify-center text-xs font-medium text-slate-400">Entrada</div>
                <div className="w-1 h-8 bg-blue-200"></div>
                <div className="w-48 h-24 bg-blue-600 shadow-lg shadow-blue-200 rounded-2xl flex items-center justify-center text-white font-bold text-center p-4">
                  IA Integra.ai
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-8 bg-blue-200 rotate-45 origin-top"></div>
                  <div className="w-1 h-8 bg-blue-200 -rotate-45 origin-top"></div>
                </div>
                <div className="flex gap-8">
                  <div className="w-32 h-16 bg-white shadow-sm rounded-xl border border-slate-100 flex items-center justify-center text-xs font-medium text-slate-400 text-center p-2">Atendimento 24/7</div>
                  <div className="w-32 h-16 bg-white shadow-sm rounded-xl border border-slate-100 flex items-center justify-center text-xs font-medium text-slate-400 text-center p-2">Dados em Tempo Real</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Banner */}
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">+85%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Aumento em Performance</div>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-slate-800 py-8 md:py-0">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Atendimento Automatizado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">-60%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Redução de Custos Operacionais</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
