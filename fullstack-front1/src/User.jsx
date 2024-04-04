import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function User() {

    const [users, setUsers] = useState([]);
    
    const {id} = useParams();

        useEffect(() => {
            fetchData();
        }, []);

      const fetchData = async () => {
        try{
          const response = await axios.get("http://localhost:8765/users");
          setUsers(response.data);
        }catch(error){
          console.error("Error Fetching : " + error);
        }
      };

      const deleteUser = async (id) => {
          await axios.delete(`http://localhost:8765/user/${id}`)
          fetchData();
      }

      
  return (
    <div className="container">
        <h1>User List</h1>
        <Link className="add-user" to={"/add"}>Add User</Link>
        <table className='user'>
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">API</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className='user-info' to={`/info/${user.id}`}>Info</Link>
                                <Link className='user-update' to={`/update/${user.id}`}>Update</Link>
                                <button className='user-delete' onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
