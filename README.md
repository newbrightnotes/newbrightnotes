# New Bright Notes - Next.js Migration

Este projeto é uma migração moderna do site WordPress New Bright Notes para Next.js 15 com App Router, TypeScript, e Tailwind CSS 4.

## 🚀 Tecnologias

- **Next.js 15.5.4** - Framework React com App Router
- **React 19.1.0** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first (versão alpha)
- **Turbopack** - Bundler de última geração para desenvolvimento rápido

## 📋 Pré-requisitos

- Node.js 20+ 
- npm, yarn, pnpm ou bun

## 🛠️ Instalação

```bash
# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

## 🏃 Desenvolvimento

Execute o servidor de desenvolvimento com Turbopack:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build de Produção

```bash
# Build com Turbopack
npm run build

# Execute o servidor de produção
npm start
```

## 📁 Estrutura do Projeto

```
newbrightnotes/
├── src/
│   └── app/
│       ├── about/           # Página "Sobre"
│       │   └── page.tsx
│       ├── contact/         # Página "Contato"
│       │   └── page.tsx
│       ├── posts/           # Blog posts dinâmicos
│       │   └── [slug]/
│       │       └── page.tsx
│       ├── favicon.ico
│       ├── globals.css      # Estilos globais com Tailwind CSS 4
│       ├── layout.tsx       # Layout raiz com metadata e navegação
│       ├── page.tsx         # Página inicial
│       ├── robots.ts        # Configuração robots.txt
│       └── sitemap.ts       # Sitemap dinâmico
├── public/
│   └── images/             # Imagens estáticas
├── next.config.ts          # Configuração Next.js com Turbopack
├── postcss.config.mjs      # Configuração PostCSS para Tailwind 4
├── tsconfig.json           # Configuração TypeScript
└── package.json
```

## 🎨 Tailwind CSS 4

Este projeto usa Tailwind CSS 4 (alpha), que traz várias melhorias:

### Configuração baseada em CSS
Ao invés de `tailwind.config.js`, usamos a diretiva `@theme` diretamente no CSS:

```css
@import "tailwindcss";

@theme {
  --color-primary: #2c3e50;
  --color-secondary: #3498db;
  /* ... */
}
```

### Variáveis CSS nativas
Todos os tokens de design são expostos como variáveis CSS:

```css
color: var(--color-primary);
font-family: var(--font-sans);
```

## ⚡ Turbopack

O projeto está configurado para usar Turbopack tanto em desenvolvimento quanto em produção:

- `npm run dev` - Usa `--turbopack`
- `npm run build` - Usa `--turbopack`

### Compatibilidade com Tailwind CSS 4

Turbopack funciona perfeitamente com Tailwind CSS 4 através do plugin PostCSS:

```javascript
// postcss.config.mjs
export default {
  plugins: ["@tailwindcss/postcss"],
};
```

## 📝 Criando Novos Posts

Para adicionar um novo post:

1. Abra `src/app/posts/[slug]/page.tsx`
2. Adicione o post no objeto `posts`:

```typescript
const posts: Record<string, BlogPost> = {
  "seu-novo-post": {
    id: 2,
    slug: "seu-novo-post",
    title: "Título do Seu Post",
    description: "Descrição breve",
    content: `<h2>Conteúdo HTML</h2>...`,
    image: "/images/seu-post.webp",
    date: "2025-01-20",
    author: "New Bright Notes",
    keywords: ["palavra1", "palavra2"],
  },
};
```

3. Atualize o sitemap em `src/app/sitemap.ts`

## 🔍 SEO

O projeto inclui:

- ✅ Metadata dinâmica por página
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap automático
- ✅ Robots.txt
- ✅ Google Analytics integrado
- ✅ Google AdSense configurado
- ✅ Canonical URLs

## 🎯 Recursos Principais

### Layout Responsivo
- Mobile-first design
- Grid system com Tailwind CSS
- Navegação adaptativa

### Performance
- Server Components por padrão
- Image optimization com Next.js Image
- Turbopack para builds ultrarrápidos

### Acessibilidade
- Semantic HTML
- ARIA labels
- Keyboard navigation

## 🔧 Configurações Importantes

### next.config.ts
```typescript
const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // Turbopack configurations
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};
```

### Google Analytics
Configurado em `src/app/layout.tsx` com o ID: `GT-NMDMW88Q`

### Google AdSense
Cliente ID: `ca-pub-6026700286776312`

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com)
- [Turbopack Documentation](https://turbo.build/pack/docs)

## 🐛 Problemas Conhecidos

### ESLint e @theme
O ESLint pode mostrar um aviso sobre a diretiva `@theme` em `globals.css`:
```
Unknown at rule @theme
```

Isso é esperado - o ESLint ainda não reconhece a sintaxe do Tailwind CSS 4, mas funciona corretamente em runtime.

## 📄 Licença

© 2025 New Bright Notes. Todos os direitos reservados.

## 📞 Contato

- Website: [https://newbrightnotes.com](https://newbrightnotes.com)
- Email: contato@newbrightnotes.com

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
