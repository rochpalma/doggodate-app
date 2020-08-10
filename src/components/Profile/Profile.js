import React, { Component } from 'react';
import Context from '../../Context';
import DogDP from '../DogDP/DogDP';
import UserButtons from '../UserButtons/UserButtons';
import PetDetails from '../PetDetails/PetDetails';
import CommentSection from '../CommentSection/CommentSection';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import  './Profile.css'


class Profile extends Component {
    static contextType = Context;

    componentDidMount() {
        const userId = TokenService.getUserId();
        DoggodateApiService.getDogsByOwner(userId)
            .then(dogs => {
                this.context.setMyDogs(dogs)
                TokenService.saveDogId(this.context.myDogs[0].id)
            }
            )
            .catch(this.context.setError);
        DoggodateApiService.getComments(TokenService.getDogId())
            .then(res => {
                this.context.setComments(res);
                console.log("context" +JSON.stringify(res))     
            })
            .catch(err => console.log(err))
              
    }

    // render() { 
    //     return (  
    //         <div>
    //             <main>
    //                 <div className='profile-container'>
    //                 <DogDP />
    //                 <UserButtons />
    //                 <PetDetails />
    //                 {/* <CommentSection /> */}
    //                 </div>
    //             </main>
    //         </div>
           
    //     );
    // }

    render() {
    
        let profileId = ''; 
        const dogs = this.context.myDogs.map((dog, index) => {
            if(index===0){//temporary
                profileId= dog.id//temp
                console.log('dogs ' + JSON.stringify(dog) +' '+ index)
                return(
                    <>
                        <DogDP picture={dog.picture}/>
                        <UserButtons />
                        <PetDetails dog={dog}/>
                    </>
                ) 
            }  
        }); 
        return ( 
            <Context.Consumer> 
                { (context) => {
                    return(
                        <div>
                            <main>
                                <div className='profile-container'>
                               {dogs}
                               <CommentSection comments={context.comments} profile_id= {profileId}/>
                                </div>
                            </main>
                        </div>
                    )
                }
                }   
            </Context.Consumer>
        );
    }
}
 
export default Profile;

