import React,{ useEffect, useState } from "react";
import axios from "axios";

const Navbar = ({setBookData}) =>{

    useEffect(()=>{
        // if(bookData.length <= 0){
            fetchBookApi("harry potter") 
            fetchBookApi("Sherlock Holmes")
        // }
    },[])

    async function fetchBookApi(query){
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

        setBookData((preValue) =>[...preValue, ...response.data.items])
    }

    return(
        <div>
        </div>
    )
}

export default Navbar;