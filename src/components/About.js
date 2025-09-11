import React from 'react';
import UserClass from './UserClass'

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>About</h1>
        <UserClass name="Abinash Mohapatra (Class)" />
      </>
    )
  }
}

export default About