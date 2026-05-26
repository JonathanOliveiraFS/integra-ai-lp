import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é a Gestão de Tráfego Pago e como ela ajuda minha clínica?",
    answer: "Criamos e gerenciamos anúncios estratégicos no Google, Instagram e Facebook para colocar sua clínica na frente de pessoas que já buscam pelos seus procedimentos. O objetivo é atrair leads qualificados e decididos a comprar, para que sua equipe foque apenas no fechamento das vendas."
  },
  {
    question: "Qual o valor mínimo que preciso investir em anúncios?",
    answer: "O valor é pago diretamente às plataformas e definido por você. Recomendamos um investimento diário que permita gerar volume de contatos suficiente (geralmente a partir de R$ 30 a R$ 50/dia para negócios locais). O orçamento ideal é desenhado na nossa reunião consultiva."
  },
  {
    question: "Em quanto tempo começo a ver resultados e agendamentos?",
    answer: "Os anúncios podem começar a gerar cliques em 24 a 48 horas após a campanha ir ao ar. No entanto, o Google e o Meta passam por um período de aprendizado. Em média, levamos de 1 a 3 meses para estabilizar os custos e atingir a alta performance."
  },
  {
    question: "Vocês garantem vendas ou agendamentos lotados?",
    answer: "Garantimos que seu anúncio aparecerá para pessoas qualificadas e com alta intenção de compra da sua região. Levamos a oportunidade até você, mas o fechamento depende do seu time comercial. É por isso que também oferecemos Automação de Atendimento para maximizar as conversões."
  },
  {
    question: "E se entrarem apenas pessoas 'curiosas' ou desqualificadas?",
    answer: "Nosso trabalho é justamente negativar palavras ruins e segmentar o público por raio de localização, faixa etária e até renda. Se a campanha trouxer curiosos, ajustamos a estratégia rapidamente até limparmos o público e focarmos apenas em leads High Ticket."
  },
  {
    question: "Terei acesso aos relatórios dos meus investimentos?",
    answer: "Transparência total é nosso lema. Você terá acesso a relatórios inteligentes e fáceis de entender para acompanhar quanto foi investido, quantos leads chegaram no WhatsApp e qual o custo de cada um. Você nunca ficará 'no escuro'."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Perguntas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Tudo o que você precisa saber sobre a nossa Gestão de Tráfego & Performance.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-100 last:border-none">
              <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-blue-600 transition-colors py-6 text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 pr-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
