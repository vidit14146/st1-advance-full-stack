// // import axios from "axios";
// // import React,{useState} from "react";
// // import { useNavigate } from "react-router-dom";
// // import './Registration.css'
// // export default function Registration(){
// //     const[username,setUsername]=useState('');
// //     const[password,setPassword]=useState('');
// //     // const[LoginError,setLoginError]=useState('');
// //     const navigate=useNavigate()
// //     const handleUsername=(event)=>{
// //         setUsername(event.target.value);
// //       }
  
// //       const handlePassword=(event)=>{
// //         setPassword(event.target.value); 
// //       }
// //       const handleFormData= async(event)=>{
// //         event.preventDefault();
// //         try{
// //            const result = await axios.post('http://localhost:3000/register',{
// //             username:username,
// //             password:password
// //            })
// //            if(result.status===201){
// //             navigate('/login')
// //            }
           
// //         }
// //         catch (error){

// //         }
// //       }
// //     return (
// //         <div className="abc">
// //             <h1>Registration</h1>
// //             <form onSubmit={handleFormData}>
// //       <label>
// //         username
// //       </label>
// //       <input type='text' value={username} onChange={handleUsername}></input>
// //       <label>Password</label>
// //       <input type='password' value={password} onChange={handlePassword}></input>
// //       <button>Submit</button>
// //     </form>
// //     {/* <h4>{LoginError}</h4> */}
// //       {/* <button onClick={()=>navigate("/posts/:postId")}>Login</button> */}
// //     </div>

// //     )
// // }



// import axios from "axios";
// import React,{useState} from "react";
// import { useNavigate } from "react-router-dom";
// import './Registration.css'; // Import the CSS file

// export default function Registration(){
//     const[username,setUsername]=useState('');
//     const[password,setPassword]=useState('');
//     const navigate=useNavigate();

//     const handleUsername=(event)=>{
//         setUsername(event.target.value);
//     }

//     const handlePassword=(event)=>{
//         setPassword(event.target.value); 
//     }

//     const handleFormData= async(event)=>{
//         event.preventDefault();
//         try{
//             const result = await axios.post('http://localhost:3000/register',{
//                 username:username,
//                 password:password
//             });
//             if(result.status===201){
//                 navigate('/login');
//             }
//         }
//         catch (error){

//         }
//     }

//     return (
//         <div className="abc">
//             <h1>Registration</h1>
//             <form onSubmit={handleFormData}>
//                 <label>
//                     Username
//                 </label>
//                 <input type='text' value={username} onChange={handleUsername}></input>
//                 <label>Password</label>
//                 <input type='password' value={password} onChange={handlePassword}></input>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Registration.css'; // Import the CSS file

export default function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleFormData = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.post('http://localhost:3000/register', {
                username: username,
                password: password
            });
            if (result.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            console.error("Error occurred during registration:", error);
        }
    }

    return (
        <div className="abc">
            <h1>Registration</h1>
            <form onSubmit={handleFormData}>
                <label>
                    Username
                </label>
                <input type='text' value={username} onChange={handleUsername} />
                <label>Password</label>
                <input type='password' value={password} onChange={handlePassword} />
                <button type="submit">Submit</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}
