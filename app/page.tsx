"use client";

import Header from "@/components/Header";
import InputSection from "@/components/InputSection";
import SummarySection from "@/components/SummarySection";
import { useNotesSummarizer } from "@/hooks/useNotesSummarizer";
import { Toaster } from "sonner";

export default function Home() {
  const {
    transcript,
    customPrompt,
    summary,
    isGenerating,
    isEditing,
    editedSummary,
    emailRecipients,
    isSending,
    setTranscript,
    setCustomPrompt,
    setEditedSummary,
    generateSummary,
    startEditing,
    saveEdits,
    cancelEdits,
    shareViaEmail,
    downloadSummary,
    setEmailRecipients,
  } = useNotesSummarizer();

  return (
    <div className="min-h-screen bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Input Section */}
          <InputSection
            transcript={transcript}
            customPrompt={customPrompt}
            isGenerating={isGenerating}
            onTranscriptChange={setTranscript}
            onCustomPromptChange={setCustomPrompt}
            onGenerateSummary={generateSummary}
          />
          
          {/* Right Column - Summary Section */}
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
        </div>
      </div>
      <Toaster 
        position="top-right"
        richColors
        closeButton
        theme="dark"
      />
    </div>
  );
}
