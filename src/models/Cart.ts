import { Product } from '../classes/Product';
import { Item } from './Item';

export class Cart {
  private items: Map<string, { product: Product, quantity: number }> = new Map();

  // Add an item to the cart, handling quantities
  addItem(product: Product, quantity: number = 1): void {
    if (this.items.has(product.name)) {
      const existingItem = this.items.get(product.name)!;
      existingItem.quantity += quantity; // Aggregate quantity for the same product
    } else {
      this.items.set(product.name, { product, quantity });
    }
  }

  // Remove an item from the cart
  removeItem(product: Product): void {
    this.items.delete(product.name);  // Simply remove the product by its name
  }

  // Calculate total price of all items in the cart
  calculateTotal(): number {
    let total = 0;
    this.items.forEach(({ product, quantity }) => {
      total += product.calculatePrice(quantity);
    });
    return total;
  }

  // Get all items in the cart (product + quantity)
  getItems(): Map<string, { product: Product, quantity: number }> {
    return this.items;
  }
}