import mongoose, { Types } from 'mongoose';
import dotenv from 'dotenv';
import Category from '../dao/models/category.model.js';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;
const productIds = ["6712cf675e89e43d81961e8b"];
const categoryName = "Drums";

async function updateCategory() {
    try {
        await mongoose.connect(mongoUrl);
        
        const result = await Category.updateOne(
            { name: categoryName },
            { $addToSet: { products: productIds.map(id => new Types.ObjectId(id)) } }
        );

        console.log('Categoría actualizada:', result);
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
    } finally {
        mongoose.connection.close();
    }
}

updateCategory();
