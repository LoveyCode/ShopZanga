# Zanga E-Commerce – Client

This is the frontend of the Zanga e-commerce platform, built with React. It serves as the main user interface for customers to browse products, add items to their cart or wishlist, and complete purchases.

## 🛠 Tech Stack

- React
- React Router DOM
- Context API
- CSS Modules
- REST API (via fetch)
- Framer Motion (optional for animations)

## 📁 Folder Structure

- `/Pages` - All main pages like Home, Product, Cart, etc.
- `/Components` - Reusable UI components (Navbar, Footer, ProductDisplay, etc.)
- `/Assets` - Static files and sample data
- `/Context` - Global state management using React Context

## 📦 Installation

```bash
cd client
npm install
npm start


## 🔌 API Integration
All product and user data is fetched from the Express backend at https://zanga-dtb7.onrender.com.

fetch('https://zanga-dtb7.onrender.com/popular/men')
  .then(res => res.json())


🔍 Features
🔍 Browse products by category (men, women, kids)

🛒 Add to cart / wishlist

🧾 View single product details

📦 Related products section

📄 Product description and reviews (static for now)

🚧 TODO
Payment integration

Pagination

Responsive improvements

yaml
Copy
Edit

