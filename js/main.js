/**
 * main.js — Ponto de entrada e inicialização global
 *
 * Ordem de inicialização:
 * 1. Tema (dark/light) — antes de tudo para evitar flash
 * 2. Idioma (i18n)
 * 3. Navbar
 * 4. Modais (Reading + Quiz + Result)
 * 5. Roteador
 * 6. Listeners globais
 */

// =====================================================
// UTILITÁRIOS GLOBAIS DE MODAL
// (usados por ReadingModal.js e QuizModal.js)
// =====================================================

/**
 * Exibe um modal pelo ID do overlay.
 * @param {string} overlayId
 */
function _showModal(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  overlay.removeAttribute('hidden');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Bloqueia scroll do body
}

/**
 * Esconde um modal pelo ID do overlay.
 * @param {string} overlayId
 */
function _hideModal(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;
  overlay.setAttribute('hidden', '');
  overlay.setAttribute('aria-hidden', 'true');
  // Restaura scroll do body apenas se nenhum outro modal estiver aberto
  const anyOpen = document.querySelectorAll('.modal-overlay:not([hidden])').length > 0;
  if (!anyOpen) document.body.style.overflow = '';
}

/**
 * Armadilha de foco dentro de um modal (acessibilidade).
 * Garante que Tab não saia do modal enquanto ele estiver aberto.
 * @param {string} overlayId
 */
function _trapFocus(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (!overlay) return;

  // Seleciona todos os elementos focáveis dentro do modal
  const focusable = overlay.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusable.length === 0) return;

  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  // Foca o primeiro elemento ao abrir
  setTimeout(() => first.focus(), 100);

  const handler = e => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      // Shift+Tab: vai para o último se estiver no primeiro
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: vai para o primeiro se estiver no último
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  overlay.addEventListener('keydown', handler);

  // Remove o handler quando o modal for fechado
  const observer = new MutationObserver(() => {
    if (overlay.hasAttribute('hidden')) {
      overlay.removeEventListener('keydown', handler);
      observer.disconnect();
    }
  });

  observer.observe(overlay, { attributes: true });
}

// =====================================================
// MODAL DE RESULTADO
// (complementa QuizModal.js — exibido após o quiz)
// =====================================================

/**
 * Abre o modal de resultado final do quiz.
 * @param {{
 *   textTitle: string,
 *   score: number,
 *   total: number,
 *   percent: number,
 *   answers: boolean[],
 *   questions: Object[]
 * }} data
 */
function openResultModal(data) {
  const { textTitle, score, total, percent, answers, questions } = data;

  // Emoji e mensagem conforme desempenho
  let emoji, message;
  if (percent === 100)       { emoji = '🏆'; message = t('result.excellent'); }
  else if (percent >= 75)    { emoji = '👏'; message = t('result.good'); }
  else if (percent >= 50)    { emoji = '📖'; message = t('result.average'); }
  else                       { emoji = '💪'; message = t('result.low'); }

  document.getElementById('result-emoji').textContent    = emoji;
  document.getElementById('result-subtitle').textContent = message;
  document.getElementById('result-detail').textContent   =
    t('result.detail', { correct: score, total });

  // Percentual e anel SVG animado
  document.getElementById('result-score-percent').textContent = `${percent}%`;
  _animateScoreRing(percent);

  // Cor do anel conforme desempenho
  const ring = document.getElementById('score-ring-fill');
  if (percent >= 75)     ring.style.stroke = '#16a34a';
  else if (percent >= 50) ring.style.stroke = '#d97706';
  else                    ring.style.stroke = '#dc2626';

  // Breakdown por questão
  const breakdown = document.getElementById('result-breakdown');
  breakdown.innerHTML = '';

  questions.forEach((q, i) => {
    const correct = answers[i];
    const item    = document.createElement('div');
    item.className = `breakdown-item ${correct ? 'breakdown-item--correct' : 'breakdown-item--wrong'}`;
    item.innerHTML = `
      <span class="breakdown-item__num">${i + 1}.</span>
      <span>${correct ? '✓' : '✗'} ${q.question.slice(0, 70)}${q.question.length > 70 ? '…' : ''}</span>
    `;
    breakdown.appendChild(item);
  });

  _showModal('result-modal-overlay');
  _trapFocus('result-modal-overlay');

  // Atualiza os cards de texto (para refletir novo status de concluído)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#level/')) {
    const levelId = hash.replace('#level/', '');
    renderTextCards('texts-grid', levelId);
  }
}

