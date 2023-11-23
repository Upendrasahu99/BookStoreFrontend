import React, { useState } from 'react';
import HomePageAppBar from '../appBarComponent/AppBar';
import ProfileContainer from '../profileContainer/ProfileContainer';
import './HomePageBase.css'
import Display from '../showAllBook/Display';

const HomPageBase = () => {
    
    //Show profile container
    const[showContainer, setShowContainer] = useState(false);
    
    //Show login signup page at top of dashboard
    // const[loginSigupPage, setLoginSigupPage] = useState(false);

    //Show profile container method
    const changeContainer = () =>{
        setShowContainer(!showContainer)
    }

    //Show Login Signup Page 
    // const showRegLogPag = () =>{
    //     setLoginSigupPage(!loginSigupPage)
    // }

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
            <div className='display'>
                <div id='upperDiv'>
                    <p id='booksHeading'>Books</p>
                    <p></p>
                </div>
                <div id='lowerDiv'>
                    <Display/>
                </div>
            </div>
        </div>
    );
}

export default HomPageBase;
