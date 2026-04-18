import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-900">
          Integra<span className="text-blue-600">.ai</span>
        </div>
        <a href="#contato">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6">
            Agendar demonstração
          </Button>
        </a>
      </div>
    </header>
  );
}
