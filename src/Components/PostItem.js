import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
const PostItem = ({ postId, category, image, desc, title, authorId }) => {
    const shortDescription = desc.length> 145 ? desc.substring(0,145) + '...': desc ;
    const shortTittle = desc.length> 30 ? desc.substring(0,30) + '...': title ;
    return (
        <div>

            <article className='post'>
                <div className='post__thumbnail'>
                    <img src={image} alt='' />
                </div>
                <div className='post__content'>
                    <Link to={`/posts/${postId}`}>
                        <h3>{shortTittle}</h3>
                        <p>{shortDescription}</p>
                        <div className='post__footer'>
                        <PostAuthor
                            title={title}
                        />
                        <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
                        </div>
                    </Link>
                </div>
            </article>
        </div>
    )
}

export default PostItem
