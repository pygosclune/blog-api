import Post from '../models/post.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({ published: true }).populate('author', 'username');
        res.send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post || !post.published) {
            return res.status(404).send({ error: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            author: req.user,
            published: req.body.published,
        });
        await post.save();
        res.status(201).send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) {
            return res.status(404).send({ error: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).send({ error: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
};
