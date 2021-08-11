import axios from "axios";
import React from "react";

const baseURL = "https://reqres.in/api/users?page=2";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setData(response.data)
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{data.post.email}</h1>
      {/* <p>{post.body}</p> */}
    </div>
  );
}