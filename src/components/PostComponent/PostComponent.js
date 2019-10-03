import React, { Component } from 'react';
import './PostComponentStyles.scss';

const PostComponent = ({post}) => {
    const fullDate = new Date(post.created_at);
    const currentDate = new Date();
    const postFullDate = new Date(fullDate + fullDate.getTime() + currentDate.getTimezoneOffset());
    const postDate = postFullDate.getDate();
    const postMonth = postFullDate.getMonth();
    const postYear = postFullDate.getFullYear();
    const postHours = postFullDate.getHours();
    const postMinutes = postFullDate.getMinutes();

    return (
        <div className='PostContainer'>
            <div className='RowInfo'>
                <h3 className='PostAuthor'>{post.user.name}</h3>
                <h3 className='PostDate'>{postDate}/{postMonth}/{postYear} {postHours}:{postMinutes.toString().padStart(2, "0")}</h3>
            </div>
            <h3 className='PostText'>{post.text}</h3>
        </div>
    )
}


export default PostComponent;