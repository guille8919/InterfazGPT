import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isAi: boolean;
}

export function ChatMessage({ content, isAi }: ChatMessageProps) {
  return (
    <div className={`flex gap-4 p-6 ${isAi ? 'bg-navy-750' : ''}`}>
      {isAi ? (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
        </div>
      ) : null}
      <div className={`flex-1 ${!isAi ? 'flex justify-end' : ''}`}>
        <div className={`${!isAi ? 'max-w-[80%]' : ''}`}>
          <p className="text-sm text-gray-100 leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      </div>
      {!isAi ? (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <User className="w-5 h-5 text-blue-400" />
          </div>
        </div>
      ) : null}
    </div>
  );
}