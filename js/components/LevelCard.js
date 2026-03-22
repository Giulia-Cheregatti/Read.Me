/**
 * LevelCard.js — Componente de card para exibição de nível CEFR
 *
 * Responsável por:
 * - Renderizar um card de nível com cor, nome, descrição e progresso
 * - Ser usado tanto na home (grid resumido) quanto na página de níveis
 */

/**
 * Cria e retorna o elemento HTML de um card de nível.
 *
 * @param {Object} level      - objeto do nível (de levels.js)
 * @param {number} done       - quantidade de textos concluídos neste nível
 * @param {number} total      - total de textos disponíveis neste nível
 * @param {boolean} compact   - se true, exibe versão menor (para a home)
 * @returns {HTMLElement}
 */
function createLevelCard(level, done = 0, total = 0, compact = false) {
  const percent   = total > 0 ? Math.round((done / total) * 100) : 0;
  const isDone    = done > 0 && done === total;
  const langLabel = getLang() === 'pt' ? level.namePt : level.name;
  const langDesc  = getLang() === 'pt' ? level.descPt : level.desc;

  // Elemento raiz — usa <a> para semântica e acessibilidade
  const card = document.createElement('a');
  card.href  = `#level/${level.id}`;
  card.className = `level-card${compact ? ' level-card--compact' : ''}`;
  card.setAttribute('role', 'listitem');
  card.setAttribute(
    'aria-label',
    t('aria.levelCard', { level: level.code, name: langLabel })
  );

  // Aplica a cor do nível via CSS custom property inline
  card.style.setProperty('--level-color',       level.color);
  card.style.setProperty('--level-color-light',  level.colorLight);

  // Constrói o innerHTML do card
  card.innerHTML = `
    <div class="level-card__header">
      <span class="level-card__badge" aria-hidden="true">${level.code}</span>
      <span class="level-card__texts-count" aria-hidden="true">
        ${total} ${total === 1 ? t('level.texts.singular') : t('level.texts')}
      </span>
    </div>

    <h3 class="level-card__name">
      <span aria-hidden="true">${level.emoji}</span>
      ${langLabel}
    </h3>

    ${!compact ? `<p class="level-card__desc">${langDesc}</p>` : ''}

    <div class="level-card__progress">
      <div
        class="level-progress-bar"
        role="progressbar"
        aria-valuenow="${percent}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${done} de ${total} textos concluídos"
      >
        <div
          class="level-progress-bar__fill"
          style="width: ${percent}%"
        ></div>
      </div>
      <div class="level-card__progress-label">
        <span>${done}/${total} ${t('level.texts')}</span>
        <span>${isDone ? '✓ 100%' : percent + '%'}</span>
      </div>
    </div>
  `;

  return card;
}

/**
 * Renderiza os cards de nível em um container específico.
 *
 * @param {string}  containerId - ID do elemento pai onde os cards serão injetados
 * @param {boolean} compact     - se true, usa modo compacto (home)
 */
function renderLevelCards(containerId, compact = false) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Limpa o container antes de re-renderizar
  container.innerHTML = '';

  LEVELS.forEach(level => {
    // Busca progresso salvo para este nível
    const textsForLevel = TEXTS.filter(tx => tx.levelId === level.id);
    const { done }      = getLevelProgress(level.id, TEXTS);
    const total         = textsForLevel.length;

    const card = createLevelCard(level, done, total, compact);
    container.appendChild(card);
  });
}