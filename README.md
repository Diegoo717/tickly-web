<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="80" alt="React Logo"/>

# 🎟️ Tickly Web

**AI-Powered Event Discovery: Find events, buy tickets, connect with attendees**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

🌐 **[Live Demo](https://tickly.diecode.lat/)**

</div>

---

## 🎯 About The Project

**Tickly Web** is a modern frontend for AI-powered event discovery and ticket management. Built with React, TypeScript, and Vite, it connects to the [Tickly API](https://tickly-api-production.up.railway.app/api) to deliver intelligent event recommendations, secure Stripe payments, and real-time features.

### What Makes Tickly Special?

- 🤖 **AI-Powered Search** - Natural language event discovery
- 💳 **Stripe Payments** - Secure checkout with payment intents
- 🎫 **Ticket Dashboard** - View QR codes and download PDFs
- 🔐 **Supabase Auth** - Google OAuth and email login
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Lightning Fast** - Built with Vite for instant HMR

---

## 🛠️ Tech Stack

**Core:** React 18 · TypeScript · Vite  
**Styling:** CSS Modules · Responsive Design  
**State:** Context API · React Router DOM  
**Services:** Supabase · Stripe · Axios  
**Backend:** [Tickly API](https://github.com/soydiegomen/tickly-api)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ · npm or yarn

### Installation

```bash
# Clone and install
git clone https://github.com/your-username/tickly-web.git
cd tickly-web
npm install

# Configure environment
cp .env.example .env
# Edit .env with your credentials

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

### Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> 💡 Get keys: [Supabase Dashboard](https://supabase.com/dashboard)

---

## ✨ Key Features

### 🔍 Intelligent Discovery

Natural language search powered by Perplexity AI · Visual event cards · Location and date filters

### 🎟️ Ticket Management

Personal dashboard · QR code display · PDF downloads · Purchase history via Stripe

### 🎨 Modern UX

Responsive design · Light/Dark theme · Smooth animations · Mobile-first

---

## 📜 Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # ESLint check
npm run type-check   # TypeScript validation
```

---

## 🔌 API Integration

Connects to [Tickly API](https://tickly-api-production.up.railway.app) for:

- AI event search via Perplexity
- Stripe payment processing
- Ticket generation and QR codes
- Supabase authentication

Full API docs: [Swagger UI](https://tickly-api-production.up.railway.app/api)

---

## 📁 Project Structure

```
tickly-web/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route pages
│   ├── context/          # Global state management
│   ├── hooks/            # Custom React hooks
│   ├── services/         # API calls and integrations
│   ├── lib/              # Third-party library configs
│   ├── router/           # Route definitions
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Helper functions
│   ├── assets/           # Images, icons, fonts
│   └── App.tsx           # Main component
├── public/
└── .env
```

---

## 📄 License

© 2025 Tickly. Personal portfolio project - not licensed for public use.

---

## 📞 Contact

**Diego Magaña Álvarez**  
_Full-Stack Developer_

soydiegoo71@gmail.com | +52 445 105 9192

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diego-magana-dev)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/soydiegomen)

---

## 🙏 Acknowledgments

[React](https://react.dev/) · [Vite](https://vitejs.dev/) · [TypeScript](https://www.typescriptlang.org/) · [Supabase](https://supabase.com/) · [Stripe](https://stripe.com/docs)

---

<div align="center">

⭐ **Star this project if you find it useful!**

**Tickly** - Discover events intelligently with AI 🎫

Made with ❤️ and ☕

</div>
