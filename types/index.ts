export interface InputSectionProps {
  transcript: string;
  customPrompt: string;
  isGenerating: boolean;
  onTranscriptChange: (transcript: string) => void;
  onCustomPromptChange: (prompt: string) => void;
  onGenerateSummary: () => void;
}

export interface SummarySectionProps {
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

export interface ActionButtonsProps {
  summary: string;
  onToggleEmailForm: () => void;
  onResetForm: () => void;
}

export interface EmailFormProps {
  emailRecipients: string;
  isSending: boolean;
  onEmailRecipientsChange: (recipients: string) => void;
  onShareViaEmail: (subject: string) => Promise<void>;
}
