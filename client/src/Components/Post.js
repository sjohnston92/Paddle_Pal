import React from 'react';
import {Card,ListGroup,ListGroupItem,Row} from 'react-bootstrap'

const Post = () => {

return(
  <Card>
  <Card.Title>Trip Name</Card.Title>
  <Card.Img variant="top" src="holder.js/100px180?text=MAP DISPLAY" />
  <hr />
  <Card.Body>
  <Card.Img  src="holder.js/10px10?text=MAP DISPLAY" />
  </Card.Body>

  <ListGroup className="list-group-flush">
    <ListGroupItem>Date:August 20th</ListGroupItem>
    <ListGroupItem>Boat Type:Kayak</ListGroupItem>
    <ListGroupItem>River Level:Class 4</ListGroupItem>
    <ListGroupItem>Distance: 10 miles</ListGroupItem>
    <ListGroupItem>Total Time: 5 Hours</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Card.Text>
      This is where the trip information will go BODY
    </Card.Text>
    <Card.Link href="#"> linkUsers Profile </Card.Link>
  </Card.Body>
</Card>
)
}

export default Post;







