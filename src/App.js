import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ShowBooks from "./Components/ShowBooks";

const App = () =>{
  const [bookData, setBookData] = useState([])
  return(
    <div>
        <Navbar setBookData={setBookData}/>
        <ShowBooks bookData={bookData}/>
    </div>
  )
}

export default App;