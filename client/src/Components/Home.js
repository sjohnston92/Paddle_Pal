import React,{useState,useEffect,useContext} from 'react';
import {Container,Modal, Row, Col, Button,Card,ListGroup,ListGroupItem,Dropdown, DropdownButton} from 'react-bootstrap'
import axios from "axios"
import PostForm from "./PostForm"
import User from "./User"
import {AuthContext} from "../providers/AuthProvider";
import Comments from "./Comments"
import UserChart from "./UserChart"
import Post from "./Post"




const Home = () => {

  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(false);
  const {user} = useContext(AuthContext);
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
<Post key ={post.id}post={post} deletePost={deletePost}/>
))
}

  return (
    <Container>
      <Row className="justify-content-md-center">
      <h1>Welcome to Paddle Pal</h1>
     
      
    </Row>
    <br />
    <br />
      <Row className="justify-content-md-space-between" >
        <Col xs ={3}>
          <User user={user}/>
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
          <Button variant="secondary" onClick={handleClose}>
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





