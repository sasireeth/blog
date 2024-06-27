// src/components/BlogPostForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostById, savePost } from '../../utils/storage';

const BlogPostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
    date: new Date().toISOString().substring(0, 10),
  });

  useEffect(() => {
    if (id) {
      const existingPost = getPostById(id);
      if (existingPost) setPost(existingPost);
    }
  }, [id]);

  const handleChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    savePost(post);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Post Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author</label>
          <input
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            placeholder="Author Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            name="content"
            value={post.content}
            rows={5}
            onChange={handleChange}
            placeholder="Post Content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Publication Date</label>
          <input
            type="date"
            name="date"
            value={post.date}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between sm:flex-row gap-2">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {id ? 'Update' : 'Add'} Post
          </button>
          <button type="button" onClick={() => navigate('/')} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostForm;
