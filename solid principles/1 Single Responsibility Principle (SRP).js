
// 🔹 S — Single Responsibility Principle (SRP)
// “Ek class ka sirf ek kaam hona chahiye.”

// 🔍 Meaning:
// Agar ek class multiple kaam karegi, to future me jab bhi ek kaam change hoga, puri class ko modify karna padega. Isse bugs aate hain.



// 👤 1. User - Just holds data
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  // 💾 2. UserRepository - Handles persistence
  class UserRepository {
    save(user) {
      console.log(`Saving ${user.name} to database...`);
      // DB logic here
    }
  }
  
  // 📧 3. EmailService - Handles email logic
  class EmailService {
    sendWelcomeEmail(user) {
      console.log(`Sending welcome email to ${user.email}`);
      // Email logic here
    }
  }
  
  
  
  const user = new User("Ramesh", "ramesh@example.com");
  
  const repo = new UserRepository();
  repo.save(user);
  
  const emailService = new EmailService();
  emailService.sendWelcomeEmail(user);
  
  
  // ✅ Fayda kya hota hai SRP follow karne ka?
  // 🔥 Benefit	🔍 Explanation
  // ✅ Easy to maintain	Har class ka role clear hai
  // ✅ Bug less code	Alag-alag cheez ka logic ek dusre se nahi takraata
  // ✅ Reusable components	Email service ko dusre features me bhi use kar sakte ho
  // ✅ Easy testing	Sabko alag test kar sakte ho
  // 🎯 Ek Line Mein:
  // "Ek banda ek kaam kare, ache se kare, aur doosre kaam me tang na ghusaaye." 😄
  
  
  
  
  //.............................................................................
  
  // Principle	Hindi Vibe Mein
  // S	Ek class = Ek kaam
  // O	Extend karo, par modify mat karo
  // L	Baccha class parent ki tarah behave kare
  // I	Sirf zaroori methods ka interface do
  // D	High-level code ko loose coupling chahiye
  
  
  
  
  
  
  
  // User is just data.
  // UserRepository handles persistence.
  // EmailService handles communication.
  // Each class has one responsibility → one reason to change.
  // Want to see how this looks in a real-world Express API or maybe how SRP plays with microservices?
  
  
  
  
  
  // wrong
  // class User {
  //   constructor(name, email) {
  //     this.name = name;
  //     this.email = email;
  //   }
  
  //   saveToDatabase() {
  //     // save to DB logic
  //     console.log(`Saving ${this.name} to database...`);
  //   }
  
  //   sendWelcomeEmail() {
  //     // email sending logic
  //     console.log(`Sending welcome email to ${this.email}`);
  //   }
  // }
  
    
  
  
  