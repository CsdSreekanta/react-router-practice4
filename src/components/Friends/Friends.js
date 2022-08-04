import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends, setFriends] = useState([])
    console.log(friends)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data=> setFriends(data))
    },[])
    return (
        <div>
            <h1 className='text-2xl font-bold text-violet-600'>Hello how are you </h1>
            <p>I need some money please help me</p>
            {
                friends.map(friend =><Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;