import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Post  from './Post';
import Login from './Login';
import Counter from './Counter';
import ViewPost from './ViewPost'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import Registration from './Registration';
import CreatePost from './CreatePost';
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<h1>page not found</h1>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/posts/:postId",
    element:<Post></Post>
  },
  {
  path:"posts",
  element:<ViewPost></ViewPost>
  },
  {
    path:"/counter",
    element:<Counter></Counter>
  },
  {
    path:"/loginsignup",
    element:<LoginSignup></LoginSignup>
  },{
    path:"/register",
    element:<Registration></Registration>
  },{
    path:"/createpost",
    element:<CreatePost></CreatePost>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals