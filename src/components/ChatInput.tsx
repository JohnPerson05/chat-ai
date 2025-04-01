
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "" || disabled) return;
    onSendMessage(input);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-end gap-2 w-full">
      <Textarea
        placeholder="Type your message here..."
        className="resize-none flex-1 p-3 h-[56px] max-h-[200px] overflow-y-auto"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <Button 
        onClick={handleSendMessage}
        disabled={input.trim() === "" || disabled}
        className="h-[56px] px-6 bg-indigo-600 hover:bg-indigo-700"
      >
        Send
      </Button>
    </div>
  );
};
