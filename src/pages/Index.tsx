
import { ChatContainer } from "@/components/ChatContainer";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-radial from-gray-50 to-gray-100">
      <header className="py-4 px-6 border-b bg-white shadow-sm">
        <h1 className="text-xl font-semibold text-center text-gray-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Promptastic AI
          </span>
        </h1>
      </header>
      
      <main className="flex-1 container mx-auto max-w-4xl h-full py-4 px-4 md:px-0 flex flex-col">
        <div className="bg-white rounded-xl shadow-sm border flex-1 flex flex-col overflow-hidden">
          <ChatContainer />
        </div>
      </main>
      
      <footer className="py-3 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Promptastic AI - Built with Lovable
      </footer>
    </div>
  );
};

export default Index;
