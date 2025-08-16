import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, RefreshCw, Send } from "lucide-react";
import { InputSectionProps } from "@/types";
import { toast } from "sonner";

export default function InputSection({
  transcript,
  customPrompt,
  isGenerating,
  onTranscriptChange,
  onCustomPromptChange,
  onGenerateSummary,
}: InputSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/plain" && !file.name.endsWith(".txt")) {
      toast.error("Please upload a text file (.txt)");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      onTranscriptChange(text);
    };
    reader.readAsText(file);
  };

  return (
    <Card className="bg-gray-800 border-gray-700 shadow-2xl hover:shadow-gray-900/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* File Upload Section */}
          <div className="text-center">
            <Label htmlFor="file-upload" className="text-white text-lg font-medium mb-4 block">
              Upload Transcript (.txt)
            </Label>
            <div className="flex gap-3 justify-center items-center">
              <Input
                ref={fileInputRef}
                id="file-upload"
                type="file"
                accept=".txt"
                onChange={handleFileUpload}
                className="max-w-xs bg-gray-700 border-gray-600 text-white file:bg-gray-600 file:border-gray-500 file:text-white hover:file:bg-gray-500 transition-colors duration-200"
              />
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600 transition-colors duration-200"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Custom Prompt Section */}
          <div className="text-center flex-1">
            <Label htmlFor="custom-prompt" className="text-white text-lg font-medium mb-4 block">
              Custom Instructions
            </Label>
            <Textarea
              id="custom-prompt"
              value={customPrompt}
              onChange={(e) => onCustomPromptChange(e.target.value)}
              placeholder="e.g., Summarize in bullet points for executives"
              rows={8}
              className="w-full bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-blue-500 transition-colors duration-200"
            />
          </div>

          {/* Generate Button */}
          <div className="text-center">
            <Button
              onClick={onGenerateSummary}
              disabled={!transcript.trim() || isGenerating}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg h-auto transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Generate Summary
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
