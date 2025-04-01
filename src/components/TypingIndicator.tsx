
import React from "react";

export const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-4 bg-chat-ai w-fit rounded-lg rounded-tl-none border border-gray-200">
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-blink"></div>
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-blink" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-2 h-2 rounded-full bg-gray-400 animate-blink" style={{ animationDelay: "0.4s" }}></div>
    </div>
  );
};
