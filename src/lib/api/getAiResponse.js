export const getAiResponseByUserId = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ai/history?userId=${userId}`,
  );
  return res.json();
};
