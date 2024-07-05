import React, { useState } from 'react'
import { allPosts } from '../data'
import PostItem from '../Components/PostItem'
const AuthorPosts = () => {
  const [posts,setPosts] =useState(allPosts)

  return (
  
    <section className='author__posts'>
    { posts.length> 0 ?  <div className='container posts__container'>
            {
                posts.map(({ id, image, category, title, desc, authorID }) =>
                    <PostItem key={id}
                        postId={id}
                        image={image}
                        category={category}
                        title={title}
                        desc={desc}
                        authorID={authorID}
                    />)
            }
        </div>: <h2 className='center'>No post Found</h2>}
    
</section>
  )
}

export default AuthorPosts
