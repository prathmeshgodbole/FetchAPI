import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://reqres.in/api/users?page" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("");
      setPost(response.data);
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