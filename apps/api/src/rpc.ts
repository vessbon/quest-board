import { os } from "@orpc/server";
import { RPCContext } from "./context";

const base = os.$context<RPCContext>();

export const publicProcedure = base;
