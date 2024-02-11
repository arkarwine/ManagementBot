import { PipedAPI } from "./PipedApi";

PipedAPI;

// const YOUTUBE_URL_REGEX =
//     /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]+).*/;

// const video_id =
//     "https://www.youtube.com/watch?v=aUY4WRTXEME&list=RDMMaUY4WRTXEME&start_radio=1".match(
//         YOUTUBE_URL_REGEX
//     )![1];
// console.log("🚀 ~ video_id:", video_id);

// const piped = new PipedAPI();

// console.log(await piped.streams(video_id));

console.log(
    await (
        await fetch("https://pipedapi.kavin.rocks/streams/aUY4WRTXEME", {
            method: "GET",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            },
        })
    ).text()
);
