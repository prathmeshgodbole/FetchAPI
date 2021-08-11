import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://reqres.in/api" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/users?page=2");
      setPost(response.data);
    }
    getPost();
  }, []);

 

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}