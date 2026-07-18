export const deleteDesign = async (designId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs/${designId}`,
    { method: "DELETE", headers: { "Content-type": "application/json" } },
  );
  return res.json();
};
