import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const CreatePosts = () => {
  const [title,setTitle]= useState('');
  const [category,setCategory]= useState('uncategorized');
  const [description,setDescription] = useState('');
  const [thumbnail,setThumbnail] = useState('');


  const modules = {
    toolbar:[
      [{'header':[1,2,3,4,5,6,false]}],
      ['bold','italics','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'-1'},{'indent':+1}],
      ['link','image'],
      ['clean']
    ],
  }

  const formats= [
    'headers',
    'bold','italic','undrerline','strike','blockquote',
    'list','bullet','indent',
    'link','image'
  ]

  const POST_CATEGORIES =['Agriculture','Business','Education','Entertainment','Art','Investment','uncategorized','weather']
  return (
<section className='create-post'>
<div className='container'>


    <h2>Create Posts</h2>
    <p className='form__error-message'>This is am error</p>
    <form className='form create-post__form'>
    <input 
    type='text' 
    placeholder='Tittle'
    value={title}
    onChange={e=> setTitle(e.target.value)}
    autoFocus
    
    />
    <select name='category' value={category} onChange={e=> setCategory(e.target.value)}>
      {
        POST_CATEGORIES.map(cat=> <option key={cat}>{cat}</option>)
      }
      </select>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={description}
        onChange={setDescription}
      />
      <input
                  type='file'
                 
                  accept='png, jpg, jpeg'
                  onChange={e => setThumbnail(e.target.files[0])}
                />
                <button type='submit' className='btn primary'>Create Posts</button>
 
    </form>
    </div>
</section>
  )
}

export default CreatePosts

