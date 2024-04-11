import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import {Form,InputGroup , Button} from 'react-bootstrap';
import axios from 'axios';


export default function () {

  const {id} = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    id : `${id}`,
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name] : value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.put(`http://localhost:8080/api/v1/user/${id}`, user);
      console.log("Server response, Created? : ", response.data);
      setUser({
        username: "",
        email: "",
        password: "",
      });
      navigate("/");
    }catch(error){
      console.log(error);
    }
  }

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
    setUser(response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
          <Form.Control
            type="text"
            name="username"
            placeholder={user.username}
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            placeholder={user.email}
            aria-label="email"
            aria-describedby="basic-addon1"
            onChange={handleChange}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
        </InputGroup>


        <Button variant="success" onClick={handleUpdate}>Update</Button>

      </div>
    </>
  )
}
