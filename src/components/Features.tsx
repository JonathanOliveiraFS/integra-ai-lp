import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, BarChart3, TrendingUp, Zap, MousePointer2 } from "lucide-react";

const features = [
  {
    title: "Gestão de Tráfego Pago",
    description: "Anúncios estratégicos no Google, Instagram e Facebook para colocar sua clínica na frente de quem já busca por seus serviços.",
    icon: Target,
  },
  {
    title: "Leads Qualificados",
    description: "Filtramos o perfil exato do seu cliente ideal (High Ticket), trazendo pessoas decididas a comprar e agendar.",
    icon: Users,
  },
  {
    title: "Google & Meta Ads",
    description: "Domine as buscas e as redes sociais. Interceptamos a intenção de compra no Google e despertamos o desejo no Instagram.",
    icon: MousePointer2,
  },
  {
    title: "Relatórios de Performance",
    description: "Transparência total. Acompanhe quanto foi investido, quantos cliques recebeu e o custo exato de cada lead no WhatsApp.",
    icon: BarChart3,
  },
  {
    title: "Otimização Diária",
    description: "Nada de 'subir anúncio e esquecer'. Monitoramos e ajustamos suas campanhas diariamente para garantir o menor custo por lead.",
    icon: TrendingUp,
  },
  {
    title: "Automação de Vendas",
    description: "Integramos o tráfego com assistentes inteligentes para garantir que nenhum lead qualificado fique sem resposta imediata.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Transformamos cliques em <span className="text-blue-600">vendas reais</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Sua clínica não precisa de 'likes', ela precisa de agenda lotada e faturamento. Veja como fazemos isso acontecer:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 tracking-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-base">
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
