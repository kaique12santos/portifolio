const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    
    // Animação de Revelar
    if (entry.isIntersecting && entry.target.classList.contains('reveal')) {
      entry.target.classList.add('visible');
    }

    // Destaque da Nav 
    if (entry.isIntersecting && entry.target.tagName === 'SECTION') {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        // Verifica se o link corresponde à seção visível
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = 'var(--gold-light)';
        } else {
          link.style.color = '';
        }
      });
    }

    // Barras de Skill 
    if (entry.isIntersecting && entry.target.classList.contains('skill-bar-fill')) {
      const targetWidth = entry.target.getAttribute('data-width');
      if (targetWidth) {
        entry.target.style.width = targetWidth;
        sectionObserver.unobserve(entry.target); // Para de observar após animar
      }
    }
  });
}, { 
  threshold: 0.1, // Dispara com 10% de visibilidade
  rootMargin: '0px 0px -50px 0px' // Dispara 50px antes de entrar totalmente, para ser mais fluido
});

// 3. Inicializar o Observador
document.querySelectorAll('.reveal, section[id], .skill-bar-fill').forEach(el => {
  sectionObserver.observe(el);
});

// 4. Gerador de Partículas de Runas
const setupRunes = (quantity) => {
  const container = document.body;
  const runeSymbols = ['ᚱ', 'ᚠ', 'ᚢ', 'ᚨ', 'ᚺ', 'ᛗ', 'ᛒ', 'ᛞ', 'ᛟ', 'ᚦ', 'ᚲ'];
  
  for (let i = 0; i < quantity; i++) {
    const span = document.createElement('span');
    span.className = 'rune-particle';
    span.textContent = runeSymbols[Math.floor(Math.random() * runeSymbols.length)];

    span.style.left = Math.floor(Math.random() * 100) + '%';
    span.style.top = (Math.random() * 10 + 90) + '%';
    span.style.animationDuration = (Math.random() * 10 + 10).toFixed(1) + 's';
    span.style.animationDelay = (Math.random() * 5).toFixed(1) + 's';
    span.style.fontSize = (Math.random() * 0.5 + 1) + 'rem';

    container.appendChild(span);
  }
};

// Carregar runas após o site estar pronto para n engasgar o início
window.addEventListener('load', () => {
  setTimeout(() => setupRunes(25), 1000); 
});