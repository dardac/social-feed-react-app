import React, { Component } from 'react';
import PostComponent from '../PostComponent/PostComponent';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import './ListComponent.scss'

const ListComponent = ({ data }) => (
    <div className='ListContainer'>
        <h1 className='Title'>Social Feed</h1>
        {   
            data.length > 0 ?
                data.map(post => <PostComponent key={post.id} post={post}/>) :
                < LoaderComponent />
        }
    </div>
)


export default ListComponent;