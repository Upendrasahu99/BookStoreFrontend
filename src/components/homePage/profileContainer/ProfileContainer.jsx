import React from "react";
import "./ProfileContainer.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

const ProfileContainer = () => {

  const navigate = useNavigate();

  //It will navigate login signup page
  const showLogRegPage = () => {
    navigate("/login_signup");
  };

  return (
    <div className="profileContainerComp">
      <p className="welcomeHeading">Welcome</p>
      <p className="instruction">To acess account and manage orders</p>

      {/* onclick it will show LoginSignup Page  */}
      <button className="loginSignupbutton" onClick={showLogRegPage}>
        LOGIN/SIGNUP
      </button>

      <div className="shoppingBag">
        <ShoppingBagOutlinedIcon style={{ width: "10px", height: "10px" }} />
        My Orders
      </div>
      <hr className="profileContainerLine"></hr>
      <div className="wishlist">
        <FavoriteBorderOutlinedIcon style={{ width: "10px", height: "10px" }} />
        Wishlist
      </div>
    </div>
  );
};

export default ProfileContainer;
