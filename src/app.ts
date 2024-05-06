import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (_req, res) => res.send("Server is running!"));

app.use(
    "/trpc",
    createExpressMiddleware({
        router: appRouter,
    })
);

app.listen(3000, function () {
    console.log(`http://localhost:3000`);
});
