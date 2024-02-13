import {
    Bot,
    webhookCallback,
} from "https://deno.land/x/grammy@v1.20.3/mod.ts";
import { UserFromGetMe } from "https://deno.land/x/grammy@v1.20.3/types.ts";
import { arkary } from "./bot.ts";

interface Environment {
    BOT_TOKEN: string;
}

let botInfo: UserFromGetMe | undefined = undefined;

export default {
    async fetch(request: Request, env: Environment) {
        try {
            const bot = new Bot(env.BOT_TOKEN, { botInfo });
            bot.use(arkary);

            if (botInfo === undefined) {
                await bot.init();
                botInfo = bot.botInfo;
            }

            const callback = webhookCallback(bot, "cloudflare-mod");

            return await callback(request);
        } catch (e) {
            console.log(e.message);

            return new Response(e.message);
        }
    },
};
