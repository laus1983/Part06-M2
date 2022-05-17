/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";
import "./UserPosts.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getAllUserPosts } from "../../actions";
// import {
//   mapDispatchToProps,
//   mapStateToProps,
// } from "../CommentsPost/CommentsPost";
//import { getUserPosts } from "../../actions";

export class UserPosts extends React.Component {
  componentDidMount() {
    const userid = this.props.id;
    getAllUserPosts(userid);
  }
  render() {
    //const userid = this.props.id;
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.userid}</h4>
        <ul className="list">
          {this.props.userPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    userPosts: state.userPosts,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    getAllUserPosts: (userid) => dispatch(getAllUserPosts(userid)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
