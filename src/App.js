import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Carousel from './component/carousel';
import Quotes from './component/Quotes';
import Github from './component/github';
import './App.css';
import './component/github.css';
import './component/Quote.css'

export default function App() {
  return (
    <BrowserRouter>
   <Routes>
       <Route path="/Home" element={<Home />} />
       <Route path="/carousel" element={<Carousel />} />
       <Route path="/Quotes" element={<Quotes />} />
       <Route path="/github" element={<Github />} />
      
   </Routes>
 </BrowserRouter>
  );
}
