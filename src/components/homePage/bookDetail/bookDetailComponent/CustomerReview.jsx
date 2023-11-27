import React from 'react';
import './CustomerReview.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CustomerReview = () => {
    return (
        <div>
            <div id='customerNameReview'>Aniket Chile</div>
            <div id='cutomerRattingReview'><StarBorderIcon/><StarBorderIcon/> <StarBorderIcon/><StarBorderIcon/> <StarBorderIcon/></div>
            <div id='customerTextReview'>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</div>     
        </div>
    );
}

export default CustomerReview;
