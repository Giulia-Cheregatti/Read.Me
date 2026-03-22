/**
 * router.js — Roteador SPA baseado em hash (#)
 *
 * Rotas disponíveis:
 * #home          → View principal / landing
 * #levels        → Grid com os 6 níveis CEFR
 * #level/:id     → Textos de um nível específico
 * #progress      → Painel de progresso do usuário
 *
 * Funcionamento:
 * - Escuta o evento 'hashchange' do window
 * - Mostra/esconde as sections correspondentes
 * - Injeta dados dinâmicos conforme a rota
 */

// IDs de todas as views do SPA
const VIEWS = ['view-home', 'view-levels', 'view-level-detail', 'view-progress'];

// =====================================================
// INICIALIZAÇÃO
// =====================================================

/**
 * Inicia o roteador: escuta hashchange e carrega a rota inicial.
 */
function initRouter() {
  window.addEventListener('hashchange', _handleRoute);

  // Carrega a rota atual (ou #home como padrão)
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#home';
  } else {
    _handleRoute();
  }
}

// =====================================================
// HANDLER DE ROTA
// =====================================================

/**
 * Lê o hash atual e direciona para a view correta.
 * @private
 */
function _handleRoute() {
  const hash = window.location.hash || '#home';

  // Rola para o topo ao mudar de view
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Atualiza o link ativo na navbar
  updateNavActiveLink(hash);

  // Rota: #home
  if (hash === '#home' || hash === '#') {
    _showView('view-home');
    _loadHome();
    return;
  }

  // Rota: #levels
  if (hash === '#levels') {
    _showView('view-levels');
    _loadLevels();
    return;
  }

  // Rota: #level/:id  (ex: #level/b1)
  const levelMatch = hash.match(/^#level\/([a-z0-9]+)$/);
  if (levelMatch) {
    const levelId = levelMatch[1];
    _showView('view-level-detail');
    _loadLevelDetail(levelId);
    return;
  }

  // Rota: #progress
  if (hash === '#progress') {
    _showView('view-progress');
    _loadProgress();
    return;
  }

  // Rota não encontrada — redireciona para home
  window.location.hash = '#home';
}

// =====================================================
// GERENCIAMENTO DE VIEWS
// =====================================================

/**
 * Exibe uma view e esconde todas as outras.
 * @param {string} viewId - ID da view a exibir
 * @private
 */
function _showView(viewId) {
  VIEWS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    if (id === viewId) {
      el.removeAttribute('hidden');
      el.style.animation = 'none';
      // Força reflow para reiniciar a animação de entrada
      void el.offsetHeight;
      el.style.animation = '';
    } else {
      el.setAttribute('hidden', '');
    }
  });
}

// =====================================================
// LOADERS DE CADA VIEW
// =====================================================

/**
 * Carrega a view home: renderiza os level cards no grid da home.
 * @private
 */
function _loadHome() {
  renderLevelCards('home-levels-grid', true);
}

/**
 * Carrega a view de níveis: renderiza todos os 6 cards.
 * @private
 */
function _loadLevels() {
  renderLevelCards('levels-grid', false);
}

/**
 * Carrega a view de detalhe de nível.
 * @param {string} levelId
 * @private
 */
function _loadLevelDetail(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  if (!level) {
    window.location.hash = '#levels';
    return;
  }

  // Atualiza cabeçalho da view
  const badge = document.getElementById('level-detail-badge');
  const title = document.getElementById('level-detail-title');
  const desc  = document.getElementById('level-detail-desc');

  if (badge) {
    badge.textContent         = level.code;
    badge.style.backgroundColor = level.colorLight;
    badge.style.color           = level.color;
  }

  if (title) title.textContent = getLang() === 'pt' ? level.namePt : level.name;
  if (desc)  desc.textContent  = getLang() === 'pt' ? level.descPt  : level.desc;

  // Renderiza os TextCards
  renderTextCards('texts-grid', levelId);

  // Botão de voltar → vai para #levels
  const backBtn = document.getElementById('btn-back-to-levels');
  if (backBtn) {
    backBtn.onclick = () => { window.location.hash = '#levels'; };
  }
}

/**
 * Carrega a view de progresso com dados atualizados do storage.
 * @private
 */
function _loadProgress() {
  const stats = getStats();

  // Atualiza os cards de estatística
  document.getElementById('stat-texts-read').textContent  = stats.textsRead;
  document.getElementById('stat-quizzes-done').textContent = stats.quizzesDone;
  document.getElementById('stat-avg-score').textContent   =
    stats.avgScore !== null ? `${stats.avgScore}%` : '—';
  document.getElementById('stat-streak').textContent = stats.streak;

  // Progresso por nível
  _renderProgressByLevel();

  // Histórico recente
  _renderHistory();
}

/**
 * Renderiza as barras de progresso por nível.
 * @private
 */
function _renderProgressByLevel() {
  const container = document.getElementById('progress-levels');
  if (!container) return;

  container.innerHTML = '';

  LEVELS.forEach(level => {
    const { done, total } = getLevelProgress(level.id, TEXTS);
    const percent         = total > 0 ? Math.round((done / total) * 100) : 0;
    const label           = getLang() === 'pt' ? level.namePt : level.name;

    const item = document.createElement('div');
    item.className = 'progress-level-item';
    item.innerHTML = `
      <span class="progress-level-item__label" style="color: ${level.color}">
        ${level.code}
      </span>
      <div class="progress-level-item__bar">
        <div
          class="progress-level-item__fill"
          style="width: ${percent}%; background-color: ${level.color};"
        ></div>
      </div>
      <span class="progress-level-item__count">${done}/${total}</span>
    `;

    // Tooltip com nome do nível
    item.title = `${label}: ${t('progress.level.done', { done, total })}`;
    container.appendChild(item);
  });
}

/**
 * Renderiza o histórico recente de quizzes.
 * @private
 */
function _renderHistory() {
  const list      = document.getElementById('history-list');
  const emptyMsg  = document.getElementById('history-empty');
  const results   = getRecentResults(10);

  if (!list) return;
  list.innerHTML = '';

  if (results.length === 0) {
    emptyMsg?.removeAttribute('hidden');
    return;
  }

  emptyMsg?.setAttribute('hidden', '');

  results.forEach(result => {
    const text = TEXTS.find(tx => tx.id === result.textId);
    if (!text) return;

    const level = LEVELS.find(l => l.id === text.levelId);

    // Define classe de pontuação para colorir
    let scoreClass = '';
    if (result.percent >= 75)      scoreClass = '';
    else if (result.percent >= 50) scoreClass = 'history-item__score--mid';
    else                           scoreClass = 'history-item__score--low';

    const item = document.createElement('div');
    item.className = 'history-item';
    item.setAttribute('role', 'listitem');
    item.innerHTML = `
      <span class="history-item__icon" aria-hidden="true">
        ${result.percent >= 75 ? '🏆' : result.percent >= 50 ? '📖' : '💪'}
      </span>
      <div class="history-item__info">
        <p class="history-item__title">${text.titleEn}</p>
        <p class="history-item__meta">
          <span style="color: ${level ? level.color : '#059669'}; font-weight: 600;">
            ${text.levelId.toUpperCase()}
          </span>
          · ${formatDate(result.date)}
          · ${result.score}/${result.total} acertos
        </p>
      </div>
      <span class="history-item__score ${scoreClass}">${result.percent}%</span>
    `;

    list.appendChild(item);
  });
}