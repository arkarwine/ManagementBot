import { Bot } from 'grammy';

export const bot = new Bot(process.env.BOT_TOKEN!);

bot.on('message', (ctx) => ctx.reply(ctx.message.text! + 'local'));
