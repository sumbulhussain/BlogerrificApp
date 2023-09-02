import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-p6cakep-shard-00-00.ae9vwqy.mongodb.net:27017,ac-p6cakep-shard-00-01.ae9vwqy.mongodb.net:27017,ac-p6cakep-shard-00-02.ae9vwqy.mongodb.net:27017/?ssl=true&replicaSet=atlas-byk0yo-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;