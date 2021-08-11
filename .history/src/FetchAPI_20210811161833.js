import axios from "axios";
import React from "react";
// import { Card,} from "react-bootstrap";

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
    // <div>
    //   {post.map((item, index) => (
    //     <ul key={index}>
    //       {/* <ul key={index}> */}
    //       {/* <li>{item.id}</li>
    //       <li>{item.email}</li> */}
    //       {/* </ul> */}

    //         {/* <Card border="info">
    //             <Card.Img variant="top" src="item.avatar" />
    //             <Card.Body>
    //               <Card.Title>{item.id}</Card.Title>
    //               <Card.Title>
    //                 {item.first_name} <span> </span> {item.last_name}
    //               </Card.Title>
    //               <Card.Text>{item.email}</Card.Text>
    //             </Card.Body>
    //         </Card> */}
    //     </ul>
    //   ))}
    // </div>

    <div >
      {post.map((item, index) => (
        <ul key={index}>
          <div className="card text-center col">
            <div className="overflow">
              <img src={item.avatar} alt="FilmPoster" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">{item.first_name} {item.last_name}</h4>
              <h6 className="card-text text-secondary">{item.email}</h6>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default FetchAPI;
