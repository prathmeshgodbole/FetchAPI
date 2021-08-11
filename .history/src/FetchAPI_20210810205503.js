import axios from "axios";
import React from "react";




export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setPost(response.data);
      console.log
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