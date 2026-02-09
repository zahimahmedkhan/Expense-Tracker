const mutler = require("multer")

//configure storage 

const storage = mutler.diskStorage({
    destination:(req, file, cb) =>{
        cb(null,"uploads/")
    },
    filename: (req, file, cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

//file filter

const fileFilter = (req, file, cb) =>{
    const allowedTypes = ['image/jpeg','image/png','image/jpg'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true)
    } else {
        cb(new Error('only .jpeg .jpg and png formate are allowed'),false);
    }
};

const upload = mutler({storage,fileFilter});

module.exports = upload;