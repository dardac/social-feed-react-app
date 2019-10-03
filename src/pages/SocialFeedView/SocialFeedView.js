import React, { Component } from 'react';
import fetchSocialFeed from '../../components/fetchSocialFeed/fetchSocialFeed';
import ListComponent from '../../components/ListComponent/ListComponent';

const feedUrl = 'http://api.massrelevance.com/MassRelDemo/kindle.json';
const postsToDisplay = 10;
const updateInterval = 10000;

const SocialFeed = fetchSocialFeed(
    feedUrl,
    postsToDisplay,
    updateInterval,
    ListComponent
);

class SocialFeedView extends Component {

    render() {
        return (
            <div>
                <SocialFeed/>
            </div>
        )
    }
}

export default SocialFeedView;