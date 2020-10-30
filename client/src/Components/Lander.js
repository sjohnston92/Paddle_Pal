import React,{useState} from 'react';
import {Button, Container,Modal, Row} from 'react-bootstrap';
import Login from "./Login"
import Register from "./Register"

const Lander = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReg, setShowReg] = useState(false);

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const handleRegClose = () => setShowReg(false);
  const handleRegShow = () => setShowReg(true);

  return (
  <Container className ="lander">
  <div>
  <h1 className="landing">Welcome to Paddle Pal</h1>
  <br />
  <br />
  <Row className="justify-content-center">
  <a >
  <span onClick={handleShow}>Login</span>
  <div class="liquid"></div>
    </a>

      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Paddle Pal</Modal.Title>
        </Modal.Header>
        <Modal.Body><Login hide={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <a >
  <span onClick={handleRegShow}>Create </span>
  <div class="liquid"></div>
    </a>

      <Modal show={showReg} onHide={handleRegClose}>
        <Modal.Header closeButton>
          <Modal.Title>Paddle Pal</Modal.Title>
        </Modal.Header>
        <Modal.Body><Register hide={handleRegClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>

   </Row>
   </div>

  </Container>
  )
  
}



export default Lander;
