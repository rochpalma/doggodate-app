import React, { Component } from 'react';

class PostComment extends Component {
    render() { 
        return (  
            <div>
              <input type="text" name="comment" id="comment" placeholder='Post a comment' required/>
              <input type="submit" value="Post" id="submit"/> 
            </div>
        );
    }
}
 
export default PostComment;