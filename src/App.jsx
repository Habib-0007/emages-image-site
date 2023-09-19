import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/images" element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
