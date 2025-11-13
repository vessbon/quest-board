import { router } from "./trpc";
import { questRouter } from "./routes/quest";

const appRouter = router({
  quest: questRouter,
});

export default appRouter;
