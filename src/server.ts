import {
    Bot,
    webhookCallback,
} from "https://deno.land/x/grammy@v1.20.3/mod.ts";
import { arkary } from "./bot.ts";
// You might modify this to the correct way to import your `Bot` object.

Deno.serve(async (req) => {
    if (req.method === "POST") {
        const bot = new Bot(Deno.env.get("BOT_TOKEN")!);
        bot.use(arkary);

        const handleUpdate = webhookCallback(bot, "std/http");

        return await handleUpdate(req);
    }
    return new Response();
});
