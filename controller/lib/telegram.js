const fs = require('fs');
const ytld = require('ytdl-core')
const { axiosInstance } = require("./axios");

function sendMessage(messsagObj,messageText)
{
    return axiosInstance.get("sendMessage",{
        chat_id: messsagObj.chat.id,
        text: messageText,

    })
}
function sendPhoto(messsagObj,result,inlineKey)
{
    return axiosInstance.get("sendPhoto",{
        chat_id: messsagObj.chat.id,
        photo: result.videoDetails.thumbnails[4].url,
        caption: result.videoDetails.title,
        reply_markup: JSON.stringify({
            inline_keyboard: [
            /* Inline buttons. 2 side-by-side */
            // [ { text: "Button 1", callback_data: "btn-1" }, { text: "Button 2", callback_data: "btn-2" } ],
            inlineKey,
            /* One button */
            // [ { text: "Next", callback_data: "next" } ],
            
            /* Also, we can have URL buttons. */
            // [ { text: "Open in browser", url: "telegraf.js.org" } ]
                            ]})

    })
}
function deleteMessage(messsagObj,msgid)
{
    return axiosInstance.get("deleteMessage",{
        chat_id: messsagObj.chat.id,
        message_id:  msgid
    }) 
}

async function handleMessage(messageObj)
{
    const messageText = messageObj.text || "";
    let loadingmessageID = messageObj.message_id + 1;
    

    if(messageText.charAt(0) === "/")
    {
        const command = messageText.substr(1);

        if(command == "start")
        {
            sendMessage(messageObj,"Send your Youtube Link to get your download Link.");
            // return sendMessage(messageObj," salut vous avez appuyé start");
            // const vinfo = await ytld.getInfo('http://www.youtube.com/watch?v=aqz-KE-bpKQ');
            // let streamObj = ytld('https://www.youtube.com/watch?v=1aBqUNyN_Ko'); https://www.youtube.com/watch?v=rJzOv3cgfck
            // streamObj.pipe(fs.createWriteStream('video.mp4'));
             
            // try {
            //     let stream2 = await ytld.getInfo('https://www.youtube.com/watch?v=rJzOv3cgfck');
            // //     let result = `
            // //     title: ${stream2.videoDetails.title}
            // //     viewCount: ${stream2.videoDetails.viewCount}
            // //     durée: ${stream2.videoDetails.lengthSeconds}
            // //     author: ${stream2.videoDetails.author.name}
            // //     thumb: ${stream2.videoDetails.thumbnails[0]}
            // //    `;


            //     const videoFormatsArr = getVideoFormats(stream2);
            //     deleteMessage(messageObj,loadingmessageID);
            //     console.log(stream2.formats);
            //     setTimeout(()=>
            //     {
            //         sendPhoto(messageObj,stream2,videoFormatsArr)
                
                    
            //     },1000)
            // } catch (error) {
            //     console.log("veuillez saisir une URL valide")
            // }

            

        }
        else if(command == "inline")
        {

        }
    }
    else
    {
        let firstLetters = messageText.slice(0,4)
        console.log(firstLetters)
        // return "OC";
        if(firstLetters == 'http')
        {
            
            try {
                sendMessage(messageObj,"veuillez patienter.....");
                let stream2 = await ytld.getInfo(messageText);

                const videoFormatsArr = getVideoFormats(stream2);
                deleteMessage(messageObj,loadingmessageID);
                console.log(stream2.formats);
                setTimeout(()=>
                {
                    sendPhoto(messageObj,stream2,videoFormatsArr)
                
                    
                },1000)
            } catch (error) {
                
                
                setTimeout(()=>{
                    deleteMessage(messageObj,loadingmessageID);
                },500)
                setTimeout(()=>{
                    sendMessage(messageObj,"Please send a valid Youtube link 🙏");
                },1000)
                
                // console.log("Error Please send a valid Youtube link 🙏")
            }
            
        }
        else
        {
            sendMessage(messageObj,'Please send a valid Youtube link 🙏')
        }
        // console.log(messageObj);
        
        // telegramBot.sendMessage(messageObj.chat.id, messageText).catch((error) => {
        //     console.log(error.code);  // => 'ETELEGRAM'
        //     console.log(error.response.body); // => { ok: false, error_code: 400, description: 'Bad Request: chat not found' }
        // });
    }
}

function getVideoFormats(videoInfo)
{
        let videoFormatArray = videoInfo.formats;
        let largeIsSet = false;
        let hd1080IsSet = false;
        let hd720IsSet = false;
        let result = [];
        for(let i = 0; i < videoFormatArray.length; i++)
        {
            if(videoFormatArray[i].quality == 'large' && videoFormatArray[i].hasVideo && videoFormatArray[i].hasAudio && !largeIsSet)
            {
                largeIsSet = true;
                result.push({ text: "480px", url: videoFormatArray[i].url });
            }
            else if(videoFormatArray[i].quality == 'hd720' && videoFormatArray[i].hasVideo && videoFormatArray[i].hasAudio && !hd1080IsSet)
            {
                hd1080IsSet = true;
                result.push({ text: "DOWNLOAD HD ⏬", url: videoFormatArray[i].url} );
            }
            else if(videoFormatArray[i].quality == 'hd1080' && videoFormatArray[i].hasVideo && videoFormatArray[i].hasAudio && !hd720IsSet)
            {
                hd720IsSet = true;
                result.push({ text: "hd-10800px", url: videoFormatArray[i].url } );
            }
            
        }

        return result;
}
async function handleQuerry(messageObj)
{
    const messageText = messageObj.text || "";
    let loadingmessageID = messageObj.message_id + 1;
    

    if(messageText.charAt(0) === "/")
    {
        const command = messageText.substr(1);

        if(command == "start")
        {
            sendMessage(messageObj,"veuillez patienter.....");
             
            let stream2 = await ytld.getInfo('https://www.youtube.com/watch?v=rJzOv3cgfck');
            let result = `
                title: ${stream2.videoDetails.title}
                viewCount: ${stream2.videoDetails.viewCount}
                durée: ${stream2.videoDetails.lengthSeconds}
                author: ${stream2.videoDetails.author.name}
                thumb: ${stream2.videoDetails.thumbnails[0]}
               `

            deleteMessage(messageObj,loadingmessageID);
            console.log(stream2.videoDetails.thumbnails[4]);
            setTimeout(()=>
            {
                sendPhoto(messageObj,stream2)
                
            },1000)

        }
        else if(command == "inline")
        {

        }
    }
    else
    {
        
        console.log(messageObj);
        sendMessage(messageObj,'erreure cest produite')

    }
}
module.exports = {handleMessage,handleQuerry};