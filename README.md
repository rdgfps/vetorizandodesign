# Vetorizando - Site Institucional

Site institucional para a Vetorizando, desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:3000

## Onde mudar as informações do site

As informações editáveis ficaram concentradas em:

```txt
src/content/site.ts
```

Nesse arquivo você altera:

- Nome da marca, slogan, região, domínio e descrição
- WhatsApp e Instagram
- Links do menu
- Serviços e benefícios
- Estatísticas da Home
- Projetos do portfólio
- Depoimentos
- Diferenciais
- Valores e etapas da página Sobre
- Cards do Instagram

Os componentes e páginas apenas importam esses dados. Na maioria dos casos, para atualizar o site, edite só `src/content/site.ts`.

## Estrutura principal

```txt
src/content/site.ts              Dados centrais do site
src/components/Navbar.tsx        Menu usando os dados centrais
src/components/Footer.tsx        Rodapé usando os dados centrais
src/components/WhatsAppFloat.tsx Botão flutuante usando WhatsApp central
src/components/ServiceIcon.tsx   Ícones visuais dos serviços
src/app/page.tsx                 Home
src/app/servicos/page.tsx        Serviços
src/app/portfolio/page.tsx       Portfólio
src/app/sobre/page.tsx           Sobre
src/app/contato/page.tsx         Contato
```

## Observações

- `public/sitemap.xml` e `public/robots.txt` continuam como arquivos estáticos. Se mudar o domínio, atualize esses dois arquivos também.
- Para projetos com imagens reais, adicione os arquivos em `public/portfolio/` e adapte os cards do portfólio para usar `next/image`.
