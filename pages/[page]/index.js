import {useRouter} from "next/router";
import HeaderBar from "../../components/nav/HeaderBar";
import React from "react";
import GetSideBar from "../../components/Business/GetSideBar";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MakeMenu from "../../components/Business/MakeMenu";
import fetch from "node-fetch";
import jsdom from "jsdom"

export async function getServerSideProps(context){
    //handle if person or business url
    //assume business url

    //get request for page
    let page = context.query.page;
    let pageUrl = "https://www.facebook.com/"+ page +"/";
    const res = await fetch(pageUrl);
    const resText = await res.text();

    //import jsdom for dom capabilties on server
    const { JSDOM } = jsdom;
    const dom = new JSDOM(resText);
    const document = dom.window.document;

    const pageNameElement = document.getElementById("pageTitle");
    let pageName = 'Facebook Page Not Found';
    if(pageNameElement !== null){
        //get pagename and remove unnecessary text
        pageName = pageNameElement.innerHTML;
        pageName = pageName.replace("| Facebook","");
    }

    //pass html document to functions to get various page elements
    let sidebarLinks = await GetSideBar(document);
    //right sidebar PagesProfileHomeSecondaryColumnPagelet
    return{props:{pageName, sidebarLinks}}
}

const Page = ({pageName, sidebarLinks}) => {
    const router = useRouter();

    const pageMenu = sidebarLinks.map((item) => {
        const menuItem =  MakeMenu(item);
        return menuItem
    });
    //sort to preset menu order
    pageMenu.sort((a,b)=>{return a.key-b.key});

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

