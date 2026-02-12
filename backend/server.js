require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");


const app = express()

//middleware to handle CORS (allow dynamic origins and non-browser requests)
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://expense-tracker-puce-rho.vercel.app",
    "https://expense-tracker-psi-sepia-89.vercel.app"
];

const corsOptions = {
    origin: function(origin, callback){
        // allow requests with no origin (mobile apps, curl, server-to-server)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) !== -1){
            return callback(null, true);
        }
        return callback(new Error('Not allowed by CORS'));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

connectDB();

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/income",incomeRoutes);
app.use("/api/v1/expense",expenseRoutes);
app.use("/api/v1/dashboard",dashboardRoutes);
//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`));