/**
 * Anima o anel SVG de pontuação.
 * @param {number} percent - 0 a 100
 * @private
 */
function _animateScoreRing(percent) {
  const circumference = 314; // 2 * π * r (r=50)
  const offset        = circumference - (percent / 100) * circumference;
  const ring          = document.getElementById('score-ring-fill');

  // Reinicia para estado zero antes de animar
  ring.style.strokeDashoffset = circumference;

  setTimeout(() => {
    ring.style.strokeDashoffset = offset;
  }, 100);
}

// =====================================================
// TOAST NOTIFICATIONS
// =====================================================

/**
 * Exibe uma notificação toast temporária.
 * @param {string} message
 * @param {'success'|'error'|'info'} type
 * @param {number} duration - em milissegundos (padrão: 3000)
 */
function showToast(message, type = 'info', duration = 3000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast     = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  toast.setAttribute('role', 'alert');

  container.appendChild(toast);

  // Remove o toast após a duração
  setTimeout(() => {
    toast.classList.add('toast--leaving');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
    // Fallback caso a animação não dispare
    setTimeout(() => toast.remove(), 500);
  }, duration);
}

// =====================================================
// LISTENERS GLOBAIS
// =====================================================

/**
 * Inicializa os listeners do modal de resultado.
 * @private
 */
function _initResultModal() {
  // Fechar pelo botão "Concluir"
  document.getElementById('btn-close-result')
    ?.addEventListener('click', () => {
      _hideModal('result-modal-overlay');
    });

  // Tentar novamente — reabre o quiz do mesmo texto
  document.getElementById('btn-retry-quiz')
    ?.addEventListener('click', () => {
      _hideModal('result-modal-overlay');
      // Pega o textId do resultado salvo mais recente
      const results = getRecentResults(1);
      if (results.length > 0) {
        openQuizModal(results[0].textId);
      }
    });

  // Fechar ao clicar fora
  document.getElementById('result-modal-overlay')
    ?.addEventListener('click', e => {
      if (e.target === e.currentTarget) {
        _hideModal('result-modal-overlay');
      }
    });

  // Escape fecha
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('result-modal-overlay');
      if (overlay && !overlay.hasAttribute('hidden')) {
        _hideModal('result-modal-overlay');
      }
    }
  });
}

/**
 * Inicializa o botão de resetar progresso.
 * @private
 */
function _initResetProgress() {
  document.getElementById('btn-reset-progress')
    ?.addEventListener('click', () => {
      const confirmMsg = t('confirm.reset');
      if (!window.confirm(confirmMsg)) return;

      resetProgress();
      showToast(t('toast.resetDone'), 'success');

      // Recarrega a view de progresso
      setTimeout(() => {
        if (window.location.hash === '#progress') {
          _loadProgress();
        }
      }, 300);
    });
}

/**
 * Re-renderiza componentes dinâmicos quando o idioma muda.
 * @private
 */
function _initLangChangeListener() {
  document.addEventListener('langchange', () => {
    const hash = window.location.hash || '#home';

    // Re-renderiza os level cards na view atual
    if (hash === '#home') {
      renderLevelCards('home-levels-grid', true);
    } else if (hash === '#levels') {
      renderLevelCards('levels-grid', false);
    } else if (hash.startsWith('#level/')) {
      const levelId = hash.replace('#level/', '');
      _loadLevelDetail(levelId);
    } else if (hash === '#progress') {
      _loadProgress();
    }
  });
}

// =====================================================
// INICIALIZAÇÃO PRINCIPAL
// =====================================================

/**
 * Ponto de entrada — executado quando o DOM está pronto.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Tema — primeiro para evitar flash de tema incorreto
  initTheme();

  // 2. Idioma
  initLanguage();

  // 3. Navbar
  initNavbar();

  // 4. Modais
  initReadingModal();
  initQuizModal();
  _initResultModal();

  // 5. Listeners auxiliares
  _initResetProgress();
  _initLangChangeListener();

  // 6. Roteador — por último, pois depende de tudo acima
  initRouter();

  console.log('[Read.Me] Aplicação inicializada com sucesso ✓');
});