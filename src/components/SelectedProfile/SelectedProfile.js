import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import SelectedProfButtons from '../SelectedProfButtons/SelectedProfButtons'
import dog3 from '../../images/dog-3.jpg';  
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';

class SelectedProfile extends Component {
    render() { 
        return (
            <>  
                <ProfileNav />
                <div className='profile-container'>
                    <img src={dog3} alt='dog3' /> 
                    <SelectedProfButtons />
                    <section className='pet-details'>
                        <h2>Dazai</h2>
                        <p>Dachshund</p>
                        <p> Medium | Young | Male</p>
                        <p>90292</p>          
                        <h3>About Me</h3>
                        <p>Los Angeles, CA</p>
                        <p>Hello! I am Dazai. Playful puppy</p>
                    </section>
                    <CommentSection />
                </div>
                <Footer />
            </>
        );
    }
}
 
export default SelectedProfile;