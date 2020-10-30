import React, {useContext}from 'react';
import {Nav, NavDropdown} from 'react-bootstrap';
import {AuthContext} from '../providers/AuthProvider'
import {Link,useHistory} from "react-router-dom"


const NavBar =()=> {
const history = useHistory();
const {user,handleLogout} = useContext(AuthContext)


const getRightNav = () => {
  if (user) {
    return (
      <>
     <NavDropdown.Item href="/home">
          DashBoard
      </NavDropdown.Item>
     <NavDropdown.Item href="/map">
            Map
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => console.log("hello")}> Edit Profile
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => console.log("hello")}> User Trips
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => 
        handleLogout(history)}> Log Out
      </NavDropdown.Item>
      </>
      
    );
  } else {
    return (
      < div className="userLink">
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
      </div>
    );
  }
};



return (
  <>
{user && <Nav className="justify-content-end" activeKey="/home">
<NavDropdown title="User" id="basic-nav-dropdown">
{getRightNav()}
</NavDropdown>
</Nav> }
</>

)
}

export default NavBar;











