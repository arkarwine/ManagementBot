import { Composer, InputFile } from "https://deno.land/x/grammy@v1.20.3/mod.ts";

import { videoInfo } from "./types.ts";

const YOUTUBE_URL_REGEX =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]+).*/;

const BASE_URL = "https://ytdl-6dsnjfw0t-behs1.vercel.app/";
const STREAMING_URL = BASE_URL + "api/download?v=";
export const arkary = new Composer();

arkary.on("message:text", async (ctx) => {
    const video_id = ctx.message.text.match(YOUTUBE_URL_REGEX);

    if (video_id) {
        const wait = await ctx.reply("Loading ...");
        const stream_url = STREAMING_URL + video_id[1];
        const res = await fetch(stream_url);

        const data: videoInfo = await res.json();

        const url = data.formats
            .filter((value) => value.hasAudio && !value.hasVideo)
            .toSorted((a, b) => b.bitrate! - a.bitrate!)[0].url;

        await ctx.api.editMessageText(
            wait.chat.id,
            wait.message_id,
            "Uploading ..."
        );

        ctx.replyWithAudio(
            new InputFile({
                url: url,
            })
        ).then(
            async () =>
                await ctx.api.deleteMessage(ctx.chat.id, wait.message_id)
        );
    }
});
