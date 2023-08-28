import React, { useState } from "react";

const ShowBooks = ({bookData}) =>{
    const [bookDetails, setBookDetails] = useState("")
    console.log(bookDetails);

    // function showBookDetails(item){
    //     // console.log(item);
    //     setBookDetails(item)
    // }

    return(
        <div >
            <div > 
                {
                    bookDetails && 
                        <div className="bookDatails">
                            <div>
                                <img src={bookDetails.imageLinks.thumbnail}/></div>
                            <div className="details">
                                <div className="titleClass">
                                    <h2>{bookDetails.title}</h2>
                                    <p>Published on : {bookDetails.publishedDate}</p>
                                </div>
                                <h4>{bookDetails.authors[0]}</h4>
                                <p>{bookDetails.description}</p>
                                <div className="spanClass">
                                    <span>AVG Rating : {bookDetails.averageRating}</span>
                                    <span>Rating Count : {bookDetails.ratingsCount}</span>
                                    <span>Publisher : {bookDetails.publisher}</span>
                                    <span>Language : {bookDetails.language}</span>
                                </div>
                                <div className="buttons">
                                    <button>Now Read!</button>
                                    <button>More Info!</button>
                                </div>
                            </div>
                        </div>
                            
                }
            </div>
            <h3 id="moreBooks">More Books</h3>
           <div className="book_container">
                {bookData &&
                        bookData.map((item,index)=>{
                            return(
                                <div key={index} onClick={()=>setBookDetails(item.volumeInfo)}>
                                    <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}  />
                                </div>
                            )  
                        })
                    }
           </div>
        </div>
    )
}

export default ShowBooks;