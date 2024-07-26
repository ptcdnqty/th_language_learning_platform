import React from 'react';
import './App.css';
import  Signin from './Signin'
import Signup from './Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

    <Signin></Signin>
    </>
  );
}

export default App;
