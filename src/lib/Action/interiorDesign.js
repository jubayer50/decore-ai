"use server";

import { headers } from "next/headers";
import { auth } from "../auth";

export const submitInteriorDesign = async (data) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interior-designs`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    },
  );

  return res.json();
};
