import { Hono } from "hono";
import { trpcServer } from "@hono/trpc-server";
import appRouter from "./router";

const app = new Hono();

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

export type AppRouter = typeof appRouter;
export default app;
