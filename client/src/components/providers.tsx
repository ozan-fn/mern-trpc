import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { ReactNode, useState } from "react";
import { api } from "../utils/trpc";

export default function Providers(props: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                loggerLink(),
                httpBatchLink({
                    url: "https://3000-heypoom-testrepo-li1xs8ijrqt.ws-us113.gitpod.io/trpc",
                }),
            ],
        })
    );

    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <>{props.children}</>
            </QueryClientProvider>
        </api.Provider>
    );
}
