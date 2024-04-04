import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import User from './User';
import UpdateUser from './UpdateUser';
import InfoUser from './InfoUser';

const App = () => {

  const [post, setPost] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
        <Route path='/info/:id' element={<InfoUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;