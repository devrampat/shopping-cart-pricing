import { PricingStrategy } from "./PricingStrategy";

export class Product {
    constructor(public name: string, public unitPrice: number, public pricingStrategy: PricingStrategy) {}
  
    calculatePrice(quantity: number): number {
      return this.pricingStrategy.calculateTotal(quantity, this.unitPrice);
    }
}