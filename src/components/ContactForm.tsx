import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  descricao: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    descricao: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.telefone) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: "Novo lead - Landing Page Integra.ads",
          from_name: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          message: formData.descricao || "Sem descrição.",
        }),
      });

      if (!response.ok) throw new Error("Erro ao enviar");

      toast.success("Recebemos sua mensagem! Entraremos em contato em breve.");
      setFormData({ nome: "", email: "", telefone: "", descricao: "" });
    } catch {
      toast.error("Ocorreu um erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="especialista" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Fale com um <span className="text-blue-600">Especialista</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Preencha o formulário e descubra como podemos transformar seus resultados com tráfego pago.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-slate-700 font-bold">
              Nome <span className="text-red-500">*</span>
            </Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className="h-12 rounded-xl bg-white border-slate-200 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 font-bold">
              E-mail <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="h-12 rounded-xl bg-white border-slate-200 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone" className="text-slate-700 font-bold">
              Telefone / WhatsApp <span className="text-red-500">*</span>
            </Label>
            <Input
              id="telefone"
              type="tel"
              placeholder="(85) 99999-9999"
              value={formData.telefone}
              onChange={(e) => handleChange("telefone", e.target.value)}
              className="h-12 rounded-xl bg-white border-slate-200 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao" className="text-slate-700 font-bold">
              Descreva seu gargalo atual
            </Label>
            <Textarea
              id="descricao"
              placeholder="Conte um pouco sobre o que sua empresa precisa..."
              value={formData.descricao}
              onChange={(e) => handleChange("descricao", e.target.value)}
              className="min-h-[120px] rounded-xl bg-white border-slate-200 text-base"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-full h-14 text-lg shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
          >
            {loading ? "Enviando..." : "Quero Vender Mais"}
          </Button>
        </form>
      </div>
    </section>
  );
}