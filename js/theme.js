
document.addEventListener('DOMContentLoaded', () => {
  let currentMode = 'rpg'; 
  let currentLang = 'pt';  

  const modeBtn = document.getElementById('toggle-mode');
  const modeIcon = document.getElementById('mode-icon');
  
  const langBtn = document.getElementById('toggle-lang');

  // Função central para atualizar todos os textos mapeados
  function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-key');
      // Busca no objeto: portfolioContent -> pt ou en -> rpg ou normal -> chave
      const newText = portfolioContent[currentLang][currentMode][key];
      
      if (newText) {
        el.innerHTML = newText;
      }
    });
  }

  // --- EVENTO: Trocar Modo (RPG / Normal) ---
  modeBtn.addEventListener('click', () => {
    if (currentMode === 'rpg') {
      currentMode = 'normal';
      document.body.classList.add('normal-mode');
      modeIcon.textContent = 'work'; 
    } else {
      currentMode = 'rpg';
      document.body.classList.remove('normal-mode');
      modeIcon.textContent = 'auto_stories'; 
    }
    updateContent(); 
  });

  // --- EVENTO: Trocar Idioma (PT / EN) ---
  langBtn.addEventListener('click', () => {
    if (currentLang === 'pt') {
      currentLang = 'en';
      langBtn.textContent = 'EN';
    } else {
      currentLang = 'pt';
      langBtn.textContent = 'PT';
    }
    updateContent(); 
  });
});