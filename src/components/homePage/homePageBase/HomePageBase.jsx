import React, { useState } from "react";
import HomePageAppBar from "../appBarComponent/AppBar";
import ProfileContainer from "../profileContainer/ProfileContainer";
import "./HomePageBase.css";
import Display from "../showAllBook/Display";
import { getAllBookService } from "../../../service/BookService";
import BookDetail from "../bookDetail/BookDetail";

const HomPageBase = () => {
  //Show profile container
  const [showContainer, setShowContainer] = useState(false);

  //All Book Dat store
  const [allBook, setAllBook] = useState([]);

  //Show BookDetail
  const [showDetailPage, setshowDetailPage] = useState(true);

  //Show profile container method
  const changeContainer = () => {
    setShowContainer(!showContainer);
  };

  //Set All Book
  const setAllNote = async () => {
    //Call getallBookService
    const response = await getAllBookService();
    console.log(response);

    //New Array for storing data which is comming rom getAllbookService
    let newArray = [];
    newArray = response.data.result;
    // console.log(newArray)

    setAllBook(newArray);
    console.log(allBook);
  };

  // const allBookDetailList = allBook.map(data => <Display Book={data}/> )

  return (
    <div className="homePageBase">
      <div onClick={setAllNote}>
        {/* Remove this when */}
        <HomePageAppBar Change={changeContainer} />
      </div>
      <div className="proifileContainer">
        {showContainer ? <ProfileContainer /> : null}
      </div>
      <div className="display">
        <div id="upperDiv">
          <p id="booksHeading">Books</p>
          <p></p>
        </div>

        {showDetailPage ? 
        //For showing Book Detail page
        (
          <div id="lowerDiv">
            <BookDetail />
          </div>
        ) :
        //For showing all book
        (
          <div id="lowerDiv">
            {
              //Sending all book data as prop in Display book component
              allBook.map((data) => (
                <Display Book={data} />
              ))
            }
          </div>
        )}

      </div>
    </div>
  );
};

export default HomPageBase;
