import React,{ useEffect, useState } from "react";
import axios from "axios";
import vector from "./vector.svg";
import like from "./like.svg";
import notification from "./notification.svg";
import diamond from "./diamond.svg";
import profile from "./profile.svg";
import search from "./search.svg";
import Group from "./Group.png";

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
        <div className="navbar">
            
            <div className="left_div">
                <img src={vector} alt="#" />
                <h2>KeazoN<span id="book">BOOKS</span></h2>
            </div>

            <div className="middle_div">
                <div id="inputSearch">
                    <img src={search} alt='#coolar'/>
                    <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
                </div>
                <button>Search</button>
            </div>
            <div className="images_Class">
                <img src={like} alt="like" />
                <img src={notification} alt="notification" />
                <img src={diamond} alt="diamond" />
                <img src={profile} alt="profile" />
                {/* <p>like</p>
                <p>notification</p>
                <p>diamond</p>
                <p>profile</p> */}
            </div>
        </div>
    )
}

export default Navbar;