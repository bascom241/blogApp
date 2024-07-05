import React from 'react'
import { allPosts } from '../data'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const DashBoard = () => {
  const [posts,setPosts] = useState(allPosts);

  return (
<section className='dashboard'>
{
  posts.length ? <div className='container dashboard__container'>
  {
    posts.map(post=> {
      return <article key={post.id} className='dashboard__post'> 
      <div className='dashboard__post-info'>
        <div className='dashboard__post-thumbnail'>
          <img src={post.image} alt=''/>
        </div>
        <h5>{post.title}</h5>
      </div>
      <div className='dashboard__post-actions'>
        <Link to={`/posts/${post.id}`} className='btn sm'>View</Link>
        <Link to={`/posts/${post.id}/edit`} className='btn sm primary'>Edit</Link>
        <Link to={`/posts/${post.id}/delete`} className='btn sm danger'>Delete</Link>
      </div>
      </article>
    })
  }
  </div> : <h2 className='center'>You Have No posts</h2>
}
</section>
  )
}

export default DashBoard
