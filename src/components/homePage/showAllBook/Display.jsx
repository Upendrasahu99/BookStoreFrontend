import React from 'react';
import './Display.css';
import bookImg from '../../../asset/SampleBookimg.png'
import { Paper } from '@mui/material';

const Display = () => {
    return (
        <div id="displayComponent">
            <Paper>
            <div id='upperdivDisplay'>
            <img src={bookImg} className="bookImg"></img>
            </div>
            <div id='lowerDivDisplay'>
                <div id='bookTitle'>Don't Make me think</div>
                <div id='authorName'>by Steve Krug</div>
                <div id='ratingbox'>4.5</div>
                <div id='price'>Rs 1500</div>
            </div>
            </Paper>
            {/* <div id='upperdivDisplay'>
                <img src={bookImg} className="bookImg"></img>
            </div>
            <div id='lowerDivDisplay'>
                <div id='bookTitle'>Don't Make me think</div>
                <div>by Steve Krug</div>
                <div style={{display:"flex"}}></div>
                <div style={{fontWeight:"bold", display:"flex"}}>Rs 1500</div>
            </div> */}
        </div>
    );
}

export default Display;
