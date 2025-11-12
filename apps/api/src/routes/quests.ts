import { Hono } from "hono";
import { db } from "../db";

export const questsRoute = new Hono();

questsRoute.get("/", async (c) => {
  const quests = await db.selectFrom("quest").selectAll().execute();
  return c.json(quests);
});

questsRoute.post("/", async (c) => {
  const { title } = await c.req.json();
  const quest = await db
    .insertInto("quest")
    .values({ title })
    .returningAll()
    .executeTakeFirst();
  return c.json(quest);
});
