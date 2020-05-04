import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

export default class MakeGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let images = this.props.images;
        //if no images return empty div
        if(images.length === 0){
            return <div/>
        }
        if(images.length === 1){
            return(
                <Carousel showArrows={false} showThumbs={false}>
                    <div>
                        <img src={images[0]} />
                    </div>
                </Carousel>
            )
        }
        //create list of images
        const imageList = images.map((image)=>{
            return(
                <div key={images.indexOf(image)}>
                    <img src={image}/>
                </div>
            )
        });

        return (
            <Carousel showArrows={false} dynamicHeight showThumbs={false}>
                {imageList}
            </Carousel>
        )
    }
}