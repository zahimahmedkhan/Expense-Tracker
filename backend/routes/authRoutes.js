const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const { upload, uploadErrorHandler } = require('../middleware/UploadMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', protect, getUserInfo);

// Handle preflight requests for upload
router.options('/upload-image', (req, res) => {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.sendStatus(200);
});

router.post("/upload-image", upload.single("image"), (req, res) => {
    try {
        console.log("Upload file received:", req.file);
        console.log("Cloudinary config:", {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY ? "***" : "MISSING",
            api_secret: process.env.CLOUDINARY_API_SECRET ? "***" : "MISSING"
        });

        if (!req.file) {
            return res.status(400).json({ message: "No file Uploaded" });
        }

        // Cloudinary already returns the secure URL in req.file.path
        const imageUrl = req.file.path;
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error("Upload error:", error.message, error.stack);
        res.status(500).json({ 
            message: "Error uploading image", 
            error: error.message,
            details: error.stack
        });
    }
}, uploadErrorHandler);

module.exports = router;