import { router, publicProcedure } from "../trpc";
import { sql } from "kysely";
import * as z from "zod";
import { db } from "../db";

export const questRouter = router({
  list: publicProcedure.query(async () => {
    const quests = await db.selectFrom("quest").selectAll().execute();
    return quests;
  }),

  byId: publicProcedure.input(z.uuid()).query(async ({ input }) => {
    const quest = await db
      .selectFrom("quest")
      .selectAll()
      .where("id", "=", input)
      .executeTakeFirst();
    return quest;
  }),

  toggle: publicProcedure.input(z.uuid()).mutation(async ({ input }) => {
    const quest = await db
      .updateTable("quest")
      .set("completed", sql`NOT completed`)
      .where("id", "=", input)
      .execute();
    return quest;
  }),

  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      const quest = await db
        .insertInto("quest")
        .values(input)
        .returningAll()
        .executeTakeFirst();
      return quest;
    }),

  delete: publicProcedure.input(z.uuid()).mutation(async ({ input }) => {
    await db.deleteFrom("quest").where("id", "=", input).execute();
  }),
});
