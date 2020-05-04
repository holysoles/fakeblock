import {useRouter} from "next/router";
import React from "react";
import HeaderBar from "../../../components/nav/HeaderBar";
import Typography from "@material-ui/core/Typography";
import MakeGallery from "../../../components/Photos/MakeGallery";
import GetPhotos from "../../../components/Photos/GetPhotos";

export async function getServerSideProps(context){
    let page = context.asPath.replace('?tab=album&album_id=','');
    let photoArray = await GetPhotos(page);

    return{props:{photoArray}}
}

const Page = ({photoArray}) => {
    const router = useRouter();

    const imageGallery = <MakeGallery images={photoArray} />;

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
            </div>
        </div>
    );
};

export default Page;