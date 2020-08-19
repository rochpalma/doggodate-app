import React, { Component } from 'react';
import Context from '../../Context';
import CommentSection from '../CommentSection/CommentSection';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import './PetDetails.css';
import icon_location from '../../images/icons-desc/Icon_Location.png';
import icon_gender from '../../images/icons-desc/Gender.png';
import icon_age from '../../images/icons-desc/Icon_Age.png';
import icon_breed from '../../images/icons-desc/Icon_Breed.png';
import icon_size from '../../images/icons-desc/Icon_Size.png';

class PetDetails extends Component {
    static contextType = Context;

    // componentDidMount() {
    //     const userId = TokenService.getUserId();
    //     DoggodateApiService.getDogsByOwner(userId)
    //         .then(dogs => {
    //             this.context.setMyDogs(dogs)
    //             TokenService.saveDogId(this.context.myDogs[0].id)
    //         }
                
    //         //console.log(JSON.stringify(dogs))
    //         )
    //         .catch(this.context.setError);
    //     DoggodateApiService.getComments(TokenService.getDogId())
    //         .then(res => {
    //             //this.context.clearDogProfile();
    //             this.context.setComments(res);
    //             console.log("context" +JSON.stringify(res))     
    //         })
    //         // .then(this.context.setComments)
    //         // .catch(this.context.setError);
    //         .catch(err => console.log(err))
              
    // }

    // render() {
    //     let profileId = ''; 
    //     const dogs = this.context.myDogs.map((dog, index) => {
    //         if(index===0){//temporary
    //             profileId= dog.id//temp
    //             console.log('dogs ' + JSON.stringify(dog) +' '+ index)
    //             return(
    //                 <>
    //                     <h2>{dog.full_name}</h2>
    //                     <div className='dog-info'>
    //                                     <span>
    //                                         <img src={icon_location} className='icons' />
    //                                         {dog.city}
    //                                     </span>
    //                                     <span>
    //                                         <img src={icon_size} className='icons' />
    //                                         {dog.size}
    //                                     </span>
    //                                     <span>
    //                                         <img src={icon_age} className='icons' />
    //                                         {dog.age} 
    //                                     </span>
    //                                     <span>
    //                                         <img src={icon_gender} className='icons' />
    //                                         {dog.gender}
    //                                     </span>
    //                                     <span>
    //                                         <img src={icon_breed} className='icons' />
    //                                         {dog.breed}
    //                                     </span>
                                        
    //                                     <p className='pet-desc'>{dog.about_me}</p>
    //                                 </div>
    //                 </>
    //             ) 
    //         }  
    //     }); 
    //     return ( 
    //         <Context.Consumer> 
    //             { (context) => {
                    
    //                 console.log('ang id ay' +profileId)
    //                 return(
    //                 <>
    //                     {/* <section className='pet-details profile-container'> */}
    //                     <section className='pet-details'>
    //                     {dogs}
    //                     <CommentSection comments={context.comments} profile_id= {profileId}/>
    //                     </section>
                        
    //                 </>)
    //             }
    //             }   
    //         </Context.Consumer>
    //     );
    //     // return (
    //     //     <Context.Consumer> 
    //     //         { context => {
    //     //             const {full_name, breed, age, about_me, size, gender }  = context.myDogs;
    //     //             console.log(context.myDogs)
    //     //             return(
    //     //                 <div>
    //     //                     <section className='pet-details'>
    //     //                         <h2>{full_name}</h2>
    //     //                         <p>{breed}</p>
    //     //                         <p>{size} | {age} | {gender}</p>
    //     //                         {/* <p>90292</p>           */}
    //     //                         <h3>About Me</h3>
    //     //                         {/* <p>Los Angeles, CA</p> */}
    //     //                         <p>{about_me}</p>
    //     //                     </section>
    //     //                     {/* <CommentSection /> */}
    //     //                 </div>
    //     //             )
    //     //             }
    //     //         }
    //     //     </Context.Consumer> 
    //     // );
    // }
    render(){
        return(
            <>
                <h2>{this.props.dog.full_name}</h2>
                <div className='dog-info'>
                    <span>
                        <img src={icon_location} className='icons' />
                        {this.props.dog.city}, {this.props.dog.loc_state}
                    </span>
                    <span>
                        <img src={icon_size} className='icons' />
                        {this.props.dog.size}
                    </span>
                    <span>
                        <img src={icon_age} className='icons' />
                        {this.props.dog.age} 
                    </span>
                    <span>
                        <img src={icon_gender} className='icons' />
                        {this.props.dog.gender}
                    </span>
                    <span>
                        <img src={icon_breed} className='icons' />
                        {this.props.dog.breed}
                    </span>
                    
                    <p className='pet-desc'>{this.props.dog.about_me}</p>
                </div>
            </>
        )
    }
}
 
export default PetDetails;