import React from "react";
import "./ProfileContainer.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProfileContainer = () => {
  return (
    <div className="profileContainerComp">
      <p className="welcomeHeading">Welcome</p>
      <p className="instruction">To acess account and manage orders</p>
      <button className="loginSignupbutton">LOGIN/SIGNUP</button>
      <div className="shoppingBag">
        <ShoppingBagOutlinedIcon style={{width:"10px", height:"10px"}} />
        My Orders
      </div>
      <hr className="profileContainerLine"></hr>
      <div className="wishlist">
        <FavoriteBorderOutlinedIcon style={{width:"10px", height:"10px"}}/>
        Wishlist
      </div>
    </div>
  );
};

export default ProfileContainer;
