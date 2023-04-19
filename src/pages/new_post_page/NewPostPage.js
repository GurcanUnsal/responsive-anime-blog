import React from 'react'
import "./NewPostPage.css";
import Navbar from '../../components/navbar/Navbar';

const NewPostPage = () => {
  return (
    <div className='new-post-page'>
       <Navbar />
       <div className='new-post-form'>
            <input className='new-post-input' type='text' placeholder='Post Title' />
            <textarea className='new-post-input input-large' type='text' placeholder='Post Content' />
            <input className='img-upload' type='file' accept='image/jpg' alt='img-upload' />
            <button className='new-post-btn'>New Post</button>
       </div>
    </div>
  )
}

export default NewPostPage