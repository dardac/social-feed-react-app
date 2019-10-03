import React, { Component } from 'react';

let maxUpdates = 2;

export default function fetchSocialFeed(feedURL, postsToDisplay, updateInterval, WrappedComponent) {
    return class extends Component {
        //This is to manage memory leak
        _isMounted = false;

        constructor(...props) {
            super(...props)
            this.state = { data: [], count: 1 }
        }

        componentDidMount() {
            this._isMounted = true;
            
            //Only fetch once
            if (updateInterval < 5000) maxUpdates = 1;

            this.interval = setInterval(() => {
                if (this.state.count <= maxUpdates) {
                        fetch(feedURL)
                        .then(response => response.json())
                        .then(data => {
                            if (this._isMounted) {
                                this.setState({ data: data.slice(0, postsToDisplay) });
                                this.setState({ count: this.state.count + 1 });                            
                            }
                        })
                        .catch(err => console.log(err.message));
                    }
            }, updateInterval);
        }

        componentWillUnmount() {
            this._isMounted = false;
            clearInterval(this.interval);
        }

        render() {
            return (
                <WrappedComponent data={this.state.data} {...this.props} />
            )
        }
    }
}