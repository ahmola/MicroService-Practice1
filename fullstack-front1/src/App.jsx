import React, {useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import User from './User';
import UpdateUser from './UpdateUser';
import InfoUser from './InfoUser';

const App = () => {

  const [users, setUsers] = useState([]);
  const [post, setPost] = useState("");

  useEffect(() => {
    

    // const fetchPosts = async () => {
    //   try{
    //     const { data } = await axios.get('/api/posts'); // Replace with your posts API endpoint
    //     setPosts(data);
    //   }catch(error){
    //     console.error("Error Posting : " + error);
    //   }
    // };

    fetchData();
  }, []);

  const fetchData = async () => {
    try{
      const response = await axios.get("http://localhost:8080/api/v1/users");
      setUsers(response.data);
    }catch(error){ 
      console.error("Error Fetching : " + error);
    }
  };

  // const deleteUser = async (id) => {
  //   await axios.delete(`http://localhost:8765/user/${id}`)
  //   fetchData();
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User users={users} />} />
        <Route path="/info/:id" element={<InfoUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;