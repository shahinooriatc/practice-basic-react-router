import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './User.css';

const User = (props) => {
    const newdata = props.userData;
    const { id, name } = newdata;

    return (
        <div className='user'>
            <div className="user-card">
                <h4>Id Number : {id}</h4>
                <h3>User Name:{name}</h3>

                <Link to={`/userdetails/${id}`}>
                    <button>Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default User;