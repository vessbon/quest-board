import { InferSelectModel } from "drizzle-orm";
import { quest } from "./db/schema";

export type Env = {
  questboard: D1Database;
};

export type Quest = InferSelectModel<typeof quest>;
