import React from "react";

export default class MainPlayer extends React.Component {

    constructor() {
        super();

    }

    render() {



        return (
            <div className="MainPlayer">
                <div class="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src={"//www.youtube.com/embed/"+ this.props.CurrVideoID}></iframe>
                </div>
            </div>
        );
    }
};
