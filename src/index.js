import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ErrorPage from './Pages/ErrorPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import PostDetail from './Pages/PostDetail'
import Register from './Pages/Register'
import LoginPage from './Pages/LoginPage'
import UserProfile from './Pages/UserProfile'
import EditPost from './Pages/EditPost'
import CreatePosts from './Pages/CreatePosts'
import CategoryPosts from './Pages/CategoryPosts'
import AuthorPosts from './Pages/AuthorPosts'
import DashBoard from './Pages/DashBoard'
import LogOut from './Pages/LogOut'
import DeltePost from './Pages/DeltePost'
import Author from './Pages/Author'
const router  = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      errorElement:<ErrorPage/>,
      children:[
        {index:true,element:<Home/>},
        {path:'posts/:id',element:<PostDetail/>},
        {path:'register',element:<Register/>},
        {path:'login',element:<LoginPage/>},
        {path:'profile/:id',element:<UserProfile/>},
        {path:'posts/:id/edit',element:<EditPost/>},
        {path:'create',element:<CreatePosts/>},
        {path:'posts/categories/:category',element:<CategoryPosts/>},
        {path:'posts/users/:id',element:<AuthorPosts/>},
        {path:'myposts/:id',element:<DashBoard/>},
        {path:'posts/:id/delete',element:<DeltePost/>},
        {path:'logout',element:<LogOut/>},
        {path:'author',element:<Author/>}
      ]
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)