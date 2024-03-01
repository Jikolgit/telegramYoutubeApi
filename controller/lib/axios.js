// const axios = require('axios');
// const {TOKEN} = process.env;


// const BASE_URL = `https://api.telegram.org/bot${TOKEN}`;



// function getAxiosInstance()
// {
//     return{
//         get(methode,params)
//         {
//             return axios.get(`/${methode}`,{
//                 baseURL:BASE_URL,
//                 params
//             })
//         },
//         post(methode,data)
//         {
//             return axios.post(
//                 {
//                     methode:"post",
//                     baseURL:BASE_URL,
//                     url:`/${methode}`,
//                     data,
//                 });
//         },
//         getDeleteMessage(methode,params)
//         {
//             return axios.get(`/${methode}`,{
//                 baseURL:BASE_URL,
//                 params
//             })
//         },
//         sendThumb()
//         {
//             return axios.get(`/${methode}`,{
//                 baseURL:BASE_URL,
//                 params
//             })
//         },
//     };
// }

// module.exports = {axiosInstance: getAxiosInstance()};