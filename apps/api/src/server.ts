import * as z from "zod";
import { db } from "./db";
import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import { router, publicProcedure } from "./trpc";

const app = new Hono();

const appRouter = router({
  questList: publicProcedure.query(async () => {
    const quests = await db.selectFrom("quest").selectAll().execute();
    return quests;
  }),

  questById: publicProcedure.input(z.number()).query(async (opts) => {
    const { input } = opts;
    const quest = await db
      .selectFrom("quest")
      .where("id", "=", `${input}`)
      .executeTakeFirst();
    return quest;
  }),
});

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

export type AppRouter = typeof appRouter;
export default app;
