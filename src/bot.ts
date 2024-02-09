import { Bot, webhookCallback } from 'grammy';

const bot = new Bot('6741337977:AAF1_ah4m5u3lDhUn-SVkBevNOua84EiU6A');

bot.command('start', (ctx) => ctx.reply('Welcome! Up and running.'));
bot.on('message', (ctx) => ctx.reply('Got yet another message!'));

addEventListener('fetch', webhookCallback(bot, 'cloudflare'));
