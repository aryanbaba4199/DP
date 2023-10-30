import React, { useState } from 'react';


function PostForm({ onSubmit }) {
  const [image, setImage] = useState('');
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { image, header, description };
    onSubmit(post);
    setImage('');
    setHeader('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          className='input-field'
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="header">Header:</label>
        <input
          type="text"
          id="header"
          value={header}
          className='input-field'
          onChange={(e) => setHeader(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          className='input-field'
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <button className='bio btn-support' type="submit">Post</button>
      </div>
    </form>
  );
}

export default PostForm;