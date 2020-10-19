// import React,{useState,useEffect} from 'react';
// import axios from "axios"
// import {Card,ListGroup,ListGroupItem,Row} from 'react-bootstrap'

// const Post = () => {

//   const [posts, setPosts] = useState([]);

//   const getPost = async () => {
//     try{
//       let res = await axios.get("/api/posts")
//       setPosts(res.data);
//     }catch (error){
//       console.log(error.response);
//       alert("Error:Displaying Posts")
//     }

//     const addPost = (post) => {
//       setPosts([post,...posts]);
//     };
    

//   }

//   useEffect(() => {
//     getPost();
//   }, []);

// const renderPost = () =>{
// return posts.map((post) =>(
//   <Card key={post.id}>
//   <Card.Title>Trip Name</Card.Title>
//   <Card.Img variant="top" src="holder.js/100px180?text=MAP DISPLAY" />
//   <hr />
//   <Card.Body>
//   <Card.Img  src="holder.js/10px10?text=MAP DISPLAY" />
//   </Card.Body>

//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Date:August 20th</ListGroupItem>
//     <ListGroupItem>Boat Type:Kayak</ListGroupItem>
//     <ListGroupItem>River Level:Class 4</ListGroupItem>
//     <ListGroupItem>Distance: 10 miles</ListGroupItem>
//     <ListGroupItem>Total Time: 5 Hours</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//   <Card.Text>
//       This is where the trip information will go BODY
//     </Card.Text>
//     <Card.Link href="#"> linkUsers Profile </Card.Link>
//   </Card.Body>
// </Card>
// ))
// }


// return(
//   <>
//   {renderPost}
//   </>
// )

// }

// export default Post;







