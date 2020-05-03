import React from 'react'
import {useRouter} from 'next/router'
import Typography from "@material-ui/core/Typography";
import HeaderBar from "../../components/nav/HeaderBar";

export default function pgRedirect(){
    const router = useRouter();
    const requestedUrl = router.asPath.replace('/pg','');
    let redirectTo = '/[page]/';

    if(requestedUrl.includes('posts')){
        redirectTo = '/[page]/posts/'
    }
    if(requestedUrl.includes('photos')){
        redirectTo = '/[page]/photos/'
    }
    if(requestedUrl.includes('videos')){
        redirectTo = '/[page]/videos/'
    }
    if(requestedUrl.includes('about')){
        redirectTo = '/[page]/about/'
    }
    if(requestedUrl.includes('events')){
        redirectTo = '/[page]/events/'
    }


    return (
        <div>
            <HeaderBar/>
            <button onClick={() => router.replace(redirectTo, requestedUrl)}>
                <Typography>
                    Click to be Redirected!
                </Typography>
            </button>
        </div>
    )
}