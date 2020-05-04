

import React from "react";
import fetch from "node-fetch"
import {Headers} from "node-fetch";
import GetFBID from "../GetFBID";

export default async function GetPhotos(page) {
    let albumList = [];
    const fbID = await GetFBID(page);

    const variables = "{'count':30,'pageID':'" + fbID + "'}";

    var myHeaders = new Headers();
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("variables", variables);
    urlencoded.append("doc_id", "2386959101363343");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };
    const res = await fetch("https://www.facebook.com/api/graphql/", requestOptions);

    if (res.ok) {
        console.log("response okay");
        const resJson = await res.json();
        const resPhotoList = resJson.data.page['page_albums'].edges;
        for(let i = 0; i < resPhotoList.length; i++){
            let albumName = resPhotoList[i].node.name;
            let albumLink = resPhotoList[i].node.id;
            albumList.push({name: albumName, link: albumLink});
        }
        return albumList
    } else {
        console.log("response failed");
        return []
    }
}