import { videoInfo } from "./types.ts";

const BASE_URL = new URL("https://ytdl-6dsnjfw0t-behs1.vercel.app/");
const STREAMING_URL = new URL("/api/download?v=0Iy9bahS71s", BASE_URL);

const res = await fetch(STREAMING_URL);

const data: videoInfo = await res.json();
const urls = data.formats
    .filter((value) => value.hasAudio && !value.hasVideo)
    .toSorted((a, b) => b.bitrate! - a.bitrate!);
console.log("🚀 ~ url:", urls[0].url);
console.log(urls[0].mimeType);

const fileResponse = await fetch(urls[0].url);

if (fileResponse.body) {
    const file = await Deno.open("./test.mp3", { write: true, create: true });
    await fileResponse.body.pipeTo(file.writable);
}
