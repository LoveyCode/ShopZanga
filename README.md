# ShopZanga


---

### 🟥 `server/README.md` – Zanga Backend API

# Zanga E-Commerce – Backend API

This is the Node.js + Express backend for the Zanga e-commerce platform. It handles product and user data, authentication, and image uploads.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (for image upload)
- JWT (for authentication)
- bcrypt (for password hashing)
- dotenv
- cors

## 📁 Project Structure

server/
│
├── controllers/ # Logic for products, users, uploads
├── models/ # Mongoose schemas
├── routes/ # All API route handlers
├── middlewares/ # JWT authentication middleware
├── upload/images/ # Stored images
├── index.js # Server entry point


## 🔌 API Endpoints

### 🛍 Product Routes

- `POST /addproduct` – Add new product
- `POST /removeproduct` – Remove product
- `GET /allproducts` – Get all products
- `GET /newcollection` – New arrivals
- `GET /popular/men` – Popular men’s products
- `GET /popular/women` – Popular women’s products
- `GET /popular/kids` – Popular kids’ products

### 👤 User Routes

- `POST /signup` – Register new user
- `POST /login` – User login (returns JWT)
- `POST /addtocart` – Add product to cart (JWT required)
- `POST /getcart` – Get current user’s cart
- `POST /addtowishlist` – Add product to wishlist
- `POST /getwishlist` – Get wishlist

### 📤 Upload Routes

- `POST /upload` – Upload product images

## 📦 Installation

```bash
cd server
npm install
npm run dev


DATABASE_KEY=your_mongodb_connection_string
JWT_SECRET_WORD=your_jwt_secret


🔐 JWT Authentication
User routes like addtocart, getwishlist use the fetchUser middleware to check for valid tokens.

auth-token: <jwt_token_here>

💡 Notes
Passwords are hashed using bcrypt before saving to DB.

JWT tokens expire after 10 minutes for security.

from here modify

npm install passport passport-google-oauth20 express-session
