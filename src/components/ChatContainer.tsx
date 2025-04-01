
import React, { useEffect, useRef, useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { Message, streamAIResponse } from "@/services/api";

export const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm an AI assistant. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Prepare AI response
    let aiMessage: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, aiMessage]);
    
    // Stream AI response
    try {
      await streamAIResponse(content, (partialResponse) => {
        aiMessage.content = partialResponse;
        setMessages((prev) => [...prev.slice(0, -1), { ...aiMessage }]);
      });
    } catch (error) {
      console.error("Error streaming response:", error);
      aiMessage.content = "Sorry, I encountered an error. Please try again.";
      setMessages((prev) => [...prev.slice(0, -1), { ...aiMessage }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            role={message.role} 
            content={message.content} 
          />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t p-4 bg-white">
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};
