import {
    Bot,
    webhookCallback,
} from "https://deno.land/x/grammy@v1.20.3/mod.ts";
import { arkary } from "./bot.ts";

Deno.serve(async (req) => {
    if (req.method === "POST") {
        try {
            const bot = new Bot(Deno.env.get("BOT_TOKEN")!);
            bot.use(arkary);

            const handleUpdate = webhookCallback(bot, "std/http");

            return await handleUpdate(req);
        } catch (error) {
            console.log(error.message);
            return new Response(error.message);
        }
    }
    return new Response();
});
