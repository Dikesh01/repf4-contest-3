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
                {/* <img src={vector} alt="#" /> */}
                <p>Vector</p>
                <h2>KeazoN<span id="book">BOOKS</span></h2>
            </div>
            <div className="middle_div">
                <span id="inputSearch">
                    <img src={search} alt='#coolar'/>
                    <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."/>
                </span>
                <button>Search</button>
            </div>
            <div className="images_Class">
                {/* <img id="like" src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="like" />
                <img src={notification} alt="notification" />
                <img src={diamond} alt="diamond" />
                <img src={profile} alt="profile" /> */}
                <p>like</p>
                <p>notification</p>
                <p>diamond</p>
                <p>profile</p>
            </div>
        </div>
    )
}

export default Navbar;