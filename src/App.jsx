// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList/BlogPostList.jsx';
import BlogPostView from './components/BlogPostView/BlogPostView.jsx';
import BlogPostForm from './components/BlogPostForm/BlogPostForm.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<BlogPostList />} />
      <Route path="/post/:id" element={<BlogPostView />} />
      <Route path="/add" element={<BlogPostForm />} />
      <Route path="/edit/:id" element={<BlogPostForm />} />
    </Routes>
  </Router>
);

export default App;
