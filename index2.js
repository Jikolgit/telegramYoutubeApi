// require('dotenv').config();
// const axios = require('axios');
// const TelegramBot = require('node-telegram-bot-api');
// const {TOKEN, SERVER_URL} = process.env;
// const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
// const URI = `setWebhook?url=${SERVER_URL}`;
// const WEBHOOK_URL = SERVER_URL;



// const express = require('express');
// const app = express();
// const port = 4040;

// const { handler } = require('./controller');
// app.use(express.json());

// const bot = new TelegramBot(TOKEN, {polling: true});

// bot.on('message',async (msg)=>
// {
//     console.log(msg);
//     handler(msg,bot);
//     // bot.sendMessage(msg.chat.id, 'text de teste').catch((error) => {
//     //     console.log(error.code);  // => 'ETELEGRAM'
//     //     console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
//     //   });
// } )

// // app.post('*', async (req, res) => {
// //     console.log(req.body)
// //     res.send(await handler(req))
// //   })

// // app.get('*', async (req, res) => {
// //     console.log(req.body)
// //     res.send(await handler(req))
// //   })
  
// //   app.listen(port, async () => {
// //     console.log(`Example app listening on port ${port}`)
    
// //   })