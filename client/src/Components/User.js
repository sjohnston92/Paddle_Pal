import React from 'react';

const User = ({user}) => {
return(
  <>
  <h3>User Information</h3>
  <p>{user.email}</p>
  <p>Profile Information</p>
  <h6>Possible about me section for user</h6>
  </>

)
}

export default User;