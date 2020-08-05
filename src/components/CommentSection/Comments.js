import React, { Component } from 'react';
import Context from '../../Context';

class Comments extends Component {
    static contextType = Context;

    render() {
        return (  
            <li>
                <div className='comment-box'>
                <p>
                    <span className='userName'>{this.props.user_id}</span>        
                    {this.props.content} 
                </p>
                </div>
            </li>
        );
    }
}
 
export default Comments;    