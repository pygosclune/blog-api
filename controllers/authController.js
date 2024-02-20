import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;     
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(400).send({ error: 'Invalid login credentials' });
        }

        const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.send({ token });
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
};

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
    
        if (existingUser) {
            return res.status(400).send({ error: 'Username already exists' });
        }
    
        const user = new User({ username, password });
        await user.save();
    
        res.status(201).send({ user });
    } catch (error) {
        res.status(500).send(error);
    }
};