# Auto-Craft Server

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue)](https://auto-craft.netlify.app/)
[![Client Repository](https://img.shields.io/badge/Client%20Repo-GitHub-green)](https://github.com/Ashraful2880/Auto-Craft-Client)

A robust backend API server for Auto-Craft, a comprehensive e-commerce platform specializing in automobile sales and services. This server handles car inventory management, user authentication, order processing, blog content, and payment integration.

## 🚀 Features

- **Car Management**: Full CRUD operations for automobile inventory with detailed specifications
- **User Management**: User registration, authentication, and role-based access control
- **Order Processing**: Complete order lifecycle management with payment integration
- **Blog System**: Content management for automotive news and articles
- **Payment Gateway**: Secure payment processing with SSLCommerz integration
- **File Upload**: Image upload functionality for car listings and blog content
- **RESTful API**: Well-structured endpoints following REST principles

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Payment**: SSLCommerz Payment Gateway
- **File Handling**: Express File Upload
- **Environment**: dotenv for configuration management
- **CORS**: Cross-Origin Resource Sharing enabled

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- SSLCommerz merchant account (for payment processing)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashraful2880/Auto-Craft-Server.git
   cd Auto-Craft-Server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   DB_USER=your_db_username
   DB_PASS=your_db_password
   JWT_SECRET=your_jwt_secret_key
   SSLCOMMERZ_STORE_ID=your_sslcommerz_store_id
   SSLCOMMERZ_STORE_PASSWORD=your_sslcommerz_store_password
   ```

4. **Start the server**
   ```bash
   # For development
   npm run start-dev

   # For production
   npm start
   ```

The server will start on `http://localhost:5000` (or the port specified in your `.env` file).

## 📚 API Endpoints

### Cars
- `GET /allCars` - Retrieve all cars
- `GET /cars` - Get cars with pagination
- `GET /car/:id` - Get specific car by ID
- `POST /addProduct` - Add new car
- `PUT /updateProduct/:id` - Update car information
- `DELETE /deleteProduct/:id` - Delete car

### Users
- `POST /users` - Register new user
- `PUT /users` - Update user information
- `GET /users` - Get all users
- `PUT /users/admin` - Update admin role
- `GET /user/:email` - Check admin status

### Orders
- `POST /orders` - Create new order
- `GET /orders` - Get all orders
- `GET /order/:id` - Get order by ID
- `PUT /order/:id` - Update order status
- `DELETE /order/:id` - Delete order

### Blogs
- `GET /blogs` - Get all blog posts
- `POST /blogs` - Create new blog post
- `PUT /blogs/:id` - Update blog post
- `DELETE /blogs/:id` - Delete blog post

### Miscellaneous
- `GET /services` - Get available services
- `POST /contact` - Handle contact form submissions

## 🔧 Configuration

The application uses environment variables for configuration. Key variables include:

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `SSLCOMMERZ_STORE_ID` & `SSLCOMMERZ_STORE_PASSWORD`: Payment gateway credentials

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ashraful Islam**
- GitHub: [@Ashraful2880](https://github.com/Ashraful2880)
- LinkedIn: (https://www.linkedin.com/in/islam-ashraful1/)
- Email: contact.ashraful1@gmail.com


## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Special thanks to SSLCommerz for payment integration
- MongoDB Atlas for reliable database hosting

---

⭐ If you found this project helpful, please give it a star!
