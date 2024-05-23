import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import App from './App';
import Checkout from './Checkout';

function Amazonweb() {
  return (

    <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path="/Checkout" Component={Checkout} />
        </Routes>
       
    </BrowserRouter>
  )
}

export default Amazonweb