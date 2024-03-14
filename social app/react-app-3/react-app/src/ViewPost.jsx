// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useNavigate , Link} from 'react-router-dom'
// export default function ViewPost(){
//     const [ApiError,setApiError]=useState(false)
//     const [data,setData]=useState([])
//     const [loading,setLoading]=useState(true)
//     const navigate=useNavigate()
//     useEffect(()=>{
//         if(localStorage.getItem("jwttoken")){
//             (async ()=>{
//                 try{
//                const response= await axios.get('http://localhost:3000/posts',{
//                 headers:{
//                     authorization: "Bearer "+localStorage.getItem('jwttoken')
//                 }
//                })
//                setData(response.data);
//                setLoading(false)
//                 }catch(error){
//                     setApiError(true);
//                 }
//             })()
//         }
//         else{
//             navigate('/login');
//         }
//     },[])
//     //     ;(async ()=>{
//     //         try{
//     //        const response= await axios.get('https://jsonplaceholder.typicode.com/posts')
//     //        setData(response.data);
//     //        setLoading(false)
//     //         }catch(error){
//     //             setApiError(true);
//     //         }
//     //     })()
//     // },[])
//     if(loading){
//         return <h1>Loading.....</h1>
//     }
//     if(ApiError){
//         return <h1>Something went wrong</h1>
//     }
//     const result=data.map((post)=>
//     <div key={post.id}>
//         <h4>Title : {post.title}</h4>
//         <h4>Content:{post.content}</h4>
//         <h4>-----------------------</h4>
//         </div>
//     )
//     return(
//         <div>
//             <h1>Posts: </h1>
//             <Link to="/createpost">Create post</Link>
//             {result}
//         </div>
//     )
//     }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './View.css'; // Import the CSS file

export default function ViewPost(){
    const [ApiError,setApiError]=useState(false);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const navigate=useNavigate();

    useEffect(() => {
        if(localStorage.getItem("jwttoken")){
            (async () => {
                try {
                    const response = await axios.get('http://localhost:3000/posts', {
                        headers: {
                            authorization: "Bearer " + localStorage.getItem('jwttoken')
                        }
                    });
                    setData(response.data);
                    setLoading(false);
                } catch(error) {
                    setApiError(true);
                }
            })();
        } else {
            navigate('/login');
        }
    }, []);

    if(loading){
        return <h1 className="loading">Loading.....</h1>;
    }

    if(ApiError){
        return <h1 className="error">Something went wrong</h1>;
    }

    const result = data.map((post) => (
        <div key={post.id} className="post">
            <h4>Title : {post.title}</h4>
            <h4>Content: {post.content}</h4>
        </div>
    ));

    return (
        <div className="container">
            <h1>Posts: </h1>
            <Link to="/createpost">Create post</Link>
            {result}
        </div>
    );
}
