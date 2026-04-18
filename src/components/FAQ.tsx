import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O sistema vai inventar informações ou dar respostas erradas?",
    answer: "Não. Realizamos o tratamento e estruturação dos dados da sua empresa. O assistente é parametrizado com sua tabela de preços, protocolos e regras específicas. Ele só responde o que estiver no seu manual oficial."
  },
  {
    question: "O assistente consegue marcar consultas sozinho?",
    answer: "Sim. Realizamos a integração técnica diretamente com a sua agenda ou sistema de gestão. Isso permite que o cliente consulte horários disponíveis e faça agendamentos sem intervenção manual."
  },
  {
    question: "Os dados dos meus clientes estão seguros?",
    answer: "Com certeza. Nossa arquitetura de banco de dados mantém uma 'gaveta digital' totalmente isolada para cada empresa, garantindo sigilo total e que as informações nunca se misturem."
  },
  {
    question: "Qual o prazo para a integração estar funcionando?",
    answer: "O prazo médio é de 15 a 30 dias para a configuração e parametrização completa do SETUP, dependendo da complexidade das integrações exigidas."
  },
  {
    question: "Como funciona se o cliente quiser falar com uma pessoa?",
    answer: "O fluxo é programado para identificar quando o assunto exige conversa humana ou quando o cliente solicita. O transbordo é acionado, o robô pausa e sua equipe assume o atendimento pelo próprio WhatsApp."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dúvidas <span className="text-blue-600">Frequentes</span>
          </h2>
          <p className="text-slate-600">
            Tudo o que você precisa saber sobre como a Integra.ai pode transformar sua operação.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-blue-600 transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
