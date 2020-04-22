import {useRouter} from "next/router";
import React from "react";
import GetPosts from "../../components/Posts/GetPosts";
import HeaderBar from "../../components/nav/HeaderBar";
import MakePosts from "../../components/Posts/MakePosts";

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