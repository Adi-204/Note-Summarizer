import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, RefreshCw } from "lucide-react";
import { EmailFormProps } from "@/types";
import { toast } from "sonner";
import { useState } from "react";

export default function EmailForm({
  emailRecipients,
  isSending,
  onEmailRecipientsChange,
  onShareViaEmail,
}: EmailFormProps) {
  const [subject, setSubject] = useState("");

  const handleShareViaEmail = async () => {
    if (!emailRecipients.trim()) {
      toast.error("Please enter recipient email addresses");
      return;
    }

    if (!subject.trim()) {
      toast.error("Please enter an email subject");
      return;
    }

    try {
      await onShareViaEmail(subject);
      setSubject(""); // Reset subject after successful send
    } catch (error) {
      // Error is already handled by the hook with toast
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="space-y-3">
        <Label htmlFor="email-subject" className="text-white text-sm font-medium">
          Email Subject
        </Label>
        <Input
          id="email-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          onFocus={(e) => {
            e.target.setSelectionRange(e.target.value.length, e.target.value.length);
          }}
          placeholder="Enter email subject"
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 w-full h-10 px-3"
        />
      </div>

      <div className="space-y-3">
        <Label htmlFor="email-recipients" className="text-white text-sm font-medium">
          Recipient Emails
        </Label>
        <Input
          id="email-recipients"
          type="email"
          value={emailRecipients}
          onChange={(e) => onEmailRecipientsChange(e.target.value)}
          placeholder="email1@example.com, email2@example.com"
          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 w-full h-10 px-3"
        />
        <p className="text-xs text-gray-400">
          Separate multiple email addresses with commas
        </p>
      </div>
      
      <Button
        onClick={handleShareViaEmail}
        disabled={!emailRecipients.trim() || !subject.trim() || isSending}
        className="bg-blue-600 hover:bg-blue-700 text-white w-full h-10"
      >
        {isSending ? (
          <>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Send Email
          </>
        )}
      </Button>
    </div>
  );
}
