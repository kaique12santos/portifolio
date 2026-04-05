 const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // Skill bar animation on scroll
  const skillFills = document.querySelectorAll('.skill-bar-fill');
  const fillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.style.width; // trigger reflow
        fillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  skillFills.forEach(el => {
    const w = el.style.width;
    el.style.width = '0';
    fillObserver.observe(el);
    setTimeout(() => { el.style.width = w; }, 200);
  });

  // Nav active link highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) current = s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--gold-light)' : '';
    });
  });

  // --- Gerador de Partículas de Runas ---
const setupRunes = (quantity) => {
  const container = document.body;
  const runeSymbols = ['ᚱ', 'ᚠ', 'ᚢ', 'ᚨ', 'ᚺ', 'ᛗ', 'ᛒ', 'ᛞ', 'ᛟ', 'ᚦ', 'ᚲ'];
  
  for (let i = 0; i < quantity; i++) {
    const span = document.createElement('span');
    span.className = 'rune-particle';
    
    // Escolhe um símbolo aleatório do array
    const randomRune = runeSymbols[Math.floor(Math.random() * runeSymbols.length)];
    span.textContent = randomRune;

    // Gera valores aleatórios para parecer natural
    const randomLeft = Math.floor(Math.random() * 100) + '%';
    const randomDuration = (Math.random() * 10 + 10).toFixed(1) + 's'; // Entre 10s e 20s
    const randomDelay = (Math.random() * 15).toFixed(1) + 's'; // Delay de até 15s
    const randomTop = (Math.random() * 10 + 90) + '%'; // Começa entre 90% e 100% da altura

    // Aplica os estilos
    span.style.left = randomLeft;
    span.style.top = randomTop;
    span.style.animationDuration = randomDuration;
    span.style.animationDelay = randomDelay;
    span.style.fontSize = (Math.random() * 0.5 + 1) + 'rem'; // Tamanhos variados (1rem a 1.5rem)

    container.appendChild(span);
  }
};

// Exemplo: Gerar 15 runas
window.addEventListener('DOMContentLoaded', () => setupRunes(100));