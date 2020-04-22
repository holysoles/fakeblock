import {useRouter} from "next/router";
import HeaderBar from "../../components/nav/HeaderBar";
import React from "react";
import axios from 'axios'
import SearchResults from "../../components/SearchResults";

export async function getServerSideProps(context){
    const query = context.params.pagesearch;
    //api key for google search
    const apiKey = 'AIzaSyDPDWPBR6U4jktm6-Mf48I3B4MBPGrE-oo';
    const searchUrl = 'https://www.googleapis.com/customsearch/v1?key='+ apiKey +'&cx=009314889963947572451' +
        ':y8n4xwymi73&q=' + query;
    const response = await axios.get(searchUrl);
    const searchResults = response.data.items;
    let results = [];
    for(const result of searchResults){
        let title = result.title;
        let link = result.link;

        console.log(link);
        //replace facebook name instances
        link = link.replace("https://www.facebook.com",'');

        results.push({title: title, link: link});
        console.log("next result")
    }
    return{props: {results}}

}

const Page = ({results}) => {
    const router = useRouter();

    return (
        <div>
            <HeaderBar />
            <div>
                <div>
                    <p>Business Search results for: <a>{router.query.pagesearch}</a></p>
                </div>
                <SearchResults results={results}/>
            </div>
        </div>
    );
};

export default Page;