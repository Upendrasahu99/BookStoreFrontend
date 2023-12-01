import React, { useState } from "react";
import HomePageAppBar from "../appBarComponent/AppBar";
import ProfileContainer from "../profileContainer/ProfileContainer";
import "./HomePageBase.css";
import Display from "../showAllBook/Display";
import { getAllBookService } from "../../../service/BookService";
import BookDetail from "../bookDetail/BookDetail";
import Pagination from "@mui/material/Pagination";

const HomPageBase = () => {
  //Show profile container
  const [showContainer, setShowContainer] = useState(false);

  //All Book Dat store
  const [allBook, setAllBook] = useState([]);

  //Book data for single book
  const [bookDetail, setBookDetail] = useState();

  //Set Book index for show
  const [startIndex, setStartIndex] = useState(0);

  //Total book in one page
  const onePageBooks = 8;

  //Show profile container method
  const changeContainer = () => {
    setShowContainer(!showContainer);
  };

  //Set All Book
  const setAllNote = async () => {
    //Call getallBookService

    const response = await getAllBookService();

    //New Array for storing data which is comming rom getAllbookService
    let newArray = [];
    newArray = response.data.result;

    //setBook Data
    setAllBook(newArray);
  };

  //Set Data for one bookDetail
  const setBookDataForDisplay = (bookData) => {
    setBookDetail(bookData);
    console.log(bookData);
  };

  //Sending all book data as prop in Display book component with detail
  //Getting data back from all book for show Book Detail
  let setDataOnAllBook = allBook.map((data) => (
    <Display Book={data} SetBookData={setBookDataForDisplay} />
  ));

  //For Pagination set the book quantity
  let bookShowInOnePage = setDataOnAllBook.slice(startIndex, (startIndex + onePageBooks));

  //Set Page Num
  let changePage = (event, paginationPageNum) => {
    setStartIndex(paginationPageNum * onePageBooks - onePageBooks);
    console.log(startIndex);
  };

  return (
    <div className="homePageBase">
      <div onClick={setAllNote}>
        {/* Remove this when */}
        <HomePageAppBar Change={changeContainer} Set={setBookDataForDisplay} />
      </div>
      <div className="proifileContainer">
        {showContainer ? <ProfileContainer /> : null}
      </div>
      <div className="display">
        <div id="upperDiv">
          <p id="booksHeading">Books</p>
          {/* arrayLenght is equal to total book(item) */}
          <p style={{ paddingLeft: "10px" }}>({allBook.length} item)</p>
        </div>

        {bookDetail != null ? (
          //For showing Book Detail page
          <div id="lowerDiv">
            <BookDetail BookData={bookDetail} />
          </div>
        ) : (
          //For showing book in one page
          <div id="lowerDiv">{bookShowInOnePage}</div>
        )}

        {/* Pagination */}
        <Pagination
        //count is total page show in the pagination
        // Math.cell which rounded upto nearest integer
          count={Math.ceil((allBook.length)/onePageBooks)}
          onChange={(e, paginationPageNum) => {
            changePage(e, paginationPageNum);
          }}
        />
      </div>
    </div>
  );
};

export default HomPageBase;
