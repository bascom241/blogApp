import React from 'react'
import { Link } from 'react-router-dom'
import menu from '../images/baseball - Copy.jpg'
const PostAuthor = () => {
  return (
   <Link to={'/posts/users/wesgers'} className='post__author'>
  <div className='post__author-avatar'>
    <img src={menu} alt=''/>
  </div>
  <div className='post__author-details'>
    <h5>By: Abdulbasit</h5>
    <small>Just Now</small>
  </div>
   </Link>
  )
}

export default PostAuthor