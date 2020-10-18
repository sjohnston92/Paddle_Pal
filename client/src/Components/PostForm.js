import React,{useState,useContext} from 'react';
import {Form,Button} from "react-bootstrap"
import axios from "axios";
import {AuthContext} from "../providers/AuthProvider";
import Map from "./Map";

const PostForm= () => {
  const auth = useContext(AuthContext);
  const [postState, setPostState] = useState({
   
   //TODO Change these
    name: "",
    body: "",
    avaliable_spots:"",
    departure_location:"",
    resort:"",
    ride_type:"",
    rider_level:"",
    departure_time:"",
    car_type:"",
    user_id: auth.user.id,
  });


  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.name]: e.target.value });
  };

//FIX THESE UP 
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/posts`, postState)
    .then((res) => (res.data));
  }

  return(
      //TODO how do i add a map to a form may need to switch to google api
    <>
    <h1>Create a River Trip</h1>
    <Map />
  <Form onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Trip Name</Form.Label>
      <Form.Control 
      name="name"
      required
      onChange={handleChange} />
    </Form.Group>
   
    <Form.Group>
      <Form.Label>Descriptions</Form.Label>
      <Form.Control 
      name="body" 
      type="text area"
      required
      onChange={handleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Date:</Form.Label>
      <Form.Control 
      name="date"
      type="string" 
     //TODO NEED VALUES HERE
      required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Distance</Form.Label>
      <Form.Control 
      name="distance"
      type="string" 
     //TODO NEED VALUES HERE
      required
      onChange={handleChange}
       />
    </Form.Group>
    <Form.Group>
      <Form.Label>Boat Type</Form.Label>
      <Form.Control
       name="boat_type" 
       type="string"
       required
       onChange={handleChange}
        />
    </Form.Group>
    <Form.Group>
      <Form.Label>River Level</Form.Label>
      <Form.Control 
      name="river" 
      required
      onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Distance</Form.Label>
      <Form.Control 
       name="distance"
        required
        onChange={handleChange} 
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Time Length</Form.Label>
      <Form.Control
        name="time_length" 
        required
        onChange={handleChange}>
      </Form.Control>
    </Form.Group>
  </Form>
  
  </>
  )
}

export default PostForm;