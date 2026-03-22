/**
 * theme.js — Gerenciamento de tema escuro/claro
 * Usa data-theme="dark"|"light" no <html>
 * Preferência salva no localStorage
 */

// =====================================================
// ESTADO
// =====================================================
let currentTheme = 'light';

// =====================================================
// FUNÇÕES PÚBLICAS
// =====================================================

/**
 * Inicializa o tema com base no localStorage ou
 * na preferência do sistema operacional do usuário.
 */
function initTheme() {
  const saved = localStorage.getItem('readme_theme');

  if (saved && (saved === 'dark' || saved === 'light')) {
    currentTheme = saved;
  } else {
    // Detecta preferência do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = prefersDark ? 'dark' : 'light';
  }

  _applyTheme(currentTheme);
}

/**
 * Alterna entre dark e light.
 * Salva a preferência no localStorage.
 */
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('readme_theme', currentTheme);
  _applyTheme(currentTheme);
}

/**
 * Retorna o tema atual.
 * @returns {'dark'|'light'}
 */
function getTheme() {
  return currentTheme;
}

// =====================================================
// FUNÇÕES PRIVADAS
// =====================================================

/**
 * Aplica o tema ao <html> e atualiza o ícone do botão.
 * @param {'dark'|'light'} theme
 * @private
 */
function _applyTheme(theme) {
  // Define atributo no <html> — o CSS usa [data-theme="dark"]
  document.documentElement.setAttribute('data-theme', theme);

  // Atualiza ícone do botão (sol = light, lua = dark)
  const icon = document.getElementById('theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Atualiza o aria-label do botão para acessibilidade
  const btn = document.getElementById('btn-theme');
  if (btn) {
    btn.setAttribute(
      'aria-label',
      theme === 'dark'
        ? 'Alternar para tema claro'
        : 'Alternar para tema escuro'
    );
  }
}