# 💰 Expense Tracking App

A full-stack web application for managing personal finances with features to track expenses and income, visualize spending patterns, and maintain a comprehensive financial dashboard.

## 📋 Description

Expense Tracking App is a comprehensive financial management platform that enables users to:
- **Track Expenses & Income** - Record and categorize all financial transactions
- **Visualize Analytics** - View spending patterns through interactive charts and graphs
- **Manage Dashboard** - Get a quick overview of financial status
- **User Authentication** - Secure login and registration with encrypted passwords
- **File Export** - Export transaction data to Excel for reporting

Perfect for individuals who want to take control of their personal finances and understand their spending habits.

---

## ✨ Features

- 🔐 **User Authentication** - Secure login/signup with JWT token-based authentication
- 💳 **Expense Management** - Add, edit, and delete expenses with categories and emojis
- 💵 **Income Management** - Track multiple income sources
- 📊 **Advanced Analytics** - 
  - Line charts for 30-day expense trends
  - Pie charts for expense categorization
  - Bar charts for income analysis
  - Custom tooltips and legends
- 🏠 **Dashboard Overview** - Real-time financial summary with key metrics
- 📁 **File Management** - Upload profile pictures and export data to Excel
- 🎨 **Emoji Picker** - Categorize transactions with custom emojis
- 📱 **Responsive Design** - Mobile-friendly interface with Tailwind CSS
- 🎭 **User Profiles** - Customizable profile with avatar uploads

---

## 🛠 Tech Stack

### **Frontend**
- React 19.1.1
- React Router DOM 7.9.4
- Axios (HTTP client)
- Recharts (Data visualization)
- Tailwind CSS 4.1.16
- React Icons 5.5.0
- React Hot Toast (Notifications)
- Emoji Picker React 4.15.0
- Vite (Build tool)

### **Backend**
- Node.js & Express.js 5.1.0
- MongoDB & Mongoose 8.19.2
- JWT (Authentication)
- Bcrypt (Password hashing)
- Multer (File uploads)
- XLSX (Excel export)
- CORS (Cross-Origin Resource Sharing)

### **Database**
- MongoDB (NoSQL database)

### **Deployment**
- Vercel (Backend & Frontend hosting)

---

## 📁 Folder Structure

```
expense-tracking-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js     # Login, signup, authentication logic
│   │   ├── dashboardController.js # Dashboard statistics
│   │   ├── expenseController.js  # Expense CRUD operations
│   │   └── incomeController.js   # Income CRUD operations
│   ├── middleware/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── UploadMiddleware.js   # Multer configuration for file uploads
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Expense.js            # Expense schema
│   │   └── Income.js             # Income schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication endpoints
│   │   ├── dashboardRoutes.js    # Dashboard endpoints
│   │   ├── expenseRoutes.js      # Expense endpoints
│   │   └── incomeRoutes.js       # Income endpoints
│   ├── uploads/                  # User uploaded files
│   ├── server.js                 # Express app entry point
│   ├── package.json              # Backend dependencies
│   ├── vercel.json               # Vercel deployment config
│   └── .env                      # Environment variables (not in repo)
│
├── frontend/
│   ├── src/
│   │   ├── components/           # Reusable React components
│   │   │   ├── Cards/            # Card components (InfoCard, etc.)
│   │   │   ├── Charts/           # Chart components (Bar, Pie, Line)
│   │   │   ├── Dashboard/        # Dashboard sub-components
│   │   │   ├── Expense/          # Expense management components
│   │   │   ├── Income/           # Income management components
│   │   │   ├── Inputs/           # Input components
│   │   │   ├── layouts/          # Page layouts (Navbar, Sidebar)
│   │   │   ├── Modal.jsx         # Modal dialog component
│   │   │   └── DeleteAlert.jsx   # Delete confirmation dialog
│   │   ├── pages/                # Page components
│   │   │   ├── Auth/             # Login & Signup pages
│   │   │   └── Dashboard/        # Home, Income, Expense pages
│   │   ├── context/
│   │   │   └── userContext.jsx   # Global user state management
│   │   ├── hooks/
│   │   │   └── useUserAuth.jsx   # Custom hook for authentication
│   │   ├── utils/
│   │   │   ├── apiPath.js        # API endpoints
│   │   │   ├── axiosInstance.js  # Axios configuration
│   │   │   ├── helper.js         # Helper functions
│   │   │   └── uploadImage.js    # Image upload utility
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # React DOM entry point
│   │   └── index.css             # Global styles
│   ├── public/                   # Static files
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite configuration
│   └── index.html                # HTML template
│
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Git

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/zahimahmedkhan/Expense-Tracker.git
   cd expense-tracking-app/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file** in the `backend` directory
   ```bash
   cp .env.example .env  # Or create manually with variables below
   ```

4. **Configure environment variables** (see [Environment Variables](#-environment-variables) section)

5. **Start the backend server**
   ```bash
   npm run dev    # Development mode with nodemon
   npm start      # Production mode
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file** in the `frontend` directory
   ```bash
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (or the port shown in terminal)

5. **Build for production**
   ```bash
   npm run build
   npm run preview  # Preview production build locally
   ```

---

## 🔑 Environment Variables

### Backend (.env)

```env
# Database
MONGODB_URI=mongodb://localhost:27017/expense-tracker
# OR for MongoDB Atlas:
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-tracker

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# CORS
CLIENT_URL=http://localhost:5173

