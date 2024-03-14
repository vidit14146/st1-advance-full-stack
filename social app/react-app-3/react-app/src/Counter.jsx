// import React, { useEffect, useState } from 'react'
// export default function Counter(){
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         console.log("component mounted")
//         return function(){
//             console.log("component exit")
//         }
//     },[]) 
//     useEffect(()=>{
//         if(count!=0){
//         console.log("updated")
//         // setCount(count+2) isse infinite count chl jaega
//         }
//     },[count]) //count ki value change ho toh ye call hoga
//     return (
//         <div>
//             <h1>Counter:{count}</h1>
//             <button onClick={()=> setCount(count + 1)}>+</button>
//             <button onClick={() => setCount(count - 1)}>-</button>
//             {/* <button onClick={()=> setCount(0)}>Reset</button> */}
//         </div>
//     )
// }


// TwitterClone.jsx

// TwitterClone.jsx

import React, { useState } from 'react';
import './HomePage.css'; // Importing CSS file for styling

export default function TwitterClone() {
    const [count, setCount] = useState(0);

    const handleTweetClick = () => {
        var isLoggedIn = false; // Placeholder for checking if user is logged in

        if (!isLoggedIn) {
            // If user is not logged in, prompt them to register
            if (window.confirm("You need to be logged in to tweet. Do you want to register?")) {
                // Redirect to the registration page
                window.location.href = 'register.html'; // Replace 'register.html' with your actual registration page URL
            }
        } else {
            // If user is logged in, allow them to compose a tweet
            // Code to compose a tweet goes here
        }
    };

    return (
        <div className="twitter-clone-container">
            <header>
                <div className="logo">
                    <h1>Twitter Clone</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Messages</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="/Login">Login</a></li>
                        <li><a href="/register" id="register">Register</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="tweet-compose">
                    <textarea placeholder="What's happening?" rows="3"></textarea>
                    <button id="tweetBtn" onClick={handleTweetClick}>Tweet</button>
                </div>
                <div className="timeline">
                    {/* Timeline tweets will be dynamically generated here */}
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Twitter Clone</p>
            </footer>
        </div>
    );
}
