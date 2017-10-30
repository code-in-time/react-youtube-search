import React from "react";

export default class VideoSearchResults extends React.Component {
    constructor() {
        super();

    }

    clickImg(videoId) {
        this.props.setCurrentVideoID(videoId)
        console.log('click');
    }

    renderResults() {

        let output = [];

            this.props.ytArr.map((item, index) =>
                output.push(
                    <div className="well" key={item.id.videoId}>
                        <img onClick={e => this.clickImg(item.id.videoId)} src={item.snippet.thumbnails.default.url} />
                        <h6>{item.snippet.title}</h6>
                    </div>
                )
            );

        return output;
    }

    render() {
        return (
            <div className="VideoSearchResults container">
                {this.renderResults()}
            </div>
        );
    }
};
