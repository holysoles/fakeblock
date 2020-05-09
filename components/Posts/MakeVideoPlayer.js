import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import GetTrueVideoSource from "./GetTrueVideoSource";

export default class MakeVideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        if(this.props.source.includes('youtu')){
            //replace with invidious
            const invidious = this.props.source.replace("youtu.be","invidio.us/embed").replace("www.youtube.com","invidio.us");
            return(
                <iframe className={'videoPlayer'} src={invidious} />
            )
        }

        else{
        return (
            <div className={'videoPlayer'}>
                <ReactPlayer url={this.props.source} controls width={'fill'} light={this.props.thumb}/>
                <noscript>Embedded Videos Require Javascript to Play</noscript>
            </div>
            )
        }
    }
}