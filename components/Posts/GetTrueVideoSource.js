import fetch from "node-fetch";

export default async function GetTrueVideoSource(videoUrl){
    //fetch video page
    const res = await fetch(videoUrl);
    const resText = await res.text();
    //create html document from response
    const document = DOMParser(resText);

    const videoElement = document.querySelectorAll("div[data-sigil='inlineVideo']")[0];

}