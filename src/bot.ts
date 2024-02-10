import { Composer, InputFile } from 'grammy';
import ytdl from 'ytdl-core';

export const arkary = new Composer();

arkary.on('message', async (ctx) => {
	const audio = await ytdl('https://www.youtube.com/watch?v=0Iy9bahS71s', { quality: 'highestaudio', filter: 'audioonly' });
	ctx.replyWithAudio(new InputFile(audio));
});
