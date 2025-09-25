const TelegramApi = require('node-telegram-bot-api');

const token = '8310681939:AAGs3atKmCwNxjuez57atd0wpUzSerSmRx4';
const bot = new TelegramApi(token, { polling: true });

const chats = {};

bot.setMyCommands([
    { command: '/start', description: 'Приветствие' },
    { command: '/info', description: 'Информация о боте' },
    { command: '/help', description: 'Как пользоваться' },
    { command: '/roll', description: 'Ролит' },
]);

const messages = {
    ru: {
        start: `Привет, {first_name}! 👋\n\nЭто бот для бросков кубиков в стиле D&D (Dungeons & Dragons).\n\n✨ Если тебе нравится мой проект — поддержи меня на GitHub:\nhttps://github.com/kirillbay325  \nПоставь звёздочку ⭐ — это поможет мне развивать бота и другие проекты!`,
        info: `
🤖 Это бот для бросков кубиков в стиле D&D (Dungeons & Dragons).

🔹 Используй команду: /roll 5d6
🔹 Где 5 — количество кубиков, 6 — количество граней
🔹 Поддерживает до 99 кубиков и до 999 граней

💡 Пример: /roll 2d20 → бросишь 2 двадцатигранных кубика!
            `.trim(),
        help: `
📘 Как использовать бота:

1. Напиши: /roll Ndk
   - N — число кубиков (1–99)
   - d — буква "d"
   - k — число граней (1–999)

2. Примеры:
   • /roll 1d6   → бросить 1 шестигранный кубик
   • /roll 3d10  → бросить 3 десятигранных кубика
   • /roll 5d20  → бросить 5 двадцатигранных кубиков

3. Ответ будет в формате:
   🎲 Бросок: 5d20
   🔢 Всего: 78
   1-й бросок: 15
   2-й бросок: 3
   3-й бросок: 22
   4-й бросок: 17
   5-й бросок: 21

⚠️ Если напишешь что-то не так — бот скажет, как правильно.
            `.trim(),
        rollInvalidFormat: '❌ Формат должен быть: Ndk\nПример: /roll 5d6',
        rollMissingArgs: '📌 Напиши /roll Ndk, например: /roll 5d6 :dice',
        rollLimitDice: '🔢 Значение N (число кубиков) должно быть от 1 до 99',
        rollLimitSides: '🎲 Значение K (число граней) должно быть от 1 до 999',
        rollResult: (dice, sides, total, rolls) => {
            let res = `🎲 Бросок: ${dice}d${sides}\n`;
            res += `🔢 Всего: ${total}\n\n`;
            rolls.forEach((roll, index) => {
                res += `${index + 1}-й бросок: ${roll}\n`;
            });
            return res;
        }
    },

    en: {
        start: `Hello, {first_name}! 👋\n\nThis is a dice roller bot for D&D (Dungeons & Dragons).\n\n✨ If you like my project, please support me on GitHub:\nhttps://github.com/kirillbay325  \nLeave a star ⭐ — it helps me keep developing bots and other projects!`,
        info: `
🤖 This is a dice roller bot for D&D (Dungeons & Dragons).

🔹 Use: /roll 5d6
🔹 Where 5 = number of dice, 6 = number of sides
🔹 Supports up to 99 dice and 999 sides

💡 Example: /roll 2d20 → roll two 20-sided dice!
            `.trim(),
        help: `
📘 How to use:

1. Type: /roll Ndk
   - N = number of dice (1–99)
   - d = letter "d"
   - k = number of sides (1–999)

2. Examples:
   • /roll 1d6   → roll one six-sided die
   • /roll 3d10  → roll three ten-sided dice
   • /roll 5d20  → roll five twenty-sided dice

3. Response format:
   🎲 Roll: 5d20
   🔢 Total: 78
   1st roll: 15
   2nd roll: 3
   3rd roll: 22
   4th roll: 17
   5th roll: 21

⚠️ If you type something wrong — the bot will tell you how to fix it.
            `.trim(),
        rollInvalidFormat: '❌ Format must be: Ndk\nExample: /roll 5d6',
        rollMissingArgs: '📌 Type /roll Ndk, e.g. /roll 5d6',
        rollLimitDice: '🔢 N (number of dice) must be between 1 and 99',
        rollLimitSides: '🎲 K (number of sides) must be between 1 and 999',
        rollResult: (dice, sides, total, rolls) => {
            let res = `🎲 Roll: ${dice}d${sides}\n`;
            res += `🔢 Total: ${total}\n\n`;
            rolls.forEach((roll, i) => {
                const suffix = ['st', 'nd', 'rd'][i] || 'th';
                res += `${i + 1}${suffix} roll: ${roll}\n`;
            });
            return res;
        }
    },

    fr: {
        start: `Bonjour, {first_name}! 👋\n\nCeci est un bot de lancer de dés pour le D&D (Dungeons & Dragons).\n\n✨ Si tu aimes mon projet, soutiens-moi sur GitHub :\nhttps://github.com/kirillbay325  \nMets une étoile ⭐ — ça m'aide à continuer à développer ce bot et d'autres projets !`,
        info: `
🤖 Ce bot permet de lancer des dés au style D&D (Dungeons & Dragons).

🔹 Utilise : /roll 5d6
🔹 Où 5 = nombre de dés, 6 = nombre de faces
🔹 Supporte jusqu’à 99 dés et 999 faces

💡 Exemple : /roll 2d20 → lance deux dés à 20 faces !
            `.trim(),
        help: `
📘 Comment utiliser :

1. Tape : /roll Ndk
   - N = nombre de dés (1–99)
   - d = lettre "d"
   - k = nombre de faces (1–999)

2. Exemples :
   • /roll 1d6   → lance un dé à 6 faces
   • /roll 3d10  → lance trois dés à 10 faces
   • /roll 5d20  → lance cinq dés à 20 faces

3. Format de réponse :
   🎲 Lancer : 5d20
   🔢 Total : 78
   1er lancer : 15
   2e lancer : 3
   3e lancer : 22
   4e lancer : 17
   5e lancer : 21

⚠️ Si tu tapes mal, le bot t’indiquera la bonne forme.
            `.trim(),
        rollInvalidFormat: '❌ Format doit être : Ndk\nExemple : /roll 5d6',
        rollMissingArgs: '📌 Tape /roll Ndk, par ex. /roll 5d6',
        rollLimitDice: '🔢 N (nombre de dés) doit être entre 1 et 99',
        rollLimitSides: '🎲 K (nombre de faces) doit être entre 1 et 999',
        rollResult: (dice, sides, total, rolls) => {
            let res = `🎲 Lancer : ${dice}d${sides}\n`;
            res += `🔢 Total : ${total}\n\n`;
            rolls.forEach((roll, i) => {
                res += `${i + 1}ᵉ lancer : ${roll}\n`;
            });
            return res;
        }
    },

    de: {
        start: `Hallo, {first_name}! 👋\n\nDies ist ein Würfel-Generator für D&D (Dungeons & Dragons).\n\n✨ Wenn dir mein Projekt gefällt, unterstütze mich auf GitHub:\nhttps://github.com/kirillbay325  \nGib mir einen Stern ⭐ — das hilft mir, diesen Bot und andere Projekte weiterzuentwickeln!`,
        info: `
🤖 Dies ist ein Würfel-Generator im Stil von D&D (Dungeons & Dragons).

🔹 Verwende: /roll 5d6
🔹 Dabei ist 5 = Anzahl der Würfel, 6 = Anzahl der Seiten
🔹 Unterstützt bis zu 99 Würfel und 999 Seiten

💡 Beispiel: /roll 2d20 → wirfst zwei 20-seitige Würfel!
            `.trim(),
        help: `
📘 Wie man es benutzt:

1. Gib ein: /roll Ndk
   - N = Anzahl der Würfel (1–99)
   - d = Buchstabe "d"
   - k = Anzahl der Seiten (1–999)

2. Beispiele:
   • /roll 1d6   → wirft einen sechsseitigen Würfel
   • /roll 3d10  → wirft drei zehnseitige Würfel
   • /roll 5d20  → wirft fünf zwanzigseitige Würfel

3. Antwortformat:
   🎲 Wurf: 5d20
   🔢 Gesamt: 78
   1. Wurf: 15
   2. Wurf: 3
   3. Wurf: 22
   4. Wurf: 17
   5. Wurf: 21

⚠️ Wenn du etwas falsch eingibst, sagt dir der Bot, wie es richtig geht.
            `.trim(),
        rollInvalidFormat: '❌ Format muss sein: Ndk\nBeispiel: /roll 5d6',
        rollMissingArgs: '📌 Gib /roll Ndk ein, z.B. /roll 5d6',
        rollLimitDice: '🔢 N (Anzahl der Würfel) muss zwischen 1 und 99 liegen',
        rollLimitSides: '🎲 K (Anzahl der Seiten) muss zwischen 1 und 999 liegen',
        rollResult: (dice, sides, total, rolls) => {
            let res = `🎲 Wurf: ${dice}d${sides}\n`;
            res += `🔢 Gesamt: ${total}\n\n`;
            rolls.forEach((roll, i) => {
                res += `${i + 1}. Wurf: ${roll}\n`;
            });
            return res;
        }
    }
};

const start = () => {
    bot.on('message', async msg => {

        if (!msg.text || msg.text.trim() === '') return;

        const text = msg.text.trim();
        const chatId = msg.chat.id;

        const langCode = msg.from.language_code;
        const lang = ['ru', 'en', 'fr', 'de'].includes(langCode) ? langCode : 'en';

        if (text === '/start') {
            const firstName = msg.from.first_name || 'Друг';
            const personalizedMessage = messages[lang].start.replace('{first_name}', firstName);
            return bot.sendMessage(chatId, personalizedMessage);
        }

        if (text === '/info') {
            return bot.sendMessage(chatId, messages[lang].info);
        }

        if (text === '/help') {
            return bot.sendMessage(chatId, messages[lang].help);
        }

                if (text.startsWith('/roll')) {
            let args = '';

            // ✅ Убираем @имябота, если есть — например: /roll5d6@RandomniqDiceForDandDBot
            const cleanText = text.split('@')[0];

            // ✅ СЛУЧАЙ 1: /roll 5d6 — с пробелом
            if (cleanText.includes(' ')) {
                args = cleanText.split(' ').slice(1).join(' ').trim();
            }
            // ✅ СЛУЧАЙ 2: /roll5d6 — без пробела (даже с @ботом)
            else {
                const match = cleanText.match(/^\/roll(\d+d\d+)$/);
                if (match) {
                    args = match[1]; // ← вот твой "5d6", "10d20" и т.д.
                }
            }

            // Если аргументов нет — ошибка
            if (!args) {
                return bot.sendMessage(chatId, messages[lang].rollMissingArgs);
            }

            // Проверяем формат Ndk
            const diceMatch = args.match(/^(\d+)d(\d+)$/);
            if (!diceMatch) {
                return bot.sendMessage(chatId, messages[lang].rollInvalidFormat);
            }

            const numberOfDice = parseInt(diceMatch[1]);
            const sides = parseInt(diceMatch[2]);

            if (numberOfDice < 1 || numberOfDice > 99) {
                return bot.sendMessage(chatId, messages[lang].rollLimitDice);
            }
            if (sides < 1 || sides > 999) {
                return bot.sendMessage(chatId, messages[lang].rollLimitSides);
            }

            const rolls = [];
            for (let i = 0; i < numberOfDice; i++) {
                rolls.push(Math.floor(Math.random() * sides) + 1);
            }

            const sum = rolls.reduce((acc, num) => acc + num, 0);

            return bot.sendMessage(chatId, messages[lang].rollResult(numberOfDice, sides, sum, rolls));
        }

        return bot.sendMessage(chatId, `Я тебя не понял, прочти внимательнее /info и сделай новый запрос`);
    });
};

start();

console.log('[LOG] Бот запущен. Ожидает сообщения...');