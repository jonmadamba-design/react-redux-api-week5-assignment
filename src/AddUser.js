import React, { Component } from "react";

// JM Workflow for AddUser Workshop:
// 6. import addUser from ActionsTypes
// 7. import connect from react-redux to access central state container
// 8. update export below to connect to store
import { addUser } from './actions/UserActions';
import {connect} from 'react-redux';

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      id: "",
    };

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

// JM Workflow for AddUser Workshop:
// 9. In handler handleSubmit method, use the new addUser action (replacing add function previously from App.js as prop to AddUser component)
// Note that this handler needs to be binded to the class to be used in the onClick in the form submit
// 10. Save and test form to add new user -- We are done with updates!

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUser({ //changed this line to use new addUser, from add (passed as prop function from App.js parent)
      name: this.state.userName,
      id: this.state.id,
    });

    this.setState({
      userName: "",
      id: "",
    });
  }

// we are keeping component level state to work with redux state; keep ^^^

  render() {
    return (
      <form className="container my-5" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="user name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="id"
            name="id"
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

// JM Workflow for AddUser Workshop:
// 8. update export below to allow AddUser component to coonect to stor and pass in action addUser
// 9. Go to handler handleSubmit above
export default connect(null, {addUser})(AddUser);
