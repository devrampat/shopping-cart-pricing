import { BuyOneGetOnePricing } from '../src/classes/BuyOneGetOnePricing';
import { Product } from '../src/classes/Product';
import { ThreeForTwoPricing } from '../src/classes/ThreeForTwoPricing';
import { DefaultPricing } from '../src/DefaultPricing';
import { Cart } from '../src/models/Cart';
import { Checkout } from '../src/services/Checkout';

describe('CheckoutService', () => {
  let cart: Cart;
  let checkout: Checkout;
  let apple: Product;
  let melon: Product;
  let lime: Product;

  
  beforeEach(() => {
    // Initialize products
    apple = new Product('Apple', 35, new DefaultPricing());
    melon = new Product('Melon', 50, new BuyOneGetOnePricing());
    lime = new Product('Lime', 15, new ThreeForTwoPricing());

    // Create a new cart and checkout instance
    cart = new Cart();
    checkout = new Checkout();
  });

  it('should calculate total with no items in the cart', () => {
    // No items added, total should be 0
    expect(checkout.calculateTotal(cart)).toBe(0);
  });

  it('should calculate total for simple products without offers', () => {
    cart.addItem(apple, 2); // 2 Apples (35p each)
    expect(checkout.calculateTotal(cart)).toBe(70); // 2 * 35p = 70p
  });

  it('should apply Buy One Get One offer for Melon', () => {
    cart.addItem(melon, 2); // 2 Melons (50p each, Buy 1 Get 1 Free)
    expect(checkout.calculateTotal(cart)).toBe(50); // 1 Melon should be charged (Buy 1 Get 1)
  });

  it('should apply Three for Two offer for Limes', () => {
    cart.addItem(lime, 5); // 5 Limes (15p each, 3 for 2 offer)
    expect(checkout.calculateTotal(cart)).toBe(60); // 2 sets of 3 = 4 Limes paid, total = 4 * 15p = 60p
  });

  it('should handle multiple items with different pricing strategies', () => {
    cart.addItem(apple, 3);  // 3 Apples (35p each)
    cart.addItem(melon, 4);  // 4 Melons (50p each, BOGO)
    cart.addItem(lime, 6);   // 6 Limes (15p each, 3 for 2)

    // Apples: 3 * 35p = 105p
    // Melons: 2 Melons paid (Buy 1 Get 1), 2 * 50p = 100p
    // Limes: 4 Limes paid (3 for 2), 4 * 15p = 60p
    const expectedTotal = 105 + 100 + 60;
    expect(checkout.calculateTotal(cart)).toBe(expectedTotal);
  });

  it('should handle removal of items', () => {
    cart.addItem(apple, 2);  // 2 Apples
    cart.addItem(melon, 2);  // 2 Melons

    cart.removeItem(apple);  // Remove Apples

    // Only Melons left (1 Melon should be charged)
    expect(checkout.calculateTotal(cart)).toBe(50); // 1 Melon charged at 50p (BOGO)
  });
});