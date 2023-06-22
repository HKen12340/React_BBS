import './App.css';

import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import { New } from "./New";
import { Home } from "./Home";
import { Thread } from "./Thread";

function App() {
   return (
     <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/New" element={<New />} /> 
        <Route path="/Thread" element={<Thread />} />          
      </Routes>
    </BrowserRouter> 
    </div>
    
  );
}
export default App;
