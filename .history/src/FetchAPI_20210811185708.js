import axios from "axios";
import React from "react";
import {Nav} from "react-bootstrap";
import "./FetchAPI.css";

const FetchAPI = () => {
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
    
<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

      <div className="container-fluid justify-content-center">
        <div className="row">
          {post.map((item, index) => (
            <ul key={index}>
              <div className="card text-center col-md-4">
                <div className="overflow">
                  <img src={item.avatar} alt="FilmPoster" className="card-img"/>
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">
                    {item.first_name} {item.last_name}
                  </h4>
                  <h6 className="card-text text-secondary">{item.email}</h6>
                </div>
              </div>
            </ul>
          ))}
        </div>
      </div>

  );
};

export default FetchAPI;
