
const { handleMessage, handleQuerry } = require("./lib/telegram");


// async function handler(req)
// {
//     const messageObj = req.body;
//     // console.log(messageObj);
//     if(messageObj.message)
//     {
        
//         // console.log('message normal')
//         // const messageObj = message.message;
//         await handleMessage(messageObj.message);
        
//     }
//     else if(messageObj.callback_query)
//     {
        
//         await handleQuerry(messageObj.callback_query);
//     }
//     else
//     {
//         console.log('not alllow')
//     }
//     return;
// }

async function telegramApiHandler(req,botInstance)
{
    const messageObj = req;
    // console.log(messageObj);
        await handleMessage(messageObj,botInstance);
    
    return;
}
async function telegramQuerryHandler(req)
{
    const messageObj = req;
        await handleQuerry(messageObj);

    return;
}
module.exports = {telegramApiHandler,telegramQuerryHandler};