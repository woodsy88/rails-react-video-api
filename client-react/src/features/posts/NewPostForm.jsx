import React, { useState } from 'react';
import { API_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    const post = { title, body };
    e.preventDefault();
     const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
     });

     if (response.ok) {
      const { id } = await response.json();
      navigate(`/posts/${id}`);
     } else {
      console.log('An error occurred')
     }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="body">body:</label>
        <textarea
          id="body"
          value={body}
          onChange={handleBodyChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;