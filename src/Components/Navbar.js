import React,{ useEffect } from "react";
import axios from "axios";

const Navbar = ({setHerryBooks, setSherlockBooks}) =>{
  
    useEffect(() => {
        // getherryBooks();
        getSherlockBooks(); 
    },[]);
  
    // function getherryBooks() {
    //   return axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
    //     .then((response) => setSherlockBooks(response.data.items))
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    function getSherlockBooks() {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
        .then((response) => setSherlockBooks(response.data.items))
        .catch((error) => {
          console.log(error);
        });
    }

    return(
        <div>
            <h1>All headings</h1>
        </div>
    )
}

export default Navbar;