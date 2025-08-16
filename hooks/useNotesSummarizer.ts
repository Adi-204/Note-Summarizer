import { useState, useRef } from "react";
import { toast } from "sonner";

export function useNotesSummarizer() {
  const [transcript, setTranscript] = useState("");
  const [customPrompt, setCustomPrompt] = useState("Summarize in bullet points for executives");
  const [summary, setSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedSummary, setEditedSummary] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailRecipients, setEmailRecipients] = useState("");
  const [isSending, setIsSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateSummary = async () => {
    if (!transcript.trim()) {
      toast.error("Please upload a transcript first");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transcript,
          prompt: customPrompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSummary(data.summary);
        setEditedSummary(data.summary);
        toast.success("Summary generated successfully!");
      } else {
        throw new Error("Failed to generate summary");
      }
    } catch (error) {
      console.error("Error generating summary:", error);
      toast.error("Failed to generate summary. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const startEditing = () => {
    setIsEditing(true);
    setEditedSummary(summary);
  };

  const saveEdits = () => {
    setSummary(editedSummary);
    setIsEditing(false);
  };

  const cancelEdits = () => {
    setEditedSummary(summary);
    setIsEditing(false);
  };

  const shareViaEmail = async (subject: string): Promise<void> => {
    if (!emailRecipients.trim()) {
      toast.error("Please enter recipient email addresses");
      return;
    }
    setIsSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipients: emailRecipients,
          subject: subject,
          summary: editedSummary || summary,
        }),
      });
      if (response.ok) {
        setEmailRecipients("");
        toast.success("Email sent successfully!");
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const downloadSummary = () => {
    const blob = new Blob([summary], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "meeting-summary.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const toggleEmailForm = () => {
    setShowEmailForm(!showEmailForm);
  };

  const resetForm = () => {
    setTranscript("");
    setSummary("");
    setEditedSummary("");
    setIsEditing(false);
    setShowEmailForm(false);
    setEmailRecipients("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    // State
    transcript,
    customPrompt,
    summary,
    isGenerating,
    isEditing,
    editedSummary,
    showEmailForm,
    emailRecipients,
    isSending,
    fileInputRef,
    
    // Actions
    setTranscript,
    setCustomPrompt,
    setEditedSummary,
    generateSummary,
    startEditing,
    saveEdits,
    cancelEdits,
    shareViaEmail,
    downloadSummary,
    resetForm,
    toggleEmailForm,
    setEmailRecipients,
  };
}
