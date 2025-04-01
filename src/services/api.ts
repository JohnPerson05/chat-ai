
// This is a simulated API service for demonstration purposes
// In a real app, this would connect to a backend service

export interface Message {
  role: "user" | "assistant";
  content: string;
}

// Simulates streaming an AI response one character at a time
export const streamAIResponse = async (
  prompt: string,
  onProgress: (partialResponse: string) => void
): Promise<string> => {
  const responses = [
    "I'm an AI assistant designed to help answer your questions and engage in conversation. How can I assist you today?",
    "That's an interesting question. Let me think about it. There are various perspectives to consider when addressing this topic.",
    "Thanks for sharing that with me. I'm here to help with any follow-up questions you might have or to discuss this further.",
    "I understand your concern. While I don't have access to personal data unless you share it with me, I can certainly provide general information that might be helpful.",
    "I'm designed to be helpful, harmless, and honest in my interactions. My goal is to provide useful information and assistance while respecting important values."
  ];
  
  // Select a response based on the hash of the prompt (for demo consistency)
  const hash = prompt.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const responseText = responses[hash % responses.length];
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Stream the response character by character
  let currentResponse = '';
  for (const char of responseText) {
    currentResponse += char;
    onProgress(currentResponse);
    
    // Random delay between characters for realistic typing effect
    const delay = Math.floor(Math.random() * 30) + 10;
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  
  return responseText;
};
