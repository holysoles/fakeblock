import React from 'react'
import { useRouter } from 'next/router';
import HeaderBar from "../../components/HeaderBar";
import axios from 'axios'
import GetFBID from "../../components/GetFBID";

export async function getServerSideProps(context){
    //setup query
    let query = context.params.search;
    if(query === undefined){
        return
    }
    //make and await axios request on public search page
    console.log("searchquery: ",query)
    const searchUrl = 'https://www.facebook.com/public/'+ query;
    let res = await axios.get(searchUrl);
    let htmlText = await res.data;
    //Need parser import for server side rendering
    var DomParser = require('dom-parser');
    var parser = new DomParser();
    var dom = parser.parseFromString(htmlText);
    if(dom !== null){
        //Results list is hidden element on Dom as string (lazy loading?) need to parse
        var hiddenElements = dom.getElementsByClassName('hidden_elem');
        var listText1 = hiddenElements[1].childNodes[0].childNodes[1].innerHTML;
        var listText2 = hiddenElements[4].childNodes[0].childNodes[1].innerHTML;
        var resultsContainer1 = parser.parseFromString(listText1);
        var resultsContainer2 = parser.parseFromString(listText2);
        let resultsArray1 = resultsContainer1.getElementsByClassName("_4bl7 _3-90");
        let resultsArray2 = resultsContainer2.getElementsByClassName("_4bl7 _3-90");
        let resultsArray = resultsArray1.concat(resultsArray2);
        let results = [];
        let profilepic;
        for(const result of resultsArray){
            let name =result.childNodes[0].attributes[0].value;
            let link = result.childNodes[0].attributes[6].value;

            //check if fbid is in link before making request
            let haveId = false;
            let facebookId = '';
            let profileUrl = link.replace('https://www.facebook.com/','');
            if(profileUrl.includes("people")){
                facebookId = profileUrl.split('/')[2];
                haveId = true;
            }
            //Since no id, make get request to get facebook id from profile page
            if(!haveId){
                facebookId = await GetFBID(link);
            }
            results.push({name: name, link: link, id: facebookId});

            //save image from fb url
            if(haveId){
                let picUrl = 'http://graph.facebook.com/'+ facebookId +'/picture?type=square';
                console.log(picUrl)
                //profilepic = await fetch(picUrl);
                //console.log(profilepic)
            }
        }
        return{props: {results}}
    }
}



const Page = ({results}) => {
    const router = useRouter();

    //iterate through array of result objects to make list
    const resultsList = results.map((result) => {
        let resultName = result.name;
        let resultLink = result.link;
        let resultId = result.id;
        //if resultID === '' then no profile pic available due to rate limiting
        //let resultImage = "/imgs/"+ resultId +".jpg";
        let resultImage = '';
        if(resultId !== ''){
            resultImage = 'http://graph.facebook.com/'+ resultId +'/picture?type=square'
        }

        return(
            <li key={resultLink}>
                <img src={resultImage} width="72" height="72"/>
                <a href={resultLink}>{resultName}</a>
            </li>
        )
    });

    return (
        <div>
            <HeaderBar />
            <div>
                <div>
                    <p>Search results for: <a>{router.query.search}</a></p>
                </div>
                <ul>
                    {resultsList}
                </ul>
            </div>
        </div>
    );
};

export default Page;