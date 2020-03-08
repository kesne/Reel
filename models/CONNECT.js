import mongoose from 'mongoose';

mongoose.connect(process.env.CONNECT_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
