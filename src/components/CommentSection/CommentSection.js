import React, { Component } from 'react';
import Comments from './Comments';
import PostComment from './PostComment';
import './Comments.css'

class CommentSection extends Component {
    render() { 
        return (  
            <div className='comments-container'>
                <h2>Comments</h2>
                <Comments />
                <PostComment />
            </div>
        );
    }
}
 
export default CommentSection;