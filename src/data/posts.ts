export interface Post {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content?: string;
    image: string;
    category: string;
    categorySlug: string;
    author: string;
    authorSlug: string;
    date: string;
    tags: string[];
    featured?: boolean;
    views?: number;
}

export interface Category {
    slug: string;
    name: string;
    description: string;
    image?: string;
}

export interface Author {
    slug: string;
    name: string;
    bio: string;
    image?: string;
    social?: {
        facebook?: string;
        twitter?: string;
        instagram?: string;
    };
}

export const POSTS_PER_PAGE = 6;

export const posts: Post[] = [
    {
        id: 1,
        slug: "quais-legumes-da-para-cultivar-em-jardins-verticais-guia-completo",
        title: "Quais Legumes Dá para Cultivar em Jardins Verticais? Guia Completo",
        excerpt: "Você já imaginou colher cenouras, alfaces ou até tomates direto da parede da sua varanda ou cozinha? Com um jardim vertical bem planejado, isso é totalmente possível — mesmo em apartamentos pequenos.",
        image: "/images/IMG_ARTIGO_31.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, maio 19, 2025",
        tags: ["legumes", "cultivo vertical", "horta urbana", "apartamento"],
        featured: true,
        views: 1250
    },
    {
        id: 2,
        slug: "como-cultivar-morangos-em-jardins-verticais-dicas-para-apartamentos",
        title: "Como Cultivar Morangos em Jardins Verticais: Dicas para Apartamentos",
        excerpt: "Ter morangos fresquinhos em casa, colhidos diretamente da parede da sua varanda ou cozinha, é mais fácil do que parece. Mesmo morando em apartamento e com pouco espaço disponível, é possível cultivar essa fruta deliciosa.",
        image: "/images/IMG_ARTIGO-30.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, maio 19, 2025",
        tags: ["morangos", "frutas", "cultivo vertical", "apartamento"],
        featured: true,
        views: 980
    },
    {
        id: 3,
        slug: "como-fazer-a-rotacao-de-cultivos-em-jardins-verticais-comestiveis",
        title: "Como Fazer a Rotação de Cultivos em Jardins Verticais Comestíveis",
        excerpt: "Você sabia que plantar sempre os mesmos temperos e hortaliças no mesmo lugar pode esgotar o solo e atrair pragas com mais facilidade? Isso também vale para os jardins verticais comestíveis.",
        image: "/images/IMG_ARTIGO_29.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, maio 19, 2025",
        tags: ["rotação de cultivos", "manutenção", "solo", "pragas"],
        views: 756
    },
    {
        id: 4,
        slug: "como-cultivar-temperos-frescos-no-seu-jardim-vertical-de-apartamento",
        title: "Como Cultivar Temperos Frescos no Seu Jardim Vertical de Apartamento",
        excerpt: "Imagine cozinhar e, com um simples movimento, colher folhas fresquinhas de manjericão, cebolinha ou hortelã direto da parede da sua cozinha ou varanda. Com um jardim vertical no apartamento, isso é totalmente possível.",
        image: "/images/IMG_ARTIGO-28.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sexta-feira, maio 2, 2025",
        tags: ["temperos", "ervas", "cozinha", "apartamento"],
        featured: false,
        views: 1120
    },
    {
        id: 5,
        slug: "jardim-vertical-comestivel-as-7-melhores-ervas-para-espacos-pequenos",
        title: "Jardim Vertical Comestível: As 7 Melhores Ervas para Espaços Pequenos",
        excerpt: "Se você acha que falta de espaço é um obstáculo para ter uma horta em casa, pense novamente. Com um jardim vertical comestível, é possível cultivar ervas aromáticas frescas até mesmo em varandas, cozinhas ou paredes pequenas.",
        image: "/images/IMG_ARTIGO-27.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quinta-feira, maio 1, 2025",
        tags: ["ervas aromáticas", "espaços pequenos", "horta vertical"],
        views: 890
    },
    {
        id: 6,
        slug: "horta-vertical-em-ambientes-internos-o-que-plantar-e-como-cuidar",
        title: "Horta Vertical em Ambientes Internos: O Que Plantar e Como Cuidar",
        excerpt: "Cultivar uma horta vertical dentro de casa não é apenas uma tendência: é uma forma prática e sustentável de ter alimentos frescos sempre à mão, especialmente se você mora em apartamento.",
        image: "/images/IMG_ARTIGO-26.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quarta-feira, abril 30, 2025",
        tags: ["ambientes internos", "horta vertical", "cuidados"],
        views: 1050
    },
    {
        id: 7,
        slug: "manjericao-alecrim-e-hortela-como-cultivar-no-jardim-vertical-da-sua-cozinha",
        title: "Manjericão, Alecrim e Hortelã: Como Cultivar no Jardim Vertical da Sua Cozinha",
        excerpt: "Ter temperos frescos sempre à mão, crescendo bem ali na parede da cozinha, é mais fácil e prático do que você imagina. Manjericão, alecrim e hortelã são três das ervas mais versáteis e aromáticas.",
        image: "/images/IMG_ARTIGO-25.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "terça-feira, abril 29, 2025",
        tags: ["manjericão", "alecrim", "hortelã", "temperos"],
        views: 1340
    },
    {
        id: 8,
        slug: "dicas-para-cultivar-alface-rucula-e-cebolinha-em-estruturas-verticais",
        title: "Dicas para Cultivar Alface, Rúcula e Cebolinha em Estruturas Verticais",
        excerpt: "Cultivar hortaliças em estruturas verticais é uma forma inteligente de aproveitar melhor o espaço, principalmente em apartamentos ou áreas pequenas. Alface, rúcula e cebolinha estão entre as hortaliças mais adaptadas.",
        image: "/images/IMG_ARTIGO-24.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, abril 28, 2025",
        tags: ["alface", "rúcula", "cebolinha", "hortaliças"],
        views: 820
    },
    {
        id: 9,
        slug: "como-fazer-um-jardim-vertical-comestivel-com-materiais-reciclados",
        title: "Como Fazer um Jardim Vertical Comestível com Materiais Reciclados",
        excerpt: "Se você quer começar uma horta em casa mas acha que vai gastar muito com estruturas prontas, saiba que é possível criar um jardim vertical comestível prático, bonito e funcional usando materiais reciclados.",
        image: "/images/IMG_ARTIGO-23.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "domingo, abril 27, 2025",
        tags: ["DIY", "reciclagem", "sustentabilidade", "materiais reciclados"],
        views: 1450
    },
    {
        id: 10,
        slug: "ervas-aromaticas-no-jardim-vertical-como-plantar-e-usar-no-dia-a-dia",
        title: "Ervas Aromáticas no Jardim Vertical: Como Plantar e Usar no Dia a Dia",
        excerpt: "Cultivar ervas aromáticas em um jardim vertical é uma das formas mais práticas e gratificantes de unir jardinagem e culinária no dia a dia. Além de trazerem frescor e sabor às suas refeições, essas plantinhas transformam qualquer cantinho.",
        image: "/images/IMG_ARTIGO-22.webp",
        category: "Jardinagem Vertical Comestível",
        categorySlug: "jardinagem-vertical-comestivel",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sábado, abril 26, 2025",
        tags: ["ervas aromáticas", "culinária", "uso diário"],
        views: 990
    }
];

