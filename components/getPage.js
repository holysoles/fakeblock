//import axios from 'axios';

default export function getPage(pageUrl){


    axios.get(pageUrl,config).then(res=>{
        let page = res;
    });

    return(page)
}