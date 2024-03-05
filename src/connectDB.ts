import mongoose from 'mongoose';

export default async function connectToDB(url:string){
    return mongoose.connect(url);
}