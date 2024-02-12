import { Bot } from "https://deno.land/x/grammy@v1.20.3/bot.ts";
import { arkary } from "./bot.ts";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);
bot.use(arkary);

console.log(Deno.env.get("BOT_TOKEN")!);

bot.start();
