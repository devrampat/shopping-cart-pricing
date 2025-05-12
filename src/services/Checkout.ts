import { Cart } from '../models/Cart';
import { PricingStrategy } from '../classes/PricingStrategy';
import { DefaultPricing } from '../DefaultPricing';
import { BuyOneGetOnePricing } from '../classes/BuyOneGetOnePricing';
import { ThreeForTwoPricing } from '../classes/ThreeForTwoPricing';

export class Checkout {
    private pricingRules: Map<string, PricingStrategy> = new Map();

    constructor() {
      // Initialize pricing rules
      this.pricingRules.set('Melon', new BuyOneGetOnePricing());
      this.pricingRules.set('Lime', new ThreeForTwoPricing());
    }
  
    // Calculate the total price of the cart
    calculateTotal(cart: Cart): number {
      let total = 0;
      const items = cart.getItems();
  
      for (const [name, { product, quantity }] of items) {
        // Use the appropriate pricing strategy or fall back to default pricing
        const strategy = this.pricingRules.get(name) || new DefaultPricing();
        total += strategy.calculateTotal(quantity, product.unitPrice);
      }
  
      return total;
    }
}