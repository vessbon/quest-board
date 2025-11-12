import { Hono } from "hono";
import { db } from "../db";

export const questsRoute = new Hono();

questsRoute.get("/", async (c) => {
  const quests = await db.selectFrom("quest").selectAll().execute();
  return c.json(quests);
});
