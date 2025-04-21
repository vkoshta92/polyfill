

// 🔹 O — Open/Closed Principle (OCP)
// “Class open honi chahiye extension ke liye, par close honi chahiye modification ke liye.”

// 🔍 Meaning:
// Aapko class ke code ko modify kiye bina naye features add kar paane chahiyein.


// OneFileExample.js

// Base class (Abstraction)
class PaymentMethod {
  processPayment(amount) {
    throw new Error("processPayment method ko implement karna hoga");
  }
}

// PayPal Payment Method (Extension)
class PayPalPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`PayPal se $${amount} payment ho rahi hai`);
  }
}

// Credit Card Payment Method (Extension)
class CreditCardPayment extends PaymentMethod {
  processPayment(amount) {
    console.log(`Credit Card se $${amount} payment ho rahi hai`);
  }
}

// Payment Processor Class (Uses OCP)
class PaymentProcessor {
  processPayment(paymentMethod, amount) {
    paymentMethod.processPayment(amount); // Payment ko process karna
  }
}

// Main Program (Usage)
const paymentProcessor = new PaymentProcessor();

// PayPal and CreditCard objects
const paypal = new PayPalPayment();
const creditCard = new CreditCardPayment();

// Process payments using both methods
paymentProcessor.processPayment(paypal, 100);  // PayPal se $100 payment
paymentProcessor.processPayment(creditCard, 200);  // Credit Card se $200 payment

// How It Works:
// PaymentMethod is the abstract base class with a method processPayment that will be overridden in the child classes.

// PayPalPayment and CreditCardPayment are subclasses that implement their own version of processPayment.

// PaymentProcessor is a class that uses the PaymentMethod objects to process the payment. It doesn't change even if we add new payment methods.

// In the end, you process payments with both PayPal and Credit Card, using the same PaymentProcessor class.

// Key Points:
// Single File: All the code is in one file.

// Open/Closed Principle: The PaymentProcessor class remains closed for modification and open for extension as you can add new payment methods without modifying the PaymentProcessor class.

// This should work as a simple one-file example following OCP. Let me know if you need more clarification or examples! 😄









// ................................................

// Principle	Hindi Vibe Mein
// S	Ek class = Ek kaam
// O	Extend karo, par modify mat karo
// L	Baccha class parent ki tarah behave kare
// I	Sirf zaroori methods ka interface do
// D	High-level code ko loose coupling chahiye


  


// class Shape {
//     getArea() {
//       throw new Error("Method not implemented.");
//     }
//   }
  
//   class Circle extends Shape {
//     constructor(radius) {
//       super();
//       this.radius = radius;
//     }
  
//     getArea() {
//       return Math.PI * this.radius * this.radius;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(width, height) {
//       super();
//       this.width = width;
//       this.height = height;
//     }
  
//     getArea() {
//       return this.width * this.height;
//     }
//   }
  
//   class AreaCalculator {
//     calculate(shape) {
//       return shape.getArea();
//     }
//   }
  
//   const calc = new AreaCalculator();
//   console.log(calc.calculate(new Circle(5)));      // ✅ Works
//   console.log(calc.calculate(new Rectangle(4, 6))); // ✅ Works

//   This works, but every time you want to support a new shape, you have to modify AreaCalculator, which violates OCP.  // wrong

// Now, you can add more shapes (like Triangle, Hexagon, etc.) by extending Shape — no need to touch AreaCalculator ever again. 🎉  // right
