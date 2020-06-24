import React, { Component } from 'react';
import Comments from './Comments';
import PostComment from './PostComment';

class CommentSection extends Component {
    render() { 
        return (  
            <div>
                <h2>Comments</h2>
                <Comments />
                <PostComment />
            </div>
        );
    }
}
 
export default CommentSection;