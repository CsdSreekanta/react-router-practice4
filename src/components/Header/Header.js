import React from 'react';
import {Link} from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav-link '>
                <h1 className='text-pink-500 text-5xl font-bold'>Welcome to our Travels Agency Website!!!</h1>
                <div className='bg-pink-500 p-2 my-3 flex justify-center'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;