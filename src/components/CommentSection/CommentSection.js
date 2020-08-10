import React, { Component } from 'react';
import Comments from './Comments';
import PostComment from './PostComment';
import './Comments.css'

class CommentSection extends Component {
    render() {
        const comments = this.props.comments.map((comment, index) => {
            return(
                <Comments
                    key={index}
                    id={comment.id}
                    user_id={comment.user_id}
                    content={comment.content}
                    full_name={comment.full_name}
                />
            )
        }) 
        return (
            <div className='comments-container'>
                <h2>Comments</h2>
                <ul>
                    {comments}
                </ul>
                <PostComment profile_id= {this.props.profile_id}/>
            </div>
        );
    }
}

 
export default CommentSection;