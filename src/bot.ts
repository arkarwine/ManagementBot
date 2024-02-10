import { Composer, InputFile } from "grammy";
import ytdl from "ytdl-core";

export const arkary = new Composer();

arkary.on("message", async (ctx) => {
    const wait = await ctx.reply("Loading ...");
    const audio = await ytdl("https://www.youtube.com/watch?v=0Iy9bahS71s", {
        quality: "highestaudio",
        filter: "audioonly",
    });
    ctx.replyWithAudio(new InputFile(audio));
    await ctx.api.deleteMessage(ctx.chat.id, wait.message_id);
});
