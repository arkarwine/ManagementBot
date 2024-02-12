import { Bot } from "https://deno.land/x/grammy@v1.20.3/bot.ts";
import { arkary } from "./bot.ts";

const bot = new Bot("5529005476:AAEgVP8JK9GCr5mYr-1BmmyAOU6w7Xc4ICY");
bot.use(arkary);

bot.start();
