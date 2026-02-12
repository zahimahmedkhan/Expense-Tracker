const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary config loaded:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "MISSING",
    api_key: process.env.CLOUDINARY_API_KEY ? "set" : "MISSING",
    api_secret: process.env.CLOUDINARY_API_SECRET ? "set" : "MISSING"
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "expense-tracker/profiles",
        resource_type: "auto",
        allowed_formats: ["jpg", "jpeg", "png"],
    },
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("only .jpeg .jpg and png formate are allowed"), false);
    }
};

const upload = multer({ storage, fileFilter });

// Error handler for multer
const uploadErrorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        console.error("Multer error:", err.message);
        return res.status(400).json({ message: `Upload error: ${err.message}` });
    } else if (err) {
        console.error("Upload error:", err.message);
        return res.status(400).json({ message: `Upload error: ${err.message}` });
    }
    next();
};

module.exports = { upload, uploadErrorHandler };