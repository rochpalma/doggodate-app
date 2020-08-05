import React, { Component } from 'react';
import Context from '../../Context';
import CommentSection from '../CommentSection/CommentSection';
import SelectedProfButtons from '../SelectedProfButtons/SelectedProfButtons'
import dog3 from '../../images/dog-3.jpg';  
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import icon_location from '../../images/icons-desc/Icon_Location.png';
import icon_gender from '../../images/icons-desc/Gender.png';
import icon_age from '../../images/icons-desc/Icon_Age.png';
import icon_breed from '../../images/icons-desc/Icon_Breed.png';
import icon_size from '../../images/icons-desc/Icon_Size.png';


class SelectedProfile extends Component {
    static contextType = Context;

    componentDidMount() {
        DoggodateApiService.getDog(this.props.match.params.id)
            .then(dog => {
                this.context.setSelectedDog(dog)
                this.context.setDogProfile(dog)
            })
            .catch(err => {
                console.log(err)
            })
        DoggodateApiService.getComments(this.props.match.params.id)
            .then(res => {

                this.context.setComments(res);
                console.log("context" +JSON.stringify(res))     
            })
            // .then(this.context.setComments)
            .catch(this.context.setError);
        
          
    }

    render() { 
        return (
            <Context.Consumer>
            { (context) => {
                const {full_name, breed, age, about_me, size, gender, id, city, zip_code }  = context.selectedDog;
                console.log('val'+JSON.stringify(context.comments))
                TokenService.saveOwnerId(this.context.selectedDog.owner_id);
                // TokenService.saveDogId(this.context.selectedDog.id);
                 
                return(
                    <div className='gray-bg profile-page'>
                        <ProfileNav />
                        {/* <div className='profile-container'> */}
                        <main>
                            <div className='profile-container'>
                                {/* <section className='sample'> */}
                                <img src={dog3} alt='dog3' className='dp-img'/> 
                                <SelectedProfButtons />
                                <section className='pet-details'>
                                    <h2>{full_name}</h2>
                                    <div className='dog-info'>
                                        <span>
                                            <img src={icon_location} className='icons' />
                                            {city}
                                        </span>
                                        <span>
                                            <img src={icon_size} className='icons' />
                                            {size}
                                        </span>
                                        <span>
                                            <img src={icon_age} className='icons' />
                                            {age} 
                                        </span>
                                        <span>
                                            <img src={icon_gender} className='icons' />
                                            {gender}
                                        </span>
                                        <span>
                                            <img src={icon_breed} className='icons' />
                                            {breed}
                                        </span>
                                        
                                        <p className='pet-desc'>{about_me}</p>
                                    </div>
                                </section>
                                <CommentSection comments={context.comments} profile_id= {id}/>
                                {/* </section> */}
                            </div>
                        </main>
                        <Footer />
                </div>
                )
            }}
        </Context.Consumer>  
        );
    }
}
 
export default SelectedProfile;