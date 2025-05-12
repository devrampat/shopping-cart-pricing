import { BuyOneGetOnePricing } from './classes/BuyOneGetOnePricing';
import { Product } from './classes/Product';
import { ThreeForTwoPricing } from './classes/ThreeForTwoPricing';
import { DefaultPricing } from './DefaultPricing';
import { Cart } from './models/Cart';
import { Checkout } from './services/Checkout';

const apple = new Product('Apple', 35, new DefaultPricing());
const melon = new Product('Melon', 50, new BuyOneGetOnePricing());
const lime = new Product('Lime', 15, new ThreeForTwoPricing());

const cart = new Cart();
cart.addItem(apple);
cart.addItem(melon);
cart.addItem(lime);

const checkout = new Checkout();
const total = checkout.calculateTotal(cart);


console.log(`Total: ${(cart.calculateTotal() / 100).toFixed(2)} INR`);