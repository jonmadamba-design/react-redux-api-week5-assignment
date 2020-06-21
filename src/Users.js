import React, { Component } from "react";
import {connect} from 'react-redux';
import { deleteUser } from "./actions/UserActions";
import { fetchUsers } from "./actions/UserActions";

export class Users extends Component {

  // jm add for fetch
  // componentDidMount() {
  //    console.log("inside Users > compdidmount")
  //    let testData = this.props.fetchUsers();
  // }

  render() {
    // console.log("Inside Users->render");
    // console.log(user);
    let userJsx =
      this.props.reduxUserState && this.props.reduxUserState.length > 0 ? (
        this.props.reduxUserState.map((user) => (
          <div className="card col-12 col-md-6 p-2" key={user.id}>
            <img src={user.avatar} alt="user image" />
            <h4>{user.first_name} {user.last_name}</h4>
            <p>Email: {user.email}</p>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteUser(user.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No users exist</p>
      );

    return (
      <div>
        <br></br>
        <h2>All Users</h2>

        <div className="container">
          <div className="row">{userJsx}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reduxUserState: state.users.users,
});

// jm add fetchUsers to connect to store
// this makes the data interaction from the userActions available from the store -- check component state if function is available
export default connect(mapStateToProps, {deleteUser, fetchUsers})(Users);
