import axios from "axios";
import React from "react";




export default function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
     function getPost() {
      axios.get("https://reqres.in/api/users?page=1").then((response) => {
        setPost(response.data.data);
      }).catch(error => alert(error));
    }
    getPost();
  }, []);

 

  if (!post) return "No post!"

  return (
    <div>
      {post.map((item, index)=>{
        <ul key={index}>
          <li></li>
        </ul>
      })}
       
    </div>
  );
}