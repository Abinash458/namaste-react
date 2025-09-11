import React from 'react';
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className='font-bold'>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name="Abinash Mohapatra (Class)" />
      </>
    )
  }
}

export default About