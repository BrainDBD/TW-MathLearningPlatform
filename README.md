# Math Learning Platform

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How to Use](#how-to-use)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running](#running)
- [Project Structure](#project-structure)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Overview

This is a full-stack educational web application for high-school mathematics, built with Node.js and Express. The platform provides structured lessons, an interactive calculator, and topic-specific quizzes, with user registration and session-based authentication.

---

## Features

- **User Authentication** — register, log in, and log out with server-side session management
- **Lesson Pages** — four dedicated chapters with MathJax-rendered formulas:
  - Laws of Composition
  - Geometry
  - Trigonometry
  - Derivatives & Integrals
- **Interactive Calculator** — supports addition, subtraction, multiplication, division, modulo, and exponentiation
- **Quiz System** — multiple question sets per topic with instant answer feedback, built entirely in vanilla JavaScript
- **Server-side Rendering** — dynamic pages using EJS templates (e.g., personalised welcome message for logged-in users)
- **Custom 404 Page** — graceful handling of unknown routes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Templating | EJS |
| Styling | Vanilla CSS |
| Math Rendering | MathJax 3 |
| Authentication | express-session |
| Form Parsing | formidable |
| Data Store | JSON flat file |

---

## How to Use

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/BrainDBD/TW-MathLearningPlatform.git
cd TW-MathLearningPlatform
npm install
```

### Running

```bash
node app.js
```

Open your browser at **http://localhost:3000**.

---

## Project Structure

```
├── app.js                  # Express server, routes, auth logic
├── stil.css                # Global stylesheet
├── calculator.js           # Client-side calculator logic
├── quiz.js                 # Client-side quiz engine
├── users.json              # User store (flat-file)
├── views/
│   └── pagini/
│       ├── login.ejs       # Login & register page
│       ├── logout.ejs      # Logout confirmation
│       └── main.ejs        # Authenticated home page
├── calculator.html         # Calculator page
├── quiz.html               # Quiz page
├── legi.html               # Laws of Composition lesson
├── geometrie.html          # Geometry lesson
├── trigonometrie.html      # Trigonometry lesson
├── derivate.html           # Derivatives & Integrals lesson
└── 404.html                # Custom not-found page
```

---

## Known Limitations

- Passwords are stored in plain text in `users.json` — this is intentional for academic simplicity and **not suitable for production use**. A real deployment would use bcrypt for hashing and a proper database.
- No HTTPS — should be deployed behind a reverse proxy (e.g., nginx) with TLS in a production environment.

---

## License

This project was built for educational purposes. Feel free to expand it.
