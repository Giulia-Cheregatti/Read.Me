/**
 * QuizModal.js — Modal de quiz interativo
 *
 * Responsável por:
 * - Exibir as 8 questões uma a uma com tipos variados
 * - Dar feedback imediato por questão
 * - Calcular pontuação final e salvar no storage
 * - Exibir o modal de resultado ao finalizar
 */

// =====================================================
// ESTADO DO QUIZ
// =====================================================

const _quizState = {
  text:            null,   // texto atual
  questions:       [],     // array de questões embaralhadas
  currentIndex:    0,      // índice da questão atual
  score:           0,      // acertos
  answers:         [],     // true/false por questão
  answered:        false   // se a questão atual já foi respondida
};

// =====================================================
// ABERTURA / FECHAMENTO
// =====================================================

/**
 * Abre o modal de quiz para um texto específico.
 * @param {string} textId
 */
function openQuizModal(textId) {
  const text = TEXTS.find(tx => tx.id === textId);
  if (!text || !text.quiz || text.quiz.length === 0) {
    console.warn(`[QuizModal] Quiz não encontrado para: ${textId}`);
    return;
  }

  // Inicializa o estado
  _quizState.text         = text;
  _quizState.questions    = _shuffleArray([...text.quiz]);
  _quizState.currentIndex = 0;
  _quizState.score        = 0;
  _quizState.answers      = [];
  _quizState.answered     = false;

  // Atualiza título do modal
  document.getElementById('quiz-modal-title').textContent = text.titleEn;

  _renderQuestion();
  _showModal('quiz-modal-overlay');
  _trapFocus('quiz-modal-overlay');
}

/**
 * Fecha o modal de quiz sem salvar.
 */
function closeQuizModal() {
  _hideModal('quiz-modal-overlay');
}

// =====================================================
// RENDERIZAÇÃO
// =====================================================

/**
 * Renderiza a questão atual no modal.
 * @private
 */
function _renderQuestion() {
  const q     = _quizState.questions[_quizState.currentIndex];
  const idx   = _quizState.currentIndex;
  const total = _quizState.questions.length;

  // Atualiza progresso
  _updateQuizProgress(idx + 1, total);

  // Badge do tipo
  const typeBadge = document.getElementById('question-type-badge');
  typeBadge.textContent = _getTypeLabel(q.type);

  // Enunciado
  document.getElementById('question-text').textContent = q.question;

  // Esconde o feedback anterior
  const feedback = document.getElementById('question-feedback');
  feedback.setAttribute('hidden', '');
  feedback.className = 'question-feedback';

  // Esconde o botão "Próxima"
  document.getElementById('btn-next-question').setAttribute('hidden', '');

  // Reset do estado de resposta
  _quizState.answered = false;

  // Renderiza as opções de acordo com o tipo
  const optionsEl  = document.getElementById('question-options');
  const fillEl     = document.getElementById('question-fill');
  const fillInput  = document.getElementById('fill-input');

  if (q.type === 'fill') {
    optionsEl.innerHTML = '';
    optionsEl.removeAttribute('hidden');
    optionsEl.style.display = 'none';

    fillEl.removeAttribute('hidden');
    fillEl.style.display = '';
    fillInput.value = '';
    fillInput.disabled = false;
    fillInput.className = 'fill-input';

    // Foco automático no input
    setTimeout(() => fillInput.focus(), 100);
  } else {
    fillEl.setAttribute('hidden', '');
    fillEl.style.display = 'none';

    optionsEl.style.display = '';
    optionsEl.removeAttribute('hidden');
    _renderOptions(q);
  }

  // Atualiza placar
  document.getElementById('quiz-current-score').textContent = _quizState.score;
}

/**
 * Renderiza as opções de múltipla escolha / verdadeiro ou falso.
 * @param {Object} question
 * @private
 */
function _renderOptions(question) {
  const container = document.getElementById('question-options');
  container.innerHTML = '';

  // Embaralha as opções (exceto V/F para manter ordem natural)
  const options = question.type === 'tf'
    ? [...question.options]
    : _shuffleArray([...question.options]);

  options.forEach(option => {
    const btn = document.createElement('button');
    btn.type      = 'button';
    btn.className = 'option-btn';
    btn.textContent = option;

    btn.addEventListener('click', () => {
      if (_quizState.answered) return;
      _handleAnswer(option, question);
    });

    container.appendChild(btn);
  });
}

// =====================================================
// LÓGICA DE RESPOSTA
// =====================================================

/**
 * Processa a resposta selecionada (múltipla escolha / V/F).
 * @param {string} selected  - opção escolhida
 * @param {Object} question  - questão atual
 * @private
 */
function _handleAnswer(selected, question) {
  if (_quizState.answered) return;
  _quizState.answered = true;

  const isCorrect = _checkAnswer(selected, question.answer);
  _registerAnswer(isCorrect);
  _highlightOptions(question.answer, selected);
  _showFeedback(isCorrect, question);
}

/**
 * Processa a resposta de fill-in-the-blank.
 * @private
 */
function _handleFillAnswer() {
  if (_quizState.answered) return;

  const input    = document.getElementById('fill-input');
  const selected = input.value.trim();
  if (!selected) return;

  _quizState.answered = true;

  const q         = _quizState.questions[_quizState.currentIndex];
  const isCorrect = _checkAnswer(selected, q.answer);

  input.disabled  = true;
  input.className = `fill-input ${isCorrect ? 'fill-input--correct' : 'fill-input--wrong'}`;

  // Mostra a resposta correta no placeholder se errou
  if (!isCorrect) {
    input.placeholder = `✓ ${q.answer}`;
  }

  _registerAnswer(isCorrect);
  _showFeedback(isCorrect, q);
}

/**
 * Verifica se a resposta está correta (case-insensitive, trim).
 * @param {string} selected
 * @param {string} correct
 * @returns {boolean}
 * @private
 */
function _checkAnswer(selected, correct) {
  return selected.trim().toLowerCase() === correct.trim().toLowerCase();
}

/**
 * Registra o acerto/erro no estado do quiz.
 * @param {boolean} isCorrect
 * @private
 */
function _registerAnswer(isCorrect) {
  if (isCorrect) _quizState.score++;
  _quizState.answers.push(isCorrect);
  document.getElementById('quiz-current-score').textContent = _quizState.score;
}

/**
 * Aplica estilos visuais correto/errado às opções de botão.
 * @param {string} correct  - resposta correta
 * @param {string} selected - resposta escolhida
 * @private
 */
function _highlightOptions(correct, selected) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    const text = btn.textContent.trim().toLowerCase();

    if (text === correct.trim().toLowerCase()) {
      btn.classList.add('option-btn--correct');
    } else if (text === selected.trim().toLowerCase()) {
      btn.classList.add('option-btn--wrong');
    }
  });
}

/**
 * Exibe o feedback imediato após resposta.
 * @param {boolean} isCorrect
 * @param {Object}  question
 * @private
 */
function _showFeedback(isCorrect, question) {
  const feedbackEl    = document.getElementById('question-feedback');
  const iconEl        = document.getElementById('feedback-icon');
  const resultEl      = document.getElementById('feedback-result');
  const explanationEl = document.getElementById('feedback-explanation');

  feedbackEl.removeAttribute('hidden');
  feedbackEl.className = `question-feedback ${
    isCorrect ? 'question-feedback--correct' : 'question-feedback--wrong'
  }`;

  iconEl.textContent      = isCorrect ? '✓' : '✗';
  resultEl.textContent    = isCorrect ? t('feedback.correct') : t('feedback.wrong');
  resultEl.className      = `feedback-result ${
    isCorrect ? 'feedback-result--correct' : 'feedback-result--wrong'
  }`;
  explanationEl.textContent = question.explanation || '';

  // Exibe botão de avançar
  const nextBtn = document.getElementById('btn-next-question');
  nextBtn.removeAttribute('hidden');

  const isLast = _quizState.currentIndex >= _quizState.questions.length - 1;
  nextBtn.textContent = isLast ? t('btn.finish') : t('btn.next');

  // Foco no botão de avançar para acessibilidade
  setTimeout(() => nextBtn.focus(), 100);
}

