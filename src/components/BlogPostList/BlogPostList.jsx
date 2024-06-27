import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPosts } from '../../utils/storage';
import './index.css';

const BlogPostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  return (
    <div className="relative w-screen p-4 bg-slate-600 h-screen flex flex-col overflow-hidden">
      <ul className="flex-1 flex overflow-y-auto flex-wrap scrollbar-hide">
        {posts.length ? posts.map(post => (
          <li
            key={post.id}
            className="bg-white shadow-md rounded m-1 p-4 flex flex-col cursor-pointer hover:-translate-y-1 hover:bg-blue-200 transition-transform duration-300 hover:shadow-lg w-full"
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-md text-gray-600 mb-2">-By {post.author}</p>
            <p className="text-md mb-2 break-words overflow-hidden">
              {post.content}
            </p>
            <p className="text-xs text-gray-400">{post.date}</p>
          </li>
        )) : (
          <p className="text-center text-gray-500 text-xl">No posts available. Please add a new post.</p>
        )}
      </ul>
      <div className="mt-4 flex justify-end fixed bottom-0 right-0">
        <Link to="/add" className="text-white bg-blue-500 hover:bg-green-600 px-4 py-2 rounded transition-colors duration-200 ">
          Add New Post
        </Link>
      </div>
    </div>
  );
};

export default BlogPostList;
