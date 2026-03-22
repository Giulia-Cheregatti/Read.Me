/**
 * i18n.js — Internacionalização (PT-BR ↔ EN)
 * Gerencia todas as strings visíveis da interface.
 * Uso: chamar applyTranslations() após mudar o idioma.
 */

// Estado global do idioma atual
let currentLang = 'pt';

// =====================================================
// OBJETO DE TRADUÇÕES
// Cada chave corresponde a um data-i18n no HTML
// =====================================================
const translations = {

  pt: {
    // Navbar
    'nav.home':     'Início',
    'nav.levels':   'Níveis',
    'nav.progress': 'Progresso',

    // Hero
    'hero.badge':        '✨ Leitura em inglês',
    'hero.title.line1':  'Leia mais.',
    'hero.title.line2':  'Aprenda melhor.',
    'hero.subtitle':     'Textos autênticos em inglês do nível A1 ao C2, com quizzes inteligentes e acompanhamento de progresso.',
    'hero.cta.primary':  'Explorar níveis',
    'hero.cta.secondary':'Ver progresso',

    // Stats bar
    'stats.texts':     'textos',
    'stats.levels':    'níveis CEFR',
    'stats.questions': 'questões',
    'stats.free':      'gratuito',

    // Home — níveis
    'home.levels.title':   'Escolha seu nível',
    'home.levels.subtitle':'Baseado no sistema CEFR (Common European Framework of Reference)',
    'home.levels.viewAll': 'Ver todos os níveis →',

    // Home — como funciona
    'home.how.title':        'Como funciona?',
    'home.how.step1.title':  'Escolha um texto',
    'home.how.step1.desc':   'Selecione seu nível CEFR e escolha entre os textos disponíveis com tempo estimado de leitura.',
    'home.how.step2.title':  'Leia com atenção',
    'home.how.step2.desc':   'Clique em palavras destacadas para ver a tradução instantânea. Leia no seu ritmo.',
    'home.how.step3.title':  'Faça o quiz',
    'home.how.step3.desc':   '8 questões variadas com feedback imediato. Veja sua pontuação e revise as respostas.', 

    // Página de níveis
    'levels.title':    'Níveis de Leitura',
    'levels.subtitle': 'Do iniciante ao avançado — escolha onde está e pratique diariamente.',

    // Detalhe do nível
    'level.texts':    'textos disponíveis',
    'level.texts.singular': 'texto disponível',

    // Cards de texto
    'text.read':      'Ler texto',
    'text.redo':      'Refazer quiz',
    'text.score':     'Nota:',
    'text.notDone':   'Não concluído',
    'text.minRead':   'min de leitura',

    // Modal de leitura
    'reading.vocab':  'Vocabulário:',

    // Modal de quiz
    'quiz.title':     'Quiz',
    'quiz.score':     'Pontos:',
    'quiz.typeMC':    'Múltipla Escolha',
    'quiz.typeTF':    'Verdadeiro / Falso',
    'quiz.typeFill':  'Complete a frase',

    // Modal de resultado
    'result.title':        'Quiz concluído!',
    'result.excellent':    'Excelente! Você domina esse nível! 🏆',
    'result.good':         'Muito bom! Continue praticando! 👏',
    'result.average':      'Bom esforço! Revise e tente de novo. 📖',
    'result.low':          'Continue praticando — você vai melhorar! 💪',
    'result.detail':       'Você acertou {correct} de {total} questões.',
    'result.breakdown':    'Detalhamento:',

    // Progresso
    'progress.title':            'Meu Progresso',
    'progress.subtitle':         'Acompanhe sua evolução na leitura em inglês.',
    'progress.stat.textsRead':   'Textos lidos',
    'progress.stat.quizzesDone': 'Quizzes feitos',
    'progress.stat.avgScore':    'Nota média',
    'progress.stat.streak':      'Dias seguidos',
    'progress.byLevel':          'Progresso por nível',
    'progress.history':          'Histórico recente',
    'progress.reset':            'Resetar progresso',
    'progress.empty':            'Nenhum quiz concluído ainda. Comece lendo um texto! 🚀',
    'progress.level.done':       '{done} de {total} concluídos',

    // Botões genéricos
    'btn.back':      '← Voltar',
    'btn.close':     'Fechar',
    'btn.startQuiz': 'Iniciar Quiz →',
    'btn.next':      'Próxima →',
    'btn.confirm':   'Confirmar',
    'btn.retry':     'Tentar novamente',
    'btn.finish':    'Concluir',

    // Feedback quiz
    'feedback.correct': '✓ Correto!',
    'feedback.wrong':   '✗ Incorreto',

    // Confirmação de reset
    'confirm.reset': 'Tem certeza? Todo o progresso será apagado. Esta ação não pode ser desfeita.',

    // Toasts
    'toast.resetDone':  '✓ Progresso resetado com sucesso.',
    'toast.quizSaved':  '✓ Resultado salvo!',

    // Footer
    'footer.made': 'Em construção por',
    'footer.copy': 'Read.Me — Todos os direitos reservados',

    // Acessibilidade / aria
    'aria.levelCard':  'Nível {level} — {name}. Clique para ver os textos.',
    'aria.textCard':   'Texto: {title}. Clique para ler.',
  },

  en: {
    // Navbar
    'nav.home':     'Home',
    'nav.levels':   'Levels',
    'nav.progress': 'Progress',

    // Hero
    'hero.badge':        '✨ English reading',
    'hero.title.line1':  'Read more.',
    'hero.title.line2':  'Learn better.',
    'hero.subtitle':     'Authentic English texts from A1 to C2, with smart quizzes and progress tracking.',
    'hero.cta.primary':  'Explore levels',
    'hero.cta.secondary':'View progress',

    // Stats bar
    'stats.texts':     'texts',
    'stats.levels':    'CEFR levels',
    'stats.questions': 'questions',
    'stats.free':      'free',

    // Home — levels
    'home.levels.title':   'Choose your level',
    'home.levels.subtitle':'Based on the CEFR (Common European Framework of Reference)',
    'home.levels.viewAll': 'View all levels →',

    // Home — how it works
    'home.how.title':        'How it works',
    'home.how.step1.title':  'Choose a text',
    'home.how.step1.desc':   'Select your CEFR level and pick from available texts with estimated reading time.',
    'home.how.step2.title':  'Read carefully',
    'home.how.step2.desc':   'Click highlighted words to see instant translations. Read at your own pace.',
    'home.how.step3.title':  'Take the quiz',
    'home.how.step3.desc':   '8 varied questions with immediate feedback. See your score and review answers.',

    // Levels page
    'levels.title':    'Reading Levels',
    'levels.subtitle': 'From beginner to advanced — pick where you are and practice daily.',

    // Level detail
    'level.texts':    'texts available',
    'level.texts.singular': 'text available',

    // Text cards
    'text.read':    'Read text',
    'text.redo':    'Redo quiz',
    'text.score':   'Score:',
    'text.notDone': 'Not completed',
    'text.minRead': 'min read',

    // Reading modal
    'reading.vocab': 'Vocabulary:',

    // Quiz modal
    'quiz.title':    'Quiz',
    'quiz.score':    'Points:',
    'quiz.typeMC':   'Multiple Choice',
    'quiz.typeTF':   'True / False',
    'quiz.typeFill': 'Fill in the Blank',

    // Result modal
    'result.title':     'Quiz completed!',
    'result.excellent': 'Excellent! You master this level! 🏆',
    'result.good':      'Great job! Keep practicing! 👏',
    'result.average':   'Good effort! Review and try again. 📖',
    'result.low':       'Keep practicing — you will improve! 💪',
    'result.detail':    'You got {correct} out of {total} questions right.',
    'result.breakdown': 'Breakdown:',

    // Progress
    'progress.title':            'My Progress',
    'progress.subtitle':         'Track your English reading evolution.',
    'progress.stat.textsRead':   'Texts read',
    'progress.stat.quizzesDone': 'Quizzes done',
    'progress.stat.avgScore':    'Average score',
    'progress.stat.streak':      'Day streak',
    'progress.byLevel':          'Progress by level',
    'progress.history':          'Recent history',
    'progress.reset':            'Reset progress',
    'progress.empty':            'No quizzes completed yet. Start reading a text! 🚀',
    'progress.level.done':       '{done} of {total} completed',

    // Generic buttons
    'btn.back':      '← Back',
    'btn.close':     'Close',
    'btn.startQuiz': 'Start Quiz →',
    'btn.next':      'Next →',
    'btn.confirm':   'Confirm',
    'btn.retry':     'Try again',
    'btn.finish':    'Finish',

    // Quiz feedback
    'feedback.correct': '✓ Correct!',
    'feedback.wrong':   '✗ Incorrect',

    // Reset confirmation
    'confirm.reset': 'Are you sure? All progress will be erased. This action cannot be undone.',

    // Toasts
    'toast.resetDone': '✓ Progress reset successfully.',
    'toast.quizSaved': '✓ Result saved!',

    // Footer
    'footer.made': 'Building by',
    'footer.copy': 'Read.Me — All rights reserved',

    // Accessibility / aria
    'aria.levelCard': 'Level {level} — {name}. Click to see texts.',
    'aria.textCard':  'Text: {title}. Click to read.',
  }
};

