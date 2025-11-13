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

  questById: publicProcedure.input(z.uuid()).query(async ({ input }) => {
    const quest = await db
      .selectFrom("quest")
      .selectAll()
      .where("id", "=", input)
      .executeTakeFirst();
    return quest;
  }),

  questCreate: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      const quest = await db
        .insertInto("quest")
        .values(input)
        .returningAll()
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
