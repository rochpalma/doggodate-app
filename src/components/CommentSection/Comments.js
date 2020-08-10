import React, { Component } from 'react';
import Context from '../../Context';

class Comments extends Component {
    static contextType = Context;

    render() {
        return (  
            <li>
                <div className='comment-box'>
                <div>
                    <span className='userName'>{this.props.full_name}:</span>        
                    {this.props.content} 
                </div>
                </div>
            </li>
        );
    }
}
 
export default Comments;    