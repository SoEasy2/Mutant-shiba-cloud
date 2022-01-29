import React from 'react';
import "./reset.css";
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/HomePage/Home";
import {ArtsPage} from "./Pages/Arts/ArtsPage";
import Item from "./Pages/Item/Item";

function App() {
  return (
    <div>
         <Routes>
             <Route path={'/'} element={<Home />}/>
             <Route path={'/arts'} element={<ArtsPage />}/>
             <Route path={'/arts/item/:img'} element={<Item />}/>
         </Routes>
    </div>
  );
}

export default App;
