// src/components/BlogPostView.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostById, deletePost } from '../../utils/storage';

const BlogPostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(getPostById(id));
  }, [id]);

  const handleDelete = () => {
    deletePost(id);
    navigate('/');
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center text-white mx-auto p-4 h-screen">
    <div className='flex flex-col justify-between max-h-fit w-11/12 p-5 bg-black gap-2 rounded-md sm:w-11/12 md:w-5/6'>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-xl text-gray-600">-By {post.author}</p>
      <p className="text-lg break-words">{post.content}</p>
      <p className="text-lg text-gray-400">{post.date}</p>
      <div className="mt-4 flex justify-center">
      <Link to={`/edit/${post.id}`}><button className="border rounded-md p-2 w-28 mr-4 text-white bg-blue-500 hover:bg-blue-800">Edit</button></Link>
        <button onClick={handleDelete} className="border rounded-md p-2 w-28 text-white bg-red-500 hover:bg-red-800">Delete</button>
      </div>
      </div>
    </div>
  );
};

export default BlogPostView;
