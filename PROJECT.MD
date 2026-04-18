# Landing Page - Integra.ai

## Visão Geral
- Página focada em apresentar sobre os benefícios da automação, como funciona, facilidade de aplicação (menor burocracia) e um formulário para marcar reunião.
- Título (head) com o nome da empresa (Integra.ai) e o slogan (Automação Inteligente).
- Fluxograma visual e um dado quantitativo de ganhos (ex: aumento de performance Y%).
- Subtítulo: Transformamos a operação de clínicas e escritórios integrando assistentes inteligentes e painéis de dados para que foque no que realmente importa: VENDAS! 

## Estrutura de Conteúdo
- **O que pode ser automatizado:**
    - Atendimento (Atendimento 24/7: Nunca mais perca um paciente ou cliente de madrugada porque ninguém respondeu).
    - Relatórios (Métricas da empresa, focado no negócio e vendas).
    - Performance (Análise de dados, dashboard para acompanhar seu negócio).
    - Máquina de vendas (Leads o tempo todo).
    - Lembretes (Resgate de clientes esquecidos ou inativos, chega de cadeiras vazias).
- **Storytelling:** Pequeno storytelling de uma automação com impacto real.
- **Prova Social:** Tecnologias que utilizamos (OpenAI, Meta/WhatsApp, Python, LangChain).
- **Quebra de Objeções (FAQ):** 3 a 4 perguntas frequentes. Ex: "Preciso mudar meu sistema atual?" (Resposta: Não, nós nos integramos ao que você já usa). *OBS: Consultar documento da empresa na raiz para mais contexto, se necessário.*
- **Lead Capture:** Formulário de contato (Nome, E-mail, Telefone, Descrição do gargalo).
- **Footer:** Links para Políticas, Termos de Uso e Copyright.

## Stack Tecnológica (STATUS: OPERANTE E CONFIGURADA)
O ambiente já foi inicializado e está rodando perfeitamente. NÃO modifique arquivos de configuração base (`vite.config.ts`, `tsconfig.json`, `tailwind.config.js`) sem extrema necessidade.
- **Framework:** React 18 + Vite (Template TypeScript).
- **Estilização:** Tailwind CSS v3 (Configurado via PostCSS e injetado no `index.css`).
- **Componentes:** shadcn/ui (Instalado via `npx shadcn@latest`. Preset: Nova, Cor Base: Slate, CSS Variables: Ativo).
- **Ícones:** Lucide React.
- **Design System:** - Cores de destaque: Branco e Azul Serenity (`blue-600` a `blue-800`). Escala de cinza baseada em `slate`.
    - Fontes: Montserrat (atentar ao contraste).
    - Transição: transição suave entre seções com ênfase nas cores da marca.
- **Regras Estritas de Código:** - NÃO crie arquivos `.css` ou `.scss` separados. Use classes utilitárias do Tailwind estritamente inline. 
    - Código modular. 
    - Para adicionar novos componentes do shadcn, use EXCLUSIVAMENTE o comando `npx shadcn@latest add [componente]`.

## Estrutura de Componentes (Renderização Top-to-Bottom)
1. **Header:** Logo (texto "Integra.ai" bold `slate-900` com ".ai" em `blue-600`), Botão CTA "Falar com Especialista". *(Nota: Este componente já foi criado no ambiente)*.
2. **Hero Section:** Copy principal, placeholder para fluxograma, banner de dados na parte inferior.
3. **Features (O que pode ser automatizado):** Grid de Cards (shadcn) detalhando Atendimento (B.IA 24/7), Relatórios, Performance e Lembretes.
4. **Storytelling & Impacto:** Layout dividido em duas colunas (texto narrativo e placeholder de imagem).
5. **Formulário de Contato (Lead Capture):**
    - Componentes: `Input`, `Textarea` e `Button` (shadcn).
    - **Lógica Estrita:** NÃO recarregar a página. Usar estado (`useState`) para dados e loading. Ao submeter, fazer `fetch` POST para `https://api.web3forms.com/submit` passando a chave de acesso (via variável de ambiente `.env`).
    - Feedback: Limpar formulário e exibir `Toast` (shadcn) de sucesso.
6. **Footer:** Links simples, informações de contato e Copyright Integra.ai.