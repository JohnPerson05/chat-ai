
import { cn } from "@/lib/utils";
import React from "react";

export type MessageRole = "user" | "assistant";

export interface ChatMessageProps {
  content: string;
  role: MessageRole;
}

export const ChatMessage = ({ content, role }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "p-4 rounded-lg max-w-[85%] w-fit",
        isUser
          ? "bg-chat-user ml-auto rounded-tr-none"
          : "bg-chat-ai mr-auto rounded-tl-none border border-gray-200"
      )}
    >
      <p className="whitespace-pre-wrap break-words">{content}</p>
    </div>
  );
};
