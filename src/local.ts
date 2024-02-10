import { Bot } from 'grammy';
import { arkary } from './bot';

const bot = new Bot(process.env.BOT_TOKEN!);
bot.use(arkary);

bot.start();
