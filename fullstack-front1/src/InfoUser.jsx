import axios from 'axios';
import React, {useState, useEffect}from 'react';
import { Link, useParams } from 'react-router-dom';

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
          const response = await axios.get(`http://localhost:8765/user/${id}`);
          setUser(response.data);
        }catch(error){
          console.error("Error Fetching : " + error);
        }
    };

  return (
    <div>
        User: {user.username}, {user.email}, {user.password}
    </div>
  )
}
