import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-2xl font-bold text-white">
              Integra<span className="text-blue-500">.ai</span>
            </div>
            <p className="max-w-sm text-slate-400">
              Transformamos a operação de clínicas e escritórios integrando assistentes inteligentes e painéis de dados. Foco total em escala e vendas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Soluções</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Políticas de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} Integra.ai - Automação Inteligente. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span>Desenvolvido com foco em performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
