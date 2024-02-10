import { Bot, webhookCallback } from "grammy";
import { arkary } from "./bot";

const bot = new Bot(process.env.BOT_TOKEN!);
bot.use(arkary);

bot.command("start", (ctx) => ctx.reply("Hello World!"));

export default webhookCallback(bot, "http");
