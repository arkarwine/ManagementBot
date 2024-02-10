import express from "express";
import { Bot, webhookCallback } from "grammy";
import { arkary } from "./bot.mjs";

const bot = new Bot(process.env.BOT_TOKEN!);
bot.use(arkary);

if (process.env.NODE_ENV === "DEVELOPMENT") {
    bot.start();
} else {
    const port = 3000;
    const app = express();
    app.use(express.json());
    app.use(`/${bot.token}`, webhookCallback(bot, "express"));
    app.listen(port, () => console.log(`listening on port ${port}`));
}
