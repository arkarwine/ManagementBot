import { Composer, InputFile } from "https://deno.land/x/grammy@v1.20.3/mod.ts";

import PipedAPI from "./PipedApi/index.ts";

const YOUTUBE_URL_REGEX =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]+).*/;

export const arkary = new Composer();
const piped = new PipedAPI();

arkary.on("message:text", async (ctx) => {
    const video_id = ctx.message.text.match(YOUTUBE_URL_REGEX);

    if (video_id) {
        const wait = await ctx.reply("Loading ...");

        const url = (await piped.streams(video_id[1])).audioStreams.sort(
            (a, b) => b.bitrate - a.bitrate
        )[0].url;

        await ctx.api.editMessageText(wait.chat.id, wait.message_id, url);

        ctx.replyWithAudio(new InputFile((await fetch(url)).body!)).then(
            async () =>
                await ctx.api.deleteMessage(ctx.chat.id, wait.message_id)
        );
    }
});
