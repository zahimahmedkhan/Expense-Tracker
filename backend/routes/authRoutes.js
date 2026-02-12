const express = require('express');
const { protect } = require('../middleware/authMiddleware');

const { registerUser, loginUser, getUserInfo } = require('../controllers/authController');
const upload = require('../middleware/UploadMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUser', protect, getUserInfo);


router.post("/upload-image", upload.single("image"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file Uploaded" });
        }

        // Cloudinary already returns the secure URL in req.file.path
        const imageUrl = req.file.path;
        res.status(200).json({ imageUrl });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ message: "Error uploading image", error: error.message });
    }
});

module.exports = router;