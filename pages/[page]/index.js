import {useRouter} from "next/router";
import HeaderBar from "../../components/nav/HeaderBar";
import React from "react";
import GetSideBar from "../../components/Business/GetSideBar";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MakeMenu from "../../components/Posts/MakeMenu";
import fetch from "node-fetch";

export async function getServerSideProps(context){
    //handle if person or business url
    //assume business url

    //axios request for page
    let page = context.query.page;
    let pageUrl = "https://www.facebook.com/"+ page +"/";
    const res = await fetch(pageUrl);
    const resText = await res.text();

    //import jsdom for dom capabilties on server
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(resText);
    const document = dom.window.document;


    const pageName = document.getElementById("pageTitle").innerHTML;
    console.log(pageName);

    //pass html document to functions to get various page elements
    let sidebarLinks = await GetSideBar(document);
    //right sidebar PagesProfileHomeSecondaryColumnPagelet
    return{props:{pageName, sidebarLinks}}
}

const Page = ({pageName, sidebarLinks}) => {
    const router = useRouter();

    const pageMenu = sidebarLinks.map((item) => {
        return MakeMenu(item)
    });

    return (
        <div>
            <HeaderBar />
            <div>
                <h1>{pageName}</h1>
                <Paper>
                    <MenuList>
                        {pageMenu}
                    </MenuList>
                </Paper>
            </div>
        </div>
    );
};

export default Page;

