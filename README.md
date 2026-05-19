# ISARIC Data Tools - Training Platform

Site de treinamento interativo para pesquisadores da área da saúde, documentando o ecossistema de ferramentas analíticas do ISARIC.

## 🌐 Suporte a Idiomas
- Português (BR)
- English (US)  
- Español

## 🏗️ Estrutura do Projeto
├── index.html # Página principal com mapa interativo
├── pages/ # Templates das páginas de ferramentas
│ ├── arc.html
│ ├── bridge.html
│ ├── ccp.html
│ └── vertex.html
├── css/
│ ├── main.css # Estilos globais e tema shadcn/ui
│ └── .css # Estilos específicos por ferramenta
├── js/
│ └── main.js # Lógica do site (idioma, mapa interativo)
├── data/ # Conteúdos por idioma
│ ├── index_.html # Conteúdo da página inicial
│ └── _.html # Conteúdo das ferramentas
└── assets/
├── images/
│ └── ecosystem.png # Mapa do ecossistema
└── docs/ # Documentos para download


## 🚀 Como executar localmente

1. Clone o repositório
2. Abra o `index.html` com Live Server do VSCode
3. Ou use qualquer servidor HTTP estático

## 📝 Como atualizar conteúdo

1. Acesse a pasta `/data/`
2. Edite o arquivo correspondente ao idioma desejado
3. Ex: `index_pt.html` para página inicial em português
4. `vertex_en.html` para página do VERTEX em inglês

## 🎯 Funcionalidades

- **Mapa interativo**: Hover mostra descrição da ferramenta, clique redireciona
- **Multilíngue**: Troca de idioma persistente (localStorage)
- **Design responsivo**: Baseado em shadcn/ui
- **User Roles Info**: Hover nos roles mostra descrições detalhadas

## 🔧 Tecnologias

- HTML5/CSS3 (Tailwind CSS + shadcn/ui theme)
- JavaScript Vanilla
- GitHub Pages (deploy)

## 📄 Licença

Licensed under Creative Commons Attribution-ShareAlike 4.0 International License by ISARIC on behalf of Oxford University.