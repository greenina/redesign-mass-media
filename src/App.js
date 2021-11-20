import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WordCloud  from "./Pages/WordCloud";
import Home from './Pages/Home'
import Linear from "./Pages/Linear";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/cloud" element={<WordCloud/>}/>
          <Route path="/linear" element={<Linear/>}/>
        </Routes>
      </BrowserRouter>
      
  );
};

export default App;
