import axios from 'axios';
import React from "react";
import fetch from "node-fetch"

export default async function GetFBID(pagename){
    let fbID = '';

    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;

    console.log(pagename);
    //construct and fetch pageurl
    const pageUrl = "https://www.facebook.com/" + pagename;
    console.log("requesting page: ", pageUrl);
    let profileResponse = await fetch(pageUrl);
    let profileHtml = await profileResponse.text();
    let profileDom = new JSDOM(profileHtml);
    let profileDoc = profileDom.window.document;
    let metas = profileDoc.getElementsByTagName("meta");
    console.log(metas)
    //get id from meta tags for redirecting to ios app
    for(const meta of metas){
        if(meta.attributes[0].value === "al:ios:url"){
            //replace text if business page
            fbID = meta.attributes[1].value.replace('fb://page/?id=','');
            //replace text if profile page
            fbID = fbID.replace('fb://profile/?id=','');
        }
    }
    console.log(fbID);

    return fbID
}