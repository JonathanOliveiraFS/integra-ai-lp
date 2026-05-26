import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Storytelling } from "./components/Storytelling";
import { SocialProof } from "./components/SocialProof";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Storytelling />
        <SocialProof />
        <FAQ />
        <ContactForm />
      </main>
      <WhatsAppButton />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
