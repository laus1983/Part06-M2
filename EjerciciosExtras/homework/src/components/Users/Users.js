import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../actions/index";
import "./Users.css";

export class Users extends Component {
  render() {
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {/* Aqui deberias poner tu lista de usuarios! */}
        <ul className="list">
          {this.props.users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        <table>
          <thead>
            <tr className="header">
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Link to={`/users/${user.id}`}>Ver</Link>
                </td>
                <td>
                  <Link to={`/users/${user.id}/posts`} className="button">
                    Posts
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  // posts: state.posts,
  // userPosts: state.userPosts,
  // commentsPost: state.commentsPost,
});

const dispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mapStateToProps, dispatchToProps)(Users);
