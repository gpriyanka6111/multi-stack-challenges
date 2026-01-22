import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BlogList from './components/BlogList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  // Fetch all posts
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch posts. Please make sure the backend server is running.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create new post
  const handleCreatePost = async (postData) => {
    try {
      await axios.post(`${API_URL}/posts`, postData);
      setShowCreateForm(false);
      fetchPosts();
    } catch (err) {
      console.error('Error creating post:', err);
      alert('Failed to create post');
    }
  };

  // Update post
  const handleUpdatePost = async (id, postData) => {
    try {
      await axios.put(`${API_URL}/posts/${id}`, postData);
      setEditingPost(null);
      fetchPosts();
    } catch (err) {
      console.error('Error updating post:', err);
      alert('Failed to update post');
    }
  };

  // Delete post
  const handleDeletePost = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await axios.delete(`${API_URL}/posts/${id}`);
        fetchPosts();
      } catch (err) {
        console.error('Error deleting post:', err);
        alert('Failed to delete post');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📝 My Personal Blog</h1>
        <p>A MERN Stack Blog Application</p>
      </header>

      <main className="App-main">
        <div className="container">
          <div className="actions">
            <button 
              className="btn btn-primary"
              onClick={() => setShowCreateForm(!showCreateForm)}
            >
              {showCreateForm ? 'Cancel' : '+ New Post'}
            </button>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {showCreateForm && (
            <CreatePost 
              onSubmit={handleCreatePost}
              onCancel={() => setShowCreateForm(false)}
            />
          )}

          {editingPost && (
            <EditPost
              post={editingPost}
              onSubmit={handleUpdatePost}
              onCancel={() => setEditingPost(null)}
            />
          )}

          {loading ? (
            <div className="loading">Loading posts...</div>
          ) : (
            <BlogList 
              posts={posts}
              onEdit={setEditingPost}
              onDelete={handleDeletePost}
            />
          )}
        </div>
      </main>

      <footer className="App-footer">
        <p>Built with ❤️ using MERN Stack (MongoDB, Express, React, Node.js)</p>
      </footer>
    </div>
  );
}

export default App;
