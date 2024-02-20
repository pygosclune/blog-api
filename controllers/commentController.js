import Comment from '../models/comment.js';

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createComment = async (req, res) => {
    try {
        const comment = new Comment({ ...req.body, postId: req.params.postId });
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findOneAndDelete({ _id: req.params.commentId, postId: req.params.postId });
        if (!comment) {
        return res.status(404).send({ error: 'Comment not found' });
        }
        res.send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
};
