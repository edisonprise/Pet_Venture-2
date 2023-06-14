import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './CommentBox.module.css';
import { addComment } from '../../../../redux/actions';
import Review from '../Review/Review';

const CommentBox = ({ comments, productId, addComment }) => {
  const [comment, setComment] = useState('');
  const [productComments, setProductComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      const parsedComments = JSON.parse(storedComments);
      if (parsedComments[productId]) {
        setProductComments(parsedComments[productId]);
      }
    }
  }, [productId]);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    let updatedComments = {};
    if (storedComments) {
      updatedComments = JSON.parse(storedComments);
    }
    updatedComments[productId] = productComments; // Actualizamos los comentarios del producto específico
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  }, [productId, productComments]);

  const handleAddComment = (comment) => {
    const updatedComments = [...productComments, comment];
    setProductComments(updatedComments);
    addComment(productId, updatedComments);
  };

  return (
    <div className={styles.commentBoxContainer}>
      <h2 className={styles.title}>Opiniones del Producto</h2>
      <div className={styles.commentBox}>
        {productComments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            {comment}
          </div>
        ))}
      </div>
      <Review onAddComment={handleAddComment} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.productId;
  return {
    comments: state.comments,
    productId: productId,
  };
};

export default connect(mapStateToProps, { addComment })(CommentBox);

