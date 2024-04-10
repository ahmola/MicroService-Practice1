import axios from 'axios';
import React, {useState, useEffect}from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';

export default function InfoUser() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const {id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
          const response = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
          setUser(response.data);
        }catch(error){
          console.error("Error Fetching : " + error);
        }
    };

  return (
    <>
      <Header />
      <div className='user'>
          <p className='username'>username : {user.username} </p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
      </div>
    </>
  )
}
