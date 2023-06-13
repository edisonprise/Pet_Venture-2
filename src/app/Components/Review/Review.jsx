import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../../../redux/actions';
import styles from './Review.module.css';

const Review = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div className={styles.reviewContainer}>
      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario aquí"
        ></textarea>
        <button className={styles.button} type="submit">Enviar comentario</button>
      </form>
    </div>
  );
};

export default connect(null, { addComment })(Review);
