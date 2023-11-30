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

  //Book data for single book
  const [bookDetail, setBookDetail] = useState();


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

  //For Showing Single book detail page
  const setBookDataForDisplay = (bookData) =>{
    setBookDetail(bookData)
    console.log(bookData)
  }


  return (
    <div className="homePageBase">
      <div onClick={setAllNote}>   
        {/* Remove this when */}
        <HomePageAppBar Change={changeContainer} Set ={setBookDataForDisplay}/>
      </div>
      <div className="proifileContainer">
        {showContainer ? <ProfileContainer /> : null}
      </div>
      <div className="display">
        <div id="upperDiv">
          <p id="booksHeading">Books</p>
          {/* arrayLenght is equal to total book(item) */}
          <p style={{paddingLeft:"10px"}}>({allBook.length} item)</p> 
        </div>



        {bookDetail != null ? 
        //For showing Book Detail page
        (
          <div id="lowerDiv">
            <BookDetail BookData={bookDetail}/>
          </div>
        ) :
        //For showing all book
        (
          <div id="lowerDiv">
            {
              //Sending all book data as prop in Display book component
              
              allBook.map((data) => (
                <Display Book={data} SetBookData ={setBookDataForDisplay}/>
              ))
            }
          </div>
        )}




      </div>
    </div>
  );
};

export default HomPageBase;