export const categories: Category[] = [
    {
        slug: "jardinagem-vertical-comestivel",
        name: "Jardinagem Vertical Comestível",
        description: "Descubra como cultivar alimentos frescos em espaços verticais, aproveite ao máximo sua varanda ou parede para ter uma horta produtiva em casa.",
        image: "/images/IMG_ARTIGO_31.webp"
    },
    {
        slug: "cuidados-e-manutencao",
        name: "Cuidados e Manutenção",
        description: "Aprenda as melhores práticas para cuidar do seu jardim vertical, mantendo suas plantas saudáveis e bonitas durante todo o ano.",
        image: "/images/IMG_ARTIGO_29.webp"
    },
    {
        slug: "tipos-de-jardins-verticais",
        name: "Tipos de Jardins Verticais",
        description: "Explore diferentes estilos e estruturas de jardins verticais, encontre a solução perfeita para o seu espaço e estilo.",
        image: "/images/IMG_ARTIGO-27.webp"
    }
];

export const authors: Author[] = [
    {
        slug: "leandro-guimaraes",
        name: "Leandro Guimarães",
        bio: "Especialista em jardinagem urbana e cultivo vertical com mais de 10 anos de experiência. Apaixonado por transformar espaços urbanos em oásis verdes e sustentáveis.",
        image: "/images/author-leandro.jpg",
        social: {
            facebook: "https://www.facebook.com/newbrightnotes",
            twitter: "https://twitter.com/newbrightnotes",
            instagram: "https://www.instagram.com/newbrightnotes"
        }
    }
];

// Utility functions
export function getPostsByPage(page: number, postsPerPage: number = POSTS_PER_PAGE): Post[] {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    return posts.slice(start, end);
}

export function getTotalPages(postsPerPage: number = POSTS_PER_PAGE): number {
    return Math.ceil(posts.length / postsPerPage);
}

export function getPostsByCategory(categorySlug: string, page: number = 1, postsPerPage: number = POSTS_PER_PAGE) {
    const categoryPosts = posts.filter(post => post.categorySlug === categorySlug);
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    return {
        posts: categoryPosts.slice(start, end),
        totalPages: Math.ceil(categoryPosts.length / postsPerPage),
        totalPosts: categoryPosts.length
    };
}

export function getPostsByAuthor(authorSlug: string): Post[] {
    return posts.filter(post => post.authorSlug === authorSlug);
}

export function getPostsByTag(tag: string): Post[] {
    return posts.filter(post => post.tags.includes(tag));
}

export function getFeaturedPosts(limit: number = 5): Post[] {
    return posts.filter(post => post.featured).slice(0, limit);
}

export function getPopularPosts(limit: number = 5): Post[] {
    return [...posts].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, limit);
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
    return posts
        .filter(post => 
            post.id !== currentPost.id && 
            (post.categorySlug === currentPost.categorySlug || 
             post.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .slice(0, limit);
}

export function getAllTags(): string[] {
    const tagsSet = new Set<string>();
    posts.forEach(post => {
        post.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
}
