import type { Quest as QuestTable } from "@repo/types";
import type { Selectable } from "kysely";

export type Quest = Selectable<QuestTable>;
