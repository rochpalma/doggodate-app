import React, { Component } from 'react';
import Context from '../../Context';

class Comments extends Component {
    static contextType = Context;

    render() {
        return (  
            <li>
                <div className='comment-box'>
                <div>
                    <p><span className='userName'>{this.props.full_name}</span> </p>       
                    <p>{this.props.content} </p>
                </div>
                </div>
            </li>
        );
    }
}
 
export default Comments;    