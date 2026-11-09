# Abhi's Portfolio 🚀

A personal developer portfolio built with React, showcasing my GitHub repositories,
skills, and projects — with live deployed links and a feedback system.

🔗 **Live Site:** [abhinandan029.github.io/My-Portfolio](https://abhinandan029.github.io/My-Portfolio/)

---

## Features

- 👤 **About Me** — introduction, skills, and background
- 📁 **GitHub Repositories** — live fetched from GitHub API, always up to date
- 🚀 **Projects** — showcased with deployed links and repository links
- 💬 **Feedback Form** — visitors can leave feedback on projects and skills via EmailJS
- 📱 **Responsive** — works across mobile, tablet, and desktop

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React + Vite | UI framework and build tool |
| GitHub API | Fetches live repository data |
| EmailJS | Handles feedback form submissions without a backend |
| GitHub Pages | Hosting and deployment |

---

## What I Built

- Integrated GitHub API to dynamically fetch and display repositories
  without manual updates
- Built a serverless feedback system using EmailJS — no backend needed
- Designed a clean responsive layout using React component architecture

## Feedback email setup

The feedback form uses EmailJS, so it works on GitHub Pages without a backend.

1. Create an EmailJS service and email template.
2. Set the following variables in a local `.env` file (use `.env.example` as a
   starting point):

   ```text
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. Configure the EmailJS template to include these variables:
   `{{from_name}}`, `{{feedback_type}}`, and `{{message}}`.
   Set the template's **To Email** to the address where feedback should arrive.
4. Add the same variables to the GitHub Actions/deployment environment before
   running `npm run deploy`.

---

## Author

**Abhinandan J Manakapure**
