import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Edit3, FileText, Download, Check, X } from "lucide-react";
import { SummarySectionProps } from "@/types";
import ShareDialog from "./ShareDialog";

export default function SummarySection({
  summary,
  isEditing,
  editedSummary,
  onStartEditing,
  onSaveEdits,
  onCancelEdits,
  onEditedSummaryChange,
  onDownloadSummary,
  onShareViaEmail,
  isSending,
  emailRecipients,
  onEmailRecipientsChange,
}: SummarySectionProps) {
  if (!summary) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center text-gray-400">
          <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
          <p className="text-lg">Upload a transcript and generate a summary to see it here</p>
        </div>
      </div>
    );
  }

  return (
    <Card className="bg-gray-800 border-gray-700 shadow-xl h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Generated Summary</h3>
            <div className="flex gap-2">
              {!isEditing && (
                <>
                  <Button onClick={onStartEditing} size="sm" variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    <Edit3 className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button onClick={onDownloadSummary} size="sm" variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                  <ShareDialog
                    emailRecipients={emailRecipients}
                    isSending={isSending}
                    onEmailRecipientsChange={onEmailRecipientsChange}
                    onShareViaEmail={onShareViaEmail}
                  />
                </>
              )}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 h-[28rem] overflow-y-auto">
            {isEditing ? (
              <Textarea
                value={editedSummary}
                onChange={(e) => onEditedSummaryChange(e.target.value)}
                className="w-full h-full bg-transparent border-none text-white resize-none focus:ring-0 focus:outline-none text-base leading-relaxed"
                rows={12}
              />
            ) : (
              <div className="text-white text-base leading-relaxed whitespace-pre-wrap">
                {summary}
              </div>
            )}
          </div>

          {isEditing && (
            <div className="flex gap-2 justify-end">
              <Button onClick={onCancelEdits} size="sm" variant="outline" className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600">
                <X className="h-4 w-4 mr-1" /> Cancel
              </Button>
              <Button onClick={onSaveEdits} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Check className="h-4 w-4 mr-1" /> Save
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
