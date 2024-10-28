import mongoose from 'mongoose';
import User from '../dao/models/user.model.js';
import { config } from 'dotenv';

config(); 

const DB_URI = process.env.MONGODB_URI;

async function assignAdminRole(userId) {
    try {
        await mongoose.connect(DB_URI);
        console.log('Conexión establecida con MongoDB');

        const user = await User.findById(userId);
        if (!user) {
            console.log('Usuario no encontrado en la base de datos');
            return;
        }

        user.role = 'admin';
        await user.save();

        console.log(`El rol de administrador ha sido asignado al usuario con correo: ${user.email}`);
    } catch (error) {
        console.error('Error durante la asignación del rol de administrador:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Conexión a MongoDB cerrada');
    }
}

const userId = process.argv[2];
if (!userId) {
    console.log('Error: Por favor, proporciona un ID de usuario como argumento');
} else {
    assignAdminRole(userId);
}

/* otorgar administrador ===> node src/utils/agregarAdministrador.js <userId>
*/
