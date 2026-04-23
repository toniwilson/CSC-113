# PRD — Vocabulary Builder Game (Option B)

## 1. Project Overview

**What it does**  
The Vocabulary Builder Game is a fast‑paced browser game where users match words to their correct definitions before the timer runs out. The game updates instantly as the user selects answers, creating a simple but engaging learning experience.

**Who it’s for**  
This tool is designed for students, language learners, and anyone who wants to improve vocabulary through quick, interactive practice.

**What problem it solves**  
Traditional vocabulary study can feel repetitive and boring. This game turns vocabulary building into a fun challenge that encourages engagement, improves recall, and makes learning feel rewarding.

---

## 2. Core Features (MVP)

### Feature 1 — Word–Definition Matching
**Description:** Displays a vocabulary word and multiple possible definitions. The user selects the correct one to earn points.  
**Why it matters:** This is the core mechanic that transforms vocabulary practice into an interactive game.  
**Success Criteria:**  
- A new word loads after each selection  
- Correct answers increase the score  
- Incorrect answers do not  
- Choices update instantly without page reloads  

### Feature 2 — Countdown Timer
**Description:** A visible timer counts down (e.g., 30 seconds) while the user plays.  
**Why it matters:** The timer adds urgency and makes the game feel fast‑paced and exciting.  
**Success Criteria:**  
- Timer starts when the game begins  
- Game ends automatically at zero  
- Final score is displayed  

### Feature 3 — Score Tracking
**Description:** Tracks how many correct answers the user gets during the round.  
**Why it matters:** Scoring gives users a sense of progress and motivates improvement.  
**Success Criteria:**  
- Score increases only on correct answers  
- Score is visible during gameplay  
- Score appears again on the Game Over screen  

---

## 3. User Experience

### What the user sees first
A simple start screen with the game title, a short description (“Match as many words as you can before time runs out”), and a **Start Game** button.

### What the user can do
- Click **Start Game**  
- View a word and 3–4 definition choices  
- Select answers  
- Watch the timer and score update in real time  

### What happens when they interact
- Correct answer → score increases, new word appears  
- Incorrect answer → no score change, new word appears  
- Timer reaches zero → game ends, final score displayed, “Play Again” button appears  

---

## 4. Technical Constraints
- Must be a **single‑page application**  
- Must run entirely in the **web browser**  
- **No server‑side code**  
- All vocabulary words stored in a **local JavaScript array**  
- DOM updates must happen without page reloads  
- Must be simple enough to prototype in **one sprint**  

---

## 5. Out of Scope (Not Building Yet)
These features are intentionally excluded from the MVP:

- User accounts or login system  
- Saving scores between sessions  
- Difficulty levels  
- Large vocabulary database or API integration  
- Animations, sound effects, or advanced UI  
- Multiplayer or competitive modes  
- Adaptive learning or spaced repetition  

The MVP focuses only on the core loop:  
**word → definitions → timer → score**
