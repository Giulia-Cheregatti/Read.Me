/**
 * ReadingModal.js — Modal de leitura de texto
 *
 * Responsável por:
 * - Exibir o texto com palavras do vocabulário clicáveis (tooltip)
 * - Renderizar os chips de vocabulário-chave
 * - Gerenciar o tooltip de tradução de palavras
 * - Acionar o QuizModal ao clicar em "Iniciar Quiz"
 */

// Texto atualmente aberto no modal
let _currentText = null;

// =====================================================
// ABERTURA / FECHAMENTO
// =====================================================

/**
 * Abre o modal de leitura com o texto especificado.
 * @param {string} textId
 */
function openReadingModal(textId) {
  const text = TEXTS.find(tx => tx.id === textId);
  if (!text) {
    console.warn(`[ReadingModal] Texto não encontrado: ${textId}`);
    return;
  }

  _currentText = text;
  _populateReadingModal(text);
  _showModal('reading-modal-overlay');
  _trapFocus('reading-modal-overlay');
}

/**
 * Fecha o modal de leitura e limpa o estado.
 */
function closeReadingModal() {
  _hideModal('reading-modal-overlay');
  _hideTooltip();
  _currentText = null;
}

// =====================================================
// PREENCHIMENTO DO MODAL
// =====================================================

/**
 * Preenche o modal com os dados do texto.
 * @param {Object} text
 * @private
 */
function _populateReadingModal(text) {
  const level = LEVELS.find(l => l.id === text.levelId);

  // --- Cabeçalho ---
  document.getElementById('reading-modal-title').textContent  = text.titleEn;
  document.getElementById('reading-time-text').textContent    = `${text.readTimeMin} min`;
  document.getElementById('reading-level-badge').textContent  = text.levelId.toUpperCase();

  // Cor dinâmica do badge de nível
  const badge = document.getElementById('reading-level-badge');
  if (level) {
    badge.style.backgroundColor = level.colorLight;
    badge.style.color           = level.color;
  }

  // --- Chips de vocabulário ---
  _renderVocabChips(text.vocabulary);

  // --- Corpo do texto com palavras clicáveis ---
  _renderReadingBody(text);
}

/**
 * Renderiza os chips de vocabulário-chave.
 * @param {Array<{word: string, translation: string}>} vocab
 * @private
 */
function _renderVocabChips(vocab) {
  const container = document.getElementById('vocab-chips-container');
  container.innerHTML = '';

  vocab.forEach(item => {
    const chip = document.createElement('button');
    chip.className   = 'vocab-chip';
    chip.type        = 'button';
    chip.title       = item.translation;
    chip.setAttribute('aria-label', `${item.word}: ${item.translation}`);

    chip.innerHTML = `
      <span class="vocab-chip__word">${item.word}</span>
      <span class="vocab-chip__translation">${item.translation}</span>
    `;

    // Clicar no chip mostra o tooltip centralizado
    chip.addEventListener('click', e => {
      e.stopPropagation();
      _showTooltip(item.word, item.translation, chip);
    });

    container.appendChild(chip);
  });
}

/**
 * Renderiza o corpo do texto, tornando palavras do vocabulário
 * clicáveis para exibir o tooltip de tradução.
 * @param {Object} text
 * @private
 */
function _renderReadingBody(text) {
  const body = document.getElementById('reading-body');
  body.innerHTML = '';

  // Cria um mapa rápido de palavra → tradução (case-insensitive)
  const vocabMap = {};
  text.vocabulary.forEach(item => {
    vocabMap[item.word.toLowerCase()] = item.translation;
  });

  // Divide o texto em parágrafos
  const paragraphs = text.body.split('\n').filter(p => p.trim().length > 0);

  paragraphs.forEach(paragraphText => {
    const p = document.createElement('p');
    p.className = 'reading-paragraph';

    // Divide o parágrafo em palavras e pontuação
    const tokens = _tokenize(paragraphText);

    tokens.forEach(token => {
      const cleanWord = token.replace(/[^a-zA-Z'-]/g, '').toLowerCase();
      const translation = vocabMap[cleanWord];

      if (translation) {
        // Palavra com tradução — torna clicável
        const span = document.createElement('span');
        span.className   = 'word-clickable';
        span.textContent = token;
        span.setAttribute('role', 'button');
        span.setAttribute('tabindex', '0');
        span.setAttribute('aria-label', `${token}: ${translation}`);

        span.addEventListener('click', e => {
          e.stopPropagation();
          _showTooltip(cleanWord, translation, span);
        });

        span.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            _showTooltip(cleanWord, translation, span);
          }
        });

        p.appendChild(span);
      } else {
        // Palavra normal — apenas texto
        p.appendChild(document.createTextNode(token));
      }

      // Espaço após cada token (exceto pontuação colada)
      if (!token.match(/^[.,;:!?)]$/)) {
        p.appendChild(document.createTextNode(' '));
      }
    });

    body.appendChild(p);
  });
}

/**
 * Divide uma string em tokens (palavras + pontuação preservada).
 * @param {string} text
 * @returns {string[]}
 * @private
 */
function _tokenize(text) {
  // Mantém palavras compostas com hífen e apóstrofos (ex: "it's", "self-aware")
  return text.match(/[a-zA-Z'-]+|[.,;:!?()\d]+|\S/g) || [];
}

// =====================================================
// TOOLTIP DE TRADUÇÃO
// =====================================================

/**
 * Exibe o tooltip de tradução próximo ao elemento alvo.
 * @param {string}      word        - palavra em inglês
 * @param {string}      translation - tradução em PT
 * @param {HTMLElement} targetEl    - elemento que disparou o tooltip
 * @private
 */
function _showTooltip(word, translation, targetEl) {
  const tooltip = document.getElementById('word-tooltip');
  tooltip.innerHTML = `
    <span class="word-tooltip__word">${word}</span>
    <span class="word-tooltip__translation">${translation}</span>
  `;
  tooltip.removeAttribute('hidden');

  // Posiciona o tooltip acima do elemento alvo
  const rect   = targetEl.getBoundingClientRect();
  const tipW   = 200; // largura estimada
  const margin = 8;

  let left = rect.left + rect.width / 2 - tipW / 2;
  let top  = rect.top - tooltip.offsetHeight - margin + window.scrollY;

  // Garante que não saia da tela lateralmente
  left = Math.max(margin, Math.min(left, window.innerWidth - tipW - margin));

  tooltip.style.left = `${left}px`;
  tooltip.style.top  = `${top}px`;

  // Fecha ao clicar fora
  setTimeout(() => {
    document.addEventListener('click', _hideTooltip, { once: true });
  }, 0);
}

/**
 * Esconde o tooltip.
 * @private
 */
function _hideTooltip() {
  const tooltip = document.getElementById('word-tooltip');
  if (tooltip) tooltip.setAttribute('hidden', '');
}

// =====================================================
// INICIALIZAÇÃO DOS EVENT LISTENERS
// =====================================================

/**
 * Registra todos os listeners do modal de leitura.
 * Deve ser chamado uma única vez na inicialização.
 */
function initReadingModal() {

  // Fechar pelo botão X
  document.getElementById('reading-modal-close')
    ?.addEventListener('click', closeReadingModal);

  // Fechar pelo botão "Fechar" no rodapé
  document.getElementById('reading-modal-close-btn')
    ?.addEventListener('click', closeReadingModal);

  // Fechar ao clicar no overlay (fora do modal)
  document.getElementById('reading-modal-overlay')
    ?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeReadingModal();
    });

  // Fechar com tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('reading-modal-overlay');
      if (overlay && !overlay.hasAttribute('hidden')) closeReadingModal();
    }
  });

  // ✅ CORREÇÃO AQUI — salva o id antes de fechar o modal
  document.getElementById('btn-start-quiz')
    ?.addEventListener('click', () => {
      if (!_currentText) return;

      const textId = _currentText.id; // ← captura o id ANTES de fechar
      closeReadingModal();             // ← agora pode zerar _currentText sem problema
      openQuizModal(textId);          // ← usa a variável local, não _currentText
    });

  // Escuta evento global para abrir o modal
  document.addEventListener('openReading', e => {
    openReadingModal(e.detail.textId);
  });

  // Re-renderiza quando o idioma muda
  document.addEventListener('langchange', () => {
    if (_currentText) {
      _populateReadingModal(_currentText);
    }
  });
}