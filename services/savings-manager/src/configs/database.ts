import mongoose from "mongoose";

export async function createDBConnection(){
    const MONGO_HOST = process.env.MONGO_HOST ?? "localhost"
    const MONGO_PORT = process.env.MONGO_PORT ?? "27017"
    const MONGO_DATABASE = process.env.MONGO_DATABASE ?? "finance-buddy-db"
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`);
        console.log('Successfully connected to MongoDb');
    }catch(err){
        console.log(err)
    }
}