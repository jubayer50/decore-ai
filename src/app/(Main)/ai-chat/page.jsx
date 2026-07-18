import ChatComponent from "@/Components/AiChat/ChatComponent/ChatComponent";
import { getAiResponseByUserId } from "@/lib/api/getAiResponse";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AiChatPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const aiResponseByUserId = await getAiResponseByUserId(user?.id);

  return (
    <div>
      <ChatComponent aiResponseByUserId={aiResponseByUserId}></ChatComponent>
    </div>
  );
};

export default AiChatPage;
