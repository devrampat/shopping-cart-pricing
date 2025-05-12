import { PricingStrategy } from './PricingStrategy';

export class ThreeForTwoPricing implements PricingStrategy {
    calculateTotal(quantity: number, unitPrice: number): number {
      const setsOfThree = Math.floor(quantity / 3);
      const remaining = quantity % 3;
      return (setsOfThree * 2 + remaining) * unitPrice;
    }
  }