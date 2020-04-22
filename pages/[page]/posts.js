import {useRouter} from "next/router";
import React from "react";
import GetPosts from "../../components/Posts/GetPosts";
import HeaderBar from "../../components/nav/HeaderBar";
import MakePosts from "../../components/Posts/MakePosts";
import Typography from "@material-ui/core/Typography";

export async function getServerSideProps(context){
    let page = context.query.page;
    let postsArray = await GetPosts(page);

    return{props:{postsArray}}
}

const Page = ({postsArray}) => {
    const router = useRouter();
    const postsList = MakePosts(postsArray);

    //get username for page heading
    let userName = '404 Page Not Found';
    if(postsArray[0] !== undefined){
        userName = postsArray[0].user
    }

    return (
        <div>
            <HeaderBar/>
            <div>
                <div className='pagetitle'>
                    <Typography align='center' variant={'h4'}>{userName}</Typography>
                </div>
                <div>
                    {postsList}
                </div>
            </div>
        </div>
    );
};

export default Page;