import express from 'express';
import { getComments, createComment, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.get('/:postId/comments', getComments);
router.post('/:postId/comments', createComment);
router.delete('/:postId/comments/:commentId', deleteComment);

export default router;
