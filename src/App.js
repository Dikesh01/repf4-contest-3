
import { useState } from "react";
import Navbar from "./Components/Navbar";
import ShowBooks from "./Components/ShowBooks";

const App = () => {
  // const [herryBooks, setHerryBooks] = useState([]);
  const [sherlockBooks, setSherlockBooks] = useState([]);
  // const [allBooks, setAllBooks] = useState([]);

    // setAllBooks([...sherlockBooks, ...herryBooks])
    // console.log(allBooks)

      return (
        <div>
          <Navbar setSherlockBooks={setSherlockBooks}/>
          <ShowBooks sherlockBooks={sherlockBooks}/>
        </div>
      );
};
export default App;

