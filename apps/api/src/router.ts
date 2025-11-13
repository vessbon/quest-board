import { router } from "./trpc";
import { questRouter } from "./routes/quest";

export const appRouter = router({
  quest: questRouter,
});

export type AppRouter = typeof appRouter;
