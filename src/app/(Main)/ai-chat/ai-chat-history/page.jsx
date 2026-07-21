import { getAiResponseByUserId } from "@/lib/api/getAiResponse";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ReactMarkdown from "react-markdown";

const AiChatHistoryPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const aiResponseByUserId = await getAiResponseByUserId(user?.id);
  return (
    <div className="max-w-3xl mx-auto py-6 md:py-10 px-3">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">AI Chat Vault</h2>
        <p className="mt-0.5">Preserving your digital conversations</p>
      </div>

      <div>
        {aiResponseByUserId.length === 0 ? (
          <div className="text-center font-medium flex items-center justify-center py-12">
            <p className="text-lg h-[60vh]">
              You did not chat with AI Assistant?
            </p>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto border shadow p-4 md:p-8 rounded-lg h-[70vh] overflow-auto mb-8">
            {aiResponseByUserId.map((response) => (
              <div key={response._id} className="rounded-md">
                <p className="mt-10 bg-gray-200 rounded-md px-4 py-1.5">
                  {response.question}
                </p>
                <div className="mt-6 whitespace-pre-wrap leading-7">
                  <ReactMarkdown>{response.aiResponse}</ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChatHistoryPage;
