import React from "react";
import fetch from "node-fetch"
import {Headers} from "node-fetch";
import GetFBID from "../GetFBID";

export default async function GetPhotos(page) {
    let photoArray = [];
    const fbID = await GetFBID(page);

    const variables = "{'count':30,'pageID':'" + fbID + "'}";

    var myHeaders = new Headers();
    myHeaders.append("user-agent", "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Mobile Safari/537.36");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("variables", variables);
    urlencoded.append("doc_id", "3196825307056043");
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const res = await fetch("https://www.facebook.com/api/graphql/", requestOptions);
    console.log(res)

    if (res.ok) {
        console.log("response okay");
        const resJson = await res.json();
        const resPhotoList = resJson.data.page['posted_photos'].edges;
        for(let i = 0; i < resPhotoList.length; i++){
            let photoSource = resPhotoList[i].node.image.uri;
            photoArray.push(photoSource);
        }
        return photoArray
    } else {
        console.log("response failed");
        return []
    }
}