// =====================================================
// PROGRESSO DO QUIZ
// =====================================================

/**
 * Atualiza a barra de progresso e o contador de questões.
 * @param {number} current
 * @param {number} total
 * @private
 */
function _updateQuizProgress(current, total) {
  const percent = Math.round((current / total) * 100);

  document.getElementById('quiz-progress-label').textContent = `${current} / ${total}`;

  const fill = document.getElementById('quiz-progress-fill');
  fill.style.width = `${percent}%`;

  const bar = fill.parentElement;
  bar.setAttribute('aria-valuenow', current);
  bar.setAttribute('aria-valuemax', total);
}

// =====================================================
// AVANÇAR / FINALIZAR
// =====================================================

/**
 * Avança para a próxima questão ou finaliza o quiz.
 * @private
 */
function _nextQuestion() {
  const total = _quizState.questions.length;
  _quizState.currentIndex++;

  if (_quizState.currentIndex >= total) {
    _finishQuiz();
  } else {
    _renderQuestion();
  }
}

/**
 * Finaliza o quiz, salva o resultado e abre o modal de resultado.
 * @private
 */
function _finishQuiz() {
  const { text, score, answers, questions } = _quizState;
  const total = questions.length;

  // Salva no localStorage
  saveQuizResult(text.id, score, total, answers);

  closeQuizModal();

  // Abre o modal de resultado com os dados finais
  openResultModal({
    textTitle: text.titleEn,
    score,
    total,
    percent:    Math.round((score / total) * 100),
    answers,
    questions
  });

  // Exibe toast de confirmação
  showToast(t('toast.quizSaved'), 'success');
}

// =====================================================
// UTILITÁRIOS
// =====================================================

/**
 * Retorna o label traduzido do tipo de questão.
 * @param {'mc'|'tf'|'fill'} type
 * @returns {string}
 * @private
 */
function _getTypeLabel(type) {
  const map = {
    mc:   t('quiz.typeMC'),
    tf:   t('quiz.typeTF'),
    fill: t('quiz.typeFill')
  };
  return map[type] || type;
}

/**
 * Embaralha um array (Fisher-Yates).
 * @param {Array} arr
 * @returns {Array}
 * @private
 */
function _shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =====================================================
// INICIALIZAÇÃO DOS EVENT LISTENERS
// =====================================================

/**
 * Registra todos os listeners do modal de quiz.
 * Deve ser chamado uma única vez na inicialização.
 */
function initQuizModal() {
  // Fechar pelo X
  document.getElementById('quiz-modal-close')
    ?.addEventListener('click', closeQuizModal);

  // Fechar ao clicar fora
  document.getElementById('quiz-modal-overlay')
    ?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeQuizModal();
    });

  // Escape fecha o quiz
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const overlay = document.getElementById('quiz-modal-overlay');
      if (overlay && !overlay.hasAttribute('hidden')) closeQuizModal();
    }
  });

  // Botão "Próxima" / "Concluir"
  document.getElementById('btn-next-question')
    ?.addEventListener('click', _nextQuestion);

  // Botão confirmar fill-in
  document.getElementById('btn-submit-fill')
    ?.addEventListener('click', _handleFillAnswer);

  // Enter no input de fill-in
  document.getElementById('fill-input')
    ?.addEventListener('keydown', e => {
      if (e.key === 'Enter') _handleFillAnswer();
    });
}