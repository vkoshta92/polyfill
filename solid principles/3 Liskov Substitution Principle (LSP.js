


// 🔹 L — Liskov Substitution Principle (LSP)
// “Child class ko parent class ki tarah use kar paana chahiye, bina kuch tode.”

// 🔍 Meaning:
// Jahan parent class chalta hai, wahan child class bhi chale — bina kuch error ya unexpected behavior diye.


// Parent class: Vehicle
class Vehicle {
    start() {
      console.log("Vehicle started!");
    }
  }
  
  // Child class: Car (LSP follow kar rahi hai)
  class Car extends Vehicle {
    start() {
      console.log("Car started!");
    }
  }
  
  // Child class: Bike (LSP violate kar rahi hai)
  class Bike extends Vehicle {
    start() {
      // LSP violate karna: Bike ka start method unexpected behavior throw karta hai
      throw new Error("Bike cannot start!");
    }
  }
  
  // Function to start any vehicle
  function startVehicle(vehicle) {
    try {
      vehicle.start();  // Vehicle class ka method call ho raha hai
    } catch (error) {
      console.error(error.message);  // Agar error ho toh handle karna
    }
  }
  
  // Main Program
  const car = new Car(); // Car ka object
  const bike = new Bike(); // Bike ka object
  
  console.log("Testing Car:");
  startVehicle(car);  // Output: Car started!
  
  console.log("Testing Bike:");
  startVehicle(bike);  // Output: Error: Bike cannot start!
  
  
  
  // Code Explanation in Hindi:
  // Vehicle Class:
  
  // Yeh ek parent class hai, jisme ek start() method hai jo "Vehicle started!" print karta hai.
  
  // Car Class:
  
  // Yeh Vehicle class ko extend karti hai aur apna start() method implement karti hai. Ismein "Car started!" print hota hai.
  
  // LSP ko follow kar rahi hai — iska behavior expected hai aur parent class ka behavior correctly override ho raha hai.
  
  // Bike Class:
  
  // Yeh bhi Vehicle ko extend karti hai, lekin ismein start() method kuch different hai, jisme ek error throw kiya jaa raha hai: "Bike cannot start!".
  
  // Yeh LSP violate kar rahi hai, kyunki jab hum Bike object ko Vehicle ke jagah use karte hain, toh error throw hota hai, jo unexpected hai.
  
  // startVehicle Function:
  
  // Yeh function koi bhi vehicle object accept karta hai aur uske start() method ko call karta hai.
  
  // Agar start() method mein error aata hai (jaise Bike mein), toh wo error handle kiya jata hai aur message print hota hai.
  
  // Main Program:
  
  // Humne Car aur Bike ke objects create kiye hain aur startVehicle function ko call kiya.
  
  // Car ke case mein "Car started!" print hota hai, lekin Bike ke case mein error aata hai, jo LSP violation ko dikhata hai.
  
  // Summary:
  // Car class ne LSP ko follow kiya, kyunki usne start() method ko is tarah se implement kiya jo expected behavior ko maintain karta hai.
  
  // Bike class ne LSP ko violate kiya, kyunki usne start() method ko aise implement kiya jisme error throw ho raha tha.
  
  // Is example se tumhe samajh mein aa gaya hoga ki Liskov Substitution Principle kya hai aur isse kaise follow ya violate kiya jaa sakta hai.
  
  // Agar tumhe koi doubt ho ya kuch aur samajhna ho, toh batao! 😊
  
  
  
  
  
  
  
  
  
  
  
  
  
  // ...............................................................................
  
  // class Bird {
  //     fly() {
  //       console.log("This bird can fly.");
  //     }
  //   }
    
    
  //   class Sparrow extends Bird {
  //     // Inherits fly()
  //   }
    
  //   function makeBirdFly(bird) {
  //     bird.fly();
  //   }
    
  //   const genericBird = new Bird();
  //   const sparrow = new Sparrow();
    
  //   makeBirdFly(genericBird); // This bird can fly.
  //   makeBirdFly(sparrow);     // This bird can fly.
    
  
  //   Everything works fine — Sparrow is a subclass of Bird, and behaves just like a Bird.
  
  
  
  // class Bird {}
  
  // class FlyingBird extends Bird {
  //   fly() {
  //     console.log("This bird can fly.");
  //   }
  // }
  
  // class Sparrow extends FlyingBird {}
  // class Ostrich extends Bird {}
  
  // function makeFlyingBirdFly(bird) {
  //   bird.fly();
  // }
  
  // const sparrow = new Sparrow();
  // makeFlyingBirdFly(sparrow); // ✅ This bird can fly.
  
  // // makeFlyingBirdFly(new Ostrich()); // ❌ Would be a type error in TypeScript or design error in JS
  
  
  // Principle	Hindi Vibe Mein
  // S	Ek class = Ek kaam
  // O	Extend karo, par modify mat karo
  // L	Baccha class parent ki tarah behave kare
  // I	Sirf zaroori methods ka interface do
  // D	High-level code ko loose coupling chahiye
  
  