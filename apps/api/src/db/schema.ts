import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const quest = sqliteTable("quest", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  completed: integer("completed", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});
