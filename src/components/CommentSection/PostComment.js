import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';

class PostComment extends Component {
    static contextType = Context;

    handleSubmit = event => {
        event.preventDefault();
        const { comment } = event.target;
        DoggodateApiService.postComment({   
            content: comment.value,
            profile_id: this.props.profile_id,
            user_id: TokenService.getUserId()
        })
            .then(this.context.addComment)
            
            .then((res) => {
                comment.value = ''
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() { 
        return (
            <form  
                onSubmit={this.handleSubmit}  
            >
                <div className='comment-fields-container'>
                    <textarea name="comment" id="comment" placeholder='Post a comment' cols='50'
                    rows='3' required/>
                    <button type="submit" className='profile-btn'>Post</button>
                </div>
            </form>
        );
    }
}
 
export default PostComment;