import React from 'react';
import './Display.css';
import bookImg from '../../../asset/SampleBookimg.png'
import { Paper } from '@mui/material';

const Display = ({Book}) => {
    return (
        <div id="displayComponent">
            <Paper>
            <div id='upperdivDisplay'>
            <img src={bookImg} className="bookImg"></img>
            </div>
            <div id='lowerDivDisplay'>
                <div id='bookTitle'>{Book.title}</div>
                <div id='authorName'>{Book.author}</div>
                <div id='ratingbox'>4.5</div>
                <div id='price'>Rs  {Book.price}</div>
            </div>
            </Paper>
        </div>
    );
}

export default Display;
