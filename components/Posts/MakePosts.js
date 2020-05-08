import MakeAvatar from "./MakeAvatar";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import MakeVideoPlayer from "./MakeVideoPlayer";
import MakeGallery from "../Photos/MakeGallery";
import Linkify from 'linkifyjs/react';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        'margin': '4%',
    },
});

export default function MakePosts(postsArray) {
    const classes = useStyles();

    const postsList = postsArray.map((post) => {
        let Avatar = MakeAvatar('/');
        let paragraphs = post.text.map((paragraph, index) => {

            //look for link in paragraph text to create hyperlink
            paragraph = <Linkify tagName="p" options={{defaultProtocol: 'https'}}>{paragraph}</Linkify>;

            return (
                <Typography variant="body2" component="p" key={index}>
                    {paragraph}
                </Typography>
            )
        });
        let images = post.images.map((source) => {
            //if image is avatar
            if (source.includes('t1.0-1')) {
                Avatar = MakeAvatar(source, post.user)
            }
            else {
                return source
            }
        });
        //remove profile pic from image array
        let media = <MakeGallery images={images}/>;
        //if there is a video post, overwrite thumbnail with video player component
        if(post.video.length > 0){
            media = <MakeVideoPlayer source={post.video} thumb={post.images[1]} />
        }

        let externalLinkPreview = <p/>;
        if(post.link.length > 0){
            paragraphs =
                <Link href={post.link} rel={'noopener noreferrer'}>
                    {paragraphs}
                </Link>
        }

        return (
                <Card key={post.timestamp} className={classes.root}>
                    {media}
                    <CardContent>
                        <div>
                            {Avatar}
                            <Typography gutterBottom variant="h6">
                                {post.user}
                            </Typography>
                        </div>
                        <Typography gutterBottom variant="body2" color="textSecondary">
                            {post.timestamp}
                        </Typography>
                        {paragraphs}
                        <div>
                            {externalLinkPreview}
                        </div>
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
    return postsList
}
