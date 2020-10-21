import React,{useState,useEffect,useContext} from 'react';
import {Container,Modal, Row, Col, Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap'
import axios from "axios"
import PostForm from "./PostForm"
import User from "./User"
import {AuthContext} from "../providers/AuthProvider";
import Comments from "./Comments"
import UserChart from "./UserChart"




const Home = () => {

  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




//This is POST related INFORMATION
const getPost = async () => {
  try{
    let res = await axios.get(`/api/users/${user.id}/posts`)
    setPosts(res.data);
  }catch (error){
    console.log(error.response);
    alert("Error:Displaying Posts")
  }
  
}



const deletePost = (id) => {
  axios.delete(`/api/posts/${id}`)
    .then((res) => {
      setPosts(posts.filter((post) => post.id !== id));
    })
    .catch(console.log);
};

const addPost = (post) => {
  setPosts([post,...posts]);
};


useEffect(() => {
  getPost();
}, []);

const renderPost = () =>{
return posts.map((post) =>(
<Card key={post.id}>
<Card.Title>{post.name}</Card.Title>
<Card.Img variant="top" src="holder.js/100px180?text=MAP DISPLAY" />
<hr />
<Card.Body>
<Card.Img  src="holder.js/10px10?text=MAP DISPLAY" />
</Card.Body>

<ListGroup className="list-group-flush">
  <ListGroupItem>Date:{post.date}</ListGroupItem>
  <ListGroupItem>Boat Type:{post.boat_type}</ListGroupItem>
  <ListGroupItem>River Level:Class 4</ListGroupItem>
  <ListGroupItem>Distance: 10 miles</ListGroupItem>
  <ListGroupItem>Total Time: 5 Hours</ListGroupItem>
</ListGroup>
<Card.Body>
<Card.Text>
    This is where the trip information will go BODY
  </Card.Text>
  <Row className="justify-content-md-space-between">
    <Col>
  <Button variant="outline-warning">Edit</Button>
  </Col>
  <Col>
  <Button variant="outline-danger" onClick={() => deletePost(post.id) }>Delete</Button>
  </Col>
  </Row>
  <br />
  <Row>
    <Comments />
  </Row>
  <Row className="justify-content-end">
  <Card.Link href="#"> linkUsers Profile </Card.Link>
  </Row>
</Card.Body>
</Card>
))
}

//This is where comment Stuff will go











  return (
    <Container>
      <Row className="justify-content-md-center">
      <h1>Welcome to Paddle Pal</h1>
     
      
    </Row>
    <br />
    <br />
      <Row className="justify-content-md-space-between" >
        <Col xs ={3}>
          <User />
        <Button variant="success" onClick={handleShow}>
        Create a Trip 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Rafting Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostForm add={addPost} hide={handleClose}/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        <UserChart />
        </Col>
      <Col xs ={6}>
      <div>{renderPost()}</div>
    </Col>
    <Col>
    <h3>River SpeedApi</h3>
    <br />
    <p>Grabbing major the Rivers CFS</p>
    </Col>
    </Row>

    </Container>
  )
}

export default Home;





