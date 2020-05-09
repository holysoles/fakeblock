import {useRouter} from "next/router";
import React from "react";
import HeaderBar from "../../components/nav/HeaderBar";
//import { Typography } from "@material-ui/core/Typography";
import MakeVideoPlayer from "../../components/Posts/MakeVideoPlayer";
import GetVideos from "../../components/Videos/GetVideos";
import GetTrueVideoSource from "../../components/Posts/GetTrueVideoSource";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        'margin': '4%',
    },
});

export async function getServerSideProps(context){
    let page = context.query.page;
    let videoArray = await GetVideos(page);
    const videos = await Promise.all(videoArray.map( async (videoPost)=>{
        console.log(videoPost)
        const url = videoPost.node.url;
        const trueUrl = await GetTrueVideoSource(url);
        const timestamp = new Date(parseInt(videoPost.node['publish_time'])*1000).toLocaleString() ;
        const plays = videoPost.node['play_count'];
        const text = videoPost.node['savable_description'].text;
        const cursor = videoPost.cursor;
        const videoObj = {url: trueUrl, shareUrl: url, timestamp: timestamp, playcount: plays, text: text, cursor: cursor};
        return videoObj
    }));
    return{props: {videos}}
}

const Page = ({videos}) => {
    const router = useRouter();
    const classes = useStyles();


    const videoList = videos.map((obj)=>{
        return (
        <Card key={obj.url}  className={classes.root}>
            <MakeVideoPlayer source={obj.url} />
            <CardContent>
                <div>
                    {//Avatar
                    }
                    <Typography gutterBottom variant="h6">
                        {router.query.page}
                    </Typography>
                </div>
                <Typography gutterBottom variant="body2" color="textSecondary">
                    {obj.timestamp}
                </Typography>
                <Typography>
                    {obj.text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Likes
                </Button>
            </CardActions>
        </Card>
        )
    });

    return (
        <div>
            <HeaderBar/>
            <div>
                <div className='pagetitle'>
                    <Typography align='center' variant={'h4'}>{router.query.page}'s Videos</Typography>
                </div>
                <div>
                    {videoList}
                </div>
            </div>
        </div>
    );
};

export default Page;