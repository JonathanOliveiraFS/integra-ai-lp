import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

export function Storytelling() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Coluna de Texto */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium">
                Impacto Real
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                De <span className="text-slate-400 line-through decoration-red-400">caos operacional</span> para uma máquina de crescimento.
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Imagine o Dr. Ricardo, dono de uma clínica em expansão. Sua equipe passava 40% do dia respondendo mensagens repetitivas no WhatsApp, enquanto dezenas de leads eram perdidos durante a noite por falta de resposta.
              </p>
              <p>
                Após integrar a <strong>Integra.ai</strong>, o cenário mudou drasticamente. Sua B.IA (Business Intelligence & Automation) agora qualifica leads 24/7, agenda consultas automaticamente e envia lembretes que reduziram o absenteísmo em 35%.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Redução de 60% no trabalho manual repetitivo",
                "Aumento de 25% na conversão de novos leads",
                "Dashboards em tempo real para tomada de decisão"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="text-slate-500 italic border-l-4 border-blue-600 pl-4">
                "A Integra.ai não apenas automatizou processos, ela devolveu o tempo que eu precisava para focar na estratégia e no atendimento de qualidade."
              </p>
              <p className="mt-2 font-bold text-slate-900 ml-5">— Dr. Ricardo, Diretor Clínico</p>
            </div>
          </div>

          {/* Coluna de Imagem/Placeholder */}
          <div className="flex-1 relative">
            <div className="relative z-10 bg-slate-100 rounded-3xl aspect-square overflow-hidden shadow-2xl border border-slate-200 flex items-center justify-center p-8">
               {/* Simulação de um Dashboard Simples */}
               <div className="w-full h-full bg-white rounded-xl shadow-inner p-6 flex flex-col gap-6">
                 <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                      <div className="h-8 w-32 bg-blue-600 rounded"></div>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                 </div>
                 <div className="flex-1 grid grid-cols-3 gap-4 items-end">
                    <div className="bg-blue-200 h-[40%] rounded-t-lg"></div>
                    <div className="bg-blue-400 h-[65%] rounded-t-lg"></div>
                    <div className="bg-blue-600 h-[90%] rounded-t-lg"></div>
                 </div>
                 <div className="space-y-3">
                    <div className="h-3 w-full bg-slate-100 rounded"></div>
                    <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                 </div>
               </div>
            </div>
            
            {/* Elementos Decorativos */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
