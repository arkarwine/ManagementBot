import { UserFromGetMe } from '@grammyjs/types';
import { Bot, webhookCallback } from 'grammy';
import { arkary } from './bot';

interface Environment {
	BOT_TOKEN: string;
}

let botInfo: UserFromGetMe | undefined = undefined;

export default {
	async fetch(request: Request, env: Environment) {
		try {
			const bot = new Bot(env.BOT_TOKEN, { botInfo });

			if (botInfo === undefined) {
				await bot.init();
				botInfo = bot.botInfo;
			}
			bot.use(arkary);

			const callback = webhookCallback(bot, 'cloudflare-mod');
			return await callback(request);
		} catch (e) {
			console.log(e.message);
			return new Response(e.message);
		}
	},
};
