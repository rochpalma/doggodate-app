import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SelectedProfButtons extends Component {
    render() { 
        return (  
            <div className='userBtn'>
                <ul>
                    <li>
                        <Link to='/meetup' className='page-btn'>Invite to Meet</Link>
                    </li>
                </ul>              
            </div>
        );
    }
}
 
export default SelectedProfButtons;