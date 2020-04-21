import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

export default class MakeLightbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        let images = this.props.images;
        images.shift();
        console.log(images);

        if(images.length === 0){
            return <div/>
        }

        return (
            <div>
                <CardActionArea onClick={() => this.setState({ isOpen: true })}>
                    <CardMedia
                        component="img"
                        alt="Post Image"
                        height="250"
                        image={images[0]}
                        title="Post Image"
                    />
                </CardActionArea>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}