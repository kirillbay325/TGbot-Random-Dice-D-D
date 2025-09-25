# TGbot-Random-Dice-D&D



---


# TGbot Random Dice D&D  
### A Professional Telegram Bot for D&D Dice Rolling

> **Roll dice in groups without spaces. Fully local. Multi-language. Zero dependencies.**  
>  
> *A lightweight, reliable tool for tabletop RPG players — built for real use cases.*

[![GitHub stars](https://img.shields.io/github/stars/kirillbay325/TGbot-Random-Dice-D-D?style=social&label=Stars)](https://github.com/kirillbay325/TGbot-Random-Dice-D-D/stargazers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js&logoColor=white)](https://nodejs.org)

---

## 🇷🇺 Русская версия / Russian Version

### 🎯 Обзор

**TGbot Random Dice D&D** — это лёгкий Telegram-бот для настольных ролевых игр, в частности Dungeons & Dragons.  
Он позволяет бросать кости по интуитивной нотации `NdK` (например, `5d6`, `1d20`, `3d10`) — **с пробелами или без**, и **прямо в групповых чатах**.

В отличие от многих ботов, он не требует внешних API, не хранит данные и не отслеживает пользователей.  
Всё вычисляется локально через `Math.random()`.  
Бот автоматически определяет язык пользователя по настройкам Telegram и отвечает на нём.

---

### ✅ Возможности

| Возможность | Описание |
|------------|----------|
| **Поддержка `/rollNdK`** | Работает с `/roll5d6`, `/roll 5d6`, `/roll5d6@TGbotRandomDiceDD` |
| **Многоязычность** | Автоматически отвечает на: **русском, английском, французском, немецком** |
| **Работа в группах** | Не нужно упоминать бота — `/roll5d6` работает в любом чате |
| **Валидация ввода** | Отклоняет неверные форматы: `5dabc`, `0d6`, `100d1000` |
| **Нет зависимостей** | Только Node.js — никаких API, облаков, трекеров |
| **Лёгкий** | < 10 КБ кода — быстро, безопасно, приватно |

---

### 🚀 Как использовать

Отправьте одну из следующих команд:

| Команда | Результат |
|--------|-----------|
| `/roll5d6` | Бросает 5 шестигранных кубиков |
| `/roll 5d6` | То же самое — пробелы не обязательны |
| `/roll5d6@TGbotRandomDiceDD` | Работает в групповых чатах |
| `/roll1d20` | Классический бросок атаки в D&D |
| `/roll3d10+2` | ❌ Не поддерживается — только `NdK` |

### ✅ Пример ответа


🎲 Бросок: 5d6
🔢 Всего: 18
1-й бросок: 4
2-й бросок: 3
3-й бросок: 5
4-й бросок: 2
5-й бросок: 4


> ✅ Бот отвечает на языке, указанном в вашем профиле Telegram.  
> ✅ Никакой регистрации. Никаких данных. Только результат.

---

### 🌍 Поддерживаемые языки

| Язык | Код локали | Пример ответа |
|------|------------|----------------|
| Русский | `ru` | `1-й бросок: 4` |
| Английский | `en` | `1st roll: 4` |
| Французский | `fr` | `1er lancer : 4` |
| Немецкий | `de` | `1. Wurf: 4` |

> 🌐 Язык определяется автоматически по настройкам вашего аккаунта Telegram.

---

### ⚙️ Технические детали

- **Платформа**: Telegram Bot API (Node.js)  
- **Библиотека**: `node-telegram-bot-api`  
- **Язык**: JavaScript (ES6+)  
- **Зависимости**: Только `node-telegram-bot-api`  
- **Хранение**: Нет — все вычисления локальные и эфемерные  
- **Ограничения**:  
  - Максимум кубиков: **99**  
  - Максимум граней: **999**

> ✅ Создан для **конфиденциальности и надёжности** — никакой аналитики, никаких логов, никаких куки.

---

### 🛠️ Запуск локально

Чтобы запустить бота у себя:

```bash
git clone https://github.com/kirillbay325/TGbot-Random-Dice-D-D.git
cd TGbot-Random-Dice-D-D
npm install
node index.js
```

> 🔑 Вам понадобится **токен бота** от [@BotFather](https://t.me/BotFather).  
> Замените `token` в `index.js` на свой.

---


### 💬 Поддержка и участие

Этот бот был создан как личный инструмент — но открыт, потому что **D&D заслуживает лучшие инструменты**.

Если вы находите этот проект полезным:
- ✅ **Поставьте звезду** — это поможет другим найти его  
- ✅ **Сообщите об ошибках** — если что-то работает не так  
- ✅ **Поделитесь** с вашей группой

> Проект не монетизируется.  
> Нет рекламы. Нет трекеров. Нет платных функций.  
> Только чистый, простой инструмент — созданный игроком для игроков.


---

## 🇬🇧 English Version

### 🎯 Overview

**TGbot Random Dice D&D** is a lightweight Telegram bot designed for **Dungeons & Dragons** and other tabletop RPG players.  
It allows users to roll dice using the intuitive `NdK` notation (e.g., `5d6`, `1d20`, `3d10`) — **with or without spaces**, and **directly in group chats**.

Unlike many bots that require complex syntax or external APIs, this bot runs entirely locally using `Math.random()` and supports **automatic language detection** based on the user’s Telegram profile.

---

### ✅ Features

| Feature | Description |
|--------|-------------|
| **`/rollNdK` Support** | Works with `/roll5d6`, `/roll 5d6`, or `/roll5d6@TGbotRandomDiceDD` |
| **Multi-Language** | Automatically detects and responds in: **Russian, English, French, German** |
| **Group Chat Compatible** | No need to mention the bot — `/roll5d6` works directly in any group |
| **Input Validation** | Rejects invalid formats (e.g., `5dabc`, `0d6`, `100d1000`) |
| **No External Dependencies** | Pure Node.js — no APIs, no cloud services, no tracking |
| **Lightweight** | < 10 KB of source code — fast, secure, and private |

---

### 🚀 How to Use

Simply send one of the following commands:

| Command | Result |
|--------|--------|
| `/roll5d6` | Rolls 5 six-sided dice |
| `/roll 5d6` | Same result — spaces are optional |
| `/roll5d6@TGbotRandomDiceDD` | Works in group chats |
| `/roll1d20` | Classic D&D attack roll |
| `/roll3d10+2` | ❌ Not supported — only `NdK` format |

### ✅ Example Output

```
🎲 Roll: 5d6
🔢 Total: 18
1st roll: 4
2nd roll: 3
3rd roll: 5
4th roll: 2
5th roll: 4
```

> ✅ The bot responds in the language of your Telegram profile.  
> ✅ No registration required. No data stored.

---

### 🌍 Supported Languages

| Language | Locale Code | Example Response |
|----------|-------------|------------------|
| Russian | `ru` | `1st roll: 4` |
| English | `en` | `1st roll: 4` |
| French | `fr` | `1er lancer : 4` |
| German | `de` | `1. Wurf: 4` |

> 🌐 Language is detected automatically from your Telegram account settings.

---

### ⚙️ Technical Details

- **Platform**: Telegram Bot API (Node.js)  
- **Core**: `node-telegram-bot-api`  
- **Language**: JavaScript (ES6+)  
- **Dependencies**: None beyond `node-telegram-bot-api`  
- **Storage**: None — all calculations are local and ephemeral  
- **Limits**:  
  - Max dice: **99**  
  - Max sides: **999**

> ✅ Designed for **privacy and reliability** — no analytics, no logs, no cookies.

---

### 🛠️ Self-Hosting

To run this bot locally:

```bash
git clone https://github.com/kirillbay325/TGbot-Random-Dice-D-D.git
cd TGbot-Random-Dice-D-D
npm install
node index.js
```

> 🔑 You’ll need a **Telegram Bot Token** from [@BotFather](https://t.me/BotFather).  
> Replace `token` in `index.js` with your own.

---


### 💬 Support & Contribution

This bot was built as a personal tool — but it’s open-sourced because **D&D deserves better tools**.

If you find this project useful:
- ✅ **Star this repository** — it helps others discover it
- ✅ **Report issues** — if something doesn’t work as expected
- ✅ **Share it** with your RPG group

> This project is not monetized.  
> No ads. No tracking. No premium features.  
> Just a clean, simple tool — built by a player, for players.


---

## 🇫🇷 Version française

### 🎯 Aperçu

**TGbot Random Dice D&D** est un bot Telegram léger conçu pour les joueurs de jeux de rôle sur table, notamment **Dungeons & Dragons**.  
Il permet de lancer des dés selon la notation intuitive `NdK` (ex. : `5d6`, `1d20`, `3d10`) — **avec ou sans espace** et **directement dans les groupes**.

Contrairement à de nombreux bots, il n’utilise aucune API externe, ne stocke aucune donnée et ne traque pas les utilisateurs.  
Tous les calculs sont effectués localement avec `Math.random()`.  
Le bot détecte automatiquement la langue de l’utilisateur via les paramètres de son compte Telegram et répond dans cette langue.

---

### ✅ Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| **Support `/rollNdK`** | Fonctionne avec `/roll5d6`, `/roll 5d6`, `/roll5d6@TGbotRandomDiceDD` |
| **Multi-langue** | Répond automatiquement en : **russe, anglais, français, allemand** |
| **Compatible groupes** | Pas besoin de mentionner le bot — `/roll5d6` fonctionne directement |
| **Validation des entrées** | Rejette les formats invalides : `5dabc`, `0d6`, `100d1000` |
| **Aucune dépendance externe** | Node.js pur — pas d’API, pas de cloud, pas de suivi |
| **Léger** | < 10 Ko de code — rapide, sécurisé, privé |

---

### 🚀 Comment l’utiliser

Envoyez l’une des commandes suivantes :

| Commande | Résultat |
|---------|----------|
| `/roll5d6` | Lance 5 dés à 6 faces |
| `/roll 5d6` | Même résultat — les espaces sont optionnels |
| `/roll5d6@TGbotRandomDiceDD` | Fonctionne dans les groupes |
| `/roll1d20` | Lancer d’attaque classique en D&D |
| `/roll3d10+2` | ❌ Non supporté — seul le format `NdK` est accepté |

### ✅ Exemple de réponse

```
🎲 Lancer : 5d6
🔢 Total : 18
1er lancer : 4
2e lancer : 3
3e lancer : 5
4e lancer : 2
5e lancer : 4
```

> ✅ Le bot répond dans la langue de votre profil Telegram.  
> ✅ Aucune inscription requise. Aucune donnée stockée.

---

### 🌍 Langues supportées

| Langue | Code région | Exemple de réponse |
|--------|-------------|---------------------|
| Russe | `ru` | `1er lancer : 4` |
| Anglais | `en` | `1st roll: 4` |
| Français | `fr` | `1er lancer : 4` |
| Allemand | `de` | `1. Wurf: 4` |

> 🌐 La langue est détectée automatiquement via les paramètres de votre compte Telegram.

---

### ⚙️ Détails techniques

- **Plateforme** : Telegram Bot API (Node.js)  
- **Bibliothèque** : `node-telegram-bot-api`  
- **Langage** : JavaScript (ES6+)  
- **Dépendances** : Uniquement `node-telegram-bot-api`  
- **Stockage** : Aucun — tous les calculs locaux et éphémères  
- **Limites** :  
  - Max dés : **99**  
  - Max faces : **999**

> ✅ Conçu pour la **confidentialité et la fiabilité** — aucune analyse, aucun journal, aucun cookie.

---

### 🛠️ Hébergement local

Pour lancer le bot localement :

```bash
git clone https://github.com/kirillbay325/TGbot-Random-Dice-D-D.git
cd TGbot-Random-Dice-D-D
npm install
node index.js
```

> 🔑 Vous aurez besoin d’un **jeton de bot** depuis [@BotFather](https://t.me/BotFather).  
> Remplacez `token` dans `index.js` par le vôtre.

---
### 

### 💬 Support et contribution

Ce bot a été créé comme outil personnel — mais il est open-source, car **D&D mérite de meilleurs outils**.

Si vous trouvez ce projet utile :
- ✅ **Étoilez ce dépôt** — cela aide les autres à le découvrir  
- ✅ **Signalez les bugs** — si quelque chose ne fonctionne pas comme prévu  
- ✅ **Partagez-le** avec votre groupe de jeu

> Ce projet n’est pas monétisé.  
> Pas de publicité. Pas de suivi. Pas de fonctionnalités premium.  
> Juste un outil propre et simple — conçu par un joueur, pour les joueurs.


---

## 🇩🇪 Deutsche Version

### 🎯 Übersicht

**TGbot Random Dice D&D** ist ein leichtgewichtiger Telegram-Bot für Tischrollenspiele wie **Dungeons & Dragons**.  
Er ermöglicht das Würfeln mit der intuitiven `NdK`-Notation (z. B. `5d6`, `1d20`, `3d10`) — **mit oder ohne Leerzeichen** und **direkt in Gruppenchats**.

Im Gegensatz zu vielen anderen Bots verwendet er keine externen APIs, speichert keine Daten und verfolgt Nutzer nicht.  
Alle Berechnungen erfolgen lokal mit `Math.random()`.  
Der Bot erkennt automatisch die Sprache des Nutzers über die Telegram-Einstellungen und antwortet in dieser Sprache.

---

### ✅ Funktionen

| Funktion | Beschreibung |
|----------|--------------|
| **Unterstützung von `/rollNdK`** | Funktioniert mit `/roll5d6`, `/roll 5d6`, `/roll5d6@TGbotRandomDiceDD` |
| **Mehrsprachigkeit** | Antwortet automatisch auf: **Russisch, Englisch, Französisch, Deutsch** |
| **Kompatibel mit Gruppen** | Keine Erwähnung des Bots nötig — `/roll5d6` funktioniert direkt |
| **Eingabevalidierung** | Lehnt ungültige Formate ab: `5dabc`, `0d6`, `100d1000` |
| **Keine externen Abhängigkeiten** | Reiner Node.js — keine APIs, keine Cloud, keine Tracking |
| **Leichtgewichtig** | < 10 KB Quellcode — schnell, sicher, privat |

---

### 🚀 Wie man es nutzt

Senden Sie einen der folgenden Befehle:

| Befehl | Ergebnis |
|--------|----------|
| `/roll5d6` | Wirft 5 sechsseitige Würfel |
| `/roll 5d6` | Dasselbe — Leerzeichen sind optional |
| `/roll5d6@TGbotRandomDiceDD` | Funktioniert in Gruppenchats |
| `/roll1d20` | Klassischer Angriffswurf in D&D |
| `/roll3d10+2` | ❌ Nicht unterstützt — nur `NdK`-Format |

### ✅ Beispiel-Antwort

```
🎲 Wurf: 5d6
🔢 Gesamt: 18
1. Wurf: 4
2. Wurf: 3
3. Wurf: 5
4. Wurf: 2
5. Wurf: 4
```

> ✅ Der Bot antwortet in der Sprache Ihres Telegram-Profils.  
> ✅ Keine Registrierung nötig. Keine Daten gespeichert.

---

### 🌍 Unterstützte Sprachen

| Sprache | Sprachcode | Beispielantwort |
|---------|------------|------------------|
| Russisch | `ru` | `1. Wurf: 4` |
| Englisch | `en` | `1st roll: 4` |
| Französisch | `fr` | `1er lancer : 4` |
| Deutsch | `de` | `1. Wurf: 4` |

> 🌐 Die Sprache wird automatisch aus den Telegram-Kontoeinstellungen erkannt.

---

### ⚙️ Technische Details

- **Plattform**: Telegram Bot API (Node.js)  
- **Bibliothek**: `node-telegram-bot-api`  
- **Sprache**: JavaScript (ES6+)  
- **Abhängigkeiten**: Nur `node-telegram-bot-api`  
- **Speicher**: Keiner — alle Berechnungen lokal und ephemeral  
- **Grenzen**:  
  - Max. Würfel: **99**  
  - Max. Seiten: **999**

> ✅ Entwickelt für **Privatsphäre und Zuverlässigkeit** — keine Analyse, keine Logs, keine Cookies.

---

### 🛠️ Lokale Ausführung

Um den Bot lokal auszuführen:

```bash
git clone https://github.com/kirillbay325/TGbot-Random-Dice-D-D.git
cd TGbot-Random-Dice-D-D
npm install
node index.js
```

> 🔑 Sie benötigen einen **Telegram-Bot-Token** von [@BotFather](https://t.me/BotFather).  
> Ersetzen Sie `token` in `index.js` durch Ihren eigenen.


---

### 💬 Unterstützung und Mitwirkung

Dieser Bot wurde als persönliches Werkzeug erstellt — aber als Open-Source veröffentlicht, weil **D&D bessere Werkzeuge verdient**.

Wenn Sie dieses Projekt nützlich finden:
- ✅ **Sterne vergeben** — hilft anderen, es zu entdecken  
- ✅ **Fehler melden** — wenn etwas nicht wie erwartet funktioniert  
- ✅ **Teilen** mit Ihrer RPG-Gruppe


```



