import Axios from 'axios';
import React, { useContext, useState } from 'react';
import {Form,Button} from 'react-bootstrap'
import { AuthContext } from '../providers/AuthProvider';

const CommentForm = ({add,hide,post}) => {
  const auth = useContext(AuthContext);
  const [commentState,setCommentState] = useState({
    body:"",
    rate:"",

  })

  const handleChange = (e) => {
    setCommentState({...commentState, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post(`api/posts/${post.id}/comments`, commentState)
    .then((res)=> add(res.data));
    hide()
  }




  return(
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Trip Rating</Form.Label>
      <Form.Control 
      name="rate"
      //Required
      value={commentState.rate}
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Tex Area</Form.Label>
      <Form.Control 
      name="body" 
      as="textarea" rows="3"
      //required
      value={commentState.body}
      onChange={handleChange} />
    </Form.Group>
    <Button   variant="outline-success" block onClick={handleSubmit}>Submit</Button>


  </Form>
  )
}

export default CommentForm;