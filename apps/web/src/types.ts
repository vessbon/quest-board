import type { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import type { AppRouter } from "../../api/src/router";

type RouterInput = InferRouterInputs<AppRouter>;
type RouterOutput = InferRouterOutputs<AppRouter>;

export type QuestOutput = RouterOutput["quest"]["byId"];
export type QuestListOutput = RouterOutput["quest"]["list"];
export type QuestCompleteOutput = RouterOutput["quest"]["toggle"];

export type QuestCreateInput = RouterInput["quest"]["create"];
export type QuestCompleteInput = RouterInput["quest"]["toggle"];
export type QuestDeleteInput = RouterInput["quest"]["delete"];
