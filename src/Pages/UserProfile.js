import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from '../images/1 - Copy.png'
import { FaEdit } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const UserProfile = () => {
  // const [avatar, setAvatar] = useState(Avatar);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [currentPassword, setCurrentPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [confirmNewPassword, setConFirmNewPassword] = useState('')


  const [userData, setUserData] = useState({
    avatar: Avatar,
    fullName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevData => {
      return { ...prevData, [e.target.name]: e.target.value }
    })
  }
  return (
    <div>
      <section className='profile'>
        <div className='container profile__container'>
          <Link to={`/myposts/sdfv`} className='btn'>My Posts</Link>


          <div className='profile__details'>
            <div className='avatar__wrapper'>
              <div className='profile__avatar'>
                <img src={userData.avatar} alt='' />
              </div>
              <form className='avatar__form'>
                <input
                  type='file'
                  name='avatar'
                  id='avatar'
                  accept='png, jpg, jpeg'
                  onChange={e => setUserData(e.target.files[0])}
                />
                <label htmlFor='avatar'><FaEdit /></label>
              </form>
              <button className='profile__avatar-btn'><FaCheck /></button>
            </div>
            <h1>Ernsts Achiever</h1>
            <form className='form profile__form'>
              <p className='form__error-message'>
                This is an Error Message
              </p>
              <input
                type='text'
                placeholder='Full Name'
                name='fullName'
                value={userData.fullName}
                onChange={changeInputHandler}
              />
              <input
                type='email'
                placeholder='example@21gmail.com'
                name='email'
                value={userData.email}
                onChange={changeInputHandler}
              />
              <input
                type='text'
                placeholder='Current password'
                name='currentPassword'
                value={userData.currentPassword}
                onChange={changeInputHandler}
              />
              <input
                type='text'
                placeholder='New Password'
                name='newPassword'
                value={userData.newPassword}
                onChange={changeInputHandler}
              />
              <input
                type='password'
                placeholder='confirmNewPassword'
                name='confirmNewPassword'
                value={userData.confirmNewPassword}
                onChange={changeInputHandler}
              />

              <button type='submit' className='btn primary'>Update Details</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UserProfile
