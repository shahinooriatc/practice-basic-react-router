import React, { useEffect, useState } from 'react';
import './UserDetail.css';
import { useParams } from 'react-router';

const UserDetails = () => {
const{ userId }= useParams();

const [userdata, setUserdata]= useState({});
const {id,name,email,phone,website} = userdata;
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => setUserdata(data))
}, []);

    return (
        <div className='user-details'>
            <h2>This is User Details    : {id}</h2>
            <h4>Name    : {name}</h4>
            <h5>Email : {email}</h5>
            <h5>phone : {phone}</h5>
            <h5>Website : {website}</h5>
        </div>
    );
};

export default UserDetails;