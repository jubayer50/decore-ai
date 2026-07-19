// components/ChatComponent.jsx
"use client";

import { postAiChat } from "@/lib/Action/aiChat";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChatComponent = ({ aiResponseByUserId }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const { question } = data;

    if (!question.trim()) return;

    setLoading(true);

    const aiData = {
      userId: user?.id,
      question,
    };

    try {
      // API Call
      const result = await postAiChat(aiData);
      if (result) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-lg shadow border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="bg-primary">
            <h2 className="text-2xl font-bold">AI Chat Assistant</h2>
            <p className="playfair opacity-80 text-lg">
              Ask me anything about interior design
            </p>
          </div>

          <div>
            <Link href={"/ai-chat/ai-chat-history"}>
              <Button
                size="sm"
                className={"rounded-md bg-gray-200 text-black font-medium"}
              >
                History
              </Button>
            </Link>
          </div>
        </div>

        {/* Messages Area */}
        <div className="h-[70vh] overflow-y-auto p-4 space-y-3 bg-gray-50">
          {aiResponseByUserId.length === 0 && (
            <div className="text-center text-gray-500 mt-32">
              <p>Start a conversation!</p>
              <p className="text-sm">Ask about interior design ideas</p>
            </div>
          )}

          {loading ? (
            <div className="flex justify-start">
              <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                <p className="text-sm">Thinking...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 p-2">
              {aiResponseByUserId.map((response) => (
                <div key={response._id}>
                  <p className="bg-gray-200 px-3 py-1.5 rounded-md mt-10">
                    {response.question}
                  </p>
                  <p className="mt-4">{response.aiResponse}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t dark:border-gray-700"
        >
          <div className="flex gap-2">
            <input
              type="text"
              name="question"
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary bg-[#b2967d] text-white rounded-lg disabled:opacity-50 cursor-pointer transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
