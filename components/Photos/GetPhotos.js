import React from "react";
import fetch from "node-fetch"
import {Headers} from "node-fetch";
import GetFBID from "../GetFBID";

export default async function GetPhotos(page) {
    let photoArray = [];
    const fbID = await GetFBID(page);

    const fullUrl = 'https://www.facebook.com/'+ fbID +'/photos';
    const headers = new Headers({'User-Agent': "PostmanRuntime/7.24.1"});
    const opts = {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
    };
    const res = await fetch(fullUrl);
    if (res.ok) {
        console.log("response okay");
        const resText = await res.text();
        const jsdom = require("jsdom");
        const {JSDOM} = jsdom;
        const dom = new JSDOM(resText);
        const document = dom.window.document;
        const imageElements = document.querySelectorAll("div[role='main']")[0].firstChild.childNodes[2].querySelectorAll("img[class='img']");
        console.log(imageElements.children);

        return photoArray
    } else {
        console.log("response failed");
        return []
    }
}