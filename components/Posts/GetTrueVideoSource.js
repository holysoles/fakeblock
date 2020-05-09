import fetch from "node-fetch";

export default async function GetTrueVideoSource(videoUrl){

    //fetch video page
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const res = await fetch(videoUrl, requestOptions);
    const resText = await res.text();
    const videoSource = resText.split("video:[{url:\"")[1].split("\",start:0")[0];
    return videoSource
}