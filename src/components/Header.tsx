import { Button } from "@/components/ui/button";

export function Header() {
  const whatsappUrl = "https://wa.me/558597685040?text=" + encodeURIComponent("Olá Jonathan! Vi seu site e gostaria de saber mais sobre a Gestão de Tráfego Pago.");

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <div className="text-3xl font-black text-slate-900 tracking-tighter">
          INTEGRA<span className="text-blue-600">.ADS</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">Serviços</a>
          <a href="#especialista" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">Especialista</a>
          <a href="#faq" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-full px-8 h-12 shadow-lg shadow-blue-100 hidden sm:flex">
              Falar com Especialista
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