# File Upload
MAX_FILE_SIZE=5242880  # 5MB in bytes
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=10000
```

---

## 📖 Usage / How to Run the Project

### 1. **Start Both Servers**

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 2. **Access the Application**
- Open `http://localhost:5173` in your browser

### 3. **Create an Account**
- Click on **Sign Up** and create a new account
- Fill in your full name, email, and password
- (Optional) Add a profile picture

### 4. **Add Transactions**
- Navigate to **Expense** or **Income** pages
- Click the **Add** button
- Fill in the details:
  - **Category** - Select or type a category
  - **Amount** - Enter the transaction amount
  - **Date** - Choose the date
  - **Emoji** - Pick an emoji to represent the category
- Click **Save**

### 5. **View Analytics**
- Go to **Dashboard** to see:
  - Total expenses and income
  - 30-day spending trends
  - Expense breakdown by category
  - Recent transactions

### 6. **Export Data**
- Use the export feature to download transactions as Excel file

---

## 📊 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Create new user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/auth/profile` - Get user profile

### Expenses
- `POST /api/v1/expense` - Add expense
- `GET /api/v1/expense` - Get all expenses
- `PUT /api/v1/expense/:id` - Update expense
- `DELETE /api/v1/expense/:id` - Delete expense

### Income
- `POST /api/v1/income` - Add income
- `GET /api/v1/income` - Get all income
- `PUT /api/v1/income/:id` - Update income
- `DELETE /api/v1/income/:id` - Delete income

### Dashboard
- `GET /api/v1/dashboard/stats` - Get financial statistics
- `GET /api/v1/dashboard/summary` - Get dashboard summary

### Uploads
- `POST /api/v1/auth/upload-profile` - Upload profile picture
- Static files: `/uploads/*`

---

## 🔒 Security Features

- ✅ **Password Hashing** - Bcrypt for secure password storage
- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **CORS Protection** - Configured to allow specific origins
- ✅ **Input Validation** - Server-side validation of all requests
- ✅ **Protected Routes** - Authentication middleware on all protected endpoints

---

## 🚀 Deployment

### Deploy Backend to Vercel

1. Create a Vercel account and connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy using:
   ```bash
   vercel deploy
   ```

### Deploy Frontend to Vercel

1. Update `VITE_API_URL` to your deployed backend URL
2. Deploy using:
   ```bash
   vercel deploy
   ```

---

## 🔮 Future Improvements

- 🏦 Budget planning and alerts
- 📱 Mobile application (React Native)
- 💬 Expense sharing with multiple users
- 📧 Email notifications for budget limits
- 🔔 Push notifications
- 💳 Bank account integration
- 📈 Advanced financial reports
- 🌍 Multi-currency support
- 🎯 Recurring transactions
- 📅 Calendar view for transactions
- 🌙 Dark mode theme

---

## 🐛 Troubleshooting

### Backend won't start
- Ensure MongoDB is running
- Check if port 5000 is available
- Verify all environment variables are set

### Frontend can't connect to backend
- Ensure backend server is running on the correct port
- Check `VITE_API_URL` in frontend `.env`
- Verify CORS settings in backend

### File upload not working
- Check upload folder permissions
- Verify file size is within limits
- Ensure multer middleware is properly configured

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👤 Author

Created as a full-stack expense tracking solution for personal finance management.

---

## 💡 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the development team.

---

**Happy Tracking! 📊💸**
