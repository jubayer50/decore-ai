export const postAiChat = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/ai/chat`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
};
