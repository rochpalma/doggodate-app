import React, { Component } from 'react';
import Context from '../../Context';
import Comments from './Comments';
import PostComment from './PostComment';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import './Comments.css'

class CommentSection extends Component {
    // static contextType = Context;

    // state = {
    //     comments: this.context.comments,
    // }

    // componentDidMount() {
    //     //const profile_id = TokenService.getDogId();
    //     DoggodateApiService.getComments(this.props.profile_id)
    //         .then(res => {

    //             //this.context.setComments(res);
    //             console.log("context" +JSON.stringify(res))
                
                
    //         })
    //         // .then(this.context.setComments)
    //         .catch(this.context.setError);
    

    render() {
        const comments = this.props.comments.map((comment, index) => {
            return(
                <Comments
                    key={index}
                    id={comment.id}
                    user_id={comment.user_id}
                    content={comment.content}
                />
            )
        }) 
        return (
            <div className='comments-container'>
                <h2>Comments</h2>
                {comments}
                <PostComment profile_id= {this.props.profile_id}/>
            </div>
        );
    }
}

 
export default CommentSection;