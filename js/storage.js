/**
 * storage.js — Helpers para persistência no localStorage
 *
 * Estrutura dos dados salvos:
 * {
 *   results: [
 *     {
 *       textId: string,
 *       score: number,       // 0-8
 *       total: number,       // sempre 8
 *       percent: number,     // 0-100
 *       date: string,        // ISO 8601
 *       answers: boolean[]   // array de acertos por questão
 *     }
 *   ],
 *   streak: {
 *     count: number,
 *     lastDate: string       // ISO date (YYYY-MM-DD)
 *   }
 * }
 */

const STORAGE_KEY = 'readme_progress';

// =====================================================
// LEITURA / ESCRITA BASE
// =====================================================

/**
 * Retorna os dados completos de progresso do localStorage.
 * Se não existir, retorna a estrutura padrão vazia.
 * @returns {Object}
 */
function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return _defaultProgress();
    return JSON.parse(raw);
  } catch (e) {
    console.warn('[storage] Erro ao ler localStorage:', e);
    return _defaultProgress();
  }
}

/**
 * Salva os dados de progresso no localStorage.
 * @param {Object} data
 */
function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('[storage] Erro ao salvar no localStorage:', e);
  }
}

/**
 * Apaga todo o progresso salvo.
 */
function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

// =====================================================
// RESULTADOS DE QUIZ
// =====================================================

/**
 * Salva ou atualiza o resultado de um quiz.
 * Se o texto já foi feito antes, substitui pelo mais recente.
 * @param {string} textId
 * @param {number} score    - nº de acertos
 * @param {number} total    - nº total de questões
 * @param {boolean[]} answers - array com true/false por questão
 */
function saveQuizResult(textId, score, total, answers) {
  const data = getProgress();

  // Remove resultado anterior do mesmo texto (se houver)
  data.results = data.results.filter(r => r.textId !== textId);

  // Adiciona o novo resultado no início (histórico mais recente primeiro)
  data.results.unshift({
    textId,
    score,
    total,
    percent: Math.round((score / total) * 100),
    date: new Date().toISOString(),
    answers: answers || []
  });

  // Limita o histórico a 50 entradas
  if (data.results.length > 50) {
    data.results = data.results.slice(0, 50);
  }

  // Atualiza streak
  _updateStreak(data);

  saveProgress(data);
}

/**
 * Retorna o resultado mais recente de um texto específico,
 * ou null se nunca foi feito.
 * @param {string} textId
 * @returns {Object|null}
 */
function getTextResult(textId) {
  const data = getProgress();
  return data.results.find(r => r.textId === textId) || null;
}

/**
 * Retorna todos os IDs de textos que já foram concluídos.
 * @returns {string[]}
 */
function getCompletedTextIds() {
  const data = getProgress();
  return data.results.map(r => r.textId);
}

// =====================================================
// ESTATÍSTICAS COMPUTADAS
// =====================================================

/**
 * Calcula estatísticas gerais de progresso.
 * @returns {{
 *   textsRead: number,
 *   quizzesDone: number,
 *   avgScore: number|null,
 *   streak: number
 * }}
 */
function getStats() {
  const data = getProgress();
  const results = data.results;

  const textsRead    = results.length;
  const quizzesDone  = results.length;
  const avgScore     = results.length > 0
    ? Math.round(results.reduce((acc, r) => acc + r.percent, 0) / results.length)
    : null;
  const streak       = data.streak ? data.streak.count : 0;

  return { textsRead, quizzesDone, avgScore, streak };
}

/**
 * Retorna os últimos N resultados para exibição no histórico.
 * @param {number} [limit=10]
 * @returns {Object[]}
 */
function getRecentResults(limit = 10) {
  const data = getProgress();
  return data.results.slice(0, limit);
}

/**
 * Calcula quantos textos de um nível foram concluídos.
 * @param {string} levelId - ex: 'a1', 'b2'
 * @param {Object[]} allTexts - array completo de textos (de texts.js)
 * @returns {{ done: number, total: number }}
 */
function getLevelProgress(levelId, allTexts) {
  const levelTexts = allTexts.filter(tx => tx.levelId === levelId);
  const completed  = getCompletedTextIds();
  const done       = levelTexts.filter(tx => completed.includes(tx.id)).length;

  return { done, total: levelTexts.length };
}

// =====================================================
// STREAK (dias consecutivos)
// =====================================================

/**
 * Atualiza o streak com base na data atual.
 * @param {Object} data - dados de progresso mutáveis
 * @private
 */
function _updateStreak(data) {
  const today     = _todayStr();
  const streak    = data.streak || { count: 0, lastDate: null };
  const yesterday = _offsetDateStr(-1);

  if (streak.lastDate === today) {
    // Já praticou hoje — não incrementa
    return;
  }

  if (streak.lastDate === yesterday) {
    // Praticou ontem — incrementa streak
    streak.count += 1;
  } else {
    // Quebrou o streak — reinicia
    streak.count = 1;
  }

  streak.lastDate = today;
  data.streak = streak;
}

// =====================================================
// UTILITÁRIOS DE DATA
// =====================================================

/**
 * Retorna a data de hoje como string YYYY-MM-DD.
 * @returns {string}
 */
function _todayStr() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Retorna uma data deslocada em dias a partir de hoje.
 * @param {number} days - positivo = futuro, negativo = passado
 * @returns {string}
 */
function _offsetDateStr(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

/**
 * Formata uma data ISO 8601 para exibição local.
 * @param {string} isoStr
 * @returns {string}
 */
function formatDate(isoStr) {
  try {
    const date = new Date(isoStr);
    return date.toLocaleDateString('pt-BR', {
      day:   '2-digit',
      month: 'short',
      year:  'numeric'
    });
  } catch {
    return isoStr;
  }
}

// =====================================================
// ESTRUTURA PADRÃO
// =====================================================

/**
 * Retorna o objeto de progresso com valores padrão.
 * @returns {Object}
 * @private
 */
function _defaultProgress() {
  return {
    results: [],
    streak: {
      count:    0,
      lastDate: null
    }
  };
}