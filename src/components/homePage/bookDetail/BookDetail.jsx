import React from "react";
import "./BookDetail.css";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import CustomerReview from "./CustomerReview";
import Typography from "@mui/material/Typography";

const BookDetail = () => {
  // for start rating
  const [value, setValue] = React.useState(2);

  return (
    <div id="dispBookMain">
      {/* Left */}
      <div id="leftDivDispBook">
        <div id="leftDivAboveDispBook">
          <img
            src="https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9788172234980.jpg"
            id="selectImageDispBook"
          ></img>
          <div id="imageBoxDispBook">
            <img
              src="https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9788172234980.jpg"
              id="imageDispBook"
            ></img>
          </div>
        </div>

        <div id="leftDivBelowDispBook">
          <Button
            variant="contained"
            sx={{ background: "#A03037", width: "170px" }}
          >
            NOTIFY ME
          </Button>
          <Button
            variant="contained"
            sx={{ background: " #333333", width: "170px" }}
          >
            <FavoriteIcon />
            WISHLIST
          </Button>
        </div>
      </div>

      {/* Right */}
      <div id="rightDivDispBook">
        <div id="titleDispBook">Heading</div>
        <div id="authorDispBook">author</div>
        <div id="showRatingBoxDispBook">
          4.5 <StarIcon sx={{ fontSize: "12px" }} />
        </div>
        <div id="bookPriceDispBook">Rs 1500</div>
        <div className="horizontalLineDispBook">
          <hr></hr>
        </div>
        <Typography id="discriptionDispBook">
            <div id="discHeadingDispBook">- Book Detail</div>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </Typography>
        <div className="horizontalLineDispBook">
          <hr></hr>
        </div>
        <div id="feedbackTittleDispBook">CustomerFeedback</div>

        <div id="reviewContainerDispBook">
          <div id="overallRatingHeading" >Overall rating</div>
          <div
            style={{
              display: "flex",
            }}
          >
            <StarBorderIcon />
            <StarBorderIcon /> <StarBorderIcon />
            <StarBorderIcon /> <StarBorderIcon />
          </div>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              placeholder="Write your review"
              multiline
              maxRows={2}
              sx={{ width: "100%", margin: "10px", background: "white" }}
            />
          </div>
        </div>
        <div>
          <CustomerReview />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
