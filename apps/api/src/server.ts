import { Hono } from "hono";
import { questsRoute } from "./routes/quests";

const app = new Hono();
app.route("/quests", questsRoute);

export default app;
