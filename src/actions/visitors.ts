"use server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const redis = Redis.fromEnv();

export async function getVisitorCount() {
  const cookieStore = await cookies();
  const visitor = cookieStore.get("visitor");

  let count = await redis.get<number>("visitors");

  if (!visitor) {
    count = await redis.incr("visitors");

    cookieStore.set("visitor", "true", {
      maxAge: 60 * 60 * 24 * 365 * 100,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return count ?? 0;
}
