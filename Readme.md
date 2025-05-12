# 🛒 Shopping Basket Price Calculator

A program written in **TypeScript** (Javascript)that calculates the **total cost of a shopping basket**, applying special pricing offers where applicable.

> 🕒 This solution is to be designed and followed with clean architecture principles with Object-Oriented Programming and Unit Testing.

---

## 📌 Problem Statement

Given a list of items (identified by name), calculate the total price of the shopping basket. The same item can appear multiple times.

### ✅ Example Input

```ts
["Apple", "Apple", "Banana"]

| Item   | Price | Offer                       |
| ------ | ----- | --------------------------- |
| Apple  | 35p   | -                           |
| Banana | 20p   | -                           |
| Melon  | 50p   | Buy One Get One Free (BOGO) |
| Lime   | 15p   | 3 for the Price of 2        |
```


## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/shopping-basket-calculator.git
cd shopping-basket-calculator

npm install
npm start
```


## ✨ Features

- ✅ **Object-Oriented Design**
  - Leverages inheritance and design patterns (e.g., Strategy Pattern) for maintainable pricing rules.
  
- ✅ **Modular Code Structure**
  - Clear separation of concerns: models, services, and pricing strategies.

- ✅ **Custom Pricing Offers**
  - Implements logic for:
    - **Buy One Get One Free (BOGO)** – e.g., Melons
    - **Three for the Price of Two** – e.g., Limes

- ✅ **Scalability**
  - Easy to add new products or offers by extending pricing strategy interfaces.

- ✅ **TypeScript with Strong Typing**
  - Reduces runtime errors and improves developer productivity.

- ✅ **Unit Testing with Jest**
  - Ensures correctness of calculations and offer applications.

- ✅ **Simple CLI Entry Point**
  - `index.ts` file simulates a sample basket for demonstration.
