import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default function () {

  const {id} = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateUser = async (user) => {
    console.log(user);
    await axios.put("http://localhost:8080/api/v1/user", user)
    console.log(user);
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
            placeholder={user.username}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
          <Form.Control
            placeholder={user.email}
            aria-label="email"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Password"
            aria-label="password"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button variant="success" onClick={() => updateUser(user)}>Update</Button>
      </div>
    </>
  )
}
