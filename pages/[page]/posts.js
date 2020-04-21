import {useRouter} from "next/router";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GetPosts from "../../components/Business/GetPosts";
import HeaderBar from "../../components/HeaderBar";
import MakeAvatar from "../../components/MakeAvatar";
import MakePosts from "../../components/MakePosts";

export async function getServerSideProps(context){
    let page = context.query.page;
    let postsArray = await GetPosts(page);

    return{props:{postsArray}}
}

const Page = ({postsArray}) => {
    const router = useRouter();

    const postsList = MakePosts(postsArray);

    return (
        <div>
            <HeaderBar/>
            <div>
                <h1>{router.query.page}</h1>
                <ul>
                    {postsList}
                </ul>
            </div>
        </div>
    );
};

export default Page;