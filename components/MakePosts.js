import MakeAvatar from "./MakeAvatar";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import MakeLightbox from "./MakeLightbox";

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
    },
});

function openLightbox(){
   console.log('clicked')
}

export default function MakePosts(postsArray) {
    const classes = useStyles();

    const postsList = postsArray.map((post) => {
        let Avatar = MakeAvatar('/');
        const paragraphs = post.text.map((paragraph) => {
            return (
                <Typography variant="body2" component="p">
                    {paragraph}
                </Typography>
            )
        });
        const images = post.img.map((source) => {
            if (source.includes('p50x50')) {
                Avatar = MakeAvatar(source)
            }
            else {
                //console.log(source)
                return source
            }
        });

        return (
            <Card className={classes.root}>
                <MakeLightbox images={images}/>
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
    })
    return postsList
}
