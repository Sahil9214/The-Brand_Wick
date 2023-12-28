import { useState } from "react";
import {Box} from '@chakra-ui/react'
import "./App.css";
import AllRouter from "./Routes/AllRouter";
import Navbar from "./Components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Box className="mainDiv">
        <Navbar />
        <br />
        <br />
        <AllRouter />
      </Box>
    </div>
  );
}

export default App;
