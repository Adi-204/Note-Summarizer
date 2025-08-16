import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

const cleanSummary = (text: string): string => {
  if (!text) return "";
  return text
    // remove bold markers **like this**
    .replace(/\*\*(.*?)\*\*/g, "$1")
    // remove list markers (*, -, •) at start of lines
    .replace(/^\s*[\*\-\u2022]\s+/gm, "")
    // remove stray single * wrapping words
    .replace(/\*(.*?)\*/g, "$1")
    // collapse multiple newlines
    .replace(/\n{2,}/g, "\n")
    .trim();
}

export async function POST(request: NextRequest) {
  try {
    const { transcript, prompt } = await request.json();

    if (!transcript || !prompt) {
      return NextResponse.json(
        { error: "Transcript and prompt are required" },
        { status: 400 }
      );
    }

    const modelName = "gemini-2.0-flash";

    const fullPrompt = `You are a professional meeting summarizer. Please analyze the following transcript and provide a summary based on these instructions:
${prompt}
Transcript:
${transcript}
Please provide a clear, structured summary that follows the instructions above. Focus on key points, action items, and important decisions made.
`;

    const result = await genAI.models.generateContent({
      model: modelName,
      contents: fullPrompt,
    });

    const summaryRaw = result.text ?? "";
    const summary = cleanSummary(summaryRaw);
    return NextResponse.json({ summary });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}