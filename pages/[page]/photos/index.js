import {useRouter} from "next/router";
import React from "react";
import HeaderBar from "../../../components/nav/HeaderBar";
import Typography from "@material-ui/core/Typography";
import MakeGallery from "../../../components/Photos/MakeGallery";
import GetPhotos from "../../../components/Photos/GetPhotos";
import GetAlbumLinks from "../../../components/Photos/GetAlbumLinks";
import Link from "next/link";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export async function getServerSideProps(context){
    let page = context.query.page;
    let photoArray = await GetPhotos(page);
    let albumLinks = await GetAlbumLinks(page);

    return{props:{photoArray, albumLinks}}
}

const Page = ({photoArray, albumLinks}) => {
    const router = useRouter();

    const imageGallery = <MakeGallery images={photoArray} />;

    const albumList = albumLinks.map((album)=>{
        const link = "/" + router.query.page + "/photos/?tab=album&album_id=" + album.link;
        const name = album.name;
        return(
            <MenuItem onClick={()=>{router.push(link)}} key={name}>
                <Typography variant="h6">
                    {name}
                </Typography>
            </MenuItem>
        )
    });

    return (
        <div>
            <HeaderBar/>
            <div>
                <div className='pagetitle'>
                    <Typography align='center' variant={'h4'}>{'user'}</Typography>
                </div>
                <div>
                    {imageGallery}
                </div>
                <div>
                    {albumList}
                </div>
            </div>
        </div>
    );
};

export default Page;