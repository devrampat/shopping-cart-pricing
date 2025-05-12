import { PricingStrategy } from './classes/PricingStrategy';

export class DefaultPricing implements PricingStrategy {
  calculateTotal(quantity: number, unitPrice: number): number {
    return quantity * unitPrice;
  }
}