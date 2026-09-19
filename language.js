(() => {
  const buttons = document.querySelectorAll('[data-language]');
  function choose(language) {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-en]').forEach(element => {
      // Translations are authored locally in this document, never user input.
      element.innerHTML = element.getAttribute(`data-${language}`);
    });
    document.querySelectorAll('[data-alt-en]').forEach(element => {
      element.alt = element.getAttribute(`data-alt-${language}`);
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.title = language === 'pt' ? 'Lyra — um pequeno espaço para as suas malhas' : 'Lyra — a little space for your knitting';
    try { localStorage.setItem('lyra-language', language); } catch (_) {}
  }
  buttons.forEach(button => button.addEventListener('click', () => choose(button.dataset.language)));
  let saved;
  try { saved = localStorage.getItem('lyra-language'); } catch (_) {}
  choose(saved === 'pt' || (!saved && navigator.language.startsWith('pt')) ? 'pt' : 'en');
})();