// FUNÇÕES PÚBLICAS

/**
 * Retorna a string traduzida para a chave fornecida.
 * Suporta interpolação simples: t('result.detail', { correct: 6, total: 8 })
 * @param {string} key
 * @param {Object} [vars] - variáveis para interpolação ({chave: valor})
 * @returns {string}
 */
function t(key, vars = {}) {
  const lang = translations[currentLang] || translations['pt'];
  let str = lang[key] || translations['pt'][key] || key;

  // Interpolação: substitui {variavel} pelo valor correspondente
  Object.entries(vars).forEach(([k, v]) => {
    str = str.replaceAll(`{${k}}`, v);
  });

  return str;
}

/**
 * Aplica as traduções a todos os elementos com [data-i18n] no DOM.
 * Deve ser chamado após qualquer mudança de idioma.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    // Preserva elementos filhos (ex: ícones SVG dentro do botão)
    if (el.children.length === 0) {
      el.textContent = translated;
    } else {
      // Atualiza apenas nós de texto diretos (não sobrescreve filhos)
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
          node.textContent = translated;
        }
      });
    }
  });

  // Atualiza o atributo lang do <html>
  document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

/**
 * Alterna o idioma entre PT e EN e re-aplica as traduções.
 * Também atualiza o botão de idioma na navbar.
 */
function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';

  // Salva preferência no localStorage
  localStorage.setItem('readme_lang', currentLang);

  // Atualiza UI do botão
  _updateLangButton();

  // Re-aplica todas as traduções estáticas
  applyTranslations();

  // Dispara evento global para que componentes JS re-renderizem
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: currentLang } }));
}

/**
 * Inicializa o idioma a partir do localStorage ou padrão (pt).
 */
function initLanguage() {
  const saved = localStorage.getItem('readme_lang');
  currentLang = saved && translations[saved] ? saved : 'pt';
  _updateLangButton();
  applyTranslations();
}

/**
 * Retorna o idioma atual.
 * @returns {'pt'|'en'}
 */
function getLang() {
  return currentLang;
}

/**
 * Atualiza visualmente o botão de idioma.
 * @private
 */
function _updateLangButton() {
  const flag  = document.getElementById('lang-label');
  const emoji = document.querySelector('.btn-lang__flag');
  if (!flag) return;

  if (currentLang === 'pt') {
    flag.textContent  = 'PT';
    if (emoji) emoji.textContent = '🇧🇷';
  } else {
    flag.textContent  = 'EN';
    if (emoji) emoji.textContent = '🇺🇸';
  }
}