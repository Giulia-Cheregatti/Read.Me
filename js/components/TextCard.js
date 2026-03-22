/**
 * TextCard.js — Componente de card para exibição de texto individual
 *
 * Responsável por:
 * - Exibir título (EN e PT), tempo de leitura, trecho e status do quiz
 * - Mostrar pontuação anterior se o texto já foi concluído
 * - Emitir evento personalizado ao ser clicado para abrir o modal de leitura
 */

/**
 * Cria e retorna o elemento HTML de um card de texto.
 *
 * @param {Object} text      - objeto do texto (de texts.js)
 * @param {Object|null} result - resultado salvo (de storage.js) ou null
 * @returns {HTMLElement}
 */
function createTextCard(text, result = null) {
  const isDone    = result !== null;
  const scoreStr  = isDone ? `${result.percent}%` : t('text.notDone');
  const scoreClass = isDone
    ? (result.percent >= 75 ? 'text-card__score--done' : '')
    : '';

  // Trecho do texto para preview (primeiros 150 caracteres)
  const excerpt = text.body.replace(/\n/g, ' ').slice(0, 160) + '…';

  const card = document.createElement('article');
  card.className = `text-card${isDone ? ' text-card--done' : ''}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', t('aria.textCard', { title: text.titleEn }));
  card.setAttribute('tabindex', '0');
  card.dataset.textId = text.id;

  card.innerHTML = `
    <div class="text-card__meta">
      <span class="level-badge level-badge--sm" style="
        background-color: ${_getLevelColor(text.levelId, 'light')};
        color: ${_getLevelColor(text.levelId, 'main')};
      ">
        ${text.levelId.toUpperCase()}
      </span>
      <span class="text-card__read-time">
        <span aria-hidden="true">⏱</span>
        ${text.readTimeMin} ${t('text.minRead')}
      </span>
    </div>

    <div>
      <h3 class="text-card__title">${text.titleEn}</h3>
      <p class="text-card__title-pt">${text.titlePt}</p>
    </div>

    <p class="text-card__excerpt">${excerpt}</p>

    <div class="text-card__footer">
      <span class="text-card__score ${scoreClass}">
        ${isDone ? t('text.score') + ' ' + scoreStr : scoreStr}
      </span>
      <span class="text-card__cta">
        ${isDone ? t('text.redo') : t('text.read')}
        <span aria-hidden="true">→</span>
      </span>
    </div>
  `;

  // Abre o modal de leitura ao clicar ou pressionar Enter/Space
  const openReading = () => {
    document.dispatchEvent(
      new CustomEvent('openReading', { detail: { textId: text.id } })
    );
  };

  card.addEventListener('click', openReading);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openReading();
    }
  });

  return card;
}

/**
 * Renderiza os cards de texto de um nível no container especificado.
 *
 * @param {string}   containerId - ID do elemento pai
 * @param {string}   levelId     - ID do nível (ex: 'b1')
 */
function renderTextCards(containerId, levelId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const textsForLevel = TEXTS.filter(tx => tx.levelId === levelId);

  if (textsForLevel.length === 0) {
    container.innerHTML = `
      <p class="empty-state">Nenhum texto encontrado para este nível.</p>
    `;
    return;
  }

  textsForLevel.forEach(text => {
    const result = getTextResult(text.id);
    const card   = createTextCard(text, result);
    container.appendChild(card);
  });
}

// =====================================================
// UTILITÁRIO INTERNO
// =====================================================

/**
 * Retorna a cor de um nível pelo seu ID.
 * @param {string} levelId
 * @param {'main'|'light'} variant
 * @returns {string} - cor CSS
 * @private
 */
function _getLevelColor(levelId, variant = 'main') {
  const level = LEVELS.find(l => l.id === levelId);
  if (!level) return variant === 'main' ? '#059669' : '#d1fae5';
  return variant === 'main' ? level.color : level.colorLight;
}