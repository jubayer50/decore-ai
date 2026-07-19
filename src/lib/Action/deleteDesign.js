"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const deleteDesign = async (designId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs/${designId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    },
  );
  return res.json();
};
