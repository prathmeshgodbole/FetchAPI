import axios from "axios";
import React from "react";




export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
  
    }
    getPost();
  }, []);

 

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.email}</h1>
      {/* <p>{post.body}</p> */}
    </div>
  );
}