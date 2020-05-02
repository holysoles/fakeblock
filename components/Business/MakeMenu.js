import React from 'react';
import Typography from '@material-ui/core/Typography';
import {useRouter} from "next/router";
import Link from 'next/link';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventIcon from '@material-ui/icons/Event';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default function MakeMenu(item) {
    const router = useRouter();

    const text = item.text;
    const link = item.link;
    let icon = <a/>;
    let order = -1;
    //look for match menu icons
    switch(text){
        case "About":
            icon = <InfoIcon/>;
            order = 0;
            break;
        case "Posts":
            icon = <DynamicFeedIcon/>;
            order = 1;
            break;
        case "Menu":
            icon = <MenuBookIcon/>;
            order = 2;
            break;
        case "Photos":
            icon = <PhotoLibraryIcon/>;
            order = 3;
            break;
        case "Videos":
            icon = <VideoLibraryIcon/>;
            order = 4;
            break;
        case "Events":
            icon = <EventIcon/>;
            order = 5;
            break;
        case "Reviews":
            icon = <RateReviewIcon/>;
            order = 6;
            break;
    }

    return (
        <Link href={link} key={order}>
            <MenuItem>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <Typography variant="h6">
                    {text}
                </Typography>
            </MenuItem>
        </Link>
    );
}
