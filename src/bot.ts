import { Composer } from 'grammy';

export const arkary = new Composer();

arkary.on('message', (ctx) => ctx.reply(ctx.message.text! + 'local'));
