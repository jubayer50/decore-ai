export const editDesign = async (updatedData, designId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs/${designId}`,
    {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updatedData),
    },
  );

  return res.json();
};
