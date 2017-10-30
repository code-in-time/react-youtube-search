import React from "react";
import MainPlayer from "./MainPlayer.js"
import Search from "./Search.js"
import VideoSearchResults from "./VideoSearchResults"
// import WeatherShow from "./WeatherShow.js"

export default class Outer extends React.Component {
    constructor() {
        super();
        // The State
        this.state = {
           ytArr: [],
           //the video id that is set
           CurrVideoID: null,
           YTSearch: ''
        };

    }

    setYTSearch(YTSearch) {
        this.setState({YTSearch});
    }

    setCurrentVideoID(vidID) {
        this.setState({CurrVideoID: vidID});
    }

    rememberVideos(vidsArray) {
        this.setState({ytArr: vidsArray});

        // If there is no default video the set it  the state.
        if (this.state.CurrVideoID===null && this.state.ytArr[0] ) {
            this.setState({ CurrVideoID: this.state.ytArr[0].id.videoId});
        }
    }

    render() {
        return (
            <div>
                <Search
                    setYTSearch={this.setYTSearch.bind(this)}
                    rememberVideos={this.rememberVideos.bind(this)} />

                <div className="row">
                    <div className="col-sm-8">
                        <MainPlayer CurrVideoID={this.state.CurrVideoID} />
                    </div>
                    <div className="col-sm-4">
                        {<VideoSearchResults
                            CurrVideoID={this.state.CurrVideoID}
                            setCurrentVideoID={this.setCurrentVideoID.bind(this)}
                            ytArr={this.state.ytArr} />}
                    </div>
                </div>
            </div>
        );
    }
};
