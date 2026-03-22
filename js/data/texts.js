/**
 * texts.js — 12 textos pedagógicos com quizzes (2 por nível CEFR)
 *
 * Estrutura de cada texto:
 * {
 *   id:          string único
 *   levelId:     'a1'|'a2'|'b1'|'b2'|'c1'|'c2'
 *   titleEn:     string (título em inglês)
 *   titlePt:     string (título em português)
 *   readTimeMin: number (minutos estimados)
 *   body:        string (texto em inglês — parágrafos separados por \n)
 *   vocabulary:  Array<{ word, translation }> — 5 a 10 palavras-chave
 *   quiz:        Array<Question> — exatamente 8 questões
 * }
 *
 * Estrutura de Question:
 * {
 *   type:        'mc' | 'tf' | 'fill'
 *   question:    string
 *   options:     string[] (para mc e tf)
 *   answer:      string (deve ser idêntica a uma das options, ou texto exato para fill)
 *   explanation: string (explicação pedagógica da resposta)
 * }
 */

const TEXTS = [

  // ==================================================
  // NÍVEL A1 — INICIANTE
  // ==================================================

  {
    id:          'a1-my-daily-routine',
    levelId:     'a1',
    titleEn:     'My Daily Routine',
    titlePt:     'Minha Rotina Diária',
    readTimeMin: 3,
    body: `My name is Lucas. I am twelve years old. I live in a small house with my family. Every day I wake up at seven o'clock in the morning.

After I wake up, I go to the bathroom. I wash my face and brush my teeth. Then I eat breakfast. I usually have bread, butter, and a glass of milk. Breakfast is my favourite meal of the day.

At eight o'clock, I go to school. I walk to school because it is not far from my house. At school, I study many subjects. I like Maths and English. I do not like History very much.

School finishes at midday. I eat lunch at home with my mother. We usually have rice, beans, and chicken. After lunch, I rest for thirty minutes.

In the afternoon, I do my homework. It takes about one hour. Then I watch television or play video games with my brother. We play together every day.

At six o'clock in the evening, my father comes home from work. We eat dinner together as a family. We talk about our day. I like this time very much.

At nine o'clock, I take a shower and go to bed. I read a book for a few minutes before I sleep. I sleep for nine hours every night. I feel happy with my routine.`,

    vocabulary: [
      { word: 'routine',   translation: 'rotina' },
      { word: 'breakfast', translation: 'café da manhã' },
      { word: 'favourite', translation: 'favorito(a)' },
      { word: 'subjects',  translation: 'matérias / disciplinas' },
      { word: 'homework',  translation: 'tarefa de casa / lição de casa' },
      { word: 'dinner',    translation: 'jantar' },
      { word: 'shower',    translation: 'chuveiro / banho' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'What time does Lucas wake up every day?',
        options:     ['At six o\'clock', 'At seven o\'clock', 'At eight o\'clock', 'At nine o\'clock'],
        answer:      'At seven o\'clock',
        explanation: 'The text says "Every day I wake up at seven o\'clock in the morning."'
      },
      {
        type:        'tf',
        question:    'Lucas takes the bus to school every day.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'He walks to school because it is not far from his house.'
      },
      {
        type:        'mc',
        question:    'Which subjects does Lucas like at school?',
        options:     ['History and English', 'Maths and English', 'Science and Maths', 'English and Art'],
        answer:      'Maths and English',
        explanation: 'The text states: "I like Maths and English."'
      },
      {
        type:        'fill',
        question:    'Lucas eats breakfast with bread, butter, and a glass of ___.',
        options:     [],
        answer:      'milk',
        explanation: '"I usually have bread, butter, and a glass of milk."'
      },
      {
        type:        'tf',
        question:    'Lucas does his homework for about two hours every afternoon.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text says homework "takes about one hour", not two hours.'
      },
      {
        type:        'mc',
        question:    'What does Lucas do after lunch?',
        options:     ['He plays video games', 'He does homework', 'He rests for thirty minutes', 'He reads a book'],
        answer:      'He rests for thirty minutes',
        explanation: '"After lunch, I rest for thirty minutes."'
      },
      {
        type:        'mc',
        question:    'When does Lucas\'s father come home?',
        options:     ['At five o\'clock', 'At six o\'clock', 'At seven o\'clock', 'At eight o\'clock'],
        answer:      'At six o\'clock',
        explanation: '"At six o\'clock in the evening, my father comes home from work."'
      },
      {
        type:        'fill',
        question:    'Lucas reads a ___ for a few minutes before he sleeps.',
        options:     [],
        answer:      'book',
        explanation: '"I read a book for a few minutes before I sleep."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'a1-animals-on-the-farm',
    levelId:     'a1',
    titleEn:     'Animals on the Farm',
    titlePt:     'Animais na Fazenda',
    readTimeMin: 3,
    body: `Hello! My name is Mia. I am eight years old. I live on a farm with my grandparents. There are many animals on our farm. I love all of them.

We have a big brown horse. His name is Thunder. Thunder is very strong. My grandfather rides Thunder every morning. I want to ride Thunder one day too.

We also have three cows. Their names are Daisy, Rosie, and Bella. The cows eat green grass all day. Every morning, my grandmother gets milk from the cows. We drink fresh milk every day. It is very good.

On our farm, we have many chickens too. The chickens are white and brown. They walk around the farm and look for food. They eat small seeds and insects. Every day, we collect eggs from the chickens. We use the eggs to make breakfast.

We have two dogs. Their names are Rex and Bruno. Rex is big and black. Bruno is small and brown. The dogs protect the farm. They bark when strangers come near. They are very good dogs.

My favourite animal on the farm is our cat. Her name is Luna. Luna is white with grey spots. She sleeps a lot. She sleeps on my bed at night. I love Luna very much.

Life on a farm is busy but it is also very happy. Every day I learn something new about animals. I am glad I live here.`,

    vocabulary: [
      { word: 'farm',        translation: 'fazenda' },
      { word: 'horse',       translation: 'cavalo' },
      { word: 'grass',       translation: 'grama / capim' },
      { word: 'chickens',    translation: 'galinhas' },
      { word: 'eggs',        translation: 'ovos' },
      { word: 'protect',     translation: 'proteger' },
      { word: 'bark',        translation: 'latir' },
      { word: 'spots',       translation: 'manchas' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'What is the name of the horse on the farm?',
        options:     ['Bruno', 'Thunder', 'Rex', 'Luna'],
        answer:      'Thunder',
        explanation: '"We have a big brown horse. His name is Thunder."'
      },
      {
        type:        'tf',
        question:    'The farm has exactly five cows.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'There are three cows: Daisy, Rosie, and Bella.'
      },
      {
        type:        'fill',
        question:    'Every day, Mia and her family collect ___ from the chickens.',
        options:     [],
        answer:      'eggs',
        explanation: '"Every day, we collect eggs from the chickens."'
      },
      {
        type:        'mc',
        question:    'What do the dogs do for the farm?',
        options:     ['They collect eggs', 'They give milk', 'They protect the farm', 'They ride with grandfather'],
        answer:      'They protect the farm',
        explanation: '"The dogs protect the farm. They bark when strangers come near."'
      },
      {
        type:        'tf',
        question:    'Luna the cat is black with white spots.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'Luna is white with grey spots, not black.'
      },
      {
        type:        'mc',
        question:    'What do the chickens eat?',
        options:     ['Bread and milk', 'Small seeds and insects', 'Green grass', 'Fish and eggs'],
        answer:      'Small seeds and insects',
        explanation: '"They eat small seeds and insects."'
      },
      {
        type:        'mc',
        question:    'What is Mia\'s favourite animal?',
        options:     ['The horse', 'The cows', 'The dogs', 'The cat'],
        answer:      'The cat',
        explanation: '"My favourite animal on the farm is our cat."'
      },
      {
        type:        'fill',
        question:    'Mia\'s grandfather rides Thunder every ___.',
        options:     [],
        answer:      'morning',
        explanation: '"My grandfather rides Thunder every morning."'
      }
    ]
  },

  // ==================================================
  // NÍVEL A2 — BÁSICO
  // ==================================================

  {
    id:          'a2-a-trip-to-the-market',
    levelId:     'a2',
    titleEn:     'A Trip to the Market',
    titlePt:     'Uma Visita ao Mercado',
    readTimeMin: 4,
    body: `Last Saturday morning, my mother asked me to go to the market with her. I was happy because I love going there. The market near our house is open every weekend and it sells fresh fruit, vegetables, and many other things.

We left home at nine o'clock. The weather was sunny and warm. My mother carried a large shopping bag made of cloth. She never uses plastic bags because she wants to protect the environment.

When we arrived, the market was already busy. There were many people walking around and talking to the sellers. The colours were beautiful — red tomatoes, yellow bananas, orange carrots, and green lettuce.

First, we went to the fruit stall. My mother bought two kilos of apples, one kilo of grapes, and some mangoes. I asked for a small watermelon, and she said yes. I was very pleased.

Next, we visited the vegetable section. My mother needed potatoes, onions, and spinach for the week's meals. She always checks the vegetables carefully before she buys them. She smells the spinach and presses the potatoes gently.

After that, we stopped at a bakery stall. The bread smelled wonderful. My mother bought a large loaf of whole-grain bread and some cheese rolls. I ate one cheese roll right there and it was delicious.

We finished shopping in about one hour. On the way home, I carried one of the bags. It was quite heavy! But I felt proud because I helped my mother. We talked and laughed all the way home.

That evening, my mother cooked a delicious soup with the vegetables she bought. Our whole family ate together. It was a perfect Saturday.`,

    vocabulary: [
      { word: 'market',      translation: 'mercado / feira' },
      { word: 'environment', translation: 'meio ambiente' },
      { word: 'sellers',     translation: 'vendedores' },
      { word: 'stall',       translation: 'banca / barraca' },
      { word: 'spinach',     translation: 'espinafre' },
      { word: 'loaf',        translation: 'pão / filão de pão' },
      { word: 'delicious',   translation: 'delicioso(a)' },
      { word: 'proud',       translation: 'orgulhoso(a)' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'Why does the mother use a cloth bag instead of a plastic bag?',
        options:     ['Because it is cheaper', 'Because she wants to protect the environment', 'Because it is bigger', 'Because she forgot the plastic bag'],
        answer:      'Because she wants to protect the environment',
        explanation: '"She never uses plastic bags because she wants to protect the environment."'
      },
      {
        type:        'tf',
        question:    'The narrator asked for a pineapple at the fruit stall.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The narrator asked for a small watermelon, not a pineapple.'
      },
      {
        type:        'fill',
        question:    'The mother bought a large loaf of whole-grain bread and some cheese ___.',
        options:     [],
        answer:      'rolls',
        explanation: '"My mother bought a large loaf of whole-grain bread and some cheese rolls."'
      },
      {
        type:        'mc',
        question:    'How long did the shopping take?',
        options:     ['About thirty minutes', 'About two hours', 'About one hour', 'About three hours'],
        answer:      'About one hour',
        explanation: '"We finished shopping in about one hour."'
      },
      {
        type:        'tf',
        question:    'The mother carefully checks the vegetables before buying them.',
        options:     ['True', 'False'],
        answer:      'True',
        explanation: '"She always checks the vegetables carefully before she buys them."'
      },
      {
        type:        'mc',
        question:    'What did the family eat for dinner that evening?',
        options:     ['Roasted chicken', 'A delicious soup', 'Rice and beans', 'Grilled fish'],
        answer:      'A delicious soup',
        explanation: '"My mother cooked a delicious soup with the vegetables she bought."'
      },
      {
        type:        'mc',
        question:    'How did the narrator feel after carrying the bag home?',
        options:     ['Tired and angry', 'Proud because he helped', 'Sad because it was heavy', 'Happy because it was light'],
        answer:      'Proud because he helped',
        explanation: '"I felt proud because I helped my mother."'
      },
      {
        type:        'fill',
        question:    'The market near their house is open every ___.',
        options:     [],
        answer:      'weekend',
        explanation: '"The market near our house is open every weekend."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'a2-learning-to-cook',
    levelId:     'a2',
    titleEn:     'Learning to Cook',
    titlePt:     'Aprendendo a Cozinhar',
    readTimeMin: 4,
    body: `When I was ten years old, my grandmother decided to teach me how to cook. She said that cooking is an important skill for life. At first, I was a little nervous. I was afraid of burning things or making mistakes.

My grandmother started with something simple — scrambled eggs. She showed me how to crack the eggs without breaking the shell into the bowl. That was harder than I expected! On my first try, some shell fell into the bowl. My grandmother laughed kindly and showed me the right technique again.

Then she taught me how to add a little butter to the pan and wait until it melted. She always said, "Low heat is the secret to good scrambled eggs." I had to be patient and not rush.

When the eggs were in the pan, I had to stir them slowly and gently. My grandmother watched me carefully and gave me advice. After a few minutes, the eggs were soft, yellow, and ready. I added a little salt and pepper.

I put the scrambled eggs on two plates — one for my grandmother and one for me. She tasted them and smiled. "These are perfect," she said. I felt so happy and proud. It was the best meal I had ever made.

After that day, I practised cooking every weekend. I learned to make pasta, soup, and even a simple cake. Cooking became one of my favourite hobbies.

Now I am seventeen years old and I cook dinner for my family at least twice a week. My grandmother is very proud of me. She says food made with love always tastes better. I think she is right.`,

    vocabulary: [
      { word: 'skill',       translation: 'habilidade' },
      { word: 'nervous',     translation: 'nervoso(a)' },
      { word: 'crack',       translation: 'quebrar (ovo)' },
      { word: 'technique',   translation: 'técnica' },
      { word: 'patience',    translation: 'paciência' },
      { word: 'stir',        translation: 'mexer / remexer' },
      { word: 'practised',   translation: 'praticou / praticava' },
      { word: 'hobbies',     translation: 'passatempos / hobbies' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'How old was the narrator when the grandmother began teaching cooking?',
        options:     ['Eight years old', 'Ten years old', 'Twelve years old', 'Fifteen years old'],
        answer:      'Ten years old',
        explanation: '"When I was ten years old, my grandmother decided to teach me how to cook."'
      },
      {
        type:        'tf',
        question:    'The first dish the grandmother taught was fried rice.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The first dish was scrambled eggs, not fried rice.'
      },
      {
        type:        'mc',
        question:    'According to the grandmother, what is the secret to good scrambled eggs?',
        options:     ['Adding a lot of butter', 'High heat and fast stirring', 'Low heat and patience', 'Adding milk and cheese'],
        answer:      'Low heat and patience',
        explanation: '"Low heat is the secret to good scrambled eggs." And the narrator had to be patient and not rush.'
      },
      {
        type:        'fill',
        question:    'The narrator added a little ___ and pepper to the scrambled eggs.',
        options:     [],
        answer:      'salt',
        explanation: '"I added a little salt and pepper."'
      },
      {
        type:        'tf',
        question:    'The grandmother said the scrambled eggs were perfect.',
        options:     ['True', 'False'],
        answer:      'True',
        explanation: '"These are perfect," she said.'
      },
      {
        type:        'mc',
        question:    'What did the narrator learn to cook after scrambled eggs?',
        options:     ['Soup and steak', 'Pasta, soup and a simple cake', 'Bread and salad', 'Rice and fish'],
        answer:      'Pasta, soup and a simple cake',
        explanation: '"I learned to make pasta, soup, and even a simple cake."'
      },
      {
        type:        'mc',
        question:    'How often does the narrator cook for the family now?',
        options:     ['Every day', 'Once a week', 'At least twice a week', 'Only on weekends'],
        answer:      'At least twice a week',
        explanation: '"I cook dinner for my family at least twice a week."'
      },
      {
        type:        'fill',
        question:    'The grandmother says food made with ___ always tastes better.',
        options:     [],
        answer:      'love',
        explanation: '"She says food made with love always tastes better."'
      }
    ]
  },

  // ==================================================
  // NÍVEL B1 — INTERMEDIÁRIO
  // ==================================================

  {
    id:          'b1-social-media-and-teenagers',
    levelId:     'b1',
    titleEn:     'Social Media and Teenagers',
    titlePt:     'Redes Sociais e Adolescentes',
    readTimeMin: 5,
    body: `Social media has become a central part of teenage life. Platforms like Instagram, TikTok, and YouTube attract billions of young users every day. For many teenagers, checking their phone for notifications is the first thing they do in the morning and the last thing they do at night.

There are clear benefits to using social media. Young people can stay connected with friends and family, even those who live far away. They can also discover new interests, follow educational content, and find communities where they feel they belong. Many teenagers have learned languages, developed artistic skills, and even started small businesses through online platforms.

However, the negative effects are equally significant. Research shows that heavy social media use is linked to increased anxiety, depression, and low self-esteem — especially among girls. The constant comparison with others' carefully curated online lives can make teenagers feel that their own lives are not exciting or beautiful enough.

Another concern is the impact on sleep. Notifications, blue light from screens, and the addictive nature of infinite scroll features keep many teenagers awake until late at night. Sleep deprivation affects concentration, mood, and academic performance.

Cyberbullying is also a growing problem. Online harassment can spread quickly and reach victims everywhere, making it difficult to escape. Unlike traditional bullying, cyberbullying can happen at any hour, leaving young people with no safe space.

Schools and parents are now working together to promote healthier habits. Many experts recommend limiting screen time to two hours per day outside school activities. They also suggest taking regular breaks, turning off notifications at night, and following accounts that inspire rather than create feelings of inadequacy.

Technology itself is not the problem. The way we use it is what matters. Teaching teenagers to be conscious and critical digital citizens may be the most important lesson of our time.`,

    vocabulary: [
      { word: 'notifications',  translation: 'notificações' },
      { word: 'curated',        translation: 'selecionado / editado com cuidado' },
      { word: 'self-esteem',    translation: 'autoestima' },
      { word: 'deprivation',    translation: 'privação' },
      { word: 'cyberbullying',  translation: 'cyberbullying / intimidação online' },
      { word: 'harassment',     translation: 'assédio / perseguição' },
      { word: 'inadequacy',     translation: 'inadequação / insuficiência' },
      { word: 'conscious',      translation: 'consciente' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'According to the text, which group is most affected by low self-esteem caused by social media?',
        options:     ['Younger children', 'Boys in particular', 'Girls in particular', 'University students'],
        answer:      'Girls in particular',
        explanation: '"...increased anxiety, depression, and low self-esteem — especially among girls."'
      },
      {
        type:        'tf',
        question:    'The text says social media has no positive benefits for teenagers.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text clearly lists benefits such as staying connected, discovering interests, and starting businesses.'
      },
      {
        type:        'mc',
        question:    'Which feature of apps does the text blame for keeping teenagers awake?',
        options:     ['The comment section', 'Infinite scroll', 'Profile pictures', 'Group chats'],
        answer:      'Infinite scroll',
        explanation: '"...the addictive nature of infinite scroll features keep many teenagers awake until late at night."'
      },
      {
        type:        'fill',
        question:    'Unlike traditional bullying, cyberbullying can happen at any ___, leaving young people with no safe space.',
        options:     [],
        answer:      'hour',
        explanation: '"Unlike traditional bullying, cyberbullying can happen at any hour."'
      },
      {
        type:        'tf',
        question:    'Experts recommend limiting screen time to four hours per day outside school.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text recommends two hours per day, not four.'
      },
      {
        type:        'mc',
        question:    'What does the author consider "the most important lesson of our time"?',
        options:     ['Banning smartphones at school', 'Teaching teenagers to be conscious digital citizens', 'Replacing social media with books', 'Limiting internet access for minors'],
        answer:      'Teaching teenagers to be conscious digital citizens',
        explanation: '"Teaching teenagers to be conscious and critical digital citizens may be the most important lesson of our time."'
      },
      {
        type:        'mc',
        question:    'What is one suggestion experts make to improve sleep habits?',
        options:     ['Delete all social media apps', 'Turn off notifications at night', 'Use phones only on weekends', 'Stop using technology completely'],
        answer:      'Turn off notifications at night',
        explanation: '"They also suggest...turning off notifications at night."'
      },
      {
        type:        'tf',
        question:    'The author concludes that technology itself is the main problem.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"Technology itself is not the problem. The way we use it is what matters."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'b1-the-power-of-habits',
    levelId:     'b1',
    titleEn:     'The Power of Habits',
    titlePt:     'O Poder dos Hábitos',
    readTimeMin: 5,
    body: `Scientists who study human behaviour have discovered something fascinating: up to 40 percent of our daily actions are not conscious decisions, but habits. Habits are automatic routines that our brains develop to save energy. Once a behaviour becomes a habit, we perform it almost without thinking.

A habit is formed through a three-step loop: the cue, the routine, and the reward. The cue is a trigger that tells your brain to start a behaviour. The routine is the action itself. The reward is what your brain receives at the end, which tells it whether this loop is worth remembering in the future.

For example, consider the habit of checking your phone. The cue might be boredom or a notification sound. The routine is picking up your phone and scrolling. The reward is the small pleasure of seeing new content or messages. Over time, your brain begins to crave this reward automatically.

The good news is that habits can be changed. Research suggests that you cannot simply delete a habit — instead, you must replace it. Keep the same cue and the same reward, but change the routine. If your cue is feeling stressed and your reward is relaxation, you might replace the routine of eating unhealthy snacks with a short walk or five minutes of deep breathing.

Building a new habit requires consistency and patience. Studies suggest that on average it takes around 66 days for a new behaviour to become automatic — not the popular but inaccurate idea of "21 days".

Small habits can lead to powerful changes over time. Many successful people follow a practice called "habit stacking" — linking a new habit to an existing one. For example: "After I pour my morning coffee, I will read for ten minutes." This technique makes it easier for the brain to remember and automate the new behaviour.

Understanding how your habits work gives you real power over your daily life. Instead of being a passive passenger in your own routine, you become the driver.`,

    vocabulary: [
      { word: 'behaviour',   translation: 'comportamento' },
      { word: 'conscious',   translation: 'consciente' },
      { word: 'trigger',     translation: 'gatilho / estímulo' },
      { word: 'crave',       translation: 'desejar / ansiar por' },
      { word: 'replace',     translation: 'substituir' },
      { word: 'consistency', translation: 'consistência / regularidade' },
      { word: 'stacking',    translation: 'empilhamento / encadeamento' },
      { word: 'automate',    translation: 'automatizar' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'According to scientists, what percentage of our daily actions are habits?',
        options:     ['Up to 20 percent', 'Up to 40 percent', 'Up to 60 percent', 'Up to 80 percent'],
        answer:      'Up to 40 percent',
        explanation: '"...up to 40 percent of our daily actions are not conscious decisions, but habits."'
      },
      {
        type:        'mc',
        question:    'What are the three steps of a habit loop?',
        options:     ['Goal, action, result', 'Cue, routine, reward', 'Trigger, thought, feeling', 'Signal, response, memory'],
        answer:      'Cue, routine, reward',
        explanation: 'The text explicitly names the three steps: "the cue, the routine, and the reward."'
      },
      {
        type:        'tf',
        question:    'According to the text, you can delete a bad habit by simply stopping it.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"Research suggests that you cannot simply delete a habit — instead, you must replace it."'
      },
      {
        type:        'fill',
        question:    'Studies suggest that on average it takes around ___ days for a new behaviour to become automatic.',
        options:     [],
        answer:      '66',
        explanation: '"...on average it takes around 66 days for a new behaviour to become automatic."'
      },
      {
        type:        'mc',
        question:    'What does the text say about the "21 days" idea for forming habits?',
        options:     ['It is accurate and supported by science', 'It is popular but inaccurate', 'It only works for exercise habits', 'It is recommended by most researchers'],
        answer:      'It is popular but inaccurate',
        explanation: '"...not the popular but inaccurate idea of \'21 days\'."'
      },
      {
        type:        'tf',
        question:    '"Habit stacking" means replacing all your existing habits with new ones.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'Habit stacking means linking a new habit to an existing one, not replacing existing habits.'
      },
      {
        type:        'mc',
        question:    'In the habit replacement strategy, what must stay the same?',
        options:     ['The routine only', 'The cue and reward', 'The reward only', 'Nothing needs to stay the same'],
        answer:      'The cue and reward',
        explanation: '"Keep the same cue and the same reward, but change the routine."'
      },
      {
        type:        'fill',
        question:    'Understanding how habits work means you become the ___ of your own routine, not a passive passenger.',
        options:     [],
        answer:      'driver',
        explanation: '"Instead of being a passive passenger in your own routine, you become the driver."'
      }
    ]
  },

  // ==================================================
  // NÍVEL B2 — INTERMEDIÁRIO AVANÇADO
  // ==================================================

  {
    id:          'b2-the-gig-economy',
    levelId:     'b2',
    titleEn:     'The Gig Economy: Freedom or Fragility?',
    titlePt:     'A Economia Gig: Liberdade ou Fragilidade?',
    readTimeMin: 6,
    body: `Over the past two decades, a new model of work has reshaped the global labour market. The "gig economy" — characterised by short-term contracts, freelance work, and platform-mediated services — now employs hundreds of millions of workers worldwide. Ride-hailing apps, food delivery platforms, and freelance marketplaces have become the infrastructure of a fundamentally different kind of employment.

Proponents argue that gig work offers unprecedented flexibility. Workers can set their own hours, accept or reject assignments, and theoretically combine multiple income streams. For students, caregivers, or those pursuing creative careers, this autonomy can be genuinely empowering. A single parent can pick school schedules around delivery shifts; a musician can supplement income between gigs without being tied to a rigid nine-to-five schedule.

Critics, however, paint a starkly different picture. Because gig workers are typically classified as independent contractors rather than employees, they are excluded from most labour protections that traditional workers take for granted: paid sick leave, unemployment benefits, health insurance, pension contributions, and protection against unfair dismissal. The platforms that profit enormously from their labour bear little legal responsibility for their welfare.

The power imbalance is further exacerbated by algorithmic management. Workers are monitored, rated, and disciplined by automated systems with little transparency or right of appeal. A poor rating — sometimes the result of factors entirely outside the worker's control, such as traffic or a customer's bad mood — can result in reduced work opportunities or even deactivation from the platform.

Recent legal battles in the United Kingdom, California, and Brazil have challenged this classification model. Courts in several jurisdictions have ruled that certain platform workers deserve employee status, forcing companies to provide benefits and minimum wage guarantees. The companies, facing significant financial and operational consequences, have responded with intense lobbying and, in some cases, by reframing their models.

The fundamental tension remains unresolved. Flexibility and security are not inherently incompatible, but achieving both requires political will, regulatory creativity, and genuine dialogue between platforms, workers, and governments. The gig economy is not a temporary phenomenon — it is a structural shift that demands a structural response.`,

    vocabulary: [
      { word: 'gig',           translation: 'bico / trabalho temporário' },
      { word: 'freelance',     translation: 'autônomo / freelancer' },
      { word: 'proponents',    translation: 'defensores / apoiadores' },
      { word: 'autonomy',      translation: 'autonomia' },
      { word: 'exacerbated',   translation: 'agravado / intensificado' },
      { word: 'algorithmic',   translation: 'algorítmico' },
      { word: 'deactivation',  translation: 'desativação / bloqueio' },
      { word: 'lobbying',      translation: 'lobby / pressão política' },
      { word: 'jurisdiction',  translation: 'jurisdição' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'According to the text, what is the main legal classification that prevents gig workers from receiving benefits?',
        options:     ['Casual worker', 'Temporary employee', 'Independent contractor', 'Part-time staff'],
        answer:      'Independent contractor',
        explanation: '"...gig workers are typically classified as independent contractors rather than employees, they are excluded from most labour protections."'
      },
      {
        type:        'tf',
        question:    'The text claims that gig work is universally seen as a positive development.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text presents both proponents and critics, showing contrasting perspectives.'
      },
      {
        type:        'mc',
        question:    'What does "algorithmic management" refer to in this context?',
        options:     ['Human managers using data to make decisions', 'Automated systems that monitor, rate, and discipline workers', 'An app that creates workers\' schedules automatically', 'A legal framework for gig economy regulation'],
        answer:      'Automated systems that monitor, rate, and discipline workers',
        explanation: '"Workers are monitored, rated, and disciplined by automated systems with little transparency or right of appeal."'
      },
      {
        type:        'fill',
        question:    'The text mentions legal battles in the United Kingdom, California, and ___ as places that challenged the gig worker classification model.',
        options:     [],
        answer:      'Brazil',
        explanation: '"Recent legal battles in the United Kingdom, California, and Brazil have challenged this classification model."'
      },
      {
        type:        'tf',
        question:    'The author believes that flexibility and security are inherently incompatible goals.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"Flexibility and security are not inherently incompatible, but achieving both requires political will, regulatory creativity, and genuine dialogue."'
      },
      {
        type:        'mc',
        question:    'How have gig platforms responded to legal rulings against them?',
        options:     ['By voluntarily granting employee status to all workers', 'Through intense lobbying and reframing their models', 'By shutting down operations in affected jurisdictions', 'By increasing wages significantly'],
        answer:      'Through intense lobbying and reframing their models',
        explanation: '"The companies...have responded with intense lobbying and, in some cases, by reframing their models."'
      },
      {
        type:        'mc',
        question:    'Which example does the text use to show how gig work can be positive?',
        options:     ['A factory worker earning overtime', 'A single parent scheduling deliveries around school hours', 'A company reducing its staff costs', 'A student avoiding taxes'],
        answer:      'A single parent scheduling deliveries around school hours',
        explanation: '"A single parent can pick school schedules around delivery shifts."'
      },
      {
        type:        'fill',
        question:    'The author describes the gig economy as a structural ___ that demands a structural response.',
        options:     [],
        answer:      'shift',
        explanation: '"The gig economy is not a temporary phenomenon — it is a structural shift that demands a structural response."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'b2-cities-and-climate',
    levelId:     'b2',
    titleEn:     'Cities at the Frontline of Climate Change',
    titlePt:     'Cidades na Linha de Frente das Mudanças Climáticas',
    readTimeMin: 6,
    body: `Cities cover less than three percent of the Earth's land surface, yet they are responsible for more than seventy percent of global greenhouse gas emissions. They are simultaneously the primary drivers of climate change and its most vulnerable victims. As extreme weather events become more frequent and severe, urban centres around the world face an unprecedented test of resilience and adaptability.

The threats are multifaceted. Coastal cities like Miami, Jakarta, and Mumbai face existential risks from rising sea levels. Jakarta, Indonesia's former capital, has been sinking at such an alarming rate — in some areas, up to twenty-five centimetres per year — that the government has decided to relocate the entire capital to a new city called Nusantara. Miami's famous streets already flood regularly during high tides, a phenomenon locals have grimly nicknamed "sunny day flooding."

Inland cities are not immune. Phoenix, Arizona, regularly experiences temperatures exceeding 43°C during summer heatwaves, a situation that disproportionately affects outdoor workers, the elderly, and those without access to air conditioning. European cities, historically designed for cold climates, have struggled catastrophically during recent heatwaves. Paris in 2003 lost over fourteen thousand lives in a single summer.

In response, progressive cities have been pioneering a range of innovative adaptation strategies. Amsterdam has invested in water-resilient urban design, including floating houses and sophisticated flood barrier systems. Singapore has developed an extensive network of green rooftops, cooling corridors, and urban forests to combat the heat island effect. Copenhagen has committed to becoming the world's first carbon-neutral capital by 2025.

Yet adaptation alone is insufficient. Without drastic reductions in emissions at the global level — from industry, transport, and agriculture — even the most sophisticated local solutions will eventually be overwhelmed. Cities need national governments and international cooperation to address root causes rather than merely managing symptoms.

The city of the future must be simultaneously denser, greener, and more socially equitable. Climate adaptation cannot be a privilege reserved for wealthy neighbourhoods while vulnerable communities bear the disproportionate burden of a crisis they did little to create.`,

    vocabulary: [
      { word: 'greenhouse',    translation: 'estufa (efeito estufa)' },
      { word: 'resilience',    translation: 'resiliência' },
      { word: 'multifaceted',  translation: 'multifacetado / complexo' },
      { word: 'relocate',      translation: 'realocar / transferir' },
      { word: 'disproportionately', translation: 'desproporcionalmente' },
      { word: 'pioneering',    translation: 'pioneiro / inovador' },
      { word: 'equitable',     translation: 'equitativo / justo' },
      { word: 'adaptation',    translation: 'adaptação' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'What percentage of global greenhouse gas emissions do cities produce?',
        options:     ['Less than 30%', 'Exactly 50%', 'More than 70%', 'Nearly 90%'],
        answer:      'More than 70%',
        explanation: '"...they are responsible for more than seventy percent of global greenhouse gas emissions."'
      },
      {
        type:        'tf',
        question:    'Jakarta is currently the capital of Indonesia and has no plans to move.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text says Jakarta is Indonesia\'s former capital and the government decided to relocate to Nusantara.'
      },
      {
        type:        'mc',
        question:    'What is "sunny day flooding" as described in the text?',
        options:     ['Flooding caused by tropical storms', 'Regular flooding during high tides even without rain', 'A nickname for heavy summer rainfall', 'A flood warning system used in Miami'],
        answer:      'Regular flooding during high tides even without rain',
        explanation: '"Miami\'s famous streets already flood regularly during high tides, a phenomenon locals have grimly nicknamed \'sunny day flooding\'."'
      },
      {
        type:        'fill',
        question:    'Paris lost over ___ thousand lives during the 2003 heatwave.',
        options:     [],
        answer:      'fourteen',
        explanation: '"Paris in 2003 lost over fourteen thousand lives in a single summer."'
      },
      {
        type:        'mc',
        question:    'Which city has committed to becoming carbon-neutral by 2025?',
        options:     ['Amsterdam', 'Singapore', 'Copenhagen', 'Miami'],
        answer:      'Copenhagen',
        explanation: '"Copenhagen has committed to becoming the world\'s first carbon-neutral capital by 2025."'
      },
      {
        type:        'tf',
        question:    'The author suggests that local adaptation strategies are fully sufficient to solve climate challenges.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"Yet adaptation alone is insufficient. Without drastic reductions in emissions at the global level...even the most sophisticated local solutions will eventually be overwhelmed."'
      },
      {
        type:        'mc',
        question:    'What problem does the text associate with climate change in Phoenix, Arizona?',
        options:     ['Flooding and sea level rise', 'Extreme summer heat above 43°C', 'Air pollution from factories', 'Severe winter storms'],
        answer:      'Extreme summer heat above 43°C',
        explanation: '"Phoenix, Arizona, regularly experiences temperatures exceeding 43°C during summer heatwaves."'
      },
      {
        type:        'fill',
        question:    'The author argues that climate ___ cannot be a privilege reserved for wealthy neighbourhoods.',
        options:     [],
        answer:      'adaptation',
        explanation: '"Climate adaptation cannot be a privilege reserved for wealthy neighbourhoods while vulnerable communities bear the disproportionate burden."'
      }
    ]
  },

  // ==================================================
  // NÍVEL C1 — AVANÇADO
  // ==================================================

  {
    id:          'c1-the-ethics-of-ai',
    levelId:     'c1',
    titleEn:     'The Ethics of Artificial Intelligence: Who Bears Responsibility?',
    titlePt:     'A Ética da Inteligência Artificial: Quem é Responsável?',
    readTimeMin: 7,
    body: `As artificial intelligence systems assume increasingly consequential roles in human society — making credit decisions, informing medical diagnoses, influencing criminal sentencing, and curating the information environments of billions — the question of moral and legal accountability has moved from philosophical abstraction to urgent practical concern.

The attribution of responsibility presents a distinctive challenge when the agent causing harm is not human. Traditional legal frameworks are premised on the notion that responsible parties are identifiable, intentional actors. An AI system, by contrast, operates through probabilistic pattern recognition derived from vast training datasets, producing outputs that may be neither predicted nor intended by any individual human actor. When a facial recognition system falsely identifies an innocent person as a criminal, who bears the blame: the engineers who built the model, the company that deployed it, the municipality that purchased it, or the algorithm itself?

The emerging consensus among AI ethicists points toward a distributed model of accountability. Developers bear responsibility for the design choices embedded in systems, including the curation of training data and the setting of performance thresholds. Deploying organisations must be held accountable for contextual misapplication — using a tool in domains for which it was not validated. Regulatory bodies have an obligation to establish minimum standards of transparency, explainability, and contestability. End users, where they exercise meaningful choice, also carry a degree of moral responsibility.

A particular source of concern is what researchers call "the opacity problem." Many state-of-the-art AI systems are, in practical terms, black boxes. Even their creators cannot fully articulate the reasoning behind specific outputs. This opacity undermines both accountability and trust. Efforts to develop explainable AI — systems that can provide human-interpretable justifications for their decisions — represent one of the field's most active research frontiers.

The risk of algorithmic bias compounds these concerns significantly. AI systems trained on historical data inherit and, in some cases, amplify the prejudices encoded within that data. A hiring algorithm trained on historical recruitment data from a male-dominated industry will systematically disadvantage women applicants — not through malicious design, but through the uncritical reproduction of existing inequalities.

The stakes of getting this right are considerable. AI governance is not a technical problem with a technical solution; it is a profoundly political question about the distribution of power and the protection of human dignity. Entrusting its resolution solely to the industry that profits from AI's expansion would be, to borrow a well-worn metaphor, like asking foxes to design the henhouse.`,

    vocabulary: [
      { word: 'accountability', translation: 'responsabilidade / prestação de contas' },
      { word: 'probabilistic',  translation: 'probabilístico' },
      { word: 'opacity',        translation: 'opacidade / falta de transparência' },
      { word: 'explainability', translation: 'explicabilidade' },
      { word: 'bias',           translation: 'viés / tendência' },
      { word: 'amplify',        translation: 'amplificar' },
      { word: 'contestability', translation: 'contestabilidade' },
      { word: 'governance',     translation: 'governança' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'According to the text, what makes attributing responsibility to AI systems particularly challenging?',
        options:     [
          'AI systems are too expensive to regulate',
          'Traditional legal frameworks assume intentional human actors',
          'Governments lack the technical knowledge to understand AI',
          'AI companies operate across multiple countries'
        ],
        answer:      'Traditional legal frameworks assume intentional human actors',
        explanation: '"Traditional legal frameworks are premised on the notion that responsible parties are identifiable, intentional actors."'
      },
      {
        type:        'tf',
        question:    'The author argues that only developers should bear responsibility for AI-related harms.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The text proposes a "distributed model of accountability" involving developers, deploying organisations, regulators, and end users.'
      },
      {
        type:        'mc',
        question:    'What does the author mean by "the opacity problem"?',
        options:     [
          'AI systems are too slow to process information quickly',
          'Many AI systems cannot provide interpretable justifications for their outputs',
          'AI companies hide their profits from tax authorities',
          'Governments lack transparency in their use of AI'
        ],
        answer:      'Many AI systems cannot provide interpretable justifications for their outputs',
        explanation: '"Many state-of-the-art AI systems are...black boxes. Even their creators cannot fully articulate the reasoning behind specific outputs."'
      },
      {
        type:        'fill',
        question:    'A hiring algorithm trained on historical data from a male-dominated industry will systematically disadvantage ___ applicants.',
        options:     [],
        answer:      'women',
        explanation: '"A hiring algorithm trained on historical recruitment data from a male-dominated industry will systematically disadvantage women applicants."'
      },
      {
        type:        'tf',
        question:    'The author views AI governance primarily as a technical problem requiring a technical solution.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"AI governance is not a technical problem with a technical solution; it is a profoundly political question."'
      },
      {
        type:        'mc',
        question:    'What is "explainable AI" as referenced in the text?',
        options:     [
          'AI that can translate content into multiple languages',
          'AI that provides human-interpretable justifications for its decisions',
          'AI that is simple enough for non-experts to program',
          'AI that explains government policy decisions'
        ],
        answer:      'AI that provides human-interpretable justifications for its decisions',
        explanation: '"Efforts to develop explainable AI — systems that can provide human-interpretable justifications for their decisions."'
      },
      {
        type:        'mc',
        question:    'What does the author imply with the metaphor about foxes and the henhouse?',
        options:     [
          'The AI industry is fundamentally dishonest',
          'It would be unwise to let the AI industry solely govern itself',
          'Farmers should use AI to protect their animals',
          'Old metaphors do not apply to modern technology'
        ],
        answer:      'It would be unwise to let the AI industry solely govern itself',
        explanation: '"Entrusting its resolution solely to the industry that profits from AI\'s expansion would be...like asking foxes to design the henhouse."'
      },
      {
        type:        'fill',
        question:    'Algorithmic bias occurs when AI systems inherit and sometimes ___ the prejudices encoded in historical data.',
        options:     [],
        answer:      'amplify',
        explanation: '"AI systems trained on historical data inherit and, in some cases, amplify the prejudices encoded within that data."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'c1-language-extinction',
    levelId:     'c1',
    titleEn:     'The Silent Death of Languages',
    titlePt:     'A Morte Silenciosa das Línguas',
    readTimeMin: 7,
    body: `Linguists estimate that of the approximately seven thousand languages spoken on Earth today, roughly half will fall silent by the end of this century. A language dies, on average, every two weeks — typically with the passing of its last fluent speaker, often an elderly person in a remote community whose children chose, or were compelled, to adopt a dominant tongue. The loss is rarely marked with ceremony. It happens quietly, in the spaces between generations.

The dominant narrative frames language loss as an inevitable by-product of globalisation: a Darwinian process in which more "useful" languages outcompete less widely spoken ones. This framing, however convenient, obscures the role of deliberate policy. Throughout history, colonial governments systematically suppressed indigenous languages through boarding school systems designed to sever children's ties to their linguistic heritage. In Canada, Australia, and the United States, children were beaten for speaking their mother tongues. The trauma of those policies reverberates into the present.

Each language lost represents an irreplaceable cognitive and cultural archive. Languages encode unique ways of perceiving time, space, kinship, and the natural world. The Hopi language of the American Southwest lacks tenses in the conventional sense, encoding time as a continuum of becoming rather than a sequence of discrete moments. The Pirahã language of the Amazon has no recursive structures, challenging foundational assumptions of universal grammar. The Guugu Yimithirr of Australia uses cardinal directions rather than egocentric terms — speakers never say "to my left" but always "to the south" — a system that produces extraordinary spatial memory.

When these languages disappear, so too does the ecological knowledge encoded within them. Many indigenous languages contain intricate vocabularies for local flora, fauna, weather patterns, and land management practices accumulated over millennia. Pharmaceutical researchers have repeatedly acknowledged that indigenous knowledge systems have guided the identification of medicinal compounds that Western science had overlooked.

Revitalisation efforts have achieved meaningful, if partial, successes. Welsh has experienced a remarkable resurgence through immersion education and deliberate media policy. Māori in New Zealand has been stabilised through constitutional recognition and a dedicated television channel. Hawaiian, once feared terminally endangered, now has thousands of fluent young speakers, the product of decades of community-driven language nests.

These successes share a common architecture: community agency, institutional support, and the intergenerational transmission that only genuine daily use can sustain. Documentation matters enormously, but a recorded language without living speakers remains, ultimately, a museum exhibit. Languages are not artifacts; they are ecosystems.`,

    vocabulary: [
      { word: 'fluent',         translation: 'fluente' },
      { word: 'suppressed',     translation: 'suprimido / reprimido' },
      { word: 'archive',        translation: 'arquivo / acervo' },
      { word: 'kinship',        translation: 'parentesco' },
      { word: 'revitalisation', translation: 'revitalização' },
      { word: 'resurgence',     translation: 'ressurgimento / renascimento' },
      { word: 'intergenerational', translation: 'intergeracional' },
      { word: 'recursive',      translation: 'recursivo' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'According to linguists, how often does a language die on average?',
        options:     ['Every day', 'Every week', 'Every two weeks', 'Every month'],
        answer:      'Every two weeks',
        explanation: '"A language dies, on average, every two weeks."'
      },
      {
        type:        'tf',
        question:    'The author accepts the narrative that language loss is purely a natural result of globalisation.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'The author argues this framing "obscures the role of deliberate policy" — referring to colonial suppression of languages.'
      },
      {
        type:        'mc',
        question:    'What unusual feature does the Guugu Yimithirr language have?',
        options:     [
          'It has no words for colours',
          'It uses cardinal directions instead of egocentric terms',
          'It has no past tense',
          'It uses only three vowels'
        ],
        answer:      'It uses cardinal directions instead of egocentric terms',
        explanation: '"The Guugu Yimithirr of Australia uses cardinal directions rather than egocentric terms — speakers never say \'to my left\' but always \'to the south\'."'
      },
      {
        type:        'fill',
        question:    'The Pirahã language of the Amazon has no ___ structures, challenging assumptions of universal grammar.',
        options:     [],
        answer:      'recursive',
        explanation: '"The Pirahã language of the Amazon has no recursive structures, challenging foundational assumptions of universal grammar."'
      },
      {
        type:        'mc',
        question:    'Which language experienced a "remarkable resurgence" through immersion education and media policy?',
        options:     ['Māori', 'Hawaiian', 'Welsh', 'Hopi'],
        answer:      'Welsh',
        explanation: '"Welsh has experienced a remarkable resurgence through immersion education and deliberate media policy."'
      },
      {
        type:        'tf',
        question:    'The author believes that recording and documenting a language is sufficient to keep it truly alive.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"A recorded language without living speakers remains, ultimately, a museum exhibit. Languages are not artifacts; they are ecosystems."'
      },
      {
        type:        'mc',
        question:    'Why does the author mention pharmaceutical researchers?',
        options:     [
          'To argue that medicine should fund language preservation',
          'To show that indigenous knowledge encoded in languages has practical scientific value',
          'To criticise Western pharmaceutical companies',
          'To compare language complexity with chemical formulas'
        ],
        answer:      'To show that indigenous knowledge encoded in languages has practical scientific value',
        explanation: '"Pharmaceutical researchers have repeatedly acknowledged that indigenous knowledge systems have guided the identification of medicinal compounds that Western science had overlooked."'
      },
      {
        type:        'fill',
        question:    'The author compares languages not to artifacts, but to ___.',
        options:     [],
        answer:      'ecosystems',
        explanation: '"Languages are not artifacts; they are ecosystems."'
      }
    ]
  },

  // ==================================================
  // NÍVEL C2 — MAESTRIA
  // ==================================================

  {
    id:          'c2-the-paradox-of-choice',
    levelId:     'c2',
    titleEn:     'The Paradox of Choice and the Architecture of Decision',
    titlePt:     'O Paradoxo da Escolha e a Arquitetura da Decisão',
    readTimeMin: 8,
    body: `The liberal tradition has long predicated human flourishing on the maximisation of individual choice. Freedom, in its dominant contemporary formulation, is largely understood as the unimpeded capacity to select between alternatives — more options being, axiomatically, preferable to fewer. Yet a growing body of empirical research in behavioural economics and cognitive psychology has complicated this intuition in ways that resist easy resolution and carry considerable implications for how we design institutions, markets, and public spaces.

Barry Schwartz's influential formulation of the "paradox of choice" synthesises this research into a counterintuitive thesis: beyond a certain threshold, an increase in available options produces not greater satisfaction but measurably greater anxiety, indecision, and post-decision regret. The mechanism is partly attentional — the cognitive burden of evaluating a large choice set is itself taxing — and partly aspirational. When faced with many alternatives, individuals construct an idealised composite of the best attributes of all rejected options, against which the chosen option inevitably compares unfavourably. The result is a pervasive sense of what might have been: the tyranny of the counterfactual.

This phenomenon interacts with a fundamental distinction in decision-making styles that researchers call the "maximiser-satisficer" spectrum. Maximisers approach decisions by seeking the objectively best available option; satisficers adopt a threshold criterion, selecting the first option that meets a minimum standard of acceptability. Counterintuitively, research consistently finds that maximisers report lower levels of subjective wellbeing and higher rates of depression, despite — or arguably because of — their greater commitment to thoroughness. The exhaustive search that maximising requires is itself a source of suffering.

The political valence of these findings is not neutral. Libertarian paternalists — most prominently Thaler and Sunstein, architects of the "nudge" framework — have argued that these insights justify what they call "choice architecture": the deliberate structuring of decision environments to channel behaviour toward outcomes deemed beneficial by designers, while technically preserving formal freedom of choice. A cafeteria that places salads at eye level and desserts in a less accessible position is exercising choice architecture. So, more controversially, is a pension scheme that defaults employees into contribution without requiring affirmative opt-in.

Critics from both left and right have taken issue with this framework, though for divergent reasons. Conservative critics object to the paternalism implicit in the presumption that experts know better than individuals what outcomes they should pursue. Radical critics observe that nudge theory individualises structural problems: framing obesity, for instance, as a matter of cafeteria arrangement rather than agricultural subsidies, food deserts, and socioeconomic inequality. The architecture of choice, they argue, is always already political — a point nudge theorists tend to acknowledge in principle while minimising in practice.

What remains underexplored is the phenomenology of choosing itself: the lived experience of deliberation, the aesthetics of commitment, the profound relationship between constrained choice and the construction of identity. It is precisely because our choices constitute us — telling us and others who we are — that choice anxiety is not merely cognitive but existential. A theory of freedom adequate to human beings cannot rest content with maximising options; it must grapple with the qualitative texture of the choosing life.`,

    vocabulary: [
      { word: 'axiomatically',   translation: 'axiomaticamente / como verdade óbvia' },
      { word: 'counterfactual',  translation: 'contrafactual / o que poderia ter sido' },
      { word: 'satisficer',      translation: 'satisficer (aquele que aceita o suficientemente bom)' },
      { word: 'paternalism',     translation: 'paternalismo' },
      { word: 'nudge',           translation: 'incentivo / empurrãozinho comportamental' },
      { word: 'phenomenology',   translation: 'fenomenologia' },
      { word: 'deliberation',    translation: 'deliberação / ponderação' },
      { word: 'valence',         translation: 'valência / conotação política' }
    ],

    quiz: [
            {
        type:        'mc',
        question:    'What is the "tyranny of the counterfactual" as described in the text?',
        options:     [
          'The tendency to make objectively bad decisions under pressure',
          'The persistent sense of what might have been, caused by imagining unchosen options',
          'A legal doctrine that prevents authorities from reversing decisions',
          'The cognitive inability to remember all available options in a large set'
        ],
        answer:      'The persistent sense of what might have been, caused by imagining unchosen options',
        explanation: 'After choosing, individuals build an idealised composite of rejected options, producing "a pervasive sense of what might have been: the tyranny of the counterfactual."'
      },
      {
        type:        'tf',
        question:    'Research shows that maximisers report higher subjective wellbeing than satisficers because of their thoroughness.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"...maximisers report lower levels of subjective wellbeing and higher rates of depression, despite — or arguably because of — their greater commitment to thoroughness."'
      },
      {
        type:        'fill',
        question:    'Libertarian paternalists argue that "choice ___" justifies structuring decision environments to channel behaviour toward beneficial outcomes.',
        options:     [],
        answer:      'architecture',
        explanation: '"...these insights justify what they call \'choice architecture\': the deliberate structuring of decision environments."'
      },
      {
        type:        'mc',
        question:    'What is the radical left-wing critique of nudge theory presented in the text?',
        options:     [
          'It gives too much power to individuals rather than the state',
          'It relies on outdated economic models from the 20th century',
          'It individualises structural problems instead of addressing their root causes',
          'It is too focused on abstract theory with no practical applications'
        ],
        answer:      'It individualises structural problems instead of addressing their root causes',
        explanation: '"Radical critics observe that nudge theory individualises structural problems: framing obesity...as a matter of cafeteria arrangement rather than agricultural subsidies, food deserts, and socioeconomic inequality."'
      },
      {
        type:        'tf',
        question:    'The author suggests that a theory of freedom adequate for human beings only needs to maximise available options.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"A theory of freedom adequate to human beings cannot rest content with maximising options; it must grapple with the qualitative texture of the choosing life."'
      },
      {
        type:        'mc',
        question:    'According to the author, why is choice anxiety "not merely cognitive but existential"?',
        options:     [
          'Because choosing incorrectly leads to irreversible financial harm',
          'Because our choices constitute our identity, telling ourselves and others who we are',
          'Because the human brain lacks sufficient processing power for complex decisions',
          'Because anxiety disorders are primarily caused by decision fatigue'
        ],
        answer:      'Because our choices constitute our identity, telling ourselves and others who we are',
        explanation: '"It is precisely because our choices constitute us — telling us and others who we are — that choice anxiety is not merely cognitive but existential."'
      },
      {
        type:        'fill',
        question:    'The author states that the architecture of choice is always already ___ — a point nudge theorists tend to acknowledge in principle while minimising in practice.',
        options:     [],
        answer:      'political',
        explanation: '"The architecture of choice, they argue, is always already political — a point nudge theorists tend to acknowledge in principle while minimising in practice."'
      }
    ]
  },

  // --------------------------------------------------

  {
    id:          'c2-memory-and-narrative',
    levelId:     'c2',
    titleEn:     'Memory, Narrative, and the Constructed Self',
    titlePt:     'Memória, Narrativa e o Eu Construído',
    readTimeMin: 8,
    body: `The proposition that the self is a stable, continuous entity persisting through time has enjoyed philosophical currency since Descartes — and arguably since long before him. Yet the accumulated evidence from cognitive neuroscience, social psychology, and cross-cultural philosophy presents a picture considerably more disquieting: the self is not found but fabricated, not discovered but narrated into provisional existence through the stories we tell about our own experience.

Memory, the apparent bedrock of personal identity, turns out to be far less reliable as a record than as a creative act. Neuroscientific research has established that episodic memory is not a stable repository but a dynamic, reconstructive process. Each act of remembering is simultaneously an act of rewriting — the retrieved memory is updated with current knowledge, emotional states, and social context before being reconsolidated into storage. Elizabeth Loftus's landmark research on the malleability of memory demonstrated that entirely false memories of childhood events could be implanted with ease, and that subjects experienced these fabrications with the full phenomenological weight of genuine recollection.

What this implies for personal identity is unsettling. If my memories of the past are continuously being revised in light of who I am now, then the narrative continuity I experience as my life story is, in part, a retrospective confabulation — a coherent tale assembled from fragmentary and mutable materials. The "I" who claims ownership of that story is as much its product as its author.

Philosophers of mind have long distinguished between numerical identity — the trivial sense in which any object is identical to itself — and narrative identity, the more interesting and precarious sense in which a person at sixty is meaningfully "the same person" as they were at six. Paul Ricoeur argued that this latter form of identity is constituted through narrative: the temporal integration of disparate experiences into a story with a recognisable protagonist, persistent values, and an arc of development. Crucially for Ricoeur, narrative identity is not fixed but dialogic — it is co-constructed in conversation with others, with cultural scripts, and with the stories that circulate within our social worlds.

Cross-cultural research adds a further layer of complexity. Individualist cultures — predominantly Western — tend to frame the self as an autonomous, bounded entity with stable traits that persist across contexts. Collectivist cultures — more prevalent in East Asian, African, and Latin American traditions — tend to construct selfhood relationally, as a node in a network of obligations and affinities that constitute rather than merely surround the individual. These are not merely different descriptions of the same underlying reality; they appear to produce genuinely different patterns of cognition, memory, emotion, and moral reasoning.

The therapeutic implications of the narrative model of self are profound. If identity is a story, it can — within limits — be re-authored. Narrative therapy, developed by Michael White and David Epston, proceeds precisely on this premise: that individuals who have come to inhabit "problem-saturated" stories about themselves can, through a process of collaborative exploration, identify alternative plots, neglected protagonists, and richer characterisations of their experience. This is not mere positive thinking; it is a structurally distinct ontological intervention.

The limits of re-authorship, however, are real and must be acknowledged honestly. Not all stories are revisable on equal terms. Poverty, trauma, systemic discrimination, and neurological constraint are not narrative problems susceptible to narrative solutions. A theory of the self that overestimates the malleability of personal identity risks sliding from liberation into a new form of coercion — the demand to reinvent oneself as a moral obligation.`,

    vocabulary: [
      { word: 'fabricated',       translation: 'fabricado / construído' },
      { word: 'episodic',         translation: 'episódico' },
      { word: 'reconsolidated',   translation: 'reconsolidado' },
      { word: 'confabulation',    translation: 'confabulação / narrativa inventada inconscientemente' },
      { word: 'precarious',       translation: 'precário / instável' },
      { word: 'dialogic',         translation: 'dialógico / construído em diálogo' },
      { word: 'malleability',     translation: 'maleabilidade / plasticidade' },
      { word: 'ontological',      translation: 'ontológico (relativo à natureza do ser)' }
    ],

    quiz: [
      {
        type:        'mc',
        question:    'What does the author mean when describing memory as "a creative act" rather than a record?',
        options:     [
          'People invent entirely fictional memories for social acceptance',
          'Each act of remembering reconstructs and rewrites the memory with current context',
          'Only creative individuals have reliable long-term memory',
          'Memory works exclusively through visual imagination'
        ],
        answer:      'Each act of remembering reconstructs and rewrites the memory with current context',
        explanation: '"Each act of remembering is simultaneously an act of rewriting — the retrieved memory is updated with current knowledge, emotional states, and social context before being reconsolidated into storage."'
      },
      {
        type:        'tf',
        question:    'Elizabeth Loftus\'s research demonstrated that false childhood memories could not be convincingly implanted in subjects.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: 'Loftus showed the opposite: "entirely false memories of childhood events could be implanted with ease, and...subjects experienced these fabrications with the full phenomenological weight of genuine recollection."'
      },
      {
        type:        'mc',
        question:    'How does Paul Ricoeur\'s concept of "narrative identity" differ from "numerical identity"?',
        options:     [
          'Numerical identity concerns mathematical selfhood; narrative identity concerns social roles',
          'Narrative identity is the meaningful continuity of a person over time, constituted through story',
          'Ricoeur sees numerical identity as more important for psychological wellbeing',
          'Narrative identity applies only to fictional characters, not real people'
        ],
        answer:      'Narrative identity is the meaningful continuity of a person over time, constituted through story',
        explanation: '"Narrative identity...is the more interesting and precarious sense in which a person at sixty is meaningfully \'the same person\' as they were at six...constituted through narrative."'
      },
      {
        type:        'fill',
        question:    'Ricoeur argues that narrative identity is not fixed but ___, co-constructed in conversation with others and cultural scripts.',
        options:     [],
        answer:      'dialogic',
        explanation: '"Crucially for Ricoeur, narrative identity is not fixed but dialogic — it is co-constructed in conversation with others, with cultural scripts."'
      },
      {
        type:        'mc',
        question:    'What does the cross-cultural research described in the text suggest about the self in collectivist cultures?',
        options:     [
          'The self is constructed as a stable, autonomous entity with consistent traits',
          'The self is understood relationally, as a node in a network of obligations and affinities',
          'The self is considered an illusion with no philosophical value',
          'The self is defined exclusively through professional achievement and social status'
        ],
        answer:      'The self is understood relationally, as a node in a network of obligations and affinities',
        explanation: '"Collectivist cultures...tend to construct selfhood relationally, as a node in a network of obligations and affinities that constitute rather than merely surround the individual."'
      },
      {
        type:        'tf',
        question:    'The author fully endorses the idea that personal identity can always be re-authored through narrative therapy.',
        options:     ['True', 'False'],
        answer:      'False',
        explanation: '"The limits of re-authorship, however, are real and must be acknowledged honestly. Not all stories are revisable on equal terms. Poverty, trauma, systemic discrimination...are not narrative problems susceptible to narrative solutions."'
      },
      {
        type:        'mc',
        question:    'What risk does the author identify in overestimating the malleability of personal identity?',
        options:     [
          'People may become too comfortable with their current life narrative',
          'It could undermine the development of narrative therapy as a field',
          'It risks turning self-reinvention into a moral obligation — a new form of coercion',
          'It may cause individuals to lose connection with their cultural heritage'
        ],
        answer:      'It risks turning self-reinvention into a moral obligation — a new form of coercion',
        explanation: '"A theory of the self that overestimates the malleability of personal identity risks sliding from liberation into a new form of coercion — the demand to reinvent oneself as a moral obligation."'
      },
      {
        type:        'fill',
        question:    'The author describes the narrative self as "not found but ___, not discovered but narrated into provisional existence."',
        options:     [],
        answer:      'fabricated',
        explanation: '"...the self is not found but fabricated, not discovered but narrated into provisional existence through the stories we tell about our own experience."'
      }
    ]
  }

];