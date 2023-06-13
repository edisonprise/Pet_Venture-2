import React from 'react';
import { connect } from 'react-redux';
import styles from './CommentBox.module.css';

const CommentBox = ({ comments }) => {
  return (
    <div className={styles.commentBoxContainer}>
      <h2 className={styles.title}>Opiniones del Producto</h2>
      <div className={styles.commentBox}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentBox);
