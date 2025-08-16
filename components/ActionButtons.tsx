import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, RotateCcw } from "lucide-react";
import { ActionButtonsProps } from "@/types";

export default function ActionButtons({
  summary,
  onToggleEmailForm
}: ActionButtonsProps) {
  if (!summary) return null;

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <Card className="bg-gray-800 border-gray-700 shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={onToggleEmailForm}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Share via Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
