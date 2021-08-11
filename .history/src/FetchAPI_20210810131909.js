import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://reqres.in/api/users?page=2" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

//   async function deletePost() {
//     await client.delete("/1");
//     alert("Post deleted!");
//     setPost(null);
//   }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.email}</h1>
      <p>{post.first_name}</p>
      {/* <button onClick={deletePost}>Delete Post</button> */}
    </div>
  );
}