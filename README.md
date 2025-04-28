# 🛒 Polymart - E-commerce User Site

Welcome to **Polymart**, a dynamic and modern **e-commerce site** where users can explore a variety of products, add them to their cart, and complete their purchases securely via **Stripe payments**.

This repository contains the **frontend user-side code** of the project, focused on delivering a smooth and secure shopping experience.

---

## ✨ Overview

Polymart provides a simple yet powerful shopping platform with a clean UI, easy navigation, real-time cart updates, and a safe Stripe Checkout integration for processing payments.

This repository **only includes** the **E-commerce (user) part**.  
- Backend APIs and Admin functionalities are handled separately.
- Stripe payment sessions are created and managed in the backend; the frontend uses the **Stripe public key**.

---

## 🛠️ Technologies Used

- **React.js** — Frontend framework
- **React Router DOM** — For page navigation
- **Axios** — To handle API requests
- **Stripe.js** — Payment gateway integration
- **Tailwind CSS** or **Plain CSS** — For styling (based on your project)
- **Environment Variables** — For secure key management

---

## 📋 Features

- 🍭 **Product Listing**  
  Displays all available products with images, prices, and short descriptions.

- 🛒 **Add to Cart / Remove from Cart**  
  Users can add products to their cart, modify quantity, or remove them easily.

- 💳 **Stripe Payment Gateway Integration**  
  Secure and reliable payment experience with Stripe-hosted checkout page.

- 📦 **Order Confirmation Page**  
  After successful payment, users are redirected to an order success page.

- 🔒 **Safe Frontend Practice**  
  Only Stripe Publishable Key is exposed. Secret operations are done in backend.

---

## 📂 Project Structure
```
polymart-frontend/
├── public/
├── src/
│   ├── components/    # Reusable UI components (ProductCard, CartItem, etc.)
│   ├── pages/         # Main pages (Home, Cart, Checkout, Success)
│   ├── services/      # API calls (Products, Orders)
│   ├── utils/         # Helper functions (formatting, validation)
│   ├── App.js         # Routes and main application structure
│   ├── index.js       # Entry point
│   └── ...
├── .env               # Environment variables (Stripe Public Key, API URLs)
├── package.json       # Project dependencies and scripts
└── README.md          # Project overview (you are here!)
```

---

## ⚙️ Getting Started

Follow these steps to set up and run the project locally.

---

### 1. Clone the Repository

```bash
git clone https://github.com/thuve-codes/PolyMart-EcomSys.git
```

---

### 2. Install Frontend Dependencies

Navigate into the frontend directory and install all required packages:

```bash
cd polymart-frontend
npm install
```

---

### 3. Install Backend Dependencies

In a new terminal window, navigate to your backend project (where APIs and Stripe sessions are handled) and install its dependencies:

```bash
cd polymart-backend
npm install
```

> 🛠️ Make sure you have a **backend project** ready.  
> The backend handles:
> - Product APIs
> - Order management
> - Stripe checkout session creation

---

### 4. Setup Environment Variables

Both frontend and backend require environment variables:


> 🔐 Never commit `.env` files to public repositories.

---

### 5. Start the Backend Server

Inside your backend folder:

```bash
npm run dev
```

> ✅ Your backend server will start on [http://localhost:5001](http://localhost:5001)

---

### 6. Start the Frontend Server

Inside your frontend folder:

```bash
npm run dev
```

> ✅ Your frontend app will start on [http://localhost:3000](http://localhost:3000)

---

## 🚀 Now You’re Ready!

- Visit [http://localhost:3000](http://localhost:3000) to explore the **Polymart User Site**.
- Products and payment flows should work properly if your backend is running.

---

## 🛡️ Need Help?

- Make sure MongoDB is running if you're using a local DB.
- Double-check that your Stripe keys are correct.
- Ensure CORS settings in the backend allow frontend API calls.

---

