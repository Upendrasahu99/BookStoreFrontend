import React from 'react';
import { Button } from '@mui/material';
import './AddToCartButton.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';

const AddToCartButton = () => {
    return (
        <div>
            <Button
            variant="contained"
            sx={{ background: "#A03037", width: "170px" }}
          >
            ADD TO BAG
          </Button>

          {/* <div id='incrementDecrementButton'>
            <div id='addRemoveButton'><AddIcon/></div>
            <div><TextField id="outlined-basic"  variant="outlined" /></div>
            <div id='addRemoveButton'><RemoveIcon/></div>
          </div> */}
        </div>
    );
}

export default AddToCartButton;
