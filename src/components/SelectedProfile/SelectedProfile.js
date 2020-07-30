import React, { Component } from 'react';
import Context from '../../Context';
import CommentSection from '../CommentSection/CommentSection';
import SelectedProfButtons from '../SelectedProfButtons/SelectedProfButtons'
import dog3 from '../../images/dog-3.jpg';  
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';

class SelectedProfile extends Component {
    static contextType = Context;

    componentDidMount() {
        DoggodateApiService.getDog(this.props.match.params.id)
            .then(dog => 
             this.context.setSelectedDog(dog)
            )
            .catch(err => {
                console.log(err)
            })
          
    }

    render() { 
        return (
            <Context.Consumer>
                { (context) => {
                    const {full_name, breed, age, about_me, size, gender }  = context.selectedDog;
                    TokenService.saveOwnerId(this.context.selectedDog.owner_id);
                    return(
                        <>
                    <ProfileNav />
                    <div className='profile-container'>
                        <img src={dog3} alt='dog3' /> 
                        <SelectedProfButtons />
                        <section className='pet-details'>
                            <h2>{full_name}</h2>
                            <p>{breed}</p>
                            <p> {size} | {age} | {gender}</p>
                            {/* <p>{90292}</p>           */}
                            <h3>About Me</h3>
                            {/* <p>Los Angeles, CA</p> */}
                            <p>{about_me}</p>
                        </section>
                        <CommentSection />
                    </div>
                    <Footer />
                    </>
                    )
                }}
            </Context.Consumer>
            // <>  
            //     <ProfileNav />
            //     <div className='profile-container'>
            //         <img src={dog3} alt='dog3' /> 
            //         <SelectedProfButtons />
            //         <section className='pet-details'>
            //             <h2>Dazai</h2>
            //             <p>Dachshund</p>
            //             <p> Medium | Young | Male</p>
            //             <p>90292</p>          
            //             <h3>About Me</h3>
            //             <p>Los Angeles, CA</p>
            //             <p>Hello! I am Dazai. Playful puppy</p>
            //         </section>
            //         <CommentSection />
            //     </div>
            //     <Footer />
            // </>
        );
    }
}
 
export default SelectedProfile;