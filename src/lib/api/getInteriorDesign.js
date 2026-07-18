export const getInteriorDesigns = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs`,
  );
  return res.json();
};

export const getInteriorByDesignId = async (designId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs/${designId}`,
  );

  return res.json();
};
