# React + Vite


---

### 🟨 `admin/README.md` – Zanga Admin Panel

# Zanga E-Commerce – Admin Panel

This is the admin dashboard for Zanga. It provides an interface for uploading new products, deleting products, and managing inventory.

## 🛠 Tech Stack

- React
- Axios (for easier API calls)
- CSS Modules

## ⚙️ Features

- 📤 Upload new products (name, image, price, category)
- 🗑️ Remove products by ID
- 📂 Preview uploaded products (optional)
- 🚀 Communicates with Express backend via REST API

## 📦 Installation

```bash
cd admin
npm install
npm run dev


🔌 API Integration
Main endpoints used:

POST https://zanga-dtb7.onrender.com/addproduct

POST https://zanga-dtb7.onrender.com/removeproduct

GET https://zanga-dtb7.onrender.com/allproducts


📸 Image Upload
Images are uploaded to the /upload/images folder in the backend. Image links are returned and stored in MongoDB.

🗂 Folder Structure
/Components - Forms and views for adding/removing products

/Assets - Admin-related assets
