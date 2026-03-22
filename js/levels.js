/**
 * levels.js — Definição dos 6 níveis CEFR
 *
 * Cada nível possui:
 * - id:       identificador único (usado no roteamento)
 * - code:     código CEFR exibido na UI
 * - name:     nome em inglês
 * - namePt:   nome em português
 * - desc:     descrição em inglês
 * - descPt:   descrição em português
 * - color:    cor principal (CSS hex)
 * - colorLight: variante clara para fundos
 */

const LEVELS = [
  {
    id:         'a1',
    code:       'A1',
    name:       'Beginner',
    namePt:     'Iniciante',
    desc:       'Simple sentences about everyday topics like family, shopping and local geography.',
    descPt:     'Frases simples sobre temas do cotidiano como família, compras e lugares próximos.',
    color:      '#22c55e',
    colorLight: '#dcfce7',
    emoji:      '🌱'
  },
  {
    id:         'a2',
    code:       'A2',
    name:       'Elementary',
    namePt:     'Básico',
    desc:       'Short paragraphs about routines, past events and personal interests.',
    descPt:     'Parágrafos curtos sobre rotinas, eventos passados e interesses pessoais.',
    color:      '#84cc16',
    colorLight: '#ecfccb',
    emoji:      '🌿'
  },
  {
    id:         'b1',
    code:       'B1',
    name:       'Intermediate',
    namePt:     'Intermediário',
    desc:       'Clear texts on familiar topics such as travel, work and current events.',
    descPt:     'Textos claros sobre temas familiares como viagens, trabalho e acontecimentos.',
    color:      '#f59e0b',
    colorLight: '#fef3c7',
    emoji:      '📘'
  },
  {
    id:         'b2',
    code:       'B2',
    name:       'Upper-Intermediate',
    namePt:     'Intermediário Avançado',
    desc:       'Nuanced texts on complex topics, abstract ideas and opinion pieces.',
    descPt:     'Textos com nuances sobre tópicos complexos, ideias abstratas e opinião.',
    color:      '#f97316',
    colorLight: '#ffedd5',
    emoji:      '🔥'
  },
  {
    id:         'c1',
    code:       'C1',
    name:       'Advanced',
    namePt:     'Avançado',
    desc:       'Sophisticated articles, academic prose and implicit meaning comprehension.',
    descPt:     'Artigos sofisticados, prosa acadêmica e compreensão de significados implícitos.',
    color:      '#8b5cf6',
    colorLight: '#ede9fe',
    emoji:      '🎯'
  },
  {
    id:         'c2',
    code:       'C2',
    name:       'Mastery',
    namePt:     'Maestria',
    desc:       'Near-native fluency with complex literary, technical and critical texts.',
    descPt:     'Fluência quase nativa com textos literários, técnicos e críticos complexos.',
    color:      '#ec4899',
    colorLight: '#fce7f3',
    emoji:      '🏆'
  }
];