import React, { useState } from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';

interface Message {
  id: number;
  content: string;
  isAi: boolean;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "¡Hola! ¿En qué puedo ayudarte hoy?", isAi: true }
  ]);

  const handleSendMessage = (message: string) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now(), content: message, isAi: false },
      { id: Date.now() + 1, content: "Esta es una respuesta de ejemplo. La integración con la API se añadirá más adelante.", isAi: true }
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-navy-900">
      {/* Header */}
      <header className="bg-navy-800 border-b border-navy-600 p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">Chat AI</h1>
        </div>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto py-4">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {messages.map(message => (
              <ChatMessage
                key={message.id}
                content={message.content}
                isAi={message.isAi}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}

export default App;