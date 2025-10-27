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
    },
    {
        id: 11,
        slug: "jardim-vertical-com-paletes-como-criar-e-instalar-na-sua-casa",
        title: "Jardim Vertical com Paletes: Como Criar e Instalar na Sua Casa",
        excerpt: "Você já pensou em transformar um palete de madeira em uma horta vertical cheia de vida na sua varanda ou quintal? Com criatividade e poucos materiais, é possível criar um jardim funcional, econômico e super charmoso — mesmo sem experiência em marcenaria.",
        image: "/images/jardim-paletes.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sexta-feira, abril 25, 2025",
        tags: ["paletes", "DIY", "sustentabilidade", "rústico"],
        featured: true,
        views: 1580
    },
    {
        id: 12,
        slug: "jardim-vertical-de-feltro-vantagens-e-como-montar-passo-a-passo",
        title: "Jardim Vertical de Feltro: Vantagens e Como Montar Passo a Passo",
        excerpt: "Imagine ter um jardim verde e exuberante pendurado na parede da sua sala, varanda ou até no corredor — sem usar vasos, sem ocupar espaço no chão e com uma estética moderna e limpa. Com os jardins verticais de feltro, isso é totalmente possível!",
        image: "/images/jardim-feltro.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quinta-feira, abril 24, 2025",
        tags: ["feltro", "moderno", "prático", "leve"],
        views: 1340
    },
    {
        id: 13,
        slug: "jardim-vertical-modular-flexibilidade-e-praticidade-para-seu-espaco",
        title: "Jardim Vertical Modular: Flexibilidade e Praticidade para Seu Espaço",
        excerpt: "Você já imaginou um jardim que pode crescer junto com você? Que você começa com poucos módulos e, conforme ganha experiência e vontade, vai adicionando mais e mais plantas? Com jardins verticais modulares, isso é totalmente possível — e muito mais simples do que parece!",
        image: "/images/jardim-modular.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quarta-feira, abril 23, 2025",
        tags: ["modular", "versátil", "expansível", "organizado"],
        views: 1120
    },
    {
        id: 14,
        slug: "jardim-vertical-suspenso-solucoes-criativas-para-apartamentos",
        title: "Jardim Vertical Suspenso: Soluções Criativas para Apartamentos",
        excerpt: "Você já pensou em ter plantas flutuando pela sua varanda, cozinha ou sala, sem ocupar um centímetro sequer do chão? Com jardins verticais suspensos, isso é totalmente possível — e ainda deixa o ambiente mais leve, arejado e cheio de charme!",
        image: "/images/jardim-suspenso.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "terça-feira, abril 22, 2025",
        tags: ["suspenso", "apartamento", "criativo", "macramê"],
        featured: true,
        views: 1450
    },
    {
        id: 15,
        slug: "jardim-vertical-hidroponico-cultivo-sem-solo-na-parede",
        title: "Jardim Vertical Hidropônico: Cultivo Sem Solo na Parede",
        excerpt: "Você já imaginou ter uma horta na parede da sua cozinha, sempre verde e produtiva, sem precisar de terra? Parece futurista, mas com a hidroponia vertical, isso é totalmente possível — e mais simples do que você imagina!",
        image: "/images/jardim-hidroponico.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, abril 21, 2025",
        tags: ["hidroponia", "tecnologia", "limpo", "eficiente"],
        views: 1680
    },
    {
        id: 16,
        slug: "jardim-vertical-com-garrafas-pet-sustentavel-e-economico",
        title: "Jardim Vertical com Garrafas PET: Sustentável e Econômico",
        excerpt: "Você sabia que aquelas garrafas PET que iriam para o lixo podem se transformar em um jardim vertical incrível, funcional e praticamente de graça? Com criatividade e poucos materiais, você cria uma horta sustentável que além de bonita, ajuda o meio ambiente!",
        image: "/images/jardim-pet.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "domingo, abril 20, 2025",
        tags: ["reciclagem", "PET", "sustentável", "econômico"],
        views: 1890
    },
    {
        id: 17,
        slug: "jardim-vertical-de-bambu-charme-natural-e-elegancia",
        title: "Jardim Vertical de Bambu: Charme Natural e Elegância",
        excerpt: "Imagine um jardim vertical com aquele toque zen, natural e sofisticado que só o bambu consegue trazer. Além de ser ecologicamente correto, o bambu dá um ar de elegância e tranquilidade a qualquer ambiente — seja varanda, jardim ou até sala de estar.",
        image: "/images/jardim-bambu.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sábado, abril 19, 2025",
        tags: ["bambu", "zen", "elegante", "natural"],
        views: 1220
    },
    {
        id: 18,
        slug: "jardim-vertical-com-suculentas-baixa-manutencao-e-visual-moderno",
        title: "Jardim Vertical com Suculentas: Baixa Manutenção e Visual Moderno",
        excerpt: "Você quer um jardim vertical lindo, moderno e que praticamente se cuida sozinho? Então as suculentas são a escolha perfeita! Com suas formas escultóricas, cores vibrantes e necessidade mínima de rega, elas são ideais para quem tem vida corrida ou pouca experiência com plantas.",
        image: "/images/jardim-suculentas.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sexta-feira, abril 18, 2025",
        tags: ["suculentas", "baixa manutenção", "moderno", "colorido"],
        views: 1560
    },
    {
        id: 19,
        slug: "jardim-vertical-para-ambientes-internos-verde-dentro-de-casa",
        title: "Jardim Vertical para Ambientes Internos: Verde Dentro de Casa",
        excerpt: "Você já imaginou acordar e ser recebido por uma parede verde e viva dentro da sua própria casa? Com um jardim vertical interno, você traz natureza, ar mais puro e uma decoração incrível para qualquer cômodo — seja sala, quarto, cozinha ou até banheiro!",
        image: "/images/jardim-interno.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quinta-feira, abril 17, 2025",
        tags: ["ambientes internos", "sala", "quarto", "purificação de ar"],
        featured: true,
        views: 1780
    },
    {
        id: 20,
        slug: "jardim-vertical-aromatico-temperos-e-ervas-ao-alcance-das-maos",
        title: "Jardim Vertical Aromático: Temperos e Ervas ao Alcance das Mãos",
        excerpt: "Imagine preparar uma refeição e, em vez de usar temperos secos do mercado, simplesmente estender a mão e colher manjericão, alecrim ou hortelã fresquinhos direto da parede da sua cozinha. Com um jardim vertical aromático, isso vira realidade — e ainda perfuma toda a casa!",
        image: "/images/jardim-aromatico.png",
        category: "Tipos de Jardins Verticais",
        categorySlug: "tipos-de-jardins-verticais",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quarta-feira, abril 16, 2025",
        tags: ["temperos", "ervas aromáticas", "cozinha", "manjericão"],
        views: 1420
    },
    {
        id: 21,
        slug: "como-montar-sistema-irrigacao-gotejamento-jardins-verticais",
        title: "Como Montar seu Sistema de Irrigação por Gotejamento para Jardins Verticais",
        excerpt: "Você já imaginou nunca mais se preocupar em esquecer de regar seu jardim vertical? Com um sistema de irrigação por gotejamento bem montado, essa realidade está mais próxima do que parece — mesmo para iniciantes!",
        image: "/images/sistema_irrigacao_gotejamento.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "terça-feira, abril 15, 2025",
        tags: ["irrigação", "gotejamento", "automação", "economia de água"],
        featured: true,
        views: 1850
    },
    {
        id: 22,
        slug: "identificacao-tratamento-doencas-jardins-verticais-guia-visual",
        title: "Identificação e Tratamento de Doenças em Jardins Verticais: Guia Visual",
        excerpt: "Você já notou manchas estranhas nas folhas do seu jardim vertical e se perguntou o que poderia estar errado? A identificação precoce de doenças é fundamental para manter sua horta vertical saudável e produtiva!",
        image: "/images/identificacao_tratamento_doencas.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, abril 14, 2025",
        tags: ["doenças", "fungos", "tratamento", "identificação"],
        views: 1620
    },
    {
        id: 23,
        slug: "nutricao-vertical-solucoes-nutritivas-jardins-verticais",
        title: "Nutrição Vertical: Como Preparar Soluções Nutritivas para Jardins Verticais",
        excerpt: "Você sabia que plantas em jardins verticais precisam de nutrição especial devido ao espaço limitado para raízes? Aprender a preparar soluções nutritivas eficazes é o segredo para colheitas abundantes mesmo em pequenos espaços!",
        image: "/images/nutricao_vertical_solucoes.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "domingo, abril 13, 2025",
        tags: ["nutrição", "fertilização", "NPK", "adubação"],
        views: 1540
    },
    {
        id: 24,
        slug: "controle-biologico-pragas-inimigos-naturais-jardim-vertical",
        title: "Controle Biológico de Pragas: Inimigos Naturais do Seu Jardim Vertical",
        excerpt: "Você sabia que existem insetos benéficos que podem proteger seu jardim vertical melhor que qualquer pesticida químico? Aprender a atrair e manter esses aliados naturais é o segredo para um jardim equilibrado e produtivo!",
        image: "/images/controle_biologico_pragas.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sábado, abril 12, 2025",
        tags: ["controle biológico", "joaninhas", "pragas", "orgânico"],
        featured: true,
        views: 1730
    },
    {
        id: 25,
        slug: "manutencao-sazonal-preparando-jardim-vertical-mudancas-climaticas",
        title: "Manutenção Sazonal: Preparando Seu Jardim Vertical para Mudanças Climáticas",
        excerpt: "Você já imaginou como as mudanças de estação afetam seu jardim vertical? Cada estação traz desafios únicos que, quando adequadamente preparados, podem transformar desafios em oportunidades para um jardim ainda mais exuberante!",
        image: "/images/manutencao_sazonal.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "sexta-feira, abril 11, 2025",
        tags: ["estações", "primavera", "verão", "inverno"],
        views: 1460
    },
    {
        id: 26,
        slug: "poda-treinamento-plantas-jardins-verticais-tecnicas-profissionais",
        title: "Poda e Treinamento de Plantas em Jardins Verticais: Técnicas Profissionais",
        excerpt: "Você já imaginou que a poda correta pode transformar seu jardim vertical de uma selva desorganizada em uma obra de arte produtiva? Aprender técnicas profissionais de poda e treinamento é o segredo para maximizar espaço e colheitas!",
        image: "/images/poda_treinamento_plantas.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quinta-feira, abril 10, 2025",
        tags: ["poda", "treinamento", "tomate", "técnicas"],
        views: 1580
    },
    {
        id: 27,
        slug: "substratos-jardins-verticais-como-escolher-preparar-mistura-perfeita",
        title: "Substratos para Jardins Verticais: Como Escolher e Preparar a Mistura Perfeita",
        excerpt: "Você sabia que o substrato correto pode ser a diferença entre um jardim vertical que prospera e um que simplesmente sobrevive? Aprender a criar a mistura perfeita é o segredo para raízes saudáveis e plantas produtivas mesmo em espaços verticais!",
        image: "/images/substratos_jardins_verticais.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "quarta-feira, abril 9, 2025",
        tags: ["substrato", "solo", "terra", "mistura"],
        views: 1690
    },
    {
        id: 28,
        slug: "gestao-agua-jardins-verticais-sistemas-estrategias-eficientes",
        title: "Gestão de Água em Jardins Verticais: Sistemas e Estratégias Eficientes",
        excerpt: "Você já imaginou que a gestão inteligente de água pode reduzir seu consumo em até 70% enquanto mantém seu jardim vertical mais saudável? Aprender estratégias eficientes de irrigação é o segredo para sustentabilidade e sucesso!",
        image: "/images/gestao_agua_jardins_verticais.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "terça-feira, abril 8, 2025",
        tags: ["água", "irrigação", "economia", "eficiência"],
        featured: true,
        views: 1780
    },
    {
        id: 29,
        slug: "diagnostico-problemas-guia-visual-identificar-resolver-falhas-jardim-vertical",
        title: "Diagnóstico de Problemas: Guia Visual para Identificar e Resolver Falhas no Jardim Vertical",
        excerpt: "Você já se perguntou por que seu jardim vertical não está prosperando como deveria? A capacidade de diagnosticar problemas rapidamente pode ser a diferença entre perder plantas e ter colheitas abundantes!",
        image: "/images/diagnostico_problemas_guia_visual.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "segunda-feira, abril 7, 2025",
        tags: ["diagnóstico", "problemas", "soluções", "sintomas"],
        views: 1650
    },
    {
        id: 30,
        slug: "ferramentas-essenciais-manutencao-jardins-verticais-guia-completo",
        title: "Ferramentas Essenciais para Manutenção de Jardins Verticais: Guia Completo de Equipamentos",
        excerpt: "Você sabia que ter as ferramentas certas pode reduzir pela metade o tempo gasto com manutenção do jardim vertical? Investir em equipamentos adequados não é luxo - é essencial para eficiência e sucesso!",
        image: "/images/ferramentas_essenciais_manutencao.png",
        category: "Cuidados e Manutenção",
        categorySlug: "cuidados-e-manutencao",
        author: "Leandro Guimarães",
        authorSlug: "leandro-guimaraes",
        date: "domingo, abril 6, 2025",
        tags: ["ferramentas", "equipamentos", "tesoura", "manutenção"],
        views: 1520
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
        bio: "Especialista em jardinagem urbana e cultivo vertical com mais de 10 anos de experiência transformando espaços reduzidos em oásis verdes produtivos. Engenheiro Agrônomo formado pela ESALQ/USP, pós-graduado em Agroecologia e certificado em Design Permacultural. Pioneiro no Brasil em técnicas de jardinagem vertical comestível adaptadas para apartamentos, já ajudou mais de 5.000 famílias a cultivarem seus próprios alimentos em casa através de workshops, consultorias e conteúdo digital. Colaborador regular em revistas especializadas e palestrante em eventos de sustentabilidade urbana. Criador da metodologia 'Horta Vertical 360°', que maximiza produção em espaços mínimos combinando técnicas tradicionais com inovações tecnológicas. Apaixonado por democratizar o acesso a alimentos frescos e orgânicos, acredita que cada parede pode se tornar uma fonte de nutrição e bem-estar.",
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
