import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectMongo = async () => mongoose.connect(process.env.DB_HOST!);
// const connectMongo = async () =>
//     mongoose.connect('mongodb://localhost:27017/recipes');

export default connectMongo;
