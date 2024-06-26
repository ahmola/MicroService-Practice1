import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Header from './Header';
import { ButtonGroup, Card, CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function User() {

  const [users, setUsers] = useState([]);

    const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/user/${id}`)
    fetchData();
  }
  const fetchData = async () => {
    try{
      const response = await axios.get("http://localhost:8080/api/v1/users");
      setUsers(response.data);
    }catch(error){ 
      console.error("Error Fetching : " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
      
  return (
    <>
      <Header />
      <div className='container'>
        <Row>
          {users.map((user) => (
            <div className='col-md-3'>
              <Card style={{ width: '16rem', margin: '15px', marginTop: '30px'}}>
                <Card.Body>
                  <Card.Title>{user.username}</Card.Title>
                  <Card.Text>
                    Email : {user.email}
                    <ButtonGroup>
                      <Button variant='primary' href={`/info/${user.id}`}>Info</Button>
                      <Button variant='success' href={`/update/${user.id}`}>Update</Button>
                      <Button variant='danger' onClick={() => deleteUser(user.id)}>Delete</Button>
                    </ButtonGroup>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Row>
      </div>
    </>
  )
}
