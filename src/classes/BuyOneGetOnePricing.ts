import { PricingStrategy } from './PricingStrategy';

export class BuyOneGetOnePricing implements PricingStrategy {
  calculateTotal(quantity: number, unitPrice: number): number {
    const payableQuantity = Math.ceil(quantity / 2);
    return payableQuantity * unitPrice;
  }
}