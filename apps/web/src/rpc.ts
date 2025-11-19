import { QueryClient } from "@tanstack/react-query";
import type { AppRouter } from "../../api/src/router";
import { RPCLink } from "@orpc/client/fetch";
import { createORPCClient, onError } from "@orpc/client";
import type { RouterClient } from "@orpc/server";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

export const queryClient = new QueryClient();

const link = new RPCLink({
  url: "https://quest-board-api.vessbon.workers.dev/rpc",
  interceptors: [
    onError((error) => {
      console.error(error);
    }),
  ],
});

const client: RouterClient<AppRouter> = createORPCClient(link);
export const orpc = createTanstackQueryUtils(client);
