import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId } = useParams()
    const [post, setPost] = useState({})
    

 useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data))
 },[postId]) 
    return (
        <div className="flex justify-center">
            <div className='border-4 border-pink-500 p-6 my-8 w-1/3'>
            <h1 className='text-purple-500 font-bold'>This is detail about our service: {postId}</h1>
            <h1 className="text-orange-500 font-bold">{post.title}</h1>
            <h1 className='text-blue-500 font-bold'>{post.body}</h1>
        </div>
        </div>
    );
};

export default PostDetail;