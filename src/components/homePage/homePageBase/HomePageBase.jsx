import React, { useState } from 'react';
import HomePageAppBar from '../appBarComponent/AppBar';
import ProfileContainer from '../profileContainer/ProfileContainer';
import './HomePageBase.css'

const HomPageBase = () => {
    
    //Show profile container
    const[showContainer, setShowContainer] = useState(true);

    //Show profile container method
    const changeContainer = () =>{
        setShowContainer(!showContainer);
    }

    return (
        <div className='homePageBase'>
            <div>
            <HomePageAppBar Change = {changeContainer}/>
            </div>
            <div className='proifileContainer'>
            {
                showContainer ? <ProfileContainer/> : null
            }
            </div>
        </div>
    );
}

export default HomPageBase;
