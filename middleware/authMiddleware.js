import jwt from 'jsonwebtoken';

export const authenticateUser = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded._id;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};