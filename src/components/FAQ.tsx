import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como a Integra.ai garante leads qualificados para o meu negócio?",
    answer: "Unimos o poder dos anúncios no Google e Meta Ads com automações que filtram e qualificam cada contato. Assim, seu time comercial recebe apenas leads prontos para o fechamento, evitando perda de tempo com curiosos."
  },
  {
    question: "O que é tráfego pago e por que ele é essencial hoje?",
    answer: "É a estratégia de colocar sua marca onde seus clientes estão buscando: no topo do Google e no feed do Instagram/Facebook. É a maneira mais rápida e escalável de atrair novos clientes todos os dias."
  },
  {
    question: "Como a análise de dados ajuda a otimizar meus resultados?",
    answer: "Não trabalhamos com achismos. Através de dashboards inteligentes, monitoramos cada etapa do funil de vendas, permitindo ajustes rápidos nas campanhas para maximizar o seu Retorno sobre Investimento (ROI)."
  },
  {
    question: "A segurança dos meus dados e dos meus clientes é garantida?",
    answer: "Com certeza. Utilizamos protocolos de segurança de ponta e estamos em total conformidade com a LGPD. Seus dados estratégicos e informações de clientes ficam protegidos em uma arquitetura isolada."
  },
  {
    question: "Qual o valor ideal de investimento para começar a ver lucro?",
    answer: "O valor é flexível e definido conforme sua meta. Recomendamos um orçamento que permita volume de dados para otimização (geralmente a partir de R$ 1.500/mês em anúncios). Desenhamos o plano ideal na nossa reunião consultiva."
  },
  {
    question: "Preciso de um sistema complexo para integrar as automações?",
    answer: "Pelo contrário. Nossas soluções são plug-and-play e se integram às ferramentas que você já usa (WhatsApp, CRM, Site). O objetivo é simplificar sua operação, não complicá-la."
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
