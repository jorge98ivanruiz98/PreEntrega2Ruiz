import React from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <div>
      <header>
      <BrowserRouter>
        <NavBar/>
          <Routes>  
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/details/:id" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App