import React,{useState,useEffect} from 'react';
import {Dropdown,DropdownButton,Card,Button,Row,Col} from "react-bootstrap"
import axios from "axios"

const Comments = ({post}) => {

    const [comments,setComments]=useState([]);


  const getComments = async () => {
    try{
  
      let res = await axios.get(`/api/posts/${post}/comments`)
      setComments(res.data);
    }catch (error){
      console.log(error.response);
      alert("Error:Displaying Comments")
    }
  }
    
   useEffect(() => {
      getComments();
    }, []);
const renderComments = () => {
  return comments.map((comment)=>(
<Card key={comment.id}className="comment">
  <Card.Header className="justify-content-end">User Name</Card.Header>
  <Card.Body>
    <Card.Title>Rating:{comment.rate}</Card.Title>
    <Card.Text>
      {comment.body}
    </Card.Text>
    <DropdownButton className="justify-content-end" title="Action">
  <Dropdown.Item >  
  <Button variant="warning">Edit</Button>{" "}
  <Button variant="danger" onClick={console.log("hello")}>Delete</Button>
  </Dropdown.Item>
</DropdownButton>
  </Card.Body>
  <Card.Footer className="justify-content-end" >{comment.created_at}</Card.Footer>
</Card>
  )) 
 }

return (
  <>
  {renderComments()}
  </>
)


}

export default Comments;