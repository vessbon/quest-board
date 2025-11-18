import { publicProcedure } from "../rpc";
import { sql } from "kysely";
import * as z from "zod";

export const questRouter = {
  list: publicProcedure.handler(async ({ context }) => {
    const quests = await context.db.selectFrom("quest").selectAll().execute();
    return quests;
  }),

  byId: publicProcedure.input(z.uuid()).handler(async ({ context, input }) => {
    const quest = await context.db
      .selectFrom("quest")
      .selectAll()
      .where("id", "=", input)
      .executeTakeFirst();
    return quest;
  }),

  toggle: publicProcedure
    .input(z.uuid())
    .handler(async ({ context, input }) => {
      await context.db
        .updateTable("quest")
        .set("completed", sql`NOT completed`)
        .where("id", "=", input)
        .execute();
    }),

  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .handler(async ({ context, input }) => {
      console.error(input);
      const quest = await context.db
        .insertInto("quest")
        .values({ id: crypto.randomUUID(), ...input })
        .returningAll()
        .executeTakeFirst();
      return quest;
    }),

  delete: publicProcedure
    .input(z.uuid())
    .handler(async ({ context, input }) => {
      await context.db.deleteFrom("quest").where("id", "=", input).execute();
    }),
};
