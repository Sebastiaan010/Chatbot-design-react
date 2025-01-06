import React, { useState } from "react";
import { Send, Bot } from "lucide-react";
interface Message {
  text: string;
  isBot: boolean;
  id: number;
}
export function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey! Ik ben leerassistent alex, waar kan ik je mee helpen?",
      isBot: true,
      id: 1,
    },
  ]);
  const [inputText, setInputText] = useState("");
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newMessage: Message = {
      text: inputText,
      isBot: false,
      id: Date.now(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
  };
  return (
    <main className="flex w-full min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-blue-500 p-4 flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <Bot className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-xl font-bold text-white">leerassistent alex</h1>
        </div>
        <div className="h-[500px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${message.isBot ? "bg-blue-100 rounded-tl-none" : "bg-purple-100 rounded-tr-none"}`}
              >
                <p className="text-gray-800 text-lg">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Maak hier je bericht voor leerassistent alex"
              className="flex-1 p-4 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-4 rounded-xl hover:bg-blue-600 transition-colors"
              disabled={!inputText.trim()}
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
