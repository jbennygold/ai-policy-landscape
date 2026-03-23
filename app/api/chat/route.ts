import { streamText } from "ai";
import { gateway } from "@ai-sdk/gateway";
import { systemPrompt } from "@/lib/chat-context";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: gateway("anthropic/claude-sonnet-4.6"),
    system: systemPrompt,
    messages,
  });

  return result.toUIMessageStreamResponse();
}
