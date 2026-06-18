import { Search, Share2, BarChart3, ShieldCheck } from "lucide-react";

const techs = [
  { 
    name: "Google Ads", 
    icon: Search, 
    desc: "Especialistas em colocar seu negócio no topo das buscas do Google." 
  },
  { 
    name: "Meta Ads", 
    icon: Share2, 
    desc: "Campanhas de alta conversão no Instagram e Facebook." 
  },
  { 
    name: "Análise de Dados", 
    icon: BarChart3, 
    desc: "Dashboards inteligentes para acompanhar seu crescimento em tempo real." 
  },
  { 
    name: "Segurança de Dados", 
    icon: ShieldCheck, 
    desc: "Arquitetura protegida e em total conformidade com a LGPD." 
  },
];

export function SocialProof() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 font-medium mb-10 uppercase tracking-widest text-sm">
          Tecnologias de ponta que potencializam seu negócio
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">{tech.name}</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-[150px]">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
