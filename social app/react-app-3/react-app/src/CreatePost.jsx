// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function CreatePost() {
//     const navigate=useNavigate()
//     useEffect(()=>{
//         if(!localStorage.getItem("jwttoken")){
//             navigate("/login")
//         }
//     },[])
//     const [title,setTitle]=useState('')
//     const [content,setContent]=useState('')
//     const handleTitle=(event)=>{
//         setTitle(event.target.value)
//     }
//     const handleContent=(event)=>{
//         setContent(event.target.value)
//     }
//     const handleForm= async(event)=>{
//         try{
//         event.preventDefault()
//         const response= await axios.post("http://localhost:3000/posts",{
//             title:title,
//             content:content
//         },{
//             headers:{
//                 authorization: "Bearer "+localStorage.getItem("jwttoken")
//             }
//         })
//         navigate('/viewpost')
//         }catch{

//         }
//     }
//   return (
//     <div>
//       <h1>Create post: </h1>
//       <form onSubmit={handleForm}>
//         <label>Title: </label>
//         <input type="text" value={title}  onChange={handleTitle}></input><br></br>
//         <label>Content: </label>
//         <input type='text' value={content} onChange={handleContent}></input><br></br>
//         <button>submit</button>
//       </form>
//     </div>

//   )
// }

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css'; // Import the CSS file

export default function CreatePost() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("jwttoken")) {
            navigate("/login");
        }
    }, []);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleContent = (event) => {
        setContent(event.target.value);
    };

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/posts", {
                title: title,
                content: content
            }, {
                headers: {
                    authorization: "Bearer " + localStorage.getItem("jwttoken")
                }
            });
            navigate('/viewpost');
        } catch (error) {
            console.error("Error occurred while creating post:", error);
        }
    };

    return (
        <div className="container">
            <h1>Create post: </h1>
            <form onSubmit={handleForm}>
                <label>Title: </label>
                <input type="text" value={title} onChange={handleTitle} /><br />
                <label>Content: </label>
                <input type='text' value={content} onChange={handleContent} /><br />
                <button>Submit</button>
            </form>
        </div>
    );
}
