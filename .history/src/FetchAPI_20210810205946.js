import axios from "axios";
import React from "react";




export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
     function getPost() {
      axios.get("https://reqres.in/api/users?page=1").then((response) => {
        console.log( response.data);
      }).catch(error => alert());
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