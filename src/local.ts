import { Bot } from "grammy";
import { arkary } from "./bot";

const bot = new Bot(process.env.BOT_TOKEN!);
bot.use(arkary);

console.log(process.env.BOT_TOKEN!);

bot.start();
