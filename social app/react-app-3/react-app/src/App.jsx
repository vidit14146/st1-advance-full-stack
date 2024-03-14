import React from 'react'
import Counter from './Counter'
import CreatePost from './CreatePost'
import Home from './Home'
import Login from './Login'
// import Main from './Main'
import Post from './Post'
import Registration from './Registration'
import ViewPost from './ViewPost'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/counter' element={<Counter></Counter>}/>
        <Route path='/posts' element={<Post></Post>}/>
        <Route path='/register' element={<Registration></Registration>}/>
        <Route path='/viewpost' element={<ViewPost></ViewPost>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/createpost' element={<CreatePost></CreatePost>}/>
      </Routes>
      {/* <Counter/>
      <CreatePost/>
      <Home/>
      <Login/>
      <Post/>
      <Main/>
      <Registration/>
      <ViewPost/> */}
      
    </Router>
  )
}
