import React, { useState } from 'react';
import './PostForm.css';

function CreatePost({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    tags: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert tags string to array
    const tagsArray = formData.tags
      ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
      : [];

    onSubmit({
      title: formData.title,
      content: formData.content,
      author: formData.author || 'Anonymous',
      tags: tagsArray
    });

    // Reset form
    setFormData({
      title: '',
      content: '',
      author: '',
      tags: ''
    });
  };

  return (
    <div className="post-form-container">
      <h2>Create New Post</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter post title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name (optional)"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="8"
            placeholder="Write your blog post content here..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Enter tags separated by commas (e.g., javascript, react, web)"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
          <button type="button" className="btn btn-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
