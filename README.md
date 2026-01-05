# Developer Portfolio

**Author: Sumit Kumar Gupta**

A modern, responsive, and customizable portfolio template for developers and freelancers.

---

## Overview

A professional portfolio template built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features a modern App Router architecture, server components, and data-driven configuration for easy customization.

---

## Demo

Live demo link can be added here.

https://sumit-portfolio-kappa.vercel.app/

---

## Features

* Cutting-edge tech stack: Next.js 16, React 19, Tailwind CSS 4
* Fully responsive design
* SEO optimized
* Fast performance with server components
* App Router architecture
* Easy data-driven customization
* Contact form with Email / Telegram support
* Optional blog integration
* Dark theme support
* Docker support
* Google Analytics (GTM)

---

## Sections

* Hero
* About Me
* Experience
* Skills
* Projects
* Education
* Blog (optional)
* Contact

---

## Tech Stack

* Next.js 16.0.1
* React 19.2.0
* Tailwind CSS 4.x
* SASS
* Nodemailer
* Axios
* Docker

---

## Installation

### Prerequisites

* Node.js v18.17.0+
* Git
* pnpm / npm / yarn

### Setup

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/developer-portfolio.git
cd developer-portfolio
pnpm install
pnpm dev
```

---

## Environment Variables

Create a `.env` file:

```env
NEXT_PUBLIC_GTM=
NEXT_PUBLIC_APP_URL=

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

EMAIL_ADDRESS=
GMAIL_PASSKEY=
```

> You can use **Telegram only**, **Email only**, or both.

---

## Customize Portfolio Data

Edit files inside:

```
utils/data/
```

### Example: `personal-data.js`

```js
export const personalData = {
  name: "Sumit Kumar Gupta",
  designation: "Software Developer",
  description: "Your short bio here",
  email: "your.email@gmail.com",
  github: "https://github.com/yourusername",
  linkedIn: "https://linkedin.com/in/yourusername",
};
```

---

## Deployment

### Vercel (Recommended)

* Import repo
* Add environment variables
* Deploy

### Netlify / Docker

Standard Next.js deployment supported.

---

## Tutorials

### Gmail App Password

* Enable 2-Step Verification
* Generate App Password for Mail
* Add to `.env`

### Telegram Bot

* Create bot via @BotFather
* Get token & chat ID
* Add to `.env`

---

## License

MIT License

---

## Support

For improvements or issues, feel free to open a pull request.

---

**Maintained by: Sumit Kumar Gupta**
