// import { Bot } from "grammy";
// import { arkary } from "./bot";

// const bot = new Bot(process.env.BOT_TOKEN!);
// bot.use(arkary);

// bot.start();

import express from "express";
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
