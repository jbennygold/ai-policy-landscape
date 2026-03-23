"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const starters = [
  "What are the areas of bipartisan consensus?",
  "How do state proposals compare to federal ones?",
  "Which proposals address worker displacement?",
  "What is the preemption debate about?",
];

function getTextContent(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === "text" && p.text)
    .map((p) => p.text)
    .join("");
}

export function ChatDrawer() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    setInputValue("");
    sendMessage({ text: trimmed });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(inputValue);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#1a56db] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1C4.13 1 1 3.58 1 6.75c0 1.77 1.02 3.36 2.62 4.41L3 14l3.12-1.56c.6.12 1.23.19 1.88.19 3.87 0 7-2.58 7-5.75S11.87 1 8 1z"
            fill="currentColor"
          />
        </svg>
        Ask about AI policy
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 flex h-[600px] w-full max-w-md flex-col rounded-tl-xl border-l border-t border-[#e7e5e4] bg-white shadow-2xl sm:bottom-6 sm:right-6 sm:h-[560px] sm:rounded-xl sm:border">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#e7e5e4] px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-stone-900">
            AI Policy Assistant
          </h3>
          <p className="text-xs text-[#78716c]">
            Ask questions about the proposals
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          className="rounded-md p-1 text-[#78716c] hover:bg-stone-100 hover:text-stone-900"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-3">
            <p className="text-sm text-[#78716c]">
              Ask me anything about the AI policy proposals, their provisions, or how they compare.
            </p>
            <div className="space-y-2">
              {starters.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="block w-full rounded-lg border border-[#e7e5e4] px-3 py-2 text-left text-xs text-stone-600 transition-colors hover:bg-stone-50 hover:text-stone-900"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m) => {
          const text = getTextContent(m.parts as Array<{ type: string; text?: string }>);
          if (!text) return null;
          return (
            <div
              key={m.id}
              className={
                m.role === "user"
                  ? "ml-8 rounded-lg bg-stone-100 px-3 py-2"
                  : "mr-4"
              }
            >
              {m.role === "assistant" && (
                <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-[#78716c]">
                  Assistant
                </p>
              )}
              <div className="prose prose-sm prose-stone max-w-none text-stone-700 [&_p]:my-1.5 [&_ul]:my-1.5 [&_ol]:my-1.5 [&_li]:my-0.5 [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:mt-3 [&_h3]:mb-1 [&_h4]:text-sm [&_h4]:font-medium [&_h4]:mt-2 [&_h4]:mb-1 [&_strong]:text-stone-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
              </div>
            </div>
          );
        })}
        {isLoading && messages.length > 0 && messages[messages.length - 1].role === "user" && (
          <div className="flex gap-1 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#78716c]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#78716c] [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#78716c] [animation-delay:300ms]" />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-[#e7e5e4] px-4 py-3">
        <div className="flex gap-2">
          <textarea
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question..."
            rows={1}
            className="flex-1 resize-none rounded-lg border border-[#e7e5e4] bg-stone-50 px-3 py-2 text-sm text-stone-900 placeholder:text-[#78716c] focus:border-[#1a56db] focus:outline-none focus:ring-1 focus:ring-[#1a56db]"
          />
          <button
            type="button"
            onClick={() => send(inputValue)}
            disabled={!inputValue.trim() || isLoading}
            className="shrink-0 rounded-lg bg-[#1a56db] px-3 py-2 text-sm font-medium text-white disabled:opacity-40"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
