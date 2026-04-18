import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro de conexão. Verifique sua internet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Informações de Contato */}
          <div className="bg-blue-600 p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Vamos escalar seu negócio?</h2>
              <p className="text-blue-100 mb-8">
                Preencha o formulário e um de nossos especialistas em automação entrará em contato para diagnosticar seus gargalos operacionais.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-white/30 rounded-full"></div>
              </div>
              <p className="text-blue-100 font-medium">
                Pronto para automatizar? Sua transformação começa com um clique.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="p-8 md:p-12 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome" 
                  required 
                  className="bg-slate-50 border-slate-200 focus:ring-blue-600"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Corporativo</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="email@empresa.com" 
                    required 
                    className="bg-slate-50 border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone / WhatsApp</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="(00) 00000-0000" 
                    required 
                    className="bg-slate-50 border-slate-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Qual o maior gargalo da sua operação hoje?</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Conte-nos brevemente como podemos ajudar..." 
                  required 
                  className="bg-slate-50 border-slate-200 min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-xl transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Agendar Reunião de Diagnóstico"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
