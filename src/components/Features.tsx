import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BarChart3, TrendingUp, Zap, Clock } from "lucide-react";

const features = [
  {
    title: "Atendimento 24/7",
    description: "Nunca mais perca um paciente ou cliente de madrugada porque ninguém respondeu. Nossa IA atende e agenda em tempo real.",
    icon: MessageSquare,
  },
  {
    title: "Relatórios Inteligentes",
    description: "Métricas da empresa consolidadas, focado no que importa: o crescimento do seu negócio e volume de vendas.",
    icon: BarChart3,
  },
  {
    title: "Performance",
    description: "Análise de dados avançada e dashboards intuitivos para acompanhar o pulso da sua operação 24 horas por dia.",
    icon: TrendingUp,
  },
  {
    title: "Máquina de Vendas",
    description: "Geração e qualificação de leads o tempo todo, garantindo que seu time comercial foque apenas em fechar negócios.",
    icon: Zap,
  },
  {
    title: "Lembretes Automáticos",
    description: "Resgate de clientes esquecidos ou inativos. Chega de cadeiras vazias e oportunidades perdidas por falta de follow-up.",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que pode ser <span className="text-blue-600">automatizado</span>?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluções completas para eliminar gargalos operacionais e escalar sua empresa com inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
