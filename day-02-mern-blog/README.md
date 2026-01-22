# 📝 MERN Stack Personal Blog

A full-stack personal blog application built with the MERN stack (MongoDB, Express, React, Node.js).

## 🌟 Features

- ✅ Create, Read, Update, and Delete blog posts
- 📱 Responsive and modern UI design
- 🏷️ Tag system for organizing posts
- 👤 Author attribution
- 🕐 Timestamps for posts
- 💾 MongoDB database for data persistence
- 🚀 RESTful API architecture

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

### 1. Clone the repository (if not already)

```bash
git clone <repository-url>
cd day-02-mern-blog
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your MongoDB connection string if needed
# Default: mongodb://localhost:27017/mern-blog
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On macOS (using Homebrew)
brew services start mongodb-community

# On Linux
sudo systemctl start mongod

# On Windows
# MongoDB should start automatically as a service
# Or run: mongod
```

## 🎮 Running the Application

You need to run both the backend and frontend servers:

### Start Backend Server

```bash
# From the backend directory
cd backend
npm start

# For development with auto-reload
npm run dev
```

The backend API will run on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From the frontend directory (in a new terminal)
cd frontend
npm start
```

The React app will open automatically at `http://localhost:3000`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all blog posts |
| GET | `/api/posts/:id` | Get a single post by ID |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update a post |
| DELETE | `/api/posts/:id` | Delete a post |

### Sample POST Request Body

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post...",
  "author": "John Doe",
  "tags": ["javascript", "react", "mongodb"]
}
```

## 📁 Project Structure

```
day-02-mern-blog/
├── backend/
│   ├── models/
│   │   └── Post.js          # Mongoose schema for blog posts
│   ├── routes/
│   │   └── posts.js         # API routes
│   ├── .env.example         # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── server.js            # Express server configuration
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── BlogList.js      # List of all posts
    │   │   ├── BlogList.css
    │   │   ├── BlogPost.js      # Individual post component
    │   │   ├── BlogPost.css
    │   │   ├── CreatePost.js    # Form to create new post
    │   │   ├── EditPost.js      # Form to edit post
    │   │   └── PostForm.css     # Shared form styles
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    └── package.json
```

## 🎨 Features Walkthrough

### Creating a Post
1. Click the "+ New Post" button
2. Fill in the title, author, content, and tags
3. Click "Create Post"

### Editing a Post
1. Click the "Edit" button on any post
2. Modify the fields
3. Click "Update Post"

### Deleting a Post
1. Click the "Delete" button on any post
2. Confirm the deletion

## 🔧 Configuration

### Backend Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
```

### Frontend API Configuration

The frontend is configured to proxy API requests to `http://localhost:5000` in development mode (see `frontend/package.json`).

For production, update the `REACT_APP_API_URL` environment variable.

## 🚢 Production Deployment

### Backend Deployment

1. Set up a MongoDB Atlas cluster or use your MongoDB instance
2. Update the `MONGODB_URI` in your production environment
3. Deploy to platforms like Heroku, DigitalOcean, or AWS

### Frontend Deployment

```bash
cd frontend
npm run build
```

Deploy the `build` folder to platforms like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check service status
- Verify the connection string in `.env`
- Check firewall settings

### Port Already in Use
- Change the `PORT` in backend `.env` file
- Update the proxy in frontend `package.json`

### Frontend Can't Connect to Backend
- Ensure backend is running on port 5000
- Check CORS configuration in `server.js`
- Verify proxy setting in `frontend/package.json`

## 📚 Learning Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📝 License

MIT License - feel free to use this project for learning and personal projects.

## ✨ Acknowledgments

Built as part of the multi-stack daily coding challenge journey!

---

**Happy Blogging! 🎉**
