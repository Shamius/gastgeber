
    const TEST_META = {
      build: "2026-03-16",
      title: "Тест: Стань хозяином встречи"
    };

    const STORAGE_KEY = "host-meeting-test-v1";

    const DIMENSIONS = {
      prep: {
        name: "Подготовка и гипотезы",
        why: "Если идти на встречу пустой, разговор остаётся реактивным: клиент диктует рамку, а ты только уточняешь детали.",
        doNext: [
          "Перед встречей формулируй 2–3 гипотезы о бизнес-контексте, роли собеседника и цене бездействия.",
          "Разделяй: что полезно знать заранее, а что логично уточнять уже в диалоге.",
          "Готовь встречу не «про продукт», а про бизнес-эффект и изменение status quo."
        ]
      },
      progress: {
        name: "Вопросы, которые двигают встречу",
        why: "Прогресс создают не любые вопросы, а те, что выводят на стоимость, риск, время, последствия и следующий шаг.",
        doNext: [
          "Проверяй каждый вопрос: он просто поддерживает разговор или реально меняет ход сделки?",
          "Ищи язык стоимости: простой, потери, время восстановления, цена владения, риск.",
          "Переводи общие темы в конкретику: сколько, как часто, что происходит для бизнеса."
        ]
      },
      assertive: {
        name: "Ассертивность вместо агрессии",
        why: "Сильная встреча требует спокойной уверенности: не нападать, но и не прятаться за нейтральными вопросами.",
        doNext: [
          "Заменяй обвинения на наблюдение + ориентир рынка + приглашение к разговору.",
          "Не говори клиенту, что у него «всё плохо»; показывай разрыв между текущим состоянием и лучшей альтернативой.",
          "Тренируй короткие фразы, где есть гипотеза, цифра или ориентир и следующий вопрос."
        ]
      },
      value: {
        name: "Экспертиза и конструктивное напряжение",
        why: "Отношения в продаже важны, но они рождаются из пользы: клиент должен почувствовать, что встреча с тобой что-то ему дала.",
        doNext: [
          "Приноси на встречу новое мнение, а не только сбор информации.",
          "Создавай конструктивное напряжение: помогай клиенту по-новому увидеть ситуацию.",
          "Держи в голове формулу: экспертиза → доверие/отношения → бизнес."
        ]
      },
      process: {
        name: "Ценность процесса продажи",
        why: "Клиенты оценивают не только продукт или цену, но и сам процесс взаимодействия с продавцом.",
        doNext: [
          "Делай так, чтобы у тебя было легко покупать: ясные шаги, понятные договорённости, поддержка внутри клиента.",
          "Помогай клиенту разбираться в альтернативах и избегать подводных камней.",
          "Превращай встречу в полезную консультацию, а не в формальный опрос."
        ]
      }
    };

    const QUESTIONS = [
      {
        id: "Q1",
        type: "single",
        dimension: "progress",
        weight: 2,
        text: "Наш самый главный конкурент в продаже — это…",
        options: [
          { text: "Status Quo — текущее состояние, в котором клиента «и так всё устраивает»", score: 1 },
          { text: "Любой поставщик, который даст максимальную скидку", score: 0 },
          { text: "Только крупный бренд с сильным маркетингом", score: 0 },
          { text: "Закупочная процедура сама по себе", score: 0.2 }
        ],
        review: {
          strong: "Ключевая мысль здесь такая: чаще всего мы конкурируем не с другим продавцом, а с отсутствием необходимости что-то менять.",
          bullets: [
            "Главная помеха прогрессу — состояние «всё устраивает».",
            "Задача встречи — помочь клиенту иначе увидеть ситуацию.",
            "Для этого нужна информация о бизнесе и роли собеседника."
          ]
        }
      },
      {
        id: "Q2",
        type: "multi",
        dimension: "prep",
        weight: 3,
        text: "Что полезно знать до встречи, а не надеяться узнать это только на самой встрече? Выбери все подходящие варианты.",
        options: [
          { text: "Отрасль и рыночный контекст клиента", score: 1 },
          { text: "Ситуацию компании: изменения, риски, контекст проекта", score: 1 },
          { text: "Вероятную роль собеседника и его влияние на бизнес-результат", score: 1 },
          { text: "Предполагаемый бизнес-эффект или бизнес-проблему, вокруг которой может строиться разговор", score: 2 },
          { text: "Подробные личные выгоды конкретного человека ещё до первого разговора", score: -1 },
          { text: "Любимую тему для small talk, чтобы начать совсем неформально", score: -1 },
          { text: "Его бытовые привычки и биографические мелочи", score: -1 }
        ],
        multiMaxScore: 5,
        review: {
          strong: "До встречи важно собирать предсказуемую деловую информацию: про отрасль, компанию, роль и возможный бизнес-результат. Личные выгоды конкретного человека обычно уточняются уже в диалоге.",
          bullets: [
            "Подготовка начинается не с дружелюбия, а с контекста.",
            "Встреча становится сильнее, когда ты заранее понимаешь рамку бизнеса.",
            "Это и позволяет прийти не пустой, а с гипотезами."
          ]
        }
      },
      {
        id: "Q3",
        type: "single",
        dimension: "prep",
        weight: 2,
        text: "Какой вывод следует из тезиса «того, что мы узнаем от клиента, недостаточно»?",
        options: [
          { text: "Нужно просто задавать больше уточняющих вопросов", score: 0.3 },
          { text: "На встречу нужно приходить с гипотезами, а не только с вопросами", score: 1 },
          { text: "Надо как можно дольше не говорить о бизнесе и сначала выстраивать раппорт", score: 0 },
          { text: "Лучше вообще не спорить с картиной мира клиента", score: 0 }
        ],
        review: {
          strong: "Тренинг прямо говорит: на встречу мы должны приходить с гипотезами. Иначе мы остаёмся в реактивной позиции.",
          bullets: [
            "Вопросы важны, но их недостаточно.",
            "Нужна исходная рамка и собственная точка зрения.",
            "Это не директивность, а подготовленность."
          ]
        }
      },
      {
        id: "Q4",
        type: "open",
        dimension: "prep",
        weight: 3,
        text: "Представь первую встречу по теме сокращения времени восстановления после инцидента. Какие 2–3 гипотезы ты подготовишь заранее?",
        openRubric: {
          maxPoints: 6,
          groups: [
            { points: 2, keywords: ["восстанов", "простой", "инцидент", "час", "сут", "rto", "rpo"] },
            { points: 2, keywords: ["стоим", "дорог", "убыт", "потер", "штраф", "риск"] },
            { points: 1, keywords: ["процесс", "регламент", "резерв", "резервир", "текущ", "архитект"] },
            { points: 1, keywords: ["роль", "руковод", "стейкхолдер", "кто отвеч", "владелец", "директор"] }
          ]
        },
        review: {
          strong: "Сильный ответ обычно содержит несколько деловых гипотез, а не общие фразы.",
          bullets: [
            "Гипотеза о текущем времени восстановления или уровне простоя.",
            "Гипотеза о цене бездействия: потери, штрафы, риски, стоимость часа/дня.",
            "Гипотеза о текущем процессе, архитектуре, резервировании или зоне ответственности.",
            "Гипотеза о роли собеседника и его влиянии на решение."
          ]
        }
      },
      {
        id: "Q5",
        type: "multi",
        dimension: "progress",
        weight: 3,
        text: "Какие вопросы скорее помогают двигать сделку вперёд? Выбери все подходящие варианты.",
        options: [
          { text: "Что для вас здесь «дорого»?", score: 1 },
          { text: "Как у вас сейчас выстроены процессы в этой части?", score: 1 },
          { text: "Сколько времени у вас занимает восстановление после инцидента?", score: 2 },
          { text: "Что происходит для бизнеса, если восстановление затягивается на день?", score: 2 },
          { text: "Какой у вас любимый интерфейс у подобных систем?", score: -1 },
          { text: "В каком кабинете сидит ИТ-директор?", score: -1 },
          { text: "Какую музыку обычно включают на корпоративе?", score: -1 }
        ],
        multiMaxScore: 6,
        review: {
          strong: "Двигают сделку вопросы про стоимость, процесс, время, последствия и язык бизнеса.",
          bullets: [
            "Они помогают вскрыть цену бездействия.",
            "Они переводят разговор в плоскость риска и эффекта.",
            "Именно такие вопросы создают почву для следующего шага."
          ]
        }
      },
      {
        id: "Q6",
        type: "open",
        dimension: "progress",
        weight: 2,
        text: "Напиши один вопрос для встречи, который реально помогает двигать сделку вперёд.",
        openRubric: {
          maxPoints: 6,
          groups: [
            { points: 2, keywords: ["сколько", "время", "час", "сут", "день"] },
            { points: 2, keywords: ["стоим", "дорог", "потер", "убыт", "штраф", "риск"] },
            { points: 2, keywords: ["процесс", "восстанов", "инцидент", "простой", "владения"] }
          ]
        },
        review: {
          strong: "Хороший вопрос обычно выводит на деньги, время, риск или бизнес-последствия.",
          bullets: [
            "Он не просто поддерживает диалог, а меняет рамку разговора.",
            "В нём слышен деловой фокус, а не бытовое любопытство.",
            "После такого вопроса проще обсуждать гипотезу и следующий шаг."
          ]
        }
      },
      {
        id: "Q7",
        type: "single",
        dimension: "assertive",
        weight: 3,
        text: "Какой вариант ближе к ассертивности, а не к агрессивности?",
        options: [
          { text: "Вижу, что ваши процессы сейчас вообще не отлажены", score: 0 },
          { text: "Ок, я попрошу коллег посчитать…", score: 0.35 },
          { text: "По опыту рынка, это часто занимает до суток. Было бы вам интересно сократить этот процесс до часа?", score: 1 },
          { text: "Да по сравнению с рынком вы 100% переплачиваете", score: 0 }
        ],
        review: {
          strong: "Ассертивность здесь — это спокойная уверенность: наблюдение, ориентир, гипотеза и приглашение к обсуждению.",
          bullets: [
            "Не обвинять клиента.",
            "Не прятаться полностью в реактивность.",
            "Показывать разницу между текущим состоянием и лучшей альтернативой."
          ]
        }
      },
      {
        id: "Q8",
        type: "multi",
        dimension: "assertive",
        weight: 2,
        text: "Какие формулировки можно считать скорее агрессивными? Выбери все подходящие варианты.",
        options: [
          { text: "Вы не видите ценность", score: 1 },
          { text: "Вижу, что ваши процессы сейчас вообще не отлажены", score: 1 },
          { text: "Да по сравнению с рынком вы 100% переплачиваете", score: 1 },
          { text: "Что для вас «дорого»?", score: -1 },
          { text: "По опыту рынка, это занимает до суток. Было бы вам интересно сократить процесс до часа?", score: -1 },
          { text: "Да, ваше решение дешевле по цене лицензии, но если считать стоимость владения…", score: -1 }
        ],
        multiMaxScore: 3,
        review: {
          strong: "Агрессия начинается там, где мы навешиваем оценку на клиента и лишаем его пространства для самостоятельного вывода.",
          bullets: [
            "«Вы не видите…», «у вас всё не так», «вы переплачиваете» — это нападение.",
            "Ассертивная речь не унижает клиента.",
            "Она направляет его к выводу через данные, бенчмарк и вопрос."
          ]
        }
      },
      {
        id: "Q9",
        type: "single",
        dimension: "value",
        weight: 2,
        text: "Что, по Нилу Рекхэму, в успешной продаже является причиной, а что — результатом?",
        options: [
          { text: "Причина — отношения, результат — экспертиза", score: 0 },
          { text: "Причина — скидка, результат — отношения", score: 0 },
          { text: "Причина — экспертиза и ценность процесса, результат — отношения", score: 1 },
          { text: "Причина — неформальность, результат — доверие", score: 0 }
        ],
        review: {
          strong: "Тренинг подчёркивает: отношения важны, но они — результат успешной продажи, а не её причина.",
          bullets: [
            "Причиной становится ценность, которую ты приносишь.",
            "Экспертиза и полезный процесс создают доверие.",
            "Уже потом это превращается в отношения и бизнес."
          ]
        }
      },
      {
        id: "Q10",
        type: "single",
        dimension: "value",
        weight: 2,
        text: "Что здесь означает «конструктивное напряжение»?",
        options: [
          { text: "Жёстче давить на клиента, чтобы он быстрее согласился", score: 0 },
          { text: "Быть максимально приятным и избегать любого напряжения", score: 0.1 },
          { text: "Помогать клиенту увидеть ситуацию по-новому и научить его тому, чего он пока не видит", score: 1 },
          { text: "Спорить ради демонстрации собственной компетентности", score: 0 }
        ],
        review: {
          strong: "Конструктивное напряжение — это не давление и не спор. Это момент, когда клиент получает новый полезный взгляд на свою ситуацию.",
          bullets: [
            "Ты не конфликтуешь ради конфликта.",
            "Ты меняешь рамку разговора.",
            "Встреча сама по себе становится ценной."
          ]
        }
      },
      {
        id: "Q11",
        type: "multi",
        dimension: "value",
        weight: 2,
        text: "Какие факторы из исследования Marketing Leadership Council названы особенно важными для лояльности? Выбери все подходящие варианты.",
        options: [
          { text: "АМ обладает высоким профессионализмом", score: 1 },
          { text: "АМ предлагает уникальное новое мнение", score: 1 },
          { text: "АМ знает мой бизнес", score: 1 },
          { text: "АМ быстро переходит на неформальный стиль общения", score: -1 },
          { text: "АМ сразу обещает максимальную скидку", score: -1 },
          { text: "АМ почти ничего не говорит и только слушает", score: -1 }
        ],
        multiMaxScore: 3,
        review: {
          strong: "В этом исследовании акцент не на скидке и не на обаянии, а на профессионализме, новом мнении и знании бизнеса клиента.",
          bullets: [
            "Высокий профессионализм.",
            "Уникальное новое мнение.",
            "Понимание бизнеса клиента."
          ]
        }
      },
      {
        id: "Q12",
        type: "multi",
        dimension: "process",
        weight: 3,
        text: "Что клиенты относят к сильному процессу продажи? Выбери все подходящие варианты.",
        options: [
          { text: "Торговый представитель предлагает уникальный и ценный взгляд на рынок", score: 1 },
          { text: "Торговый представитель помогает разобраться в альтернативах", score: 1 },
          { text: "Торговый представитель обеспечивает непрерывные консультации", score: 1 },
          { text: "Торговый представитель помогает избегать подводных камней", score: 1 },
          { text: "Торговый представитель обучает новым перспективам", score: 1 },
          { text: "У этого продавца легко покупать", score: 1 },
          { text: "У этого продавца сильная поддержка внутри моей компании", score: 1 },
          { text: "Торговый представитель быстро переходит в дружеский тон", score: -1 },
          { text: "Торговый представитель первым делом даёт максимальную скидку", score: -1 }
        ],
        multiMaxScore: 7,
        review: {
          strong: "Сильный процесс продажи — это не только «приятно общаться». Это консультационная, обучающая и хорошо организованная работа продавца.",
          bullets: [
            "Уникальный взгляд на рынок.",
            "Помощь в альтернативах и подводных камнях.",
            "Непрерывные консультации и новые перспективы.",
            "Лёгкость покупки и внутренняя поддержка у клиента."
          ]
        }
      },
      {
        id: "Q13",
        type: "single",
        dimension: "process",
        weight: 2,
        text: "Что в исследовании на слайде сильнее всего влияет на решение продолжать работать с данным АМ и защищать его внутри компании?",
        options: [
          { text: "Соотношение цена и качество — 9%", score: 0 },
          { text: "Влияние компании и бренда — 19%", score: 0 },
          { text: "Продукт и оказание услуг — 19%", score: 0 },
          { text: "Процесс продажи — 53%", score: 1 }
        ],
        review: {
          strong: "Самая большая доля отдана именно процессу продажи — 53%. Это центральный аргумент в пользу качества самой встречи и взаимодействия.",
          bullets: [
            "Не только продукт влияет на решение.",
            "Не только бренд и не только цена.",
            "Процесс продажи сам становится частью ценности."
          ]
        }
      },
      {
        id: "Q14",
        type: "open",
        dimension: "value",
        weight: 3,
        text: "Объясни своими словами формулу: «Экспертиза → отношения → бизнес».",
        openRubric: {
          maxPoints: 8,
          groups: [
            { points: 2, keywords: ["экспертиз", "знани", "опыт", "ценност", "мнение"] },
            { points: 2, keywords: ["отношени", "довер", "лояль"] },
            { points: 2, keywords: ["бизнес", "сделк", "контракт", "результ", "деньг"] },
            { points: 2, keywords: ["результ", "следств", "не причин", "не услов", "не причина"] }
          ]
        },
        review: {
          strong: "Сильный ответ показывает причинно-следственную связь, а не просто перечисляет три слова.",
          bullets: [
            "Сначала продавец приносит экспертизу и ценность.",
            "Из этого рождаются доверие и отношения.",
            "Уже затем появляются бизнес-результаты.",
            "Отношения — не стартовое условие, а следствие полезного взаимодействия."
          ]
        }
      },
      {
        id: "Q15",
        type: "multi",
        dimension: "prep",
        weight: 2,
        text: "Какие выводы о неформальности и первой встрече здесь можно сделать? Выбери все подходящие варианты.",
        options: [
          { text: "Если вы уже знакомы с покупателем, договориться о встрече проще, но подготовка всё равно делает её эффективной", score: 1 },
          { text: "Если вы ещё не знакомы с покупателем, попытка быть дружелюбным сама по себе не приведёт вас на встречу", score: 1 },
          { text: "Из десятков прослушанных первых звонков ни один, начавшийся неформально, не привёл к успеху", score: 1 },
          { text: "На первой встрече главное — как можно быстрее перейти к small talk", score: -1 },
          { text: "Неформальность способна заменить подготовку", score: -1 }
        ],
        multiMaxScore: 3,
        review: {
          strong: "Тренинг не призывает к формализму, но показывает, что одна только неформальность не двигает первую встречу.",
          bullets: [
            "Если контакт уже есть — это лишь облегчает вход.",
            "Без подготовки даже знакомая встреча может остаться пустой.",
            "А в первой встрече с новым человеком дружелюбие само по себе не работает."
          ]
        }
      },
      {
        id: "Q16",
        type: "open",
        dimension: "assertive",
        weight: 3,
        text: "Напиши короткую ассертивную реплику клиенту, который говорит: «Нам ничего не нужно, у нас всё есть».",
        openRubric: {
          maxPoints: 6,
          groups: [
            { points: 2, keywords: ["по опыту", "обычно", "как правило", "средн", "рынк", "бенчмарк", "benchmark"] },
            { points: 2, keywords: ["интересно", "было бы", "готовы", "есть ли смысл", "обсудить"] },
            { points: 2, keywords: ["сократ", "ускор", "сниз", "избеж", "риск", "потер", "стоим", "время"] }
          ],
          penalties: [
            { points: 2, keywords: ["не видите ценность", "100% переплачиваете", "все плохо", "не отлажены", "вообще не"] }
          ]
        },
        review: {
          strong: "Хорошая ассертивная реплика не спорит в лоб и не унижает клиента.",
          bullets: [
            "В ней есть спокойное наблюдение, ориентир рынка или гипотеза.",
            "Есть понятный бизнес-смысл: время, риск, потери, стоимость.",
            "И есть приглашение продолжить разговор, а не обвинение."
          ]
        }
      }
    ];

    const app = document.getElementById("app");
    let state = loadState();

    if (!state || !state.answers || Object.keys(state.answers).length === 0) {
      state = { current: -1, answers: {} };
    }

    render();

    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    }

    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function clearState() {
      localStorage.removeItem(STORAGE_KEY);
    }

    function render() {
      if (state.current === -1) {
        renderWelcome();
        return;
      }
      if (state.current >= QUESTIONS.length) {
        renderResults();
        return;
      }
      renderQuestion();
    }

    function renderWelcome() {
      app.innerHTML = `
        <section class="card">
          <div class="question-type">Перед началом</div>
          <h2 class="question">Как устроен этот тест</h2>
          <ul class="welcome-list">
            <li>В тесте есть открытые вопросы, вопросы с одним вариантом ответа и вопросы с несколькими вариантами.</li>
            <li>У открытых вопросов нет подсказок во время прохождения.</li>
            <li>В конце ты получишь итоговый разбор: общий результат, сильные стороны и зоны роста по темам.</li>
          </ul>
          <p class="small">Прогресс сохраняется в браузере, так что страницу можно случайно обновить без потери ответов.</p>
          <div class="nav">
            <div></div>
            <div class="nav-right">
              <button class="btn-primary" id="startBtn">Начать тест</button>
            </div>
          </div>
        </section>
      `;
      document.getElementById("startBtn").addEventListener("click", () => {
        state.current = 0;
        saveState();
        render();
      });
    }

    function renderQuestion() {
      const q = QUESTIONS[state.current];
      const progress = ((state.current) / QUESTIONS.length) * 100;
      const stored = state.answers[q.id];

      let inputHtml = "";
      if (q.type === "single") {
        inputHtml = `<div class="options">${
          q.options.map((opt, idx) => `
            <label class="option">
              <input type="radio" name="answer" value="${idx}" ${stored === idx ? "checked" : ""}>
              <span class="option-label">${escapeHtml(opt.text)}</span>
            </label>
          `).join("")
        }</div>`;
      } else if (q.type === "multi") {
        const selected = Array.isArray(stored) ? stored : [];
        inputHtml = `<div class="options">${
          q.options.map((opt, idx) => `
            <label class="option">
              <input type="checkbox" name="answer" value="${idx}" ${selected.includes(idx) ? "checked" : ""}>
              <span class="option-label">${escapeHtml(opt.text)}</span>
            </label>
          `).join("")
        }</div>`;
      } else {
        inputHtml = `
          <textarea id="openAnswer" placeholder="Твой ответ">${stored ? escapeHtml(stored) : ""}</textarea>
          <div class="hintless">Подсказок в этом поле нет.</div>
        `;
      }

      app.innerHTML = `
        <section class="card">
          <div class="progress-wrap">
            <div class="progress-bar"><span style="width:${progress}%"></span></div>
            <div class="progress-text">Вопрос ${state.current + 1} из ${QUESTIONS.length}</div>
          </div>
          <div class="question-type">${typeLabel(q.type)}</div>
          <h2 class="question">${escapeHtml(q.text)}</h2>
          ${inputHtml}
          <div class="error" id="errorBox"></div>
          <div class="nav">
            <button class="btn-ghost" id="backBtn" ${state.current === 0 ? 'style="visibility:hidden"' : ""}>Назад</button>
            <div class="nav-right">
              <button class="btn-secondary" id="saveBtn">Сохранить</button>
              <button class="btn-primary" id="nextBtn">${state.current === QUESTIONS.length - 1 ? "Завершить тест" : "Дальше"}</button>
            </div>
          </div>
        </section>
      `;

      document.getElementById("backBtn")?.addEventListener("click", () => {
        collectCurrentAnswer(false);
        state.current -= 1;
        saveState();
        render();
      });

      document.getElementById("saveBtn").addEventListener("click", () => {
        collectCurrentAnswer(false);
        saveState();
        const box = document.getElementById("errorBox");
        box.style.color = "var(--good)";
        box.textContent = "Ответ сохранён.";
      });

      document.getElementById("nextBtn").addEventListener("click", () => {
        const ok = collectCurrentAnswer(true);
        if (!ok) return;
        state.current += 1;
        saveState();
        render();
      });

      if (q.type === "open") {
        document.getElementById("openAnswer").addEventListener("input", () => {
          state.answers[q.id] = document.getElementById("openAnswer").value;
          saveState();
        });
      } else {
        document.querySelectorAll('input[name="answer"]').forEach(el => {
          el.addEventListener("change", () => {
            collectCurrentAnswer(false);
            saveState();
          });
        });
      }
    }

    function collectCurrentAnswer(showError) {
      const q = QUESTIONS[state.current];
      const errorBox = document.getElementById("errorBox");
      errorBox.style.color = "var(--bad)";
      errorBox.textContent = "";

      if (q.type === "single") {
        const checked = document.querySelector('input[name="answer"]:checked');
        if (!checked) {
          if (showError) errorBox.textContent = "Выбери один вариант ответа.";
          return false;
        }
        state.answers[q.id] = Number(checked.value);
        return true;
      }

      if (q.type === "multi") {
        const checked = [...document.querySelectorAll('input[name="answer"]:checked')].map(el => Number(el.value));
        if (checked.length === 0) {
          if (showError) errorBox.textContent = "Выбери хотя бы один вариант ответа.";
          return false;
        }
        state.answers[q.id] = checked;
        return true;
      }

      const val = document.getElementById("openAnswer").value.trim();
      if (!val) {
        if (showError) errorBox.textContent = "Напиши ответ, чтобы продолжить.";
        return false;
      }
      state.answers[q.id] = val;
      return true;
    }

    function renderResults() {
      const results = scoreAll();
      clearState();

      const topDims = [...results.dimensionEntries].sort((a,b) => b.percent - a.percent).slice(0,2);
      const lowDims = [...results.dimensionEntries].sort((a,b) => a.percent - b.percent).slice(0,2);

      app.innerHTML = `
        <section class="result-grid">
          <div class="result-card">
            <div class="question-type">Результат</div>
            <div class="score">${results.totalPercent}%</div>
            <div class="level">${escapeHtml(results.level.title)}</div>
            <p>${escapeHtml(results.level.text)}</p>

            <div class="summary-list">
              <div class="summary-item">
                <strong>Лучше всего получилось</strong>
                <div>${topDims.map(d => `${escapeHtml(d.name)} — ${d.percent}%`).join("<br>")}</div>
              </div>
              <div class="summary-item">
                <strong>Что особенно стоит подтянуть</strong>
                <div>${lowDims.map(d => `${escapeHtml(d.name)} — ${d.percent}%`).join("<br>")}</div>
              </div>
            </div>

            <div class="btn-row" style="margin-top:18px">
              <button class="btn-primary" id="restartBtn">Пройти заново</button>
              <button class="btn-secondary" id="copyBtn">Скопировать краткий итог</button>
            </div>
          </div>

          <div class="result-card">
            <div class="question-type">Как читать результат</div>
            <p>Тест не просто проверяет знание формулировок. Он показывает, насколько твоя логика встречи опирается на подготовку, деловые гипотезы, ассертивность, создание ценности и качество процесса продажи.</p>
          </div>
        </section>

        <section class="result-card" style="margin-top:16px">
          <h3 class="review-title">Обратная связь по темам</h3>
          <div class="dim-list">
            ${results.dimensionEntries.map(dim => `
              <div class="dim-card">
                <div class="dim-head">
                  <div class="dim-name">${escapeHtml(dim.name)}</div>
                  <div class="dim-score">${dim.percent}%</div>
                </div>
                <div class="mini-bar"><span style="width:${dim.percent}%"></span></div>
                <p class="dim-why">${escapeHtml(dim.why)}</p>
                ${dim.percent < 70 ? `
                  <ul class="dim-next">
                    ${dim.doNext.map(item => `<li>${escapeHtml(item)}</li>`).join("")}
                  </ul>
                ` : `
                  <ul class="dim-next">
                    <li>Эта часть у тебя уже выглядит уверенно. Сохраняй её и делай более конкретной в реальных встречах.</li>
                  </ul>
                `}
              </div>
            `).join("")}
          </div>
        </section>

        <section class="review-section">
          <div class="result-card">
            <h3 class="review-title">Разбор по вопросам</h3>
            <div class="review-list">
              ${results.reviews.map(item => `
                <div class="review-card">
                  <div class="review-top">
                    <div class="review-q">${escapeHtml(item.text)}</div>
                    <div class="badge ${item.badgeClass}">${escapeHtml(item.badgeText)}</div>
                  </div>
                  <div class="review-block">
                    <div class="review-label">Твой ответ</div>
                    <div class="review-answer">${item.userAnswerHtml}</div>
                  </div>
                  <div class="review-block">
                    <div class="review-label">Что считалось сильным ответом</div>
                    <div class="review-expected">
                      ${escapeHtml(item.strong)}
                      ${item.bullets && item.bullets.length ? `<ul>${item.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>` : ""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      `;

      document.getElementById("restartBtn").addEventListener("click", () => {
        state = { current: 0, answers: {} };
        saveState();
        render();
      });

      document.getElementById("copyBtn").addEventListener("click", async () => {
        const text = makeSummaryText(results);
        try {
          await navigator.clipboard.writeText(text);
          const btn = document.getElementById("copyBtn");
          btn.textContent = "Скопировано";
          setTimeout(() => btn.textContent = "Скопировать краткий итог", 1400);
        } catch (e) {
          alert("Не удалось скопировать автоматически. Попробуй ещё раз.");
        }
      });
    }

    function makeSummaryText(results) {
      const dims = results.dimensionEntries
        .map(d => `${d.name}: ${d.percent}%`)
        .join("\n");
      return `${TEST_META.title}\nРезультат: ${results.totalPercent}%\nУровень: ${results.level.title}\n\nТемы:\n${dims}`;
    }

    function scoreAll() {
      let total = 0;
      let totalMax = 0;

      const dimStats = {};
      Object.entries(DIMENSIONS).forEach(([key, val]) => {
        dimStats[key] = { key, name: val.name, why: val.why, doNext: val.doNext, score: 0, max: 0 };
      });

      const reviews = QUESTIONS.map(q => {
        const ans = state.answers[q.id];
        const scored = scoreQuestion(q, ans);
        total += scored.points;
        totalMax += q.weight;
        dimStats[q.dimension].score += scored.points;
        dimStats[q.dimension].max += q.weight;

        const percent = Math.round(scored.normalized * 100);
        const badgeClass = percent >= 80 ? "ok" : (percent >= 45 ? "mid" : "low");
        const badgeText = percent >= 80 ? "Сильный ответ" : (percent >= 45 ? "Частично" : "Нужно усилить");

        return {
          text: q.text,
          badgeClass,
          badgeText,
          userAnswerHtml: formatUserAnswer(q, ans),
          strong: q.review.strong,
          bullets: q.review.bullets
        };
      });

      const totalPercent = Math.round((total / totalMax) * 100);
      const level = getLevel(totalPercent);

      const dimensionEntries = Object.values(dimStats).map(d => ({
        ...d,
        percent: d.max ? Math.round((d.score / d.max) * 100) : 0
      }));

      return { totalPercent, level, dimensionEntries, reviews };
    }

    function scoreQuestion(q, ans) {
      if (q.type === "single") {
        const option = q.options[ans];
        const normalized = option ? option.score : 0;
        return { normalized, points: normalized * q.weight };
      }

      if (q.type === "multi") {
        const selected = Array.isArray(ans) ? ans : [];
        let raw = 0;
        selected.forEach(idx => {
          raw += q.options[idx] ? q.options[idx].score : 0;
        });
        raw = Math.max(0, Math.min(q.multiMaxScore, raw));
        const normalized = q.multiMaxScore ? raw / q.multiMaxScore : 0;
        return { normalized, points: normalized * q.weight };
      }

      const normalized = scoreOpen(ans, q.openRubric);
      return { normalized, points: normalized * q.weight };
    }

    function scoreOpen(answer, rubric) {
      const text = normalize(answer || "");
      if (!text || text.length < 8) return 0;

      let points = 0;
      (rubric.groups || []).forEach(group => {
        if (group.keywords.some(k => text.includes(normalize(k)))) {
          points += group.points;
        }
      });

      (rubric.penalties || []).forEach(pen => {
        if (pen.keywords.some(k => text.includes(normalize(k)))) {
          points -= pen.points;
        }
      });

      points = Math.max(0, Math.min(rubric.maxPoints, points));
      return rubric.maxPoints ? points / rubric.maxPoints : 0;
    }

    function formatUserAnswer(q, ans) {
      if (q.type === "single") {
        if (typeof ans !== "number") return "<em>Ответ не зафиксирован</em>";
        return escapeHtml(q.options[ans].text);
      }
      if (q.type === "multi") {
        if (!Array.isArray(ans) || ans.length === 0) return "<em>Ответ не зафиксирован</em>";
        return `<ul>${ans.map(idx => `<li>${escapeHtml(q.options[idx].text)}</li>`).join("")}</ul>`;
      }
      if (!ans) return "<em>Ответ не зафиксирован</em>";
      return nl2br(escapeHtml(ans));
    }

    function getLevel(percent) {
      if (percent >= 85) {
        return {
          title: "Ты уже держишь встречу в руках",
          text: "У тебя хорошо читается сильная логика встречи: ты не сводишь её к сбору информации и не уходишь в давление. Следующий шаг — ещё больше конкретики в цифрах, гипотезах и формулировках."
        };
      }
      if (percent >= 65) {
        return {
          title: "Хорошая база, но есть зоны реактивности",
          text: "Ты уже видишь, что встреча должна создавать ценность, но местами ещё не до конца держишь баланс между гипотезой, вопросом и спокойной уверенностью."
        };
      }
      if (percent >= 45) {
        return {
          title: "Пока ты чаще реагируешь, чем ведёшь",
          text: "База есть, но встреча у тебя ещё недостаточно собрана вокруг стоимости, риска, конструктивного напряжения и заранее подготовленных гипотез."
        };
      }
      return {
        title: "Логика встречи пока не собрана",
        text: "Сейчас ответы больше похожи на реактивный разговор или на попытку понравиться. Стоит ещё раз пройтись по ключевым идеям: status quo, гипотезы, ассертивность и ценность процесса продажи."
      };
    }

    function typeLabel(type) {
      if (type === "single") return "Один вариант ответа";
      if (type === "multi") return "Несколько вариантов ответа";
      return "Открытый вопрос";
    }

    function normalize(str) {
      return String(str || "")
        .toLowerCase()
        .replace(/ё/g, "е")
        .replace(/[«»"']/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }

    function escapeHtml(str) {
      return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function nl2br(str) {
      return String(str).replace(/\n/g, "<br>");
    }
  