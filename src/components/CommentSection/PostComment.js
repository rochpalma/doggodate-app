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
            // .then(this.context.addComment)
            .then((res) => {
                comment.value = ''
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
                {/* <textarea
                    required
                    aria-label='Type a comment...'
                    name='comment'
                    id='comment'
                    cols='30'
                    rows='3'
                    placeholder='Type a comment..'>
                </textarea> */}
                {/* <input type="text" name="comment" id="comment" placeholder='Post a comment' required/> */}
                    <textarea name="comment" id="comment" placeholder='Post a comment' cols='50'
                    rows='3' required/>
                    <button type="submit" className='page-btn'>Post</button>
                </div>
               
                    {/* <section>
                        <h3>Khun</h3>
                        <p>cute</p>
                    </section>
                </div> */}
            </form>
        );
    }
}
 
export default PostComment;