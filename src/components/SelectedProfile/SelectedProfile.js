import React, { Component } from 'react';
import Context from '../../Context';
import CommentSection from '../CommentSection/CommentSection';
import SelectedProfButtons from '../SelectedProfButtons/SelectedProfButtons'
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import PetDetails from '../PetDetails/PetDetails';


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
        .catch(this.context.setError);         
    }

    render() { 
        return (
            <Context.Consumer>
            { (context) => {
                const {full_name, breed, age, about_me, size, gender, id, city, picture}  = context.selectedDog;
                TokenService.saveOwnerId(this.context.selectedDog.owner_id);
                return(
                    <div className='gray-bg profile-page'>
                        <ProfileNav />
                        <main>
                            <div className='profile-container'>
                                <img src={picture} alt='dog3' className='dp-img'/> 
                                <SelectedProfButtons />
                                
                                <section className='pet-details'>
                                    <PetDetails dog={context.selectedDog} />
                                </section>
                                <CommentSection comments={context.comments} profile_id= {id}/>
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