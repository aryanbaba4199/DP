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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md ">
      <div className="mb-6 flex flex-col  border border-black px-2">
        <label htmlFor="image" className="block text-sm font-medium text-gray-600">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          className='px-2 text-black'
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter Image URL"
          required
        />
      </div>
      <div className="mb-6 border border-black px-2">
        <label htmlFor="header" className="block text-sm font-medium text-gray-600">Header:</label>
        <input
          type="text"
          id="header"
          value={header}
          className='px-2 text-black'
          onChange={(e) => setHeader(e.target.value)}
          placeholder="Enter Header"
          required
        />
      </div>
      <div className="mb-6 border border-black px-2">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description:</label>
        <textarea
          id="description"
          value={description}
          className='px-2 text-black'
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Description"
          required
        />
      </div>
      <div className='flex justify-center items-center'>
        <button className='btn bg-black text-white px-8 p-1 rounded-lg' type="submit">Post</button>
      </div>
    </form>
  );
}

export default PostForm;
