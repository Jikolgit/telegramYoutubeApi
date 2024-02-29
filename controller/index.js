
const { handleMessage, handleQuerry } = require("./lib/telegram");


async function handler(req)
{
    const messageObj = req.body;
    // console.log(messageObj);
    if(messageObj.message)
    {
        
        // console.log('message normal')
        // const messageObj = message.message;
        await handleMessage(messageObj.message);
        
    }
    else if(messageObj.callback_query)
    {
        
        await handleQuerry(messageObj.callback_query);
    }
    else
    {
        console.log('not alllow')
    }
    return;
}

module.exports = {handler};