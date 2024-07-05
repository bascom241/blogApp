import React from 'react'
import passion from '../images/blog fruits - Copy.png'
import modern from '../images/houses - Copy.png'
import photo from '../images/blogbulb - Copy.png'

import PostItem from './PostItem'
import { useState } from 'react'

import { allPosts } from '../data'

const Posts = () => {
    const [posts, setPosts] = useState(allPosts)
    return (
        <section className='posts'>
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

export default Posts
