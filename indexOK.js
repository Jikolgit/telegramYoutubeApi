// require('dotenv').config();

// const {TOKEN, SERVER_URL} = process.env;
// const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
// const URI = `setWebhook?url=${SERVER_URL}`;
// // const WEBHOOK_URL = SERVER_URL+URI
// const express = require('express');
// const app = express();
// const port = 4040;
// const axios = require('axios');
// const { handler } = require('./controller');
// app.use(express.json());

// const init = async ()=>
// {
//     // const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL} `)
//     const res = await axios.get(`${TELEGRAM_API}/${URI}`)
//     console.log(res.data)
// }

// app.post('*', async (req, res) => {
//     console.log('methode POST')
//     res.send(await handler(req))
//   })

// app.get('*', async (req, res) => {
//     console.log('methode GET')
//     res.send(await handler(req))
//   })
  
//   app.listen(port, async () => {
//     console.log(`Example app listening on port ${port}`)
//     // await init();
//   })




