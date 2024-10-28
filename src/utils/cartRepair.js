import Cart from '../dao/models/cart.model.js';

export async function repairCarts() {
    try {
        const carts = await Cart.find({ items: { $ne: [] } });
        const repairedCarts = [];
        
        for (let cart of carts) {
            if (!Array.isArray(cart.items)) {
                cart.items = [];
                await cart.save();
                repairedCarts.push(cart._id); 
            }
        }
        
        if (repairedCarts.length > 0) {
            console.log(`Repaired carts: ${repairedCarts.join(', ')}`);
        } else {
            console.log('No carts needed repair');
        }
    } catch (error) {
        console.error('Error repairing carts:', error);
    }
}
