"use client";

import { FormEvent, useState } from "react";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
};

const QUICK_PROMPTS = [
  "How do I apply?",
  "Where can I access the student portal?",
  "What faculties are available?",
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    role: "assistant",
    text: "Hello! I can help with admissions, the student portal, and finding your way around NOUN.",
  },
];

function getMockReply(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("apply") || normalizedMessage.includes("admission")) {
    return "You can start your application from the Admissions page. The admissions team can also help with entry requirements and deadlines.";
  }

  if (normalizedMessage.includes("portal") || normalizedMessage.includes("login")) {
    return "The Student Portal link is in the main navigation. Use it to access your dashboard and student services.";
  }

  if (normalizedMessage.includes("facult") || normalizedMessage.includes("course")) {
    return "NOUN has nine faculties. Visit Academics to explore the available faculties and programmes.";
  }

  return "Thanks for your message. A support representative can help with that. Try asking about admissions, the student portal, or faculties.";
}

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  function sendMessage(message: string) {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now(), role: "user", text: trimmedMessage },
      { id: Date.now() + 1, role: "assistant", text: getMockReply(trimmedMessage) },
    ]);
    setDraft("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(draft);
  }

  return (
    <>
      {isOpen && (
        <section
          className="fixed bottom-24 right-4 z-50 flex h-[min(600px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl  -gray-200 bg-white shadow-2xl sm:right-6"
          role="dialog"
          aria-modal="false"
          aria-labelledby="support-chat-title"
        >
          <header className="flex items-center justify-between bg-secondary px-5 py-4 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">NOUN support</p>
              <h2 id="support-chat-title" className="text-lg font-semibold">
                How can we help?
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close support chat"
            >
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4" aria-live="polite">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-sm bg-primary text-white"
                      : "rounded-bl-sm bg-white text-gray-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-white p-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="shrink-0 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-medium text-secondary transition-colors hover:bg-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="support-chat-message">
                Type your message
              </label>
              <input
                id="support-chat-message"
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your message..."
                className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-secondary"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((currentState) => !currentState)}
        className="fixed bottom-6 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/30 sm:right-6"
        aria-label={isOpen ? "Close support chat" : "Open support chat"}
        aria-expanded={isOpen}
      >
        <svg aria-hidden="true" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.5L4 21v-4.5A7.5 7.5 0 0 1 11.5 9h1A7.5 7.5 0 0 1 20 16.5v.5a7.5 7.5 0 0 1-7.5 7.5h-1a7.47 7.47 0 0 1-4-1.16" transform="translate(0 -5)" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M12 12h.01M15 12h.01" />
        </svg>
      </button>
    </>
  );
}
