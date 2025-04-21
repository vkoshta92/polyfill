

// 🔹 I — Interface Segregation Principle (ISP)
// “Clients ko sirf wahi methods use karne chahiye jo unko chahiyein.”

// 🔍 Meaning:
// Agar ek interface ya class mein bohot saare methods hain, to har user ko saare methods implement karne padte hain — chahe wo kaam unka na ho.


// Chhote interfaces banaye: Alag alag functionality ke liye

// Sirf print karne wale printers ke liye
class Printable {
    print(document) {
      throw new Error("print() implement karna hoga");
    }
  }
  
  // Scan karne wale printers ke liye
  class Scannable {
    scan(document) {
      throw new Error("scan() implement karna hoga");
    }
  }
  
  // Fax karne wale printers ke liye
  class Faxable {
    fax(document) {
      throw new Error("fax() implement karna hoga");
    }
  }
  
  // ✅ BasicPrinter sirf Printable ko follow karta hai
  class BasicPrinter extends Printable {
    print(document) {
      console.log(`Printing document: ${document}`);
    }
  }
  
  // ✅ MultiFunctionPrinter sab kuch karta hai
  class MultiFunctionPrinter extends Printable {
    print(document) {
      console.log(`Printing document: ${document}`);
    }
    scan(document) {
      console.log(`Scanning document: ${document}`);
    }
    fax(document) {
      console.log(`Faxing document: ${document}`);
    }
  }
  
  // 📄 Usage
  const simplePrinter = new BasicPrinter();
  simplePrinter.print("Invoice.pdf");  // ✅ sirf print kar raha hai
  
  const mfp = new MultiFunctionPrinter();
  mfp.print("Report.pdf");  // ✅ print
  mfp.scan("Report.pdf");   // ✅ scan
  mfp.fax("Report.pdf");    // ✅ fax
  
  
  
  
  
  // 📌 Summary — ISP (Interface Segregation Principle):
  // ✅ Good Practice	❌ Bad Practice
  // Chhoti chhoti interfaces banao	Ek bada interface sabke liye
  // Har class ko sirf uski zarurat ki cheeze do	Har class ko sab kuch force se do
  // Clean code, easy testing	Confusing, error-prone code
  // Agar tumhara project React + Node.js based ho (jaise game development ya modular app), toh ye principle help karta hai tumhare components ko modular, reusable aur bug-free banane mein.
  
  
  
  
  
  // ................................................
  
  // class Printable {
  //     print() {
  //       throw new Error("Not implemented");
  //     }
  //   }
    
  //   class Scannable {
  //     scan() {
  //       throw new Error("Not implemented");
  //     }
  //   }
    
  //   class Faxable {
  //     fax() {
  //       throw new Error("Not implemented");
  //     }
  //   }
    
  //   // A modern machine
  //   class AllInOnePrinter extends Printable {
  //     print() {
  //       console.log("Printing...");
  //     }
  //   }
    
  //   Object.assign(AllInOnePrinter.prototype, new Scannable(), new Faxable());
    
  //   // An old printer
  //   class SimplePrinter extends Printable {
  //     print() {
  //       console.log("Old-school printing...");
  //     }
  //   }
    
  
  
  //   Now SimplePrinter only implements what it needs — no unnecessary methods cluttering the class.
  
  // Want to see how this applies to front-end components, or maybe in a React/TypeScript context too?
  
  // Principle	Hindi Vibe Mein
  // S	Ek class = Ek kaam
  // O	Extend karo, par modify mat karo
  // L	Baccha class parent ki tarah behave kare
  // I	Sirf zaroori methods ka interface do
  // D	High-level code ko loose coupling chahiye
  
  