import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    authorName: { type: String }, // Allow anonymous comments
    authorEmail: { type: String }, // Allow anonymous comments
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Comment', commentSchema);
