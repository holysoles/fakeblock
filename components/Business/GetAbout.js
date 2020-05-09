import fetch from "node-fetch";
import {Headers} from "node-fetch";

export default async function GetAbout (pageid){
    const reqURL = 'https://www.facebook.com/' + pageid + "/about";

    var myHeaders = new Headers();
    myHeaders.append("authority", "www.facebook.com");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36");
    myHeaders.append("origin", "https://www.facebook.com");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "sb=u7O1Xo5djoFP0mbuSP_k0MvF; fr=14aihP7YQQ5aEgJwn..BeoGHg.fj.F6s.0.0.BetbQ9.AWVKTgAJ");

    var urlencoded = new URLSearchParams();
    urlencoded.append("__user", "0");
    urlencoded.append("__a", "1");
    urlencoded.append("__dyn", "7AgNe5Gmawgrolg9odoyGxu4QjFwn8S2Sq2i5U4e1qzEjyQdxK5WAx-bxWUW16whoS2S4og-2i3qcw8258txG4o4O0CawQw86q2u2-263WWwSxu15wgE46fw9C48szU2Tx62WUry8465o-cBK0jW2uV8y2G2CaCzU5i3a1PwBgK7o88vwEwIw9i2-2WE9EjwaOfxW686-4Ueo2swwwNwmEe8");
    urlencoded.append("__csr", "");
    urlencoded.append("__req", "2");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    const res = await fetch(reqURL, requestOptions);
    const resText = await res.text();

    const aboutHTML = resText.split('<!--')[1].split("-->")[0];
    const pageName = resText.split('See more of ')[1].split(' on Facebook')[0];

    const about = {name: pageName, html:aboutHTML};
    return about
}