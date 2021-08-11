import axios from "axios";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function App() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    function getPost() {
      axios
        .get("https://reqres.in/api/users?page=1")
        .then((response) => {
          setPost(response.data.data);
        })
        .catch((error) => alert(error));
    }
    getPost();
  }, []);

  if (!post) return "No post!";

  return (
    <div>
      {post.map((item, index) => (
        <ul key={index}>
          {/* <li>{item.id}</li>
          <li>{item.email}</li> */}
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="item.avatar" />
            <Card.Body>
              <Card.Title>{item.id}</Card.Title>
              <Card.Title>{item.first_name}</Card.Title>
              <Card.Text>
                {item.email}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </ul>
      ))}
    </div>
  );
}
