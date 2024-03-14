import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login'
import Counter from './Counter'
export default function Home(){
  const [enableCounter,setCounter]=useState(true)
  
  if(enableCounter){
    return<Counter></Counter>
  }
  else{
    return <Login></Login>
  }
  // return(
  //   <div>
  //     <h1>
  //       Home
  //     </h1>
  //     <Link to="/Login">Login</Link><br></br>
  //   </div>
  // )
}