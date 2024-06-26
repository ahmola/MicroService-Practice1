import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import User from './User';
import UpdateUser from './UpdateUser';
import InfoUser from './InfoUser';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/info/:id" element={<InfoUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;