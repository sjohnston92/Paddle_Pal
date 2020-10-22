
import React,{useState} from 'react';
import Comments from "./Comments"
import {Modal,Col,Row,Card,Button,ListGroup, ListGroupItem,DropdownButton,Dropdown} from "react-bootstrap"
import CommentForm from "./CommentForm"

const Post = ({post, deletePost}) => {

  const[comments,setComments]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addComment = (comment) => {
    setComments([comment,...comments]);
  };





  return(
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
  <Row className="justify-content-end">
  
  <Col>
  <Button variant="success" onClick={handleShow}>
        Add a Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
  <Modal.Title>Create a Comment for {post.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><CommentForm post={post}add={addComment} hide={handleClose}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
  </Col>
<DropdownButton className="justify-content-end" title="Action">
  <Dropdown.Item >  
  <Button variant="warning">Edit</Button>{" "}
  <Button variant="danger" onClick={() => deletePost(post.id) }>Delete</Button>
  </Dropdown.Item>
</DropdownButton>
  </Row>
  <br/>
  <Row className="justify-content-center">
    <Comments post={post.id} />
  </Row>
  <Row className="justify-content-end">
  <Card.Link href="#"> linkUsers Profile </Card.Link>
  </Row>
</Card.Body>
</Card>
  )
}
 

export default Post;





