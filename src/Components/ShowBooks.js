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
                            <div><img src={bookDetails.imageLinks.thumbnail}/></div>
                            <div><h2>{bookDetails.title}</h2></div>
                        </div>
                            
                }
            </div>
            <h3>More Books</h3>
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