import React from 'react';
import './BlogPost.css';

function BlogPost({ post, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="blog-post">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div className="post-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{formatDate(post.createdAt)}</span>
        </div>
      </div>
      
      <div className="post-content">
        <p>{post.content}</p>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
          ))}
        </div>
      )}

      <div className="post-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onEdit(post)}
        >
          Edit
        </button>
        <button 
          className="btn btn-danger"
          onClick={() => onDelete(post._id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default BlogPost;
