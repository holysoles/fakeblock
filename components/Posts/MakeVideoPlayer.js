import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import GetTrueVideoSource from "./GetTrueVideoSource";

export default class MakeVideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={'videoPlayer'}>
                <ReactPlayer url={this.props.source} light={this.props.thumb}/>
                <noscript>Embedded Videos Require Javascript to Play</noscript>
            </div>
        )
    }
}