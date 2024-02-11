import { Bot, webhookCallback } from "grammy";
import { UserFromGetMe } from "grammy/types";
import { arkary } from "./bot.js";

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
            console.log(env.BOT_TOKEN);

            return new Response(e.message);
        }
    },
};
