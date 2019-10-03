import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class LoaderComponent extends Component {
    render() {
        return (
            <Loader
                type="TailSpin"
                color="#eda8a8"
                height={100}
                width={100}
                timeout={30000}
            />
        );
    }
}