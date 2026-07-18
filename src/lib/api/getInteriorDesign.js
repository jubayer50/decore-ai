// get all interior design
export const getInteriorDesigns = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs`,
  );
  return res.json();
};

// get interior design by interior id
export const getInteriorByDesignId = async (designId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs/${designId}`,
  );

  return res.json();
};

// get user interior design by user id
export const userInteriorDesigns = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user-interior-design?userId=${userId}`,
  );
  return res.json();
};
