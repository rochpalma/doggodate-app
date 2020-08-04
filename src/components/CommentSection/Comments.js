import React, { Component } from 'react';
import Context from '../../Context';

class Comments extends Component {
    static contextType = Context;

    render() {
        return (  
            <div>
                <li>
                    <h2>{this.props.user_id}</h2>        
                    <p>{this.props.content} </p>
                </li>
            </div>
        );
    }
}
 
export default Comments;