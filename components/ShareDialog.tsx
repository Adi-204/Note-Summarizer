import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import EmailForm from "./EmailForm";
import { EmailFormProps } from "@/types";

interface ShareDialogProps extends EmailFormProps {
  children?: React.ReactNode;
}

export default function ShareDialog({
  children,
  emailRecipients,
  isSending,
  onEmailRecipientsChange,
  onShareViaEmail,
}: ShareDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button size="sm" variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
            <Send className="h-4 w-4 mr-1" />
            Share
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="bg-gray-800 border-gray-700 text-white w-full max-w-md">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold">Share Summary via Email</DialogTitle>
          <DialogDescription className="text-gray-300 text-sm leading-relaxed">
            Enter recipient email addresses separated by commas
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <EmailForm
            emailRecipients={emailRecipients}
            isSending={isSending}
            onEmailRecipientsChange={onEmailRecipientsChange}
            onShareViaEmail={onShareViaEmail}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
