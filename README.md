# blog-api
RESTful Blog API created using Express.js &amp; JWT
To use it you need to provide .env file with PORT, MONGO_DB and JWT_SECRET, also whitelist your site in app.js!
Example of .env file:

```js
PORT=3000
MONGO_DB="mongodb+srv://yourname:password@yourcluster.example.mongodb.net/blog_api"
JWT_SECRET="smthhi85392jkdg" // use something stronger than this
```

### User Routes
- **POST** `/api/v1/auth/login` - Endpoint to log in a user.
- **POST** `/api/v1/auth/register` - Endpoint to register a new user.

### Comment Routes
- **GET** `/api/v1/posts/:postId/comments` - Endpoint to get comments for a specific post.
- **POST** `/api/v1/posts/:postId/comments` - Endpoint to create a new comment for a specific post.
- **DELETE** `/api/v1/posts/:postId/comments/:commentId` - Endpoint to delete a comment for a specific post.

### Post Routes
- **GET** `/api/v1/posts` - Endpoint to get all posts.
- **GET** `/api/v1/posts/:id` - Endpoint to get a specific post by ID.
- **POST** `/api/v1/posts` - Endpoint to create a new post.
- **PUT** `/api/v1/posts/:id` - Endpoint to update a specific post by ID.
- **DELETE** `/api/v1/posts/:id` - Endpoint to delete a specific post by ID.