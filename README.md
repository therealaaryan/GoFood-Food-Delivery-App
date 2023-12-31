# GoFood-Food-Delivery-App

## Description
GoFood is a full-stack food delivery application that streamlines the food ordering process. It allows users to browse the menu, create a profile, and log in to order food items. The app focuses on providing a seamless user experience from browsing to order completion.

Frontend is deployed on: https://gofood-client.onrender.com
Backend is deployed on: https://gofood-v7qb.onrender.com

## Technologies Used
This project uses the MERN stack with additional libraries and frameworks for enhanced functionality.

- **Backend**: Node.js, Express.js, Mongoose, bcryptjs, dotenv, express-validator, jsonwebtoken, nodemon.
- **Frontend**: React.js, Material-UI, Bootstrap, Bootstrap-dark-5, react-router-dom, react-bootstrap, various testing libraries.

## Features
- **Browse Without Login**: Users can access the app and view items without logging in.
- **User Registration and Login**: Users can create their profile and log in using their credentials.
- **Ordering System**: Logged-in users can order food items in desired quantities and portions.
- **Cart Functionality**: Users can add items to a cart and manage their orders before checkout.
- **Checkout Process**: Upon checkout, the cart is emptied, and the order is placed. (Note: There is no payment gateway integration currently).
- **Order History**: Users can view their past orders in the 'My Orders' section.

## Installation
### Backend Setup
1. Clone the repository and navigate to the backend directory.
2. Install dependencies:
   ```bash
   npm install
### .env File Setup (Backend)
1. In the backend directory, create a `.env` file.
2. Add the necessary environment variables to this file. For example:
   ```bash
   MONGODB_URI=mongodb://your_mongodb_uri
   PORT=your_preferred_port
   SECRET=your_secret_key

### Start the Backend Server
Run the server using the following command:
```bash
npm start
```

## Frontend Setup

### Navigate to the Frontend Directory
Change to the directory where the frontend code is located.

### Install Dependencies
Install the necessary dependencies for the frontend:
```bash
npm install
```

## Start the React App

### Start the frontend application:
```bash
npm start
```
After running this command, the application should be accessible on localhost:3000.

## Usage
- **Browse Without Login**: Users can browse the menu without the need to log in.
- **Registration and Login**: To order, users must register for an account and log in.
- **Ordering**: Logged-in users can select items, specify quantities, add to the cart, and proceed to checkout.
- **View Past Orders**: Users can view their previous orders in the 'My Orders' section.

## Contributing
Contributions to GoFood are welcome. When contributing, please follow standard coding practices and provide adequate documentation for your contributions.




