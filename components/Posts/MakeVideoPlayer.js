import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class MakeVideoPlayer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ReactPlayer url={this.props.source} light={this.props.thumb} controls/>
                <noscript>Embedded Videos Require Javascript to Play</noscript>
            </div>
        )
    }
}