# Notes Summarizer

A powerful AI-powered application that transforms meeting transcripts and notes into structured, actionable summaries with a modern, ChatGPT-inspired interface.

## ✨ Features

- **📁 File Upload**: Upload text transcripts (.txt files) easily
- **🎯 Custom Prompts**: Specify exactly how you want your summary formatted
- **🤖 AI-Powered**: Uses Google's Gemini model for intelligent summarization
- **✏️ Editable Summaries**: Review and edit generated summaries before sharing
- **📧 Email Sharing**: Send summaries with custom subjects directly to team members
- **💾 Download**: Save summaries as text files for offline use
- **🎨 Modern UI**: Dark theme with ChatGPT-inspired design and responsive layout
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices

## 📋 Prerequisites

- Node.js 18+
- Google AI API key
- Email account for sending summaries

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Add your Google AI API key and email credentials
   - See [SETUP.md](./SETUP.md) for detailed instructions

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🛠️ How It Works

1. **Upload**: Upload a text transcript (meeting notes, call transcript, etc.)
2. **Customize**: Input custom instructions (e.g., "Summarize in bullet points for executives")
3. **Generate**: Click "Generate Summary" to create an AI-powered summary
4. **Edit**: Review and edit the generated summary as needed
5. **Share**: Send the summary via email with custom subject or download it

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [ShadCN UI](https://ui.shadcn.com/) for accessible, customizable components

- **Backend/API:**
  - Next.js API routes (`/api/generate-summary`, `/api/send-email`)
  - [@google/genai](https://www.npmjs.com/package/@google/genai) for AI-powered summarization (Gemini model)
  - [Nodemailer](https://nodemailer.com/) for sending emails

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Detailed installation and configuration
- [API Reference](./docs/api.md) - API endpoint documentation

## Approach & Process

- **User-Centric Design:** The application is built to make transcript summarization simple, fast, and actionable for users. The UI is modern, responsive, and inspired by ChatGPT for familiarity and ease of use.
- **Component-Based Architecture:** The frontend is modular, using reusable React components for maintainability and scalability. Each UI section (input, summary, email, etc.) is a separate component.
- **Centralized State Management:** All business logic and state are managed in a custom React hook (`useNotesSummarizer`), keeping components clean and focused on presentation.
- **API-Driven:** The backend exposes two main endpoints for summary generation and email sending, keeping the frontend decoupled from implementation details.
- **Error Handling & Feedback:** User actions are accompanied by toast notifications (using Sonner) for clear feedback on success or failure.
- **Security:** Sensitive credentials (API keys, email passwords) are stored in environment variables and never exposed to the client.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.