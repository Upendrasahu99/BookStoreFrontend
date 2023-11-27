import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./AppBar.css";
import bookLogo from "../../../asset/education@2x.png";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Search = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));



export default function HomePageAppBar({Change,Set}) {
  return (
    <Box className="profileContainer" sx={{ flexGrow: 1}}>
      <AppBar className="appBarHeader" position="static">
        <Toolbar className="toolBar">
          {/* Book logo(image) */}
          <img src={bookLogo} id="bookImage"></img>

          {/* BookStore Heading */}
          <Typography className="BSheading" onClick={()=>Set(null)}>Bookstore</Typography>

          {/* Search Bar */}
          <Search className="searchBarOuter">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* profile */}
         {/* <div className="profilAndCart"> */}

            {/* Profile */}
            <div className="profileButton" onClick={Change}>
                <PermIdentitySharpIcon
                  className="profileIcon"
                  style={{ color: "white" }}
                />
                <div>Profile</div>
            </div>
            
            {/* Cart */}
            <div className="cartButton" onClick={Change} >
                <ShoppingCartOutlinedIcon
                  className="cartLogo"
                  style={{ color: "white" }}
                />
                <div>
                  Cart
                </div>
            </div>


        </Toolbar>
      </AppBar>

      <div className="profileContainer">

      </div>
    </Box>
  );
}
