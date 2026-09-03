# Image Posting App

A full-stack image posting application with a React frontend and a Node.js/Express backend. Users can create image posts with captions and view the post feed.

## Project Status

- Backend implemented
- Frontend implemented with React and Vite
- MongoDB used for post data
- ImageKit used for image storage

## Technologies

### Frontend

- React
- React Router
- Axios
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- ImageKit
- Multer
- CORS

## Project Structure

```text
.
├── Backend/
│   ├── server.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── db/
│       ├── model/
│       └── services/
├── Frontend/
│   ├── package.json
│   ├── index.html
│   └── src/
└── README.md
```

## Prerequisites

- Node.js and npm
- MongoDB database
- ImageKit account and private key

## Backend Setup

```bash
cd Backend
npm install
```

Create a file named `.env` inside the `Backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the backend:

```bash
node server.js
```

The backend runs at `http://localhost:3000`.

## Frontend Setup

Open a second terminal from the project root:

```bash
cd Frontend
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

The frontend currently sends API requests to `http://localhost:3000`.

## API Endpoints

### Create a Post

```http
POST /create-post
```

Request format: `multipart/form-data`

Fields:

- `image`: image file
- `caption`: post caption

### Get All Posts

```http
GET /posts
```

Returns the posts stored in MongoDB.

## Environment Variables

| Variable | Description |
| --- | --- |
| `MONGODB_URI` | MongoDB connection string |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private API key |

Never commit `.env` files or private API keys to GitHub.

## Available Frontend Pages

- `/` - Post feed
- `/create-post` - Create a new post

## Future Improvements

- User authentication
- Likes and comments
- Post deletion
- Better validation and error handling
- Production deployment
