import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://VivekSingh:51352895vs@cluster0.kv3gj.mongodb.net/FoodDel').then(() => {
        console.log('Database Connected');
    })
}
