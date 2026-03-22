/**
 * Navbar.js — Comportamento interativo da barra de navegação
 *
 * Responsável por:
 * - Toggle do menu mobile (hambúrguer)
 * - Marcar o link ativo conforme a rota atual
 * - Scroll shadow na navbar
 * - Fechar menu mobile ao clicar em link
 */

/**
 * Inicializa todos os comportamentos da navbar.
 * Chamado uma única vez em main.js.
 */
function initNavbar() {
  _initMobileMenu();
  _initScrollShadow();
  _initThemeToggle();
  _initLangToggle();
}

/**
 * Atualiza o link ativo na navbar com base na rota atual.
 * Chamado pelo router sempre que a rota muda.
 * @param {string} hash - ex: '#home', '#levels', '#progress'
 */
function updateNavActiveLink(hash) {
  // Remove classe active de todos os links
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    link.classList.remove('active');
  });

  // Determina qual seção está ativa
  let activeSection = 'home';
  if (hash.startsWith('#levels') || hash.startsWith('#level/')) {
    activeSection = 'levels';
  } else if (hash.startsWith('#progress')) {
    activeSection = 'progress';
  }

  // Adiciona classe active ao link correspondente
  document.querySelectorAll('.navbar__link, .navbar__mobile-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === `#${activeSection}`) {
      link.classList.add('active');
    }
  });
}

// =====================================================
// MENU MOBILE
// =====================================================

/**
 * Inicializa o toggle do menu hambúrguer para mobile.
 * @private
 */
function _initMobileMenu() {
  const btnMenu   = document.getElementById('btn-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!btnMenu || !mobileMenu) return;

  btnMenu.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    btnMenu.setAttribute('aria-expanded', isOpen.toString());
    mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
    btnMenu.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha o menu ao clicar em qualquer link dentro dele
  mobileMenu.querySelectorAll('.navbar__mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      btnMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // Fecha ao clicar fora do menu
  document.addEventListener('click', e => {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.contains(e.target)) {
      mobileMenu.classList.remove('open');
      btnMenu.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });
}

// =====================================================
// SCROLL SHADOW
// =====================================================

/**
 * Adiciona/remove sombra na navbar conforme o scroll.
 * @private
 */
function _initScrollShadow() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handler = () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
  };

  window.addEventListener('scroll', handler, { passive: true });
  handler(); // aplica estado inicial
}

// =====================================================
// THEME TOGGLE
// =====================================================

/**
 * Conecta o botão de tema ao módulo theme.js.
 * @private
 */
function _initThemeToggle() {
  const btn = document.getElementById('btn-theme');
  if (!btn) return;

  btn.addEventListener('click', () => {
    toggleTheme();
  });
}

// =====================================================
// LANGUAGE TOGGLE
// =====================================================

/**
 * Conecta o botão de idioma ao módulo i18n.js.
 * @private
 */
function _initLangToggle() {
  const btn = document.getElementById('btn-lang');
  if (!btn) return;

  btn.addEventListener('click', () => {
    toggleLanguage();
  });
}