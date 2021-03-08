import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = () => {
    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {
                user.map(userData =>
                    <User
                        key={userData.id}
                        userData={userData}
                    ></User>)
            }
        </div>
    );
};

export default Home;