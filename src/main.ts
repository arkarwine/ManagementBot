import express from "express";
import { Bot, webhookCallback } from "grammy";
import { arkary } from "./bot";

const bot = new Bot(process.env.BOT_TOKEN!);
bot.use(arkary);

bot.command("start", (ctx) => ctx.reply("Hello World!"));

const server = express();
const port = process.env.PORT || 8080;

server.use(webhookCallback(bot, "express"));
server.listen(port, () => console.log(`listening on port ${port}`));
