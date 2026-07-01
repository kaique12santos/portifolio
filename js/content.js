// content.js
const portfolioContent = {
  pt: {
    rpg: {
      // NAV
      "nav-about": "Pergaminho", "nav-projects": "Quests", "nav-codices": "Códices", "nav-skills": "Habilidades", "nav-journey": "Jornada", "nav-contact": "Invocar",
      
      // HERO
      "hero-subtitle": "- Portfólio de Desenvolvedor -",
      "hero-bio": "Arquiteto de sistemas e forjador de interfaces. Especializado em construir APIs robustas, experiências de usuário refinadas e software institucional que resiste ao teste do tempo - e ao teste do usuário.",
      "stat-semestre": "Semestre", "stat-projetos": "Projetos", "stat-classe": "Classe", "stat-nivel": "Nível JR",
      "hero-btn-primary": "Ver Quests", "hero-btn-outline": "Invocar Contato",
      
      // ABOUT
      "about-eyebrow": "Ficha do Personagem", "about-title": "O Pergaminho do Aventureiro",
      "sheet-title": "- Ficha -", "sheet-status": "Buscando Novas Quests",
      "attr-name-label": "Nome", "attr-class-label": "Classe", "attr-guild-label": "Guilda", "attr-loc-label": "Localidade", "attr-weapon-label": "Arma Principal", "attr-status-label": "Status", "attr-status-val": "🟢 Disponível",
      "about-p1": "Mago Estudante de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, focado em arquitetura backend, design de APIs RESTful e em forjar experiências de usuário que equilibram funcionalidade e estética.",
      "about-p2": "Minha jornada de missões é marcada pela evolução técnica e liderança. Iniciei coordenando a equipe e o backend do <strong>SGPI</strong> (Gestão de Projetos Integradores). Essa base me permitiu atuar como <strong>Monitor de Engenharia de Software</strong>, guiando outros estudantes em metodologias ágeis e modelagem de sistemas. Hoje, combino essa bagagem de código e mentoria atuando como Tech Lead e Líder de Projeto no <strong>SisLab</strong>.",
      "about-p3": "Minha filosofia: código limpo é como um pergaminho bem escrito, ele conta uma história. Cada endpoint, cada componente e cada migração de banco deve fazer sentido por si só.",
      "lvl-master": "Mestre", "lvl-advanced": "Avançado", "lvl-mid": "Intermediário",
      
      // PROJECTS
      "projects-eyebrow": "Missões Concluídas & Em Curso", "projects-title": "O Livro de Quests",
      "badge-1": "Principal", "rank-1": "O Guardião dos Laboratórios", "project-name-1": "SisLab - Sistema de Reserva de Laboratórios", "project-desc-1": "Sistema institucional para gestão de reservas de laboratórios na Fatec ZL. Arquitetura Controller → Service → Repository, JWT Auth, auditoria com EventBus e rollback transacional para conflitos.",
      "badge-2": "Concluída", "rank-2": "O Grimório da Guilda 2.0 (GED)", "project-name-2": "SGPI - Sistema de Gestão de Projetos Integradores", "project-desc-2": "Plataforma de gerenciamento para projetos integradores acadêmicos. Liderança técnica no backend e coordenação de equipe como Project Leader.",
      "badge-3": "Concluída", "rank-3": "A Rede de Energia Arcana", "project-name-3": "API de Eventos e Notificações", "project-desc-3": "Backend para processamento de eventos assíncronos e notificações. Aplicação rigorosa de Programação Orientada a Objetos (POO) e Padrões de Projeto (com Observer) para criar um sistema desacoplado, extensível e robusto.",
      "badge-4": "Concluída", "rank-4": "O Forjador de Runas Sólidas", "project-name-4": "API de Tarefas", "project-desc-4": "API RESTful para gestão de tarefas e avaliações. Desenvolvida sob a filosofia Clean Code, aplicando os princípios SOLID para garantir código robusto, testável e de fácil manutenção, com cobertura de testes unitários (TDD).",
      "badge-6": "Em Curso", "rank-6": "Livro de Feitiços", "project-name-6": "Laboratório de Estudos de IA", "project-desc-6": "Repositório dedicado para estudos de Inteligência Artificial, LLMs, Agentes Autônomos, engenharia de prompts e arquitetura de software focada em IA.",
      "badge-future": "⏳ Em Breve", "rank-5": "Planejando a próxima Quest", "future-title": "A Jornada Continua", "future-desc": "Este espaço está reservado para a próxima quest que forjaremos juntos. O próximo grimório de código, o próximo feitiço de interface.", "future-btn": "Mande sua Quest",
      
      // SKILLS
      "skills-eyebrow": "Arsenal & Grimório", "skills-title": "Habilidades & Ferramentas",
      "skill-cat-1": "Backend & APIs", "skill-cat-2": "Banco de Dados", "skill-cat-3": "Frontend", "skill-cat-4": "Design & UX", "skill-cat-5": "Qualidade", "skill-cat-6": "DevOps & Ferramentas",
      
      // JOURNEY
      "journey-eyebrow": "Registro de Aventuras", "journey-title": "A Jornada",
      "j-date-1": "2026 - Presente", "j-title-1": "Desenvolvedor Full Stack & Tech Lead - SisLab", "j-desc-1": "Construção do sistema institucional de reservas de laboratórios para a Fatec ZL. Liderança de projeto, Full Stack e contribuição direta no design e prototipagem de interfaces.",
      "j-date-2": "Jan 2025 - Jun 2026", "j-title-2": "Backend Lead & Project Leader - SGPI", "j-desc-2": "Liderança técnica e de equipe no desenvolvimento do Sistema de Gestão de Projetos Integradores. Responsável por arquitetura, revisão de código e entregas.",
      "j-date-5": "Jun 2025 - Dez 2025", "j-title-5": "Produção Acadêmica", "j-desc-5": "CoAutor do Artigo Arquitetura e Design Patterns aplicados ao Sistema Gerenciador de Projetos integradores com MySQL Database e Apresentado na EnGetec 2025 (Fatec ZL)",
      "j-date-3": "Ago 2025 - Dez 2025", "j-title-3": "Monitor de Engenharia de Software - Fatec ZL", "j-desc-3": "Apoio a estudantes nas disciplinas de Engenharia de Software I e II, facilitando a compreensão de padrões arquiteturais, metodologias ágeis e documentação de sistemas.",
      "j-date-4": "Jun 2024 - Jun 2027 (Previsão)", "j-title-4": "Ingresso em DSM - Fatec Zona Leste", "j-desc-4": "Início da formação como Tecnólogo em Desenvolvimento de Software Multiplataforma, com foco em desenvolvimento web, mobile e Desktop.",
      
      // CODICES
      "codices-eyebrow": "Pesquisa & Academia", "codices-title": "Códices de Conhecimento",
      "codex-event-1": "EnGetec 2025 - Fatec ZL", "codex-date-1": "Dezembro 2025", "codex-title-1": "Arquitetura e Design Patterns aplicados ao SGPI com MySQL Database", "codex-abstract-1": "Artigo acadêmico detalhando a estruturação do Sistema de Gestão de Projetos Integradores (SGPI). A pesquisa foca na aplicação de padrões de design, arquitetura de software limpa e modelagem relacional para garantir escalabilidade.", "codex-author-1": "Kaique Caitano Dos Santos et al.", "codex-link-1": "Ler Códice",
      "codex-event-future": "Pesquisa em Andamento", "codex-date-future": "2026 - 2027", "codex-title-future": "Novos Manuscritos na Forja", "codex-abstract-future": "Pesquisas futuras focadas em inteligência artificial, integração de LLMs e Identity Security (autenticação e segurança de dados) aplicados à engenharia de software e APIs.", "codex-author-future": "Kaique Caitano Dos Santos",
      
      // CONTACT & FOOTER
      "contact-eyebrow": "Invocação & Contato", "contact-title": "Abrir um Pergaminho", "contact-intro": "Busca um backend para sua guilda?<br>Tem uma quest interessante em mente?<br><strong>Invoque aqui.</strong>",
      "footer-text": "2026 &nbsp;·&nbsp; Kaique &nbsp;·&nbsp; Forjado com Node.js &amp; Café"
    },
    normal: {
      // NAV
      "nav-about": "Sobre Mim", "nav-projects": "Projetos", "nav-codices": "Artigos", "nav-skills": "Competências", "nav-journey": "Trajetória", "nav-contact": "Contato",
      
      // HERO
      "hero-subtitle": "- Portfólio de Desenvolvedor -",
      "hero-bio": "Arquiteto de sistemas focado no desenvolvimento de APIs robustas, arquiteturas escaláveis e experiências de usuário fluidas. Especializado em software institucional e soluções web.",
      "stat-semestre": "Semestre", "stat-projetos": "Projetos", "stat-classe": "Stack", "stat-nivel": "Nível JR",
      "hero-btn-primary": "Ver Projetos", "hero-btn-outline": "Entrar em Contato",
      
      // ABOUT
      "about-eyebrow": "Resumo Profissional", "about-title": "Sobre Mim",
      "sheet-title": "- Perfil -", "sheet-status": "Aberto a Oportunidades",
      "attr-name-label": "Nome", "attr-class-label": "Atuação", "attr-guild-label": "Instituição", "attr-loc-label": "Localidade", "attr-weapon-label": "Stack Principal", "attr-status-label": "Status", "attr-status-val": "🟢 Disponível",
      "about-p1": "Estudante de Desenvolvimento de Software Multiplataforma na Fatec Zona Leste, focado em arquitetura backend, design de APIs RESTful e em desenvolver experiências de usuário que equilibram funcionalidade e estética.",
      "about-p2": "Minha trajetória profissional é marcada pela evolução técnica e liderança. Iniciei coordenando a equipe e o backend do <strong>SGPI</strong>. Essa base me permitiu atuar como <strong>Monitor de Engenharia de Software</strong>, guiando outros estudantes em metodologias ágeis e modelagem de sistemas. Hoje, combino essa bagagem de código e mentoria atuando como Tech Lead e Líder de Projeto no <strong>SisLab</strong>.",
      "about-p3": "Minha filosofia: código limpo e documentado é fundamental para a escalabilidade. Cada endpoint, componente e modelagem de dados deve ser projetado visando a manutenibilidade a longo prazo.",
      "lvl-master": "Avançado", "lvl-advanced": "Avançado", "lvl-mid": "Intermediário",
      
      // PROJECTS
      "projects-eyebrow": "Projetos Concluídos & Em Andamento", "projects-title": "Portfólio",
      "badge-1": "Principal", "rank-1": "O Guardião dos Laboratórios", "project-name-1": "SisLab - Sistema de Reserva de Laboratórios", "project-desc-1": "Sistema institucional para gestão de reservas de laboratórios na Fatec ZL. Arquitetura Controller → Service → Repository, JWT Auth, auditoria com EventBus e rollback transacional para conflitos.",
      "badge-2": "Concluída", "rank-2": "O Grimório da Guilda 2.0 (GED)", "project-name-2": "SGPI - Sistema de Gestão de Projetos Integradores", "project-desc-2": "Plataforma de gerenciamento para projetos integradores acadêmicos. Liderança técnica no backend e coordenação de equipe como Project Leader.",
      "badge-3": "Concluída", "rank-3": "A Rede de Energia Arcana", "project-name-3": "API de Eventos e Notificações", "project-desc-3": "Backend para processamento de eventos assíncronos e notificações. Aplicação rigorosa de Programação Orientada a Objetos (POO) e Padrões de Projeto (com Observer) para criar um sistema desacoplado, extensível e robusto.",
      "badge-4": "Concluída", "rank-4": "O Forjador de Runas Sólidas", "project-name-4": "API de Tarefas", "project-desc-4": "API RESTful para gestão de tarefas e avaliações. Desenvolvida sob a filosofia Clean Code, aplicando os princípios SOLID para garantir código robusto, testável e de fácil manutenção, com cobertura de testes unitários (TDD).",
      "badge-6": "Em Curso", "rank-6": "Livro de Feitiços", "project-name-6": "Laboratório de Estudos de IA", "project-desc-6": "Repositório dedicado para estudos de Inteligência Artificial, LLMs, Agentes Autônomos, engenharia de prompts e arquitetura de software focada em IA.",
      "badge-future": "⏳ Em Breve", "rank-5": "Planejando a próxima Quest", "future-title": "Próximos Passos", "future-desc": "Este espaço está reservado para o meu próximo desafio profissional. Um novo sistema robusto ou uma arquitetura escalável.", "future-btn": "Vamos Conversar",
      
      // SKILLS
      "skills-eyebrow": "Competências Técnicas", "skills-title": "Tecnologias & Ferramentas",
      "skill-cat-1": "Backend & APIs", "skill-cat-2": "Banco de Dados", "skill-cat-3": "Frontend", "skill-cat-4": "Design & UX", "skill-cat-5": "Qualidade", "skill-cat-6": "DevOps & Ferramentas",
      
      // JOURNEY
      "journey-eyebrow": "Histórico Profissional", "journey-title": "Trajetória",
      "j-date-1": "2026 - Presente", "j-title-1": "Desenvolvedor Full Stack & Tech Lead - SisLab", "j-desc-1": "Desenvolvimento do sistema de reservas de laboratórios para a Fatec ZL. Liderança técnica no backend e contribuição no design e desenvolvimento do frontend.",
      "j-date-5": "Jun 2025 - Dez 2025", "j-title-5": "Produção Acadêmica", "j-desc-5": "CoAutor do Artigo Arquitetura e Design Patterns aplicados ao Sistema Gerenciador de Projetos integradores com MySQL Database e Apresentado na EnGetec 2025 (Fatec ZL)",
      "j-date-2": "Jan 2025 - Jun 2026", "j-title-2": "Backend Lead & Project Leader - SGPI", "j-desc-2": "Liderança técnica e gestão de equipe no desenvolvimento do Sistema de Gestão de Projetos Integradores. Responsável pela arquitetura e code review.",
      "j-date-3": "Ago 2025 - Dez 2025", "j-title-3": "Monitor de Engenharia de Software - Fatec ZL", "j-desc-3": "Apoio a estudantes em Engenharia de Software I e II, auxiliando na compreensão de padrões arquiteturais, Scrum e documentação técnica (UML).",
      "j-date-4": "Jun 2024 - Jun 2027 (Previsão)", "j-title-4": "Graduação em DSM - Fatec Zona Leste", "j-desc-4": "Formação como Tecnólogo em Desenvolvimento de Software Multiplataforma, com foco em engenharia de software e desenvolvimento web/mobile.",
      
      // CODICES
      "codices-eyebrow": "Pesquisa & Academia", "codices-title": "Artigos Acadêmicos",
      "codex-event-1": "EnGetec 2025 - Fatec ZL", "codex-date-1": "Dezembro 2025", "codex-title-1": "Arquitetura e Design Patterns aplicados ao SGPI com MySQL Database", "codex-abstract-1": "Artigo acadêmico detalhando a estruturação do Sistema de Gestão de Projetos Integradores (SGPI). A pesquisa foca na aplicação de padrões de design, arquitetura de software limpa e modelagem relacional para garantir escalabilidade.", "codex-author-1": "Kaique Caitano Dos Santos et al.", "codex-link-1": "Ler Códice",
      "codex-event-future": "Pesquisa em Andamento", "codex-date-future": "2026 - 2027", "codex-title-future": "Novos Manuscritos na Forja", "codex-abstract-future": "Pesquisas futuras focadas em inteligência artificial, integração de LLMs e Identity Security (autenticação e segurança de dados) aplicados à engenharia de software e APIs.", "codex-author-future": "Kaique Caitano Dos Santos",
      
      // CONTACT & FOOTER
      "contact-eyebrow": "Vamos Conversar?", "contact-title": "Entre em Contato", "contact-intro": "Buscando um desenvolvedor backend para o seu time?<br>Tem um projeto interessante em mente?<br><strong>Mande uma mensagem.</strong>",
      "footer-text": "2026 &nbsp;·&nbsp; Kaique &nbsp;·&nbsp; Desenvolvido com Node.js &amp; Café"
    }
  },
  en: {
    rpg: {
      // NAV
      "nav-about": "Scroll", "nav-projects": "Quests", "nav-codices": "Codices", "nav-skills": "Skills", "nav-journey": "Journey", "nav-contact": "Summon",
      
      // HERO
      "hero-subtitle": "- Developer Portfolio -",
      "hero-bio": "System architect and interface forger. Specialized in building robust APIs, refined user experiences, and institutional software that stands the test of time - and the user's test.",
      "stat-semestre": "Semester", "stat-projetos": "Projects", "stat-classe": "Class", "stat-nivel": "JR Level",
      "hero-btn-primary": "View Quests", "hero-btn-outline": "Summon Contact",
      
      // ABOUT
      "about-eyebrow": "Character Sheet", "about-title": "The Adventurer's Scroll",
      "sheet-title": "- Sheet -", "sheet-status": "Seeking New Quests",
      "attr-name-label": "Name", "attr-class-label": "Class", "attr-guild-label": "Guild", "attr-loc-label": "Location", "attr-weapon-label": "Main Weapon", "attr-status-label": "Status", "attr-status-val": "🟢 Available",
      "about-p1": "Mage Student of Multiplatform Software Development at Fatec Zona Leste, focused on backend architecture, RESTful API design, and forging user experiences that balance functionality and aesthetics.",
      "about-p2": "My journey of quests is marked by technical evolution and leadership. I started by coordinating the team and backend of <strong>SGPI</strong> (Integrator Projects). This foundation allowed me to act as a <strong>Software Engineering Mentor</strong>, guiding other students in agile methodologies. Today, I combine this coding and mentoring baggage acting as Tech Lead and Project Leader in <strong>SisLab</strong>.",
      "about-p3": "My philosophy: clean code is like a well-written scroll, it tells a story. Every endpoint, every component, and every database migration must make sense on its own.",
      "lvl-master": "Master", "lvl-advanced": "Advanced", "lvl-mid": "Intermediate",
      
      // PROJECTS
      "projects-eyebrow": "Completed & Ongoing Quests", "projects-title": "The Quest Book",
      "badge-1": "Main Project", "rank-1": "The Guardian of the Labs", "project-name-1": "SisLab - Lab Reservation System", "project-desc-1": "Institutional system for managing laboratory reservations at Fatec ZL. Controller → Service → Repository architecture, JWT authentication, EventBus auditing, and transactional rollback for conflicts.",
      "badge-2": "Completed", "rank-2": "The Guild's Grimoire 2.0 (GED)", "project-name-2": "SGPI - Integrator Projects Management System", "project-desc-2": "Project management platform for academic integrator projects. Technical leadership in the backend and team coordination as Project Leader.",
      "badge-3": "Completed", "rank-3": "The Arcane Energy Network", "project-name-3": "Events and Notifications API", "project-desc-3": "Backend for asynchronous event processing and notifications. Rigorous application of Object-Oriented Programming (OOP) and Design Patterns (with Observer) to create a decoupled, extensible, and robust system.",
      "badge-4": "Completed", "rank-4": "The Forger of Solid Runes", "project-name-4": "Task API", "project-desc-4": "RESTful API for task and evaluation management. Developed under the Clean Code philosophy, applying SOLID principles to ensure robust, testable, and maintainable code with unit test coverage (TDD).",
      "badge-6": "In Progress", "rank-6": "Spellbook", "project-name-6": "AI Studies Laboratory", "project-desc-6": "Repository dedicated to studies of Artificial Intelligence, LLMs, Autonomous Agents, prompt engineering, and software architecture focused on AI.",
      "badge-future": "⏳ Coming Soon", "rank-5": "Planning the next Quest", "future-title": "The Journey Continues", "future-desc": "This space is reserved for the next quest we will forge together. The next code grimoire, the next interface spell.", "future-btn": "Send your Quest",
      
      // SKILLS
      "skills-eyebrow": "Arsenal & Grimoire", "skills-title": "Skills & Tools",
      "skill-cat-1": "Backend & APIs", "skill-cat-2": "Databases", "skill-cat-3": "Frontend", "skill-cat-4": "Design & UX", "skill-cat-5": "Quality Assurance", "skill-cat-6": "DevOps & Tools",
      
      // JOURNEY
      "journey-eyebrow": "Adventure Log", "journey-title": "The Journey",
      "j-date-1": "2026 - Present", "j-title-1": "Full Stack Dev & Tech Lead - SisLab", "j-desc-1": "Building the institutional lab reservation system for Fatec ZL. Project leadership, Full Stack development, and direct contribution to interface design.",
      "j-date-2": "Jan 2025 - Jun 2026", "j-title-2": "Backend Lead & Project Leader - SGPI", "j-desc-2": "Technical and team leadership in developing the Integrator Projects Management System. Responsible for architecture, code review, and deliveries.",
      "j-date-3": "Aug 2025 - Dec 2025", "j-title-3": "Software Engineering Mentor - Fatec ZL", "j-desc-3": "Supporting students in Software Engineering courses, facilitating the understanding of architectural patterns, agile methodologies, and system documentation.",
      "j-date-4": "Jun 2024 - Jun 2027 (Expected)", "j-title-4": "Enrolled in DSM - Fatec ZL", "j-desc-4": "Started degree in Multiplatform Software Development, focusing on web, mobile, and desktop development.",
      "j-date-5": "Jun 2025 - Dec 2025", "j-title-5": "Academic Output", "j-desc-5": "Co-author of the paper 'Architecture and Design Patterns Applied to an Integrative Project Management System with MySQL Database,' presented at EnGetec 2025 (Fatec ZL).",
      
      // CODICES
      "codices-eyebrow": "Research & Academia", "codices-title": "Knowledge Codices",
      "codex-event-1": "EnGetec 2025 - Fatec ZL", "codex-date-1": "December 2025", "codex-title-1": "Architecture and Design Patterns Applied to SGPI with MySQL Database", "codex-abstract-1": "Academic paper detailing the structure of the Integrator Projects Management System (SGPI). The research focuses on the application of design patterns, clean software architecture, and relational modeling to ensure scalability.", "codex-author-1": "Kaique Caitano Dos Santos et al.", "codex-link-1": "Read Codex",
      "codex-event-future": "Research in Progress", "codex-date-future": "2026 - 2027", "codex-title-future": "New Manuscripts in the Forge", "codex-abstract-future": "Future research focused on artificial intelligence, LLM integration, and Identity Security (authentication and data protection) applied to software engineering and APIs.", "codex-author-future": "Kaique Caitano Dos Santos",
      
      // CONTACT & FOOTER
      "contact-eyebrow": "Summoning & Contact", "contact-title": "Open a Scroll", "contact-intro": "Looking for a backend for your guild?<br>Have an interesting quest in mind?<br><strong>Summon here.</strong>",
      "footer-text": "2026 &nbsp;·&nbsp; Kaique &nbsp;·&nbsp; Forged with Node.js &amp; Coffee"
    },
    normal: {
      // NAV
      "nav-about": "About Me", "nav-projects": "Projects", "nav-codices": "Codices", "nav-skills": "Competencies", "nav-journey": "Experience", "nav-contact": "Contact",
      
      // HERO
      "hero-subtitle": "- Developer Portfolio -",
      "hero-bio": "System architect focused on developing robust APIs, scalable architectures, and fluid user experiences. Specialized in institutional software and high-performance web solutions.",
      "stat-semestre": "Semester", "stat-projetos": "Projects", "stat-classe": "Core Stack", "stat-nivel": "JR Level",
      "hero-btn-primary": "View Projects", "hero-btn-outline": "Get in Touch",
      
      // ABOUT
      "about-eyebrow": "Professional Summary", "about-title": "About Me",
      "sheet-title": "- Profile -", "sheet-status": "Open to Opportunities",
      "attr-name-label": "Name", "attr-class-label": "Role", "attr-guild-label": "Institution", "attr-loc-label": "Location", "attr-weapon-label": "Core Stack", "attr-status-label": "Status", "attr-status-val": "🟢 Available",
      "about-p1": "Multiplatform Software Development student at Fatec Zona Leste, focused on backend architecture, RESTful API design, and developing user experiences that balance functionality and aesthetics.",
      "about-p2": "My professional trajectory is marked by technical evolution and leadership. I started by coordinating the team and backend for <strong>SGPI</strong>. This foundation allowed me to act as a <strong>Software Engineering Teaching Assistant</strong>, guiding other students in agile methodologies. Today, I combine this coding and mentoring background acting as Tech Lead and Project Leader for <strong>SisLab</strong>.",
      "about-p3": "My philosophy: clean and documented code is fundamental for scalability. Every endpoint, component, and data model must be designed with long-term maintainability in mind.",
      "lvl-master": "Advanced", "lvl-advanced": "Advanced", "lvl-mid": "Intermediate",
      
      // PROJECTS
      "projects-eyebrow": "Completed & Ongoing Projects", "projects-title": "Portfolio",
      "badge-1": "Main Project", "rank-1": "The Guardian of the Labs", "project-name-1": "SisLab - Lab Reservation System", "project-desc-1": "Institutional system for managing laboratory reservations at Fatec ZL. Controller → Service → Repository architecture, JWT authentication, EventBus auditing, and transactional rollback for conflicts.",
      "badge-2": "Completed", "rank-2": "The Guild's Grimoire 2.0 (GED)", "project-name-2": "SGPI - Integrator Projects Management System", "project-desc-2": "Project management platform for academic integrator projects. Technical leadership in the backend and team coordination as Project Leader.",
      "badge-3": "Completed", "rank-3": "The Arcane Energy Network", "project-name-3": "Events and Notifications API", "project-desc-3": "Backend for asynchronous event processing and notifications. Rigorous application of Object-Oriented Programming (OOP) and Design Patterns (with Observer) to create a decoupled, extensible, and robust system.",
      "badge-4": "Completed", "rank-4": "The Forger of Solid Runes", "project-name-4": "Task API", "project-desc-4": "RESTful API for task and evaluation management. Developed under the Clean Code philosophy, applying SOLID principles to ensure robust, testable, and maintainable code with unit test coverage (TDD).",
      "badge-6": "In Progress", "rank-6": "Spellbook", "project-name-6": "AI Studies Laboratory", "project-desc-6": "Repository dedicated to studies of Artificial Intelligence, LLMs, Autonomous Agents, prompt engineering, and software architecture focused on AI.",
      "badge-future": "⏳ Coming Soon", "rank-5": "Planning the next Quest", "future-title": "Next Steps", "future-desc": "This space is reserved for my next professional challenge. A new robust system or a scalable architecture.", "future-btn": "Let's Talk",
      
      // SKILLS
      "skills-eyebrow": "Technical Skills", "skills-title": "Technologies & Tools",
      "skill-cat-1": "Backend & APIs", "skill-cat-2": "Databases", "skill-cat-3": "Frontend", "skill-cat-4": "Design & UX", "skill-cat-5": "Quality Assurance", "skill-cat-6": "DevOps & Tools",
      
      // JOURNEY
      "journey-eyebrow": "Professional History", "journey-title": "Experience",
      "j-date-1": "2026 - Present", "j-title-1": "Full Stack Dev & Tech Lead - SisLab", "j-desc-1": "Development of the institutional lab reservation system for Fatec ZL. Technical leadership in the backend and contribution to frontend design and development.",
      "j-date-2": "Jun 2025 - Jun 2026", "j-title-2": "Backend Lead & Project Leader - SGPI", "j-desc-2": "Technical and team leadership in developing the Integrator Projects Management System. Responsible for architecture and code reviews.",
      "j-date-3": "Aug 2025 - Dec 2025", "j-title-3": "Software Engineering Teaching Asst. - Fatec ZL", "j-desc-3": "Supported students in Software Engineering I and II, assisting in the understanding of architectural patterns, Scrum, and technical documentation (UML).",
      "j-date-4": "Jun 2024 - Jun 2027 (Expected)", "j-title-4": "Software Dev Degree - Fatec ZL", "j-desc-4": "Degree in Multiplatform Software Development, focusing on software engineering and web/mobile development.",
      "j-date-5": "Jun 2025 - Dec 2025", "j-title-5": "Academic Output", "j-desc-5": " Co-author of the paper 'Architecture and Design Patterns Applied to an Integrative Project Management System with MySQL Database,' presented at EnGetec 2025 (Fatec ZL).",
      
      // CODICES
      "codices-eyebrow": "Research & Academia", "codices-title": "Knowledge Codices",
      "codex-event-1": "EnGetec 2025 - Fatec ZL", "codex-date-1": "December 2025", "codex-title-1": "Architecture and Design Patterns Applied to SGPI with MySQL Database", "codex-abstract-1": "Academic paper detailing the structure of the Integrator Projects Management System (SGPI). The research focuses on the application of design patterns, clean software architecture, and relational modeling to ensure scalability.", "codex-author-1": "Kaique Caitano Dos Santos et al.", "codex-link-1": "Read Codex",
      "codex-event-future": "Research in Progress", "codex-date-future": "2026 - 2027", "codex-title-future": "New Manuscripts in the Forge", "codex-abstract-future": "Future research focused on artificial intelligence, LLM integration, and Identity Security (authentication and data protection) applied to software engineering and APIs.", "codex-author-future": "Kaique Caitano Dos Santos",
      
      // CONTACT & FOOTER
      "contact-eyebrow": "Let's Talk?", "contact-title": "Get in Touch", "contact-intro": "Looking for a backend developer for your team?<br>Have an interesting project in mind?<br><strong>Send a message.</strong>",
      "footer-text": "2026 &nbsp;·&nbsp; Kaique &nbsp;·&nbsp; Developed with Node.js &amp; Coffee"
    }
  }
};