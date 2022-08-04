import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {

   const {name, username, id}= friend

   const navigate= useNavigate()

   const handleButton= ()=>{
    const path = `/friend/${friend.id}`
    navigate(path)
   }
    return (
        <div>
            <h1>{name}</h1>
            <Link className='underline text-pink-600 font-bold text-xl' to={`/friend/${friend.id}`}>{username}</Link>
            <button onClick={handleButton} className="button bg-pink-600 p-2 rounded m-2">{username}  id:{id}</button>
        </div>
    );
};

export default Friend;