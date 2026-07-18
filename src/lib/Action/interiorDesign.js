export const submitInteriorDesign = async (data) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  return res.json();
};
