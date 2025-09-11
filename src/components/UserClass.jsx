import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default Location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abinash458");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const {
      userInfo: { name, location, avatar_url },
    } = this.state;
    return (
      <div className="m-4 p-4 bg-gray-50 rounded-lg">
        <img src={avatar_url} alt="Avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @abinash458</h4>
      </div>
    );
  }
}

export default UserClass;
