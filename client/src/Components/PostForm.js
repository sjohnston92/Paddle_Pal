import React,{useState,useContext} from 'react';
import {Form,Col,Button} from "react-bootstrap"
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
import Map from "./Map";

const PostForm= ({add, hide}) => {
  const auth = useContext(AuthContext);
  const [postState, setPostState] = useState({
    name: "",
    body: "",
    start_lat:0,
    start_long:0,
    end_lat:0,
    end_long:0,
    boat_type:"",
    river:"",
    distance:0,
    date:"",
    image:"",
    trip_time:"",
    user_id: auth.user.id,
  });


  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/posts`, postState)
    .then((res) => add(res.data));
    hide()
  }

  return(
    //TODO ADD REQUIRED IN FOR CERTAIN FIELD THEY WERE TAKING OUT FOR TESTING
    <>
    <Map />
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Trip Name</Form.Label>
      <Form.Control 
      name="name"
      required
      value={postState.name}
      onChange={handleChange} />
    </Form.Group>
      <Form.Group>
      <Form.File label="Trip Pic" />
      </Form.Group>
    <Form.Group>
      <Form.Label>Descriptions</Form.Label>
      <Form.Control 
      name="body" 
      as="textarea" rows="3"
      //required
      value={postState.body}
      onChange={handleChange} />
    </Form.Group>
    <Form.Row>
    <Form.Group>
      <Form.Label>Date:</Form.Label>
      <Form.Control 
      name="date"
      type="date" 
      value={postState.date}
      //required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Distance</Form.Label>
      <Form.Control 
      name="distance"
      type="string" 
      value={postState.distance}
      //required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Boat Type</Form.Label>
      <Form.Control
      as="select"
       name="boat_type" 
       value={postState.boat_type}
       //required
       onChange={handleChange}
        >
        <option>*Select an Option</option>
        <option>Kayak</option>
        <option>Raft</option>
        <option>SUP</option>
        <option>Canoe</option>
        <option>Other</option>
      </Form.Control>
      
    </Form.Group>
    </Form.Row>
    <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>River Level</Form.Label>
      <Form.Control 
      name="river" 
      //required
      as="select"
      value={postState.river}
      onChange={handleChange} 
      >
      <option>*Select an Option</option>
      <option>Flat Water</option>
      <option>Class I</option>
      <option>Class II</option>
      <option>Class III</option>
      <option>Class IV</option>
      <option>Class V</option>
      </Form.Control>
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Distance</Form.Label>
      <Form.Control 
       name="distance"
        //required
        value={postState.distance}
        onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group as={Col}>
      <Form.Label>Time Length</Form.Label>
      <Form.Control
        name="time_length" 
        //required
        value={postState.time_length}
        onChange={handleChange}>
      </Form.Control>
    </Form.Group>
    </Form.Row>
    <Button   variant="outline-success" block onClick={handleSubmit}>Submit</Button>
  </Form>
  
  </>
  )
}

export default PostForm;