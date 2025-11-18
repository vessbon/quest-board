import { Hono } from "hono";
import { Env } from "./types";
import { createRPCContext } from "./context";
import { RPCHandler } from "@orpc/server/fetch";
import { onError } from "@orpc/server";
import { appRouter } from "./router";
import { CORSPlugin } from "@orpc/server/plugins";

export const handler = new RPCHandler(appRouter, {
  plugins: [new CORSPlugin()],
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

const app = new Hono<{ Bindings: Env }>();

app.use("/rpc/*", async (c, next) => {
  const context = await createRPCContext(c.req.raw.headers, c.env);

  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: "/rpc",
    context,
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  return await next();
});

export default app;
