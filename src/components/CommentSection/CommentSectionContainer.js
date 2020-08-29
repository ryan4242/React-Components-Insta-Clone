// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(props.comments);


  const submitComment = e => {
    e.preventDefault();
    setComments([...comments, {username: 'Ryan', text: `${newComment}`}])
    setNewComment('');
  };
  
  const changeComment = e => {
    setNewComment(e.target.value);
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment => <Comment comment={comment} />)}
      <CommentInput submitComment={submitComment} changeComment={changeComment} comment={newComment} />
    </div>
  );
};

export default CommentSection;
