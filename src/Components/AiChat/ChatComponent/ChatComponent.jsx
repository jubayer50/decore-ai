"use client";

import { postAiChat } from "@/lib/Action/aiChat";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const ChatComponent = ({ aiResponseByUserId }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const chatContainerRef = useRef(null);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [aiResponseByUserId, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { question } = Object.fromEntries(formData.entries());

    if (!question.trim()) return;

    setLoading(true);

    try {
      const result = await postAiChat({
        userId: user?.id,
        question,
      });

      if (result) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      form.reset();
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white rounded-xl border shadow overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <div>
            <h2 className="text-2xl font-bold">AI Chat Assistant</h2>

            <p className="text-gray-500">Ask anything about Interior Design</p>
          </div>

          <Link href="/ai-chat/ai-chat-history">
            <Button className="rounded-lg bg-gray-200 text-black">
              History
            </Button>
          </Link>
        </div>

        {/* Messages */}
        <div
          ref={chatContainerRef}
          className="h-[70vh] overflow-y-auto bg-gray-50 p-5"
        >
          {aiResponseByUserId.length === 0 && (
            <div className="h-full flex items-center justify-center text-gray-500">
              Start a conversation...
            </div>
          )}

          <div className="space-y-8">
            {aiResponseByUserId.map((response) => (
              <div key={response._id}>
                {/* User */}
                <div className="flex justify-end">
                  <div className="bg-[#b2967d] text-white px-4 py-2 rounded-xl max-w-xl">
                    {response.question}
                  </div>
                </div>

                {/* AI */}
                <div className="flex justify-start mt-4">
                  <div className="bg-white border rounded-xl p-4 shadow-sm max-w-full">
                    <div className="mb-2 font-semibold text-[#b2967d]">
                      🤖 DecoraAI Assistant
                    </div>

                    <div className="prose max-w-none whitespace-pre-wrap">
                      <ReactMarkdown>{response.aiResponse}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border rounded-xl p-4 shadow-sm">
                  🤖 Thinking...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-3">
          <input
            type="text"
            name="question"
            placeholder="Type your question..."
            className="flex-1 border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#b2967d]"
            disabled={loading}
          />

          <button
            disabled={loading}
            className="bg-[#b2967d] text-white px-6 rounded-lg"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;
