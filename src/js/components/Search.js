import React from "react";
import Axios from "axios";


export default class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            inputVAl: 'cars'
        }

        this.searchYoutubeByAPI(this.state.inputVAl);
    }

    clickSearch(e) {
        this.props.setYTSearch(this.state.inputVAl);
        this.searchYoutubeByAPI(this.state.inputVAl);
    }

    /**
     * This will search the video
     * @param  {[type]} vidSearch [description]
     * @return {[type]}           [description]
     */
    searchYoutubeByAPI(vidSearch) {
        const
            ytKey = 'AIzaSyD5kJVZ1RHfeVBYgdcZ7tgzSowVZGUb8Og',
            URL = 'https://www.googleapis.com/youtube/v3/search';

        let params = {
            key: ytKey,
            q: vidSearch,
            maxResults: 10,
            part: 'snippet',
            type: 'video'
        };

        Axios.get(URL, { params })
            .then((response) => {
                console.log('YTResponse',response);
                // Sett teh state youtube list.
                this.props.rememberVideos(response.data.items);
            })
            .catch((response) => {
                console.error(response);
            });
    }

    render() {
        return (
            <div className="Search container">
                <div className="row">
                    <div className="col-sm-4">
                        <input
                            value={this.state.inputVAl}
                            placeholder="search for a youtube video"
                            type="text"
                            className="form-control"
                            value={this.state.inputVAl}
                            onChange={e=>this.setState({inputVAl:e.target.value})}  />
                    </div>
                    <div className="col-sm-4">
                        <button
                            onClick={this.clickSearch.bind(this)}
                            type="button"
                            className="btn btn-primary">SEARCH</button>
                    </div>
                </div>
            </div>
        );
    }
};
