
# ⚔️ Kaique Dev - Portfólio Interativo

![Portfólio Preview](/images/print_page.png)

Bem-vindo ao repositório do meu portfólio pessoal. Este projeto não é apenas uma vitrine das minhas habilidades como desenvolvedor Backend e Full Stack, mas também um experimento de **IHC (Interação Humano-Computador)** e **UX Design**.

O portfólio foi construído com uma arquitetura de "Dupla Identidade", permitindo que o visitante escolha como quer consumir o conteúdo: através de uma experiência imersiva de RPG de Fantasia ou uma visualização limpa e corporativa.

## ✨ Features Principais

* 🎭 **Sistema de Temas Dinâmicos:** Alternância em tempo real entre o modo "RPG/Fantasia" e o modo "Profissional/Normal" (manipulação de DOM, CSS Classes e tipografia via JS).
* 🌍 **Internacionalização (i18n) Nativa:** Suporte bidimensional a Português (PT-BR) e Inglês (EN-US) construído do zero com Vanilla JavaScript (sem bibliotecas externas).
* 📱 **Design 100% Responsivo:** Layout adaptável para Desktops, Tablets e Celulares utilizando CSS Grid e Flexbox.
* 🎨 **Micro-interações & Animações:** Efeitos de Scroll Reveal, cursores personalizados em SVG, partículas CSS animadas e botões interativos.
* 🛡️ **Performance & Semântica:** Código HTML semântico e otimizado para carregamento rápido.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido focado nos fundamentos da web, garantindo leveza e total controle sobre a interface:

* **HTML5** (Estrutura semântica)
* **CSS3** (Variáveis, Grid, Flexbox, Animations, Media Queries)
* **Vanilla JavaScript** (Lógica de temas, idiomas e manipulação de DOM)
* **Google Fonts** (Cinzel, IM Fell English, Material Symbols)

## 📁 Estrutura de Arquivos

A lógica de internacionalização e temas foi separada para manter o código limpo e escalável:

```text
📦 portfolio
 ┣ 📂 images/         # Imagens conceituais, ícones e vídeos
 ┣ 📂 js/
 ┃ ┣ 📜 content.js    # Dicionário de dados (Textos em PT/EN e RPG/Normal)
 ┃ ┣ 📜 theme.js      # Lógica central de troca de temas e idiomas
 ┃ ┗ 📜 script.js     # Interações de UI (Scroll Reveal, etc.)
 ┣ 📜 index.html      # Estrutura principal
 ┣ 📜 style.css       # Estilos globais e de responsividade
 ┗ 📜 README.md       # Documentação do projeto
```

## 🚀 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/kaique12santos/nome-do-repositorio.git](https://github.com/kaique12santos/nome-do-repositorio.git)
   ```
2. Abra a pasta do projeto no seu editor de código favorito (ex: VS Code).
3. Utilize a extensão **Live Server** ou abra o arquivo `index.html` diretamente no seu navegador.

## 🧠 Lógica de Internacionalização (Como funciona)

O sistema de idiomas e temas não recarrega a página. Ele utiliza o atributo `data-key` no HTML para mapear os elementos. O arquivo `theme.js` intercepta o clique do usuário, cruza as variáveis de estado (`currentLang` e `currentMode`) e busca o texto correspondente no dicionário do `content.js`, injetando via `innerHTML`.

## 📬 Contato

Caso queira trocar uma ideia sobre código, arquitetura ou oportunidades:

* **LinkedIn:** [Acessar Perfil](https://www.linkedin.com/in/kaique-caitano-b68b902ba/)
* **E-mail:** kaiquecaitano334@gmail.com

---
⌨️ Forjado com dedicação e café por Kaique Caitano.
