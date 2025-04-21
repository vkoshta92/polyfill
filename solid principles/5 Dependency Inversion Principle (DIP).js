

// 🔹 D — Dependency Inversion Principle (DIP)
// “High-level modules ko low-level modules pe depend nahi karna chahiye. Dono ko abstractions pe depend karna chahiye.”

// 🔍 Meaning:
// Business logic ko directly kisi specific library, DB, ya API pe dependent nahi banana chahiye. Use abstraction ke through loosely couple karna chahiye.




// 🔹 Abstraction (interface jaisa)
class StorageService {
    saveData(data) {
      throw new Error("saveData method ko implement karo");
    }
  }
  
  // 🔹 Low-level module: Local storage implementation
  class LocalStorageService extends StorageService {
    saveData(data) {
      console.log("Data saved to local storage:", data);
    }
  }
  
  // 🔹 Low-level module: Server storage implementation
  class ServerStorageService extends StorageService {
    saveData(data) {
      console.log("Data sent to server:", data);
    }
  }
  
  // 🔹 High-level module: Game class (abstraction pe depend karta hai)
  class Game {
    constructor(storageService) {
      this.storage = storageService; // abstraction
    }
  
    saveProgress(data) {
      this.storage.saveData(data); // abstraction method call
    }
  }
  
  // ✅ Usage:
  
  // Local storage use karna hai
  const localStorage = new LocalStorageService();
  const game1 = new Game(localStorage);
  game1.saveProgress({ level: 3, score: 1000 });
  
  // Server storage use karna hai
  const serverStorage = new ServerStorageService();
  const game2 = new Game(serverStorage);
  game2.saveProgress({ level: 5, score: 2000 });
  
  
  
  
  // Summary — Dependency Inversion Principle (DIP)
  // ✅ Sahi Tarika	❌ Galat Tarika
  // High-level logic ➜ abstraction pe depend kare	High-level logic ➜ low-level code pe depend kare
  // Easily switchable implementations	Har nayi requirement pe logic change karna
  // Testable & modular code	Tight coupling, hard to test or extend
  // Agar tum React ya Node.js mein kaam kar rahe ho, toh yeh principle har jagah kaam aata hai — chahe data fetch ho, services ho, ya component injection.
  
  
  
  
  
  
  
  // ..............................................
  
  // // Define an abstract database interface
  // class Database {
  //     save(data) {
  //       throw new Error("save() not implemented");
  //     }
  //   }
    
  //   class MySQLDatabase extends Database {
  //     save(data) {
  //       console.log("Saving to MySQL:", data);
  //     }
  //   }
    
  //   class InMemoryDatabase extends Database {
  //     constructor() {
  //       super();
  //       this.data = [];
  //     }
    
  //     save(data) {
  //       this.data.push(data);
  //       console.log("Saved to memory:", data);
  //     }
  //   }
    
  //   class UserService {
  //     constructor(database) {
  //       this.db = database; // ✅ depends on abstraction
  //     }
    
  //     registerUser(user) {
  //       this.db.save(user); // Works with any database that follows the interface
  //     }
  //   }
  
  //   const db = new MySQLDatabase(); // Or: new InMemoryDatabase();
  // const userService = new UserService(db);
  // userService.registerUser({ name: "Alice" });
  
  
  
  // Now UserService is totally decoupled from the database implementation. You can swap in-memory, SQL, NoSQL, or even mocks for testing 🔥
  
  // Want to go deeper?
  // I can show you:
  
  // How to do this with dependency injection frameworks
  
  // DIP in React hooks/services
  
  // Or TypeScript with interfaces for real compile-time safety
  
  // Just say the word 😎
  
  
  // Principle	Hindi Vibe Mein
  // S	Ek class = Ek kaam
  // O	Extend karo, par modify mat karo
  // L	Baccha class parent ki tarah behave kare
  // I	Sirf zaroori methods ka interface do
  // D	High-level code ko loose coupling chahiye
  
  
  
    