import { videoInfo } from "./types.ts";

const BASE_URL = new URL("https://ytdl-6dsnjfw0t-behs1.vercel.app/");
const STREAMING_URL = new URL("/api/download?v=0Iy9bahS71s", BASE_URL);

const res = await fetch(STREAMING_URL);

console.log(STREAMING_URL.href);

const data: videoInfo = await res.json();

console.log(
    data.formats
        .filter((value) => value.hasAudio && !value.hasVideo)
        .toSorted((a, b) => b.bitrate! - a.bitrate!)[0].url
);
