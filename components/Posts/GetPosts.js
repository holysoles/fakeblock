import React from "react";
import fetch from "node-fetch"
import {Headers} from "node-fetch";
import GetFBID from "../GetFBID";
import GetTrueVideoSource from "./GetTrueVideoSource";

export default async function GetPosts(page) {
    const jsdom = require("jsdom");
    const {JSDOM} = jsdom;
    const dom = new JSDOM();
    const document = dom.window.document;
    let postsArray = [];

    const fbID = await GetFBID(page);
    const jsonUrl = 'https://www.facebook.com/pages_reaction_units/more/?';
    //timeline cursor appears to set where posts get request starts from
    const timelineCursor = "%7B%22timeline_cursor%22%3A%22%22%2C%22timeline_section_cursor%22%3Anull%2C%22has_next_page%22%3Atrue%7D";
    const params = {
        'surface': 'www_pages_posts',
        'unit_count': '8', //sets how many posts to get
        '__a': '1'
    };
    const headers = new Headers({'User-Agent': "PostmanRuntime/7.24.1"});
    const opts = {
        method: 'GET',
        headers: headers,
        redirect: 'follow',
    };
    const fullUrl = jsonUrl + 'page_id=' + fbID + "&cursor=" + timelineCursor + '&' + new URLSearchParams(params);

    const res = await fetch(fullUrl, opts);
    if (res.ok) {
        console.log("response okay");
        //need to get html updates from json response
        const resText = await res.text();
        const rawJson = resText.replace("for (;;);", "");
        const postsJson = JSON.parse(rawJson);
        const rawHtml = postsJson.domops[0][3].__html;
        //construct doc from raw html string and get post wrapper elements into html collection
        const postsDoc = document.createElement('html');
        postsDoc.innerHTML = rawHtml;
        //get posts elements from html doc
        const postWrappers = postsDoc.getElementsByClassName("_5pcr userContentWrapper");

        //console.log("how many post containers: ", postWrappers.length)
        for (let i = 0; i < postWrappers.length; i++) {
            //construct post object
            let post = {user: '', timestamp: '', text: [], images: [], video: ''};
            const postImages = postWrappers[i].getElementsByTagName('img');
            const postParagraphs = postWrappers[i].getElementsByTagName('p');

            //get username name, timestamp from post
            const usernameWrapper = postWrappers[i].getElementsByClassName('fwb').item(0);
            const username = usernameWrapper.textContent;
            post.user = username;
            const timestamp = postWrappers[i].getElementsByClassName('timestampContent')[0].textContent;
            post.timestamp = timestamp;

            //if post has paragraphs, iterate over each and push to text array in post object
            for (let j = 0; j < postParagraphs.length; j++) {
                post.text.push(postParagraphs[j].textContent);
            }
            //if post has images, iterate over each and push to image array in post object
            if (postImages.length > 0) {
                for (let k = 0; k < postImages.length; k++) {
                    const image = postImages.item(k);
                    const imagesToIgnore = "Image may contain: possible text that says 'Shop Now'";
                    if (image.getAttribute('alt') !== imagesToIgnore) {
                        post.images.push(image.getAttribute('src'));
                    }
                }
            }
            //if post has a facebook or youtube video, grab source and set video property in post object
            let fbVideo = postWrappers[i].querySelectorAll("a[aria-label~='Video,']");
            let ytVideo = postWrappers[i].querySelectorAll("a[href*='youtu.be']");
            if (fbVideo.length > 0){
                const videoSource = fbVideo[0].ajaxify;
                const embeddedVideo = "https://www.facebook.com" + videoSource;
                //const trueSource = await GetTrueVideoSource(embeddedVideo);
                post.video = (embeddedVideo)
            }
            if(ytVideo[0] !== undefined){
                const strippedYT = ytVideo[0].href.split("?u=")[1].split("&h=")[0];
                const cleanedYT = strippedYT.replace(/%3A/g,':').replace(/%2F/g,'/');
                //replace with invidious?
                //const invidious = cleanedYT.replace("youtu.be","invidio.us");
                post.video = cleanedYT;
            }
            postsArray.push(post);
        }
        return postsArray
    } else {
        console.log("response failed");
        return []
    }
}