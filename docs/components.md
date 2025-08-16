# Notes Summarizer - Component Documentation

## Overview

The Notes Summarizer application is built with a modular, component-based architecture using React, TypeScript, and ShadCN UI components. This document outlines the structure and functionality of each component.

## Component Architecture

```
components/
├── ui/                    # ShadCN UI base components
│   ├── button.tsx        # Button component
│   ├── card.tsx          # Card container component
│   ├── input.tsx         # Input field component
│   ├── label.tsx         # Form label component
│   ├── textarea.tsx      # Textarea component
│   └── dialog.tsx        # Dialog/modal component
├── Header.tsx            # Application header
├── InputSection.tsx      # File upload and prompt input
├── SummarySection.tsx    # Summary display and editing
├── EmailForm.tsx         # Email sharing form
├── ShareDialog.tsx       # Email sharing dialog
└── index.ts              # Component exports
```

## Core Components

### 1. Header Component

**File**: `components/Header.tsx`

**Purpose**: Displays the application title and description.

**Props**: None

**Features**:
- Centered title with large typography
- Descriptive subtitle
- Dark theme styling

**Usage**:
```tsx
import Header from "@/components/Header";

<Header />
```

### 2. InputSection Component

**File**: `components/InputSection.tsx`

**Purpose**: Handles file upload and custom prompt input.

**Props**: `InputSectionProps`
```typescript
interface InputSectionProps {
  transcript: string;
  customPrompt: string;
  isGenerating: boolean;
  onTranscriptChange: (transcript: string) => void;
  onCustomPromptChange: (prompt: string) => void;
  onGenerateSummary: () => void;
}
```

**Features**:
- File upload with drag & drop support
- Custom prompt input with placeholder text
- Generate summary button with loading state
- File validation and error handling
- Responsive design for mobile and desktop

**Usage**:
```tsx
import InputSection from "@/components/InputSection";

<InputSection
  transcript={transcript}
  customPrompt={customPrompt}
  isGenerating={isGenerating}
  onTranscriptChange={setTranscript}
  onCustomPromptChange={setCustomPrompt}
  onGenerateSummary={generateSummary}
/>
```

### 3. SummarySection Component

**File**: `components/SummarySection.tsx`

**Purpose**: Displays and allows editing of generated summaries.

**Props**: `SummarySectionProps`
```typescript
interface SummarySectionProps {
  summary: string;
  isEditing: boolean;
  editedSummary: string;
  onStartEditing: () => void;
  onSaveEdits: () => void;
  onCancelEdits: () => void;
  onEditedSummaryChange: (summary: string) => void;
  onDownloadSummary: () => void;
  onShareViaEmail: (subject: string) => Promise<void>;
  isSending: boolean;
  emailRecipients: string;
  onEmailRecipientsChange: (recipients: string) => void;
}
```

**Features**:
- Summary display with fixed height and scrolling
- Inline editing with textarea
- Action buttons (Edit, Download, Share)
- Responsive layout
- Empty state with placeholder message

**Usage**:
```tsx
import SummarySection from "@/components/SummarySection";

<SummarySection
  summary={summary}
  isEditing={isEditing}
  editedSummary={editedSummary}
  onStartEditing={startEditing}
  onSaveEdits={saveEdits}
  onCancelEdits={cancelEdits}
  onEditedSummaryChange={setEditedSummary}
  onDownloadSummary={downloadSummary}
  onShareViaEmail={shareViaEmail}
  isSending={isSending}
  emailRecipients={emailRecipients}
  onEmailRecipientsChange={setEmailRecipients}
/>
```

### 4. EmailForm Component

**File**: `components/EmailForm.tsx`

**Purpose**: Handles email sharing functionality with custom subjects.

**Props**: `EmailFormProps`
```typescript
interface EmailFormProps {
  emailRecipients: string;
  isSending: boolean;
  onEmailRecipientsChange: (recipients: string) => void;
  onShareViaEmail: (subject: string) => Promise<void>;
}
```

**Features**:
- Email subject input with default value
- Recipient email input with validation
- Send button with loading state
- Toast notifications for success/error
- Form validation and error handling

**Usage**:
```tsx
import EmailForm from "@/components/EmailForm";

<EmailForm
  emailRecipients={emailRecipients}
  isSending={isSending}
  onEmailRecipientsChange={setEmailRecipients}
  onShareViaEmail={shareViaEmail}
/>
```

### 5. ShareDialog Component

**File**: `components/ShareDialog.tsx`

**Purpose**: Wraps the EmailForm in a modal dialog.

**Props**: `ShareDialogProps` (extends `EmailFormProps`)
```typescript
interface ShareDialogProps extends EmailFormProps {
  children?: React.ReactNode;
}
```

**Features**:
- Modal dialog with backdrop
- Customizable trigger button
- Responsive design
- Dark theme styling

**Usage**:
```tsx
import ShareDialog from "@/components/ShareDialog";

<ShareDialog
  emailRecipients={emailRecipients}
  isSending={isSending}
  onEmailRecipientsChange={setEmailRecipients}
  onShareViaEmail={shareViaEmail}
/>
```

## UI Components

### ShadCN UI Components

The application uses ShadCN UI components for consistent, accessible design:

- **Button**: Various button styles and sizes
- **Card**: Container components with shadows and borders
- **Input**: Form input fields with validation states
- **Label**: Form labels with proper accessibility
- **Textarea**: Multi-line text input
- **Dialog**: Modal dialogs with backdrop

## Custom Hooks

### useNotesSummarizer Hook

**File**: `hooks/useNotesSummarizer.ts`

**Purpose**: Centralized state management and business logic.

**State**:
- `transcript`: Uploaded transcript text
- `customPrompt`: User-defined summary instructions
- `summary`: Generated AI summary
- `isGenerating`: Loading state for summary generation
- `isEditing`: Edit mode state
- `editedSummary`: Modified summary content
- `emailRecipients`: Email addresses for sharing
- `isSending`: Email sending state

**Functions**:
- `generateSummary()`: Calls AI API to generate summary
- `startEditing()`: Enters edit mode
- `saveEdits()`: Saves edited summary
- `cancelEdits()`: Discards edits
- `shareViaEmail(subject)`: Sends summary via email
- `downloadSummary()`: Downloads summary as text file
- `resetForm()`: Clears all form data

**Usage**:
```tsx
import { useNotesSummarizer } from "@/hooks/useNotesSummarizer";

const {
  transcript,
  summary,
  isGenerating,
  generateSummary,
  // ... other state and functions
} = useNotesSummarizer();
```

## Type Definitions

**File**: `types/index.ts`

Contains all TypeScript interfaces for component props and data structures.

## Styling

### Tailwind CSS Classes

The application uses Tailwind CSS for styling with:
- Dark theme colors (`bg-gray-900`, `text-white`)
- Responsive design (`lg:grid-cols-2`)
- Hover effects and transitions
- Consistent spacing and typography

### CSS Custom Properties

Custom CSS variables for:
- Gradient backgrounds
- Shadow effects
- Color schemes

## Responsive Design

### Breakpoints
- **Mobile**: Single column layout
- **Desktop**: Two-column grid layout
- **Tablet**: Adaptive grid with proper spacing

### Grid System
- CSS Grid for main layout
- Flexbox for component layouts
- Responsive column counts

## Accessibility

### ARIA Labels
- Proper form labels and descriptions
- Screen reader support
- Keyboard navigation

### Color Contrast
- High contrast ratios for readability
- Dark theme optimized for accessibility

## Performance

### Optimization Techniques
- React.memo for component memoization
- useCallback for function optimization
- Lazy loading of components
- Efficient state updates

## Testing

### Component Testing
- Unit tests for individual components
- Integration tests for component interactions
- Accessibility testing with axe-core

## Future Enhancements

### Planned Features
- Component lazy loading
- Advanced form validation
- Custom theme support
- Component storybook integration

## Best Practices

### Code Organization
- Single responsibility principle
- Props interface definitions
- Consistent naming conventions
- Proper TypeScript usage

### Performance
- Minimize re-renders
- Efficient state management
- Proper dependency arrays
- Memoization where appropriate
