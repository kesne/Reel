import './connect';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    passwordHash: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', userSchema);