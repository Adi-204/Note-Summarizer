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

## 🏗️ Built With

- **Next.js 15** - React framework with App Router
- **Google AI (Gemini)** - Advanced AI summarization
- **Nodemailer** - Email functionality with custom subjects
- **Tailwind CSS** - Modern, responsive UI with dark theme
- **ShadCN UI** - Beautiful, accessible component library
- **Radix UI** - Accessible component primitives
- **TypeScript** - Type-safe development
- **Sonner** - Modern toast notifications

## 🎨 UI Features

- **Dark Theme**: Modern dark interface for better readability
- **Two-Column Layout**: Input section on left, summary on right
- **Responsive Grid**: Adapts to different screen sizes
- **Scrollable Content**: Fixed height summary area with scrolling
- **Toast Notifications**: User feedback for all actions
- **Dialog Modals**: Clean email sharing interface

## 📋 Prerequisites

- Node.js 18+
- Google AI API key
- Email account for sending summaries

## 📚 Documentation

- [Setup Guide](./SETUP.md) - Detailed installation and configuration
- [API Reference](./docs/api.md) - API endpoint documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
