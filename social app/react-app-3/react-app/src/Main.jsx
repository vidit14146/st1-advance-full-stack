import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Post  from './Post';
import Login from './Login';
import Counter from './Counter';
import ViewPost from './ViewPost'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import LoginSignup from './LoginSignup';
import Registration from './Registration';
import CreatePost from './CreatePost';
import App from './App.jsx'
// import { RouterProvider } from 'react-router-dom'
// import './index.css'


const root=ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>,
)
