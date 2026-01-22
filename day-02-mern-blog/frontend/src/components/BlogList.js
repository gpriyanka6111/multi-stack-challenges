import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

function BlogList({ posts, onEdit, onDelete }) {
  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <h2>No posts yet!</h2>
        <p>Create your first blog post to get started.</p>
      </div>
    );
  }

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogPost
          key={post._id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BlogList;
