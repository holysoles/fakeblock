import {useRouter} from "next/router";
import HeaderBar from "../../components/HeaderBar";
import React from "react";
import axios from 'axios'
import GetSideBar from "../../components/Business/GetSideBar";
import GetFeed from "../../components/Business/GetFeed";

export async function getServerSideProps(context){
    //handle if person or business url
    //assume business url

    //axios request for page
    let page = context.query.page;
    let pageUrl = "http://www.facebook.com/" + page;
    const res = await axios.get(pageUrl);

    //import jsdom for dom capabilties on server
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(res.data);
    const document = dom.window.document;

    //pass html document to functions to get various page elements
    let sidebarLinks = await GetSideBar(document);
    //right sidebar PagesProfileHomeSecondaryColumnPagelet
    //let mainFeed = await GetFeed(document);
    return{props:{sidebarLinks}}
}

const Page = ({sidebarLinks}) => {
    const router = useRouter();

    const sidebar = sidebarLinks.map((item) => {
        let text = item.text;
        let link = item.link;
        return(
            <li key={link}>
                <a href={link}>{text}</a>
            </li>
        )
    });

    return (
        <div>
            <HeaderBar />
            <div>
                <h1>{router.query.page}</h1>
                <ul>
                    {sidebar}
                </ul>
            </div>
        </div>
    );
};

export default Page;

