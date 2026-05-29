# ISARIC Data Tools - Training Platform

Site de treinamento interativo para pesquisadores da área da saúde, documentando o ecossistema de ferramentas analíticas do ISARIC.

## 🏗️ Estrutura do Projeto

```
├── index.html                  # Página principal com mapa interativo
├── pages/                      # Páginas das ferramentas
│   ├── arc.html
│   ├── bridge.html
│   ├── ccp.html
│   ├── redcap.html
│   └── vertex.html
├── css/
│   ├── style.css               # Estilos globais (home, header, footer, hero)
│   ├── tools-common.css        # Estilos compartilhados entre páginas de ferramentas
│   ├── arc.css                 # Estilos específicos do ARC
│   ├── bridge.css              # Estilos específicos do BRIDGE
│   ├── ccp.css                 # Estilos específicos do CCP
│   ├── redcap.css              # Estilos específicos do REDCap
│   └── vertex.css              # Estilos específicos do VERTEX
├── js/
│   ├── script.js               # Lógica da home (mapa interativo)
│   └── tools-common.js         # Lógica compartilhada (sidebar, navegação entre seções)
└── assets/
    ├── images/                 # Imagens e capturas de tela
    └── video/                  # Vídeos tutoriais
```

## 🚀 Como executar localmente

1. Clone o repositório
2. Abra o `index.html` com Live Server do VSCode
3. Ou use qualquer servidor HTTP estático

## 🎯 Funcionalidades

- **Mapa interativo**: Hover mostra descrição da ferramenta, clique redireciona
- **Design responsivo**: Layout adaptável para mobile e desktop
- **User Roles Info**: Hover nos roles mostra descrições detalhadas
- **Sidebar navegável**: Menu lateral com toggle nas páginas de ferramentas

## 🔧 Tecnologias

- HTML5 / CSS3 (Vanilla)
- JavaScript Vanilla
- Google Fonts (Inter)
- GitHub Pages (deploy)

## 📄 Licença

Licensed under Creative Commons Attribution-ShareAlike 4.0 International License by ISARIC on behalf of Oxford University.