# Notes Summarizer - Setup Guide

## Prerequisites

- Node.js 18+ installed
- Google AI API key
- Email account for sending summaries

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following variables:

```env
# Google AI API Key
GEMINI_API_KEY=your_google_ai_api_key_here
# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_specific_password_here
```

## Getting API Keys

### Google AI API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key to your `.env.local` file

### Email Setup (Gmail Example)
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this password in your `.env.local` file

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

## ✨ Features

- **📁 File Upload**: Upload .txt transcript files with drag & drop support
- **🎯 Custom Prompts**: Specify exactly how you want your summary formatted
- **🤖 AI Generation**: Uses Google's Gemini model for intelligent summarization
- **✏️ Editing**: Edit generated summaries before sharing with inline editing
- **📧 Email Sharing**: Send summaries with custom subjects directly to team members
- **💾 Download**: Save summaries as text files for offline use
- **🎨 Modern UI**: Dark theme with ChatGPT-inspired design
- **📱 Responsive Layout**: Two-column design that works on all devices
- **🔔 Notifications**: Toast notifications for all user actions
- **📝 Custom Subjects**: Personalize email subjects for better organization

## 🎨 User Interface

- **Dark Theme**: Modern dark interface for better readability
- **Two-Column Layout**: Input section on left, summary display on right
- **Scrollable Content**: Fixed height summary area with smooth scrolling
- **Dialog Modals**: Clean, accessible email sharing interface
- **Toast Notifications**: User feedback for all actions using Sonner

## 📱 Usage

1. **Upload Transcript**: Upload a text transcript (.txt file)
2. **Customize Instructions**: Specify how you want the summary formatted
3. **Generate Summary**: Click "Generate Summary" to create AI-powered summary
4. **Review & Edit**: Edit the generated summary inline if needed
5. **Share or Download**: 
   - Send via email with custom subject
   - Download as text file for offline use

## 🏗️ Technical Features

- **Modular Components**: Clean, maintainable React component architecture
- **Custom Hooks**: Centralized state management with `useNotesSummarizer`
- **TypeScript**: Full type safety throughout the application
- **ShadCN UI**: Beautiful, accessible component library
- **Responsive Grid**: CSS Grid layout with proper breakpoints
- **Error Handling**: Comprehensive error handling with user feedback

## 🔧 Troubleshooting

- **API Key Error**: Ensure your Google AI API key is correct and has sufficient quota
- **Email Not Sending**: Check your email credentials and ensure you're using an app-specific password for Gmail
- **File Upload Issues**: Ensure you're uploading .txt files only
- **UI Issues**: Clear browser cache and ensure you're using a modern browser

## 🔒 Security Notes

- Never commit your `.env.local` file to version control
- Use app-specific passwords for email services
- Keep your API keys secure and rotate them regularly
- The application runs entirely client-side for transcript processing
