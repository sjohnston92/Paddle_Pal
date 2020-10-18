import React,{useState} from 'react';
import {Container,Modal, Row, Col, Button} from 'react-bootstrap'
import Post from "./Post"
import PostForm from "./PostForm"




const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <Container>
      <Row className="justify-content-md-center">
      <h1>Welcome to Paddle Pal</h1>
     
      
    </Row>
    <br />
    <br />
      <Row className="justify-content-md-space-between">
        <Col>
        <h3>User Information</h3>
        <p>Profile Information</p>
        <h6>Possible about me section for user</h6>
        <Button variant="success" onClick={handleShow}>
        Create a Trip 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Rafting Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body><PostForm /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
        <br />
        <br />
        <h2>User Graph</h2>
        <p>This will be back end logic to support the graph of users distance or vessal of choice over the year</p>
        </Col>
      <Col>
    <h3>Post Feed </h3>
    
    <Post />
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





