import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function User({ users }) {
      
  return (
    <div>
        {users.map((user) => (
            <div className='user'>
                <h2 className='username'>{user.username}</h2>
                <p>Email : {user.email}</p>
                <div>
                    <Link className='user-info' to={`/info/${user.id}`}>Info</Link>
                    <Link className='user-update' to={`/update/${user.id}`}>Update</Link>
                    <button className='user-delete'>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}
