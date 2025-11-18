import { Kysely, CamelCasePlugin } from "kysely";
import { Kyselify } from "drizzle-orm/kysely";
import { D1Dialect } from "kysely-d1";
import { quest } from "../db/schema";

type Database = {
  quest: Kyselify<typeof quest>;
};

export function createDb(d1: D1Database) {
  return new Kysely<Database>({
    dialect: new D1Dialect({ database: d1 }),
    plugins: [new CamelCasePlugin()],
  });
}
