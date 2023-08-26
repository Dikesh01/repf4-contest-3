import React from "react";

const ShowBooks = ({sherlockBooks}) =>{
    console.log(sherlockBooks);
    // console.log(herryBooks);
    return(
        <div>
            {sherlockBooks &&
                sherlockBooks.map((item,index)=>{
                    return(
                        <div>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
                        </div>
                    )
                    
                })
            }
        </div>
    )
}

export default ShowBooks;