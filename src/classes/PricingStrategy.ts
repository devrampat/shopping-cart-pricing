export interface PricingStrategy {
    calculateTotal(quantity: number, unitPrice: number): number;
}