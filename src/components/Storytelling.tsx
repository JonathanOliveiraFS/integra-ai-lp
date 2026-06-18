import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Award, BookOpen, GraduationCap } from "lucide-react";
import jonathanPhoto from "@/assets/jonathan-3.jpg";

export function Storytelling() {
  return (
    <section id="especialista" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Jonathan Photo Column */}
          <div className="flex-1 relative order-2 lg:order-1">
            <div className="relative z-10 rounded-[3rem] aspect-square overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src={jonathanPhoto} 
                alt="Jonathan Oliveira - Especialista" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
            {/* Achievement Badges */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Expertise</p>
                  <p className="text-slate-900 font-bold">Biomédico Esteta</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Acadêmico</p>
                  <p className="text-slate-900 font-bold">Mestrando UECE</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text Content Column */}
          <div className="flex-1 space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <Badge className="bg-blue-600 hover:bg-blue-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-widest">
                O Especialista por trás dos números
              </Badge>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Ciência, Estratégia e <span className="text-blue-600">Performance Real.</span>
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Eu sou <strong>Jonathan Oliveira</strong>, e minha trajetória não começou no marketing, mas na <strong>Biomedicina Estética</strong>. Durante anos, atuei na linha de frente de grandes redes como <em>Espaço Laser</em> e <em>Dermarey</em>, onde aprendi que o segredo de uma clínica lucrativa não é apenas o procedimento, mas a <strong>esteira comercial e a atração de leads qualificados.</strong>
              </p>
              <p>
                Como professor universitário e mestrando em Ciências Fisiológicas (UECE), uni o rigor científico à habilidade de comunicação para fundar a <strong>Integra.ai</strong>. Minha missão é traduzir métricas complexas em lucro real para o seu negócio local.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />, text: "Foco em Negócios Locais" },
                { icon: <BookOpen className="w-5 h-5 text-blue-600" />, text: "Metodologia Científica" },
                { icon: <Award className="w-5 h-5 text-blue-600" />, text: "Ex-Espaço Laser & Dermarey" },
                { icon: <GraduationCap className="w-5 h-5 text-blue-600" />, text: "Professor & Pesquisador" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                  {item.icon}
                  <span className="text-slate-700 font-semibold text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200">
              <p className="text-slate-500 italic">
                "Não sou apenas um gestor de tráfego. Sou um parceiro que entende a fisiologia do seu negócio e a psicologia do seu cliente."
              </p>
              <p className="mt-4 font-extrabold text-slate-900">— Jonathan Oliveira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
