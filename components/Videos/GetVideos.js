import fetch, {Headers} from 'node-fetch';
import React from "react";
import GetFBID from "../GetFBID";

export default async function GetVideos(page){
    const pageid = await GetFBID(page);

    var myHeaders = new Headers();
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //myHeaders.append("Cookie", "sb=u7O1Xo5djoFP0mbuSP_k0MvF; fr=14aihP7YQQ5aEgJwn..BeoGHg.9O.F6s.0.0.BetfTj.AWVan_FG");

    var urlencoded = new URLSearchParams();
    urlencoded.append("variables", "{'count':9,'id':"+ pageid +"}");
    urlencoded.append("doc_id", "2451335444967241");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const res = await fetch("https://www.facebook.com/api/graphql/", requestOptions);
    const resText = await res.text();
    const resJson = JSON.parse(resText);
    const videoArray = resJson.data.node['all_videos'].edges;

    return videoArray
}