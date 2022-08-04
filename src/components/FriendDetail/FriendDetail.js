import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    console.log(friend)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[friendId])
    return (
        <div>
            <h1>Friend detail about my friend: {friendId}</h1>
            <h1>Name: {friend.name}</h1>
            <h1>Phone: {friend.phone}</h1>
            <h1>UserName: {friend.username}</h1>
            <h1>Website: {friend.website}</h1>
        </div>
    );
};

export default FriendDetail;