import {useRouter} from "next/router";
import HeaderBar from "../../components/nav/HeaderBar";
import React from "react";
import Paper from "@material-ui/core/Paper";
import GetAbout from "../../components/Business/GetAbout";
import renderHTML from 'react-render-html';
import Typography from "@material-ui/core/Typography";

export async function getServerSideProps(context){
    //get request for page
    let page = context.query.page;
    const info = await GetAbout(page);

    return{props: {info: info}}
}

const Page = ({info}) => {
    const router = useRouter();

    const about = renderHTML(info.html);

    return (
        <div>
            <HeaderBar />
            <div>
                <h1>About {info.name}</h1>
                <Paper>
                    <Typography>
                        {about}
                    </Typography>
                </Paper>
            </div>
        </div>
    );
};

export default Page;

