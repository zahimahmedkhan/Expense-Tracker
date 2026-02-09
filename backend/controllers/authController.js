    const User = require('../models/User'); 

    const jwt = require('jsonwebtoken');

    //Generate JWT Token

    const generateToken = ( id ) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    //register user

    exports.registerUser = async ( req, res ) =>{
        const { fullName, email, password, profileImageUrl } = req.body;

        //validation : check all fields are provided
        if( !fullName || !email || !password ){
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        try{
            //check if user already exists
            const existingUser = await User.findOne({ email });
            if( existingUser ){
                return res.status(400).json({ message: 'Email already in use.' });
            }

            //create new user
            const user = await User.create({
                fullName,
                email,
                password,
                profileImageUrl
            });

            res.status(201).json({
                id: user._id,
                user,
                token: generateToken(user._id)

            })
        }catch( error ){
            res.status(500).json({ message: 'Error registering user.', error: error.message });

    }
    }


    //login User 
    exports.loginUser = async ( req, res ) =>{
        const { email, password } = req.body;
        //validation
        if( !email || !password ){
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }
        try{
            //check if user exists & password is correct
            const user = await User.findOne({ email });
            if( !user || !(await user.comparePassword( password )) ){
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            res.status(200).json({
                id: user._id,
                user,
                token: generateToken(user._id)
            });
        }catch( error ){
            res
            .status(500)
            .json({ message: 'Error logging in user.', error: error.message });
        }
    }


    //get User Info 
    exports.getUserInfo = async ( req, res ) =>{
        try{
            const user = await User.findById( req.user.id ).select('-password');

            if( !user ){
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json({ user });
        }catch( error ){
            res
            .status(500)
            .json({ message: 'Error fetching user info.', error: error.message });
        }
    }