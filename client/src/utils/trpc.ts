import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../src/routes/index";

export const api = createTRPCReact<AppRouter>();
