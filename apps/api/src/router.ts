import { questRouter } from "./routes/quest";

export const appRouter = {
  quest: questRouter,
};

export type AppRouter = typeof appRouter;
