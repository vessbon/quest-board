import { createDb } from "./db";
import type { Env } from "./types";

export async function createRPCContext(headers: Headers, env: Env) {
  return {
    headers,
    env,
    db: createDb(env.questboard),
  };
}

export type RPCContext = Awaited<ReturnType<typeof createRPCContext>>;
