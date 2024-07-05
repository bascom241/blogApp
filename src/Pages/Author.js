import React, { useState } from 'react'
import Avatar from '../images/1 - Copy.png'
import { Link } from 'react-router-dom';


const authorData = [
  {id:1, avatar:Avatar,name: 'John', posts:3},
  {id:2, avatar:Avatar,name: 'Alade', posts:4},
  {id:3, avatar:Avatar,name: 'Tobi', posts:5},
  {id:4, avatar:Avatar,name: 'Kunle', posts:7},
  {id:5, avatar:Avatar,name: 'Sheyi', posts:9}
]


const Author = () => {
  const [authors,setAuthors] = useState(authorData);

  return (
<section className='authors'>
   {authors.length>0 ? <div className='container authors__container'>
  
    {authors.map(({id,avatar,name,posts})=>{
      return <Link to={`/posts/users/${id}`} className='author'>
        <div className='author__avatar'>
        <img src={avatar} alt={`Image of ${name}`}/>
        </div>
        <div className='author__info'>
          <h4>{name}</h4>
          <p>{`${posts} posts`}</p>
        </div>
      </Link>
    })}
  </div>: <h2 className='center'>No authors Found</h2>}
</section>
  )
}

export default Author